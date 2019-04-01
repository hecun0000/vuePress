---
sidebar: auto
---

#  使用cropperjs在vue中实现一个裁剪小功能   

## 要求：  

1. 将图片裁剪为指定比例 
2. 利用七牛云将裁剪后的图片上传至七牛云，并返回图片链接   

## 不BB先看效果：  
![](http://img.hecun.site/FlGRUeL3r70CrS5Whlh1wBYxghcX)   

[在线预览](http://p.hecun.site/cropper)  
[相关源码查看](https://github.com/hecun0000/vue-cropperjs)


## 具体步骤：  

### 图片裁剪   

#### 1. 实现裁剪
说明：UI方面使用elementUI的组件库，具体使用方式不做介绍..

- 先写页面布局，我打算将裁剪功能写在一个弹窗中
```html
<template>
  <div>
    <div class="box">
      <el-upload
        class="upload-demo"
        drag
        action=" "
        :show-file-list="false"
        :auto-upload="false"
        :on-change="handleChange"
      >
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">
          将文件拖到此处，或
          <em>点击上传</em>
        </div>
      </el-upload>
    </div>
    <fileListComponent/> 
    <!-- 这个是上传后的文件列表，这个不重要... -->

    <tailor :uploadDialog="uploadDialog" :fileUrl="fileUrl" 
        @getImgPath="getImgPath" ratio="4/3" isCircle></tailor>
  </div>
</template>
      
<script>
import upload from "@/mixins/upload";
import fileListComponent from "@/components/fileList";

export default {
  name: "cropper",
  mixins: [upload],
  components: {
    fileListComponent
  }
};
</script>

<style lang="less" scoped>
.box {
  display: flex;
  justify-content: center;
  padding-top: 20px;
}
</style>
```
- 弹窗组件   
1. 页面布局（具体样式就省略了。。。）
```html
<template>
  <div class="upload">
    <el-dialog title="选取图片" :visible.sync="uploadDialog.visible" width="900px">
      <div class="preview">
        <!-- 裁剪区 -->
        <div class="cilp-box">
          <img v-show="url" id="image" :src="url" alt="picture" 
                :class="{'hidden':!croppable}" class="picture">
        </div>
        <!-- 预览区 -->
        <div class="show">
          <span class="span-title">裁剪预览</span>
          <div class="show-1 img-preview" :class="{'circle': beCircle}"></div>
        </div>
      </div>
      <!-- 控制区 -->
      <div class="operation-box">
        <!-- ... -->
      </div>

      <div class="todo-box">
        <el-button type="primary" size="small" @click="toUpload">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
```
2. 下来确定props中的可配置内容

注释也很清楚，大家一看就懂，不多bb...
```js
  props: {
    uploadDialog: {
      //用于控制的弹窗的开关
      type: Object,
      default: () => {
        return { visible: false };
      }
    },
    isCircle: {
      //是否裁剪为圆形
      type: Boolean,
      default: false
    },
    ratio: {
      //上传图片限制比例 长比宽
      type: String,
      default: "1/1"
    },
    limit: {
      //限制图片大小---为KB单位
      type: Number,
      default: 100
    },
    fileUrl: {
      //需要裁剪的图片数据 
      required: true,
      type: [File, String, Blob]
    }
  },
```
3. 初始化裁剪框和预览框 

这里使用cropperjs来做，[cropperjs](https://github.com/fengyuanchen/cropperjs)

在文档中可以看到，初始化的会用到 ```new Cropper(element[, options])``` ,
- element 为img元素或者canvas等；
- options则是相关配置项  

具体配置项可以[查看官方文档](https://github.com/fengyuanchen/cropperjs) 或  [中文版](https://blog.csdn.net/weixin_38023551/article/details/78792400) 大佬翻译的，，还不错。。。

```js
init(){
    let image = document.getElementById("image");
    let ratio = this.ratio.split("/");
    this.cropper = new Cropper(image, {
        aspectRatio: ratio[0] / ratio[1], 
        //裁剪框比例
        viewMode: 1,
         //视图模式
        autoCropArea: 1,   
         //裁剪框占图片区域的大小
        background: false, 
        //容器的网格背景
        zoomable: true, 
        //是否允许缩放
        preview: ".img-preview", 
        //预览元素
        // 准备完成执行的函数
        ready() {},
    });
}
```
其中，```.img-preview``` 是进行裁剪预览的一个容器元素，如果展示多个尺寸的预览图，只需要设置不同尺寸大小的元素就可以。。


现在在拿到图片信息的时候，执行以下 ```init``` 函数。我写在了 ```watch``` 中执行。  

```js  
watch: {
    fileUrl: {
        handler(val) {
            if (this.uploadDialog.visible) {
                // 弹窗打开
                this.url = val;
                setTimeout(() => {
                    if (this.cropper) {
                        //  销毁
                        this.cropper.destroy();
                    }
                    this.init();
                }, 300);
            }
        },
        //立即执行监听事件  
        immediate: true
    }
}
```

这样的话，布局和初始化算是完成了。 






#### 2. 加几个小功能   

#### 3. 要圆的图片

#### 4. 要透明的   

#### 5. 我还要压缩图片


### 然后上传到七牛云  




