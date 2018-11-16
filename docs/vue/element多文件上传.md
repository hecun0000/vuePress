# element 多文件上传

在前端开发中，平时用到form提交的次数不是很多。但是遇到的话，还是相当坑。已经用element写好了样式，不想用原生的方式去实现。。。

先默默地写一下踩坑日记。。。

::: tip 前置条件 
所用的技术： vue+axios+element
:::

## 先上html结构

```html
<div class="old-wepay">
    <el-form label-width="200px" size="small" ref="newform" :model="newform">
        <el-form-item label="商户PartnerId：" >
            <el-input v-model="newform.PartnerId" class="input-item" 
            maxlength="16"></el-input>
            <span class="info">
                微信支付商户平台 -> 账户中心 -> 个人信息 -> 登录账号 就是商户PartnerId
            </span>
        </el-form-item>
        <el-form-item label="商户PartnerKey：" >
            <el-input v-model="newform.PartnerKey" class="input-item"
             maxlength="32"></el-input>
            <span class="info">
                微信支付商户平台 -> 账户中心 -> API安全 -> 修改API密钥 里面有 商户PartnerKey
            </span>
        </el-form-item>
        <el-form-item label="商户证书cert.pem：" >
            <div class="file-box">
                <el-upload class="upload-demo" ref="sslcertFile" :action="'aaa'" 
                :auto-upload="false" :before-upload="sslcertFile" accept=".pem">
                    <el-button size='small' type="primary">选择文件</el-button>
                </el-upload>
                <span class="info">{{sslcertInfo}}</span>
            </div>

        </el-form-item>
        <el-form-item label="商户证书key.pem：">
            <div class="file-box">
                <el-upload class="upload-demo" ref="sslkeyFile" :action="'aaa'" 
                :auto-upload="false" :before-upload="sslkeyFile" accept=".pem">
                    <el-button size='small' type="primary">选择文件</el-button>
                </el-upload>
                <span class="info">{{sskeyInfo}}</span>
            </div>
        </el-form-item>
        <el-form-item >
            <el-button type="primary" size="small" @click="newSubmitFrom()">确定</el-button>
        </el-form-item>
    </el-form>
</div>
```
用框架写布局样式都不用怎么写。。。完美。。    
![image](http://static.hecun.site/TIM%E6%88%AA%E5%9B%BE20181105095535.png)

## 完善功能

后端要求：使用FormData的方式提交
既然样式已经写好了，，让我改成原生的，，想多了。。   
现在可以借助js中的 FormData 对象  

::: tip FormData 
FormData是为序列化表单以及创建表单格式相同的数据（用于通过XHR传输）提供一种解决方案。
:::


```js
this.uploadForm = new FormData();
this.uploadForm.append('mch_id', this.newform.PartnerId);
this.uploadForm.append('md5_key', this.newform.PartnerKey);
```
这里已经生成了一个 FormData 对象，已经添加了mch_id和md5_key两个参数。

[查看关于FormData相关文档](https://developer.mozilla.org/en-US/docs/Web/API/FormData)

下来就是文件上传，在element有el-upload的组件可以正好用上。。
相关参数解释：
| 参数 | 描述 | 默认值 |
| :------: | ------ | :------: |
| action | 必选参数，上传的地址 | - |
| auto-upload | 是否在选取文件后立即进行上传  | true |
| before-upload | 上传文件之前的钩子，参数为上传的文件，<br>若返回 false 或者返回 Promise 且被 reject，则停止上传。| - |
| accept | 接受上传的文件类型（thumbnail-mode 模式下此参数无效） | - |

```html
<el-upload class="upload-demo" ref="sslkeyFile" :action="'aaa'" 
    :auto-upload="false" :before-upload="sslkeyFile" accept=".pem">
    <el-button size='small' type="primary">选择文件</el-button>
</el-upload>
```
这里需要使用手动上传，auto-upload为false
action参数其实就没有什么意思，但是是必选参数，可以乱写一个值，
在before-upload的函数中，可以拿取所选取的文件的file对象,可以在回调函数中，将该file对象追加到FormData对象中。。。

```js
sslkeyFile(file) {   // before-upload
    this.uploadForm.append('sslkey', file)
    return false
}
```

然后就是发送请求，必须使用post请求，并且headers 需要将 Content-Type 指定为 multipart/form-data

```js
export function wxpayConfigSave(data) {
    return request({
        url: '....',
        method: 'post',
        data:data,
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
}
```

一切都准备好了，点击按钮会发现挂了。。。    
![image](http://static.hecun.site/mmexport1541224058352.gif?center)

仔细盘查后。。。

是在axios拦截后，将data拦截后，转json序列化后将 FormData 转为了空对象。。
然后做了一下处理。

```js
const service = axios.create({
    timeout: 30000, // request timeout
    transformRequest: [function (data) {
        if (data instanceof FormData)
            return data;
        else
            return JSON.stringify(data)
    }],
    headers: {
        'Content-Type': 'application/json'
    }
})
```
然后，，完美解决。。。


下面贴一部分代码。。

```js
sslcertFile(file) {   // before-upload
    this.uploadForm.append('sslcert', file)
    return false
},
sslkeyFile(file) {   // before-upload
    this.uploadForm.append('sslkey', file)
    return false
},
newSubmitFrom() {
    if(!this.newform.PartnerId.trim()){
        this.$message.error('请输入商户PartnerId')
        return
    }
    if(!this.newform.PartnerKey.trim()){
        this.$message.error('请输入商户PartnerKey')
        return
    }

    this.uploadForm.append('mch_id', this.newform.PartnerId);
    this.uploadForm.append('md5_key', this.newform.PartnerKey);
    wxpayConfigSave(this.uploadForm).then(res => {
        if (res.error == 0) {
            this.$message.success('配置成功')
            this.getwxpayConfigGet();
        }
    })

    this.$refs.sslcertFile.submit()   // 提交时触发了before-upload函数
    this.$refs.sslkeyFile.submit()
}
```