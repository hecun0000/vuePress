---
sidebar: auto
---

# koa学习笔记[一]

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