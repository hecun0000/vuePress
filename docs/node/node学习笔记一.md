# node的学习笔记[一]

## 了解node web程序的结构
典型的node web的程序会由下面几个部分组成： 

![20181125221934](http://static.hecun.site/20181125221934.png)

## 我的第一个node web 程序

1. 创建一个目录，然后运行npm init, 使用默认项；
```
mkdir later
cd later
npm init -fy
```
2. 安装依赖项express
```npm install --save express```
3. 创建index.js 
```js
const express = require('express')
const app = express()

const port = process.env.PORT || 3000
app.get('/',(req,res)=>{
	res.send('hello world')
})

app.listen(port,()=>{
	console.log("这是我第一个node应用，运行在"+ port +"端口")
})
```
4. 运行 ```node index.js```打开浏览器，输入 http://localhost:3000/ 就可以看到了；
5. 配置npm 脚本命令,后面就可以使用```npm start```来运行程序了。

```json
{
    "name": "later",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
        "start": "node index.js",
        "test": "echo \"Error: no test specified\" && exit 1"
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "dependencies": {
        "express": "^4.16.4"
    }
}
```

## 搭建一个RESTful Web服务
在开始搭建RESTful服务中，要想好需要那些操作，并将他们映射到Express路由中。就本次来说， 需要实现保存文章、获取文章、获取包含所有文章的列表和删除不再需要的文章这几个功能。路由如下： 
- POST /articles ----创建新文章
- GET /articles/:id ----获取指定文章
- GET /articles ----获取所有的文章
- DELETE /articles/:id ----删除指定文章

RESTful路由示例： 
```js
const express = require('express')
const app = express()
const articles = [
    { title: 'demo' },
    { title: 'test' }
]
// 设置端口
app.set('port', process.env.PORT || 3000)

// 获取所有文章
app.get('/articles', (req, res, next) => {
    res.send(articles)
})
// 创建一篇新文章
app.post('/articles', (req, res, next) => {
    res.send("ok")
})
// 获取指定文章
app.get('/articles/:id', (req, res, next) => {
    const id = req.params.id
    console.log('Fetching', id)
    res.send(articles[id])
})
// 删除指定文章
app.delete('/articles/:id', (req, res, next) => {
    const id = req.params.id
    console.log('Deleting', id)
    delete articles[id]
    res.send('Delete success')
})

app.listen(app.get('port'), () => {
    console.log("app started on port", app.get('port'))
})

module.exports = app
```
这里可以用postMan简单的测试一下。暂时没能实现文章的创建，在创建文章的时候，需要将post传递参数进行处理。
这里要使用 body-parser 将传递过来的参数进行解析。
``` npm install --save body-parser ```
下面进行改造:
```js
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const articles = [
    { title: 'demo' },
    { title: 'test' }
]

// 设置端口
app.set('port', process.env.PORT || 3000)

// 支持编码为JSON的请求消息体
app.use(bodyParser.json())
// 支持编码为表单的请求消息体
app.use(bodyParser.urlencoded({extended:true}))

// 创建一篇新文章
app.post('/articles', (req, res, next) => {
    const article = {title:req.body.title}
    articles.push(article)
    res.send(article)
})

app.listen(app.get('port'), () => {
    console.log("app started on port", app.get('port'))
})

module.exports = app
```
这样以来，和web程序已经差不多了。但是还差两步，一将数据永久的希尔数据库中，二将网上找的版本生成一个可读版本。
