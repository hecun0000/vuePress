# 七牛云图片上传

要求： 
1. 一个实名认证成功的七牛云账号
2. 一个解析好的域名
3. 一个node环境的服务器

首先：    
在七牛云账号中新建一个储存空间，并解析好一个域名，下面就从这个说起： 
![201912155227](http://static.hecun.site/201912155227.png)   


## 安装依赖
这里会用到express和qiniu这两个npm包。   
```npm i -S express qiniu ```    
这里只做一个图片上传文件目录相对很简单：    
![20191216653](http://static.hecun.site/20191216653.png)   
基本作用也不用做过多解释了   

## node部分
app.js：  
简单的启动一个3000端口，/token用于生成七牛云上传图片所需要的凭证：   

```js
const express = require('express')
const bodyparse = require('body-parser')

const app = express()
// 配置跨域信息
const allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
    res.header('Access-Control-Allow-Headers', 'Content-Type')
    res.header('Access-Control-Allow-Credentials', 'true')
    next()
}

app.use(allowCrossDomain)
app.use(bodyparse.json())

const qiniu = require('./config.js')

app.get('/token', (req, res, next) => {
    // 生成上传凭证
    let token = new qiniu().exportToken()
    let data ={
        token: token,
        domain: "http://img.hecun.site/"
    }
    // 将数据返回给前端，用作图片上传使用
    res.status(200).send(data)
})

app.listen(3000, () => {
    console.log('this server are running on localhost:3000!')
})
```
生成上传凭证token： 
```js
const qiniu = require('qiniu')

class qiniuToken {
    constructor() {
        // 这块需要使用自己七牛云账号里的accessKey和secretKey
        this.accessKey = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
        this.secretKey = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
    }

    exportToken(){
        const mac = new qiniu.auth.digest.Mac(this.accessKey, this.secretKey)
        const options = {
            scope: 'blog', //指定储存空间
            deadline:Math.round(new Date().getTime() / 1000) + 3600, //token的过期时间
            // 指定七牛返回的内容
            returnBody:'{"key":"$(key)","hash":"$(etag)","fsize":$(fsize),"bucket":"$(bucket)","name":"$(x:name)"}'
        }
        // 生成token
        const putPolicy = new qiniu.rs.PutPolicy(options)
        const uploadToken = putPolicy.uploadToken(mac)
        return uploadToken
    }
}

module.exports = qiniuToken
```
现在代码部分已经差不多了。现在后端代码运行在locahost:3000的端口下。和我们一般用的接口地址不太相符。
这里利用ngnix做一下调整：  

```json
server {
        listen       80;
        server_name  api.hecun.site;

        location / {
            proxy_pass http://localhost:3000;
        }
    }

```

这样就可以使用http://api.hecun.site/xxx优雅的使用我们写的接口了。 






## 前端部分   

这块不做过多介绍：   
这里使用base64做一个简单的图片上传： 
[七牛云相关文档](https://developer.qiniu.com/kodo/kb/1326/how-to-upload-photos-to-seven-niuyun-base64-code)     

```html
 <body>
    <div id="app">
      <input type="file" accept="image/jpg,image/jpeg,image/png" id="file">
      <button id="upload">点击我</button>
      <img src="" alt="" id="image">
        <p class="img-url"></p>
    </div>
  </body>
 <script src="https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js"></script>
  <script>
	  let pic = '';

      $(document.querySelector('#file')).on('change', function () {
          let files = this.files[0] ;

          let reader = new FileReader();

          reader.readAsDataURL(files);

          reader.onload = function () {
			  pic = this.result.replace(/^(data\:image\/)+(\S)+;base64\,/,'');
		  }
      })

      $(document.getElementById('upload')).click(function(){

          $.get('http://api.hecun.site/token',function(res){
              let uptoken = JSON.parse(res).uptoken;

              let url = "https://up.qbox.me/putb64/-1/";
              let xhr = new XMLHttpRequest();
              xhr.onreadystatechange = function () {
                  if (xhr.readyState == 4) {
                      let returnObj = JSON.parse(xhr.responseText);
                      let picSize = "";
                      console.log("图片地址"+returnObj.domain+returnObj.hash+picSize+'?imageMogr2/auto-orient');
                      $('#image').attr('src',returnObj.domain+returnObj.hash+picSize+'?imageMogr2/auto-orient');
                      $('.img-url').html('图片地址：' + returnObj.domain+returnObj.hash+picSize+'?imageMogr2/auto-orient' )
                  }
              };

              xhr.open("POST", url, true);
              xhr.setRequestHeader("Content-Type", "multipart/form-data");
              xhr.setRequestHeader("Authorization", "UpToken " + uptoken);
              xhr.send(pic);
          })
      })
  </script>

```












