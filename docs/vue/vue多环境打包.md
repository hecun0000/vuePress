## vue多环境打包

::: tip 需求
在测试服务上部署代码，需要使用开发环境中配置的接口
:::  

在平时开发过程中，开发环境往往采用的api.test....相关接口，在线上就采用的api....相关接口；

要是只改变接口的话，其实就是改一个 **process.env.NODE_ENV** 的值：   
因为之前早已经在axios的封装的时候进行过判断：    
axios部分配置：   
```js
// request interceptor
service.interceptors.request.use(config => {
    if (process.env.NODE_ENV == 'development') {
        config.baseURL = testUrl;
    } else {
        config.baseURL = baseURL;
    }
    config.headers.token = getUserToken();
    return config;
}, error => {
    // Do something with request error
    console.log(error)
    return Promise.reject(error)
})
```
::: tip 思路
在执行打包命令时，传递一个环境变量的参数，更改前端代码中所判断的环境变量。
:::

目前使用的vue-cli 2.x版本：  
先从打包命令开始找，
```json
"scripts": {
    "dev": "webpack-dev-server --inline --progress --config build/webpack.dev.conf.js",
    "start": "npm run dev",
    "build": "node build/build.js",
},
```
过了一遍相关webpck打包相关代码发现和**process.env.NODE_ENV**相关的地方有两个：  

build/build.js中最开始就指定了**process.env.NODE_ENV**：   
```js
'use strict'
require('./check-versions')()
process.env.NODE_ENV = 'production'
```
在/config/prod.env.js中：   
```js
'use strict'
module.exports = {
    NODE_ENV: '"production"'
}
```
这里我们添加一个script命令： 
```js
"scripts": {
    "build:dev": "cross-env NODE_ENV=development node build/build.js"
}
```
在命令中，设置NODE_ENV为development。   
这里使用了cross-env这个包，主要因为在windows版本和linux中设置NODE_ENV的语法不同。   
```npm isntall cross-env -D```   
安装依赖后可直接使用。   
然后信心满满以为完成了，结果。。。。    
![image](http://static.hecun.site/mmexport1541224058352.gif?center)    

其实上面改的只是node配置下的环境变量，和前端业务代码中的变量还差一步。    

build/webpack.prod.conf.js中： 
```js
const env = require('../config/prod.env')
const webpackConfig = merge(baseWebpackConfig, {
    plugins: [
        // http://vuejs.github.io/vue-loader/en/workflow/production.html
        new webpack.DefinePlugin({
            'process.env': env
        }),
    ]
})
```
其中， DefinePlugin 允许创建一个在编译时可以配置的全局常量。[查看官网文档](https://webpack.docschina.org/plugins/define-plugin/)  

这里可以添加一个判断，来动态的指定**process.env.NODE_ENV**：  
build/webpack.prod.conf.js中：   
```js
const PrerenderSpaPlugin = require('prerender-spa-plugin')
const env = require('../config/prod.env')
const dev = require('../config/dev.env')
const isProd = process.env.NODE_ENV === 'production'

const webpackConfig = merge(baseWebpackConfig, {
  plugins: [
    // http://vuejs.github.io/vue-loader/en/workflow/production.html
    new webpack.DefinePlugin({
      'process.env': isProd?env:dev
    }),
    new PrerenderSpaPlugin(
        // 编译后的html需要存放的路径
        path.join(__dirname, '../dist'),
        // 列出哪些路由需要预渲染
        [ '/','/join','/about','/about_operation','/contact','/templates/','/catering/',
            '/templates/retail','/templates/clothing','/templates/flowerCake',
            '/templates/fruits','/templates/teach','/templates/parenting',
            '/templates/beauty','/templates/entertainment',
            '/news','/classroom']
    )
  ]
})
```  
然后，更改完毕！ 运行一下也没什么错。。。完全符合要求。。。   

下来，满怀信心开始部署到服务器上。   

![2018124151738](http://static.hecun.site/2018124151738.png)  

然后，乖乖打开里面提示的网址看了下，就是说在linux中Prerender 没有安装相关依赖，需要手动安装依赖才可以正常使用。[相关参考文章](https://segmentfault.com/a/1190000011382062)    
```
#依赖库
yum install pango.x86_64 libXcomposite.x86_64 libXcursor.x86_64 libXdamage.x86_64 libXext.x86_64 libXi.x86_64 libXtst.x86_64 cups-libs.x86_64 libXScrnSaver.x86_64 libXrandr.x86_64 GConf2.x86_64 alsa-lib.x86_64 atk.x86_64 gtk3.x86_64 -y
```
然后安装完成之后，打包就可以正常进行了。  

简单说明下，PrerenderSpaPlugin 这个插件只是一个利用prerender进行预渲染的插件，其实在测试环境中也就没有必要使用了，这个就是针对线上环境对seo进行简单的优化。   
所以，安装依赖的方式还是算了，继续回到配置文件，    
build/webpack.prod.conf.js中：   
```js
const isProd = process.env.NODE_ENV === 'production'
if(isProd){
    console.log('生产环境打包');
    //预渲染依赖
    const PrerenderSpaPlugin = require('prerender-spa-plugin')
    webpackConfig.plugins.push(
        new PrerenderSpaPlugin(
            // 编译后的html需要存放的路径
            path.join(__dirname, '../dist'),
            // 列出哪些路由需要预渲染
            [ '/','/join','/about','/about_operation','/contact','/templates/','/catering/',
                '/templates/retail','/templates/clothing','/templates/flowerCake',
                '/templates/fruits','/templates/teach','/templates/parenting',
                '/templates/beauty','/templates/entertainment',
                '/news','/classroom']
        )
    )
}else {
    console.log('测试环境打包');
}
```  
这样就完美解决了。这次先到这里！











