# Js日常踩坑之获取验证码图片

在做登录注册的过程中，碰到了一次关于验证码的问题。后端的接口返回的数据中，只有一个二进制的图片，而所用到的参数放在了响应头里面。。。

![image](http://oxi9lrcsm.bkt.clouddn.com/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20181104220905.png)

其中，响应头中的sekey参数，要做为后端判断验证码的标识使用。。。
![image](http://oxi9lrcsm.bkt.clouddn.com/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20181104220937.png)

我们要做的是将二进制图片转化为图片链接，并通过img标签呈现给用户。。。

 
这里要用过js的blob对象来解决这个办法。。。
先上代码。。。

```js
 //获取图片验证码
getImgCode() {
        //更新验证码
    var key = localStorage.getItem('sekey');
    if (!key) {
        //第一次获取验证码
        var url = builder;
    } else {
        //第二次获取验证码
        var url = builder + '&seKey=' + key;
        this.login.seKey = key;
    }

    var that = this;
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = "blob";
    xhr.onload = function () {
        if (this.status == 200) {
            var blob = this.response;
            //获取响应头，取出setKey
            var src = window.URL.createObjectURL(blob);
            that.login.imgSrc = src;
            if (!key) {
                var setKey = xhr.getResponseHeader("seKey");
                localStorage.setItem('sekey', setKey);
                that.login.seKey = setKey;
            }
        }
    }
    xhr.send();
}
```

## 将二进制数据转化为url
responseType值的类型可为如下： 

 | 值 |	数据类型 |
| :------:| ------ |
|’ ‘	     |   DOMString (这个是默认类型) |
|arraybuffer |	ArrayBuffer对象   |
| blob |	Blob对象 |
|document	|Document对象|
|json	|JavaScript object, parsed from a JSON string returned by the server|
|text	|DOMString|

当为DOMString时，可以解决接大部分问题，但是上面的问题是解决不了的，，这里选择使用Blob,则返回为就是一个Blob对象

::: tip Blob
Blob 对象表示一个不可变、原始数据的类文件对象。Blob 表示的不一定是JavaScript原生格式的数据。File 接口基于Blob，继承了 blob 的功能并将其扩展使其支持用户系统上的文件
:::

Blob URL可以通过URL.createObjectURL(blob)创建。在绝大部分场景下，我们可以像使用Http协议的URL一样，使用Blob URL。常见的场景有：作为文件的下载地址和作为图片资源地址。

![image](http://oxi9lrcsm.bkt.clouddn.com/TIM%E6%88%AA%E5%9B%BE20181104231009.png)

## 获取响应头中的数据
 
 调用XHR对象的getResponseHeader()方法并传入头部的字段名称，可以获取相应的响应头信息。
 调用XHR对象的getAllResponseHeader()方法可以通常返回多行文本，可以方便检查响应所有的头部字段。
 
 ```js
var setKey = xhr.getResponseHeader("seKey");
 ```
