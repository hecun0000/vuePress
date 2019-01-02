---
sidebar: auto
---

# node学习笔记之koa2

## 我的第一个koa 应用

```js
const koa = require('koa')
const app = new koa()

app.use(async (ctx)=>{
    ctx.body = 'hello,hecun'
})

app.listen(9999);
console.log('这是一个在9999端口运行一个demo')
```

## 让koa2支持跨域请求   

在koa2里解决跨域的中间件叫koa2-cors，我们先进入service文件夹，然后直接使用npm来进行安装。    

```npm install --save koa2-cors```
安装完成后，记得要在service/index.js文件中引入和注册（使用）一下中间件：   

```js
const cors = require('koa2-cors')
app.use(cors())
```
