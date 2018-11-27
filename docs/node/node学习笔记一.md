---
sidebar: auto
---

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
这样以来，和web程序已经差不多了。但是还差两步，一将数据永久的存在数据库中，二将网上找的版本生成一个可读版本。

## 添加数据库
这里使用SQLite来实现上述功能，新建db.js文件:

```js
//  连接数据库文件
const sqlite3 = require('sqlite3').verbose()
const dbName = 'later.sqlite'
const db = new sqlite3.Database(dbName)

// 如果没有，创建一个 articles 表
db.serialize(() => {
    const sql = `
        CREATE TABLE IF NOT EXISTS articles (
            id integer primary key, title , content TEXT 
        )
    `
    db.run(sql)
})

class Article {
    // 获取所有文章
    static all(cb) {
        db.all('SELECT * FROM articles', cb)
    }
    // 获取指定文章
    static find(id, cb) {
        db.get('SELECT * FROM articles WHERE id = ?', id, cb)
    }
    // 新建文章
    static create(data, cb) {
        const sql = 'INSERT INTO articles(title , content) VALUES (? , ?)'
        db.run(sql, data.title, data.content, cb)
    }
    // 删除文章
    static delete(id, cb) {
        if (!id) return cb(new Error('Please provide an id'))
        db.run('DELETE FROM articles WHERE id = ?', id, cb)
    }
}

module.exports = db
module.exports.Article = Article
```
然后修改之前写好的index.js，添加相应的操作；

```js
const express = require('express')
const bodyParser = require('body-parser')
const Article = require('./db').Article

const app = express()

// 设置端口
app.set('port', process.env.PORT || 3000)

// 支持编码为JSON的请求消息体
app.use(bodyParser.json())
// 支持编码为表单的请求消息体
app.use(bodyParser.urlencoded({ extended: true }))

// 获取所有文章
app.get('/articles', (req, res, next) => {
    Article.all((err, articles) => {
        if (err) return next(err)
        res.send(articles)
    })
})
// 创建一篇新文章
app.post('/articles', (req, res, next) => {
    Article.create(
        { title: req.body.title, content: req.body.content },
        (err, article) => {
        if (err) return next(err)
        res.send('OK')
    })
})
// 获取指定文章
app.get('/articles/:id', (req, res, next) => {
    const id = req.params.id
    Article.find(id, (err, article) => {
        if (err) return next(err)
        res.send(article)
    })
})
// 删除指定文章
app.delete('/articles/:id', (req, res, next) => {
    const id = req.params.id
    Article.delete(id, (err) => {
        if (err) return next(err)
        res.send({ message: 'Deleted' })
    })
})

app.listen(app.get('port'), () => {
    console.log("app started on port", app.get('port'))
})

module.exports = app
```
经过在postMan上面简单的测试了一下，都没什么问题，就这样数据就可以永久的保存下来了。


不得不说SQLite数据库搭配vs code 还是意外的合适。  
![2018112623853](http://static.hecun.site/2018112623853.png)


## 添加用户界面

这里采用ejs进行模板渲染，首先安装```npm install ejs --save```;
利用res.render渲染EJS格式的html文件
其中 articles.ejs如下：
```js
<% include head %>
    <ul>
        <% articles.forEach((article)=> { %>
            <li>
                <a href="/articles/<%=article.id %>">
                    <%= article.title %>
                </a>
            </li>
        <% }) %>
    </ul>
<% include foot %>
```
head.ejs:
```js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <div class="container">
```
foot.ejs:  
```js 
    </div>
</body>
</html>
```
需要注意的是, 需要在项目的根目录下建立一个views的文件夹，来存放ejs渲染模板。
看一下效果：  
![20181126225933](http://static.hecun.site/20181126225933.png)
如果需要复杂的样式，可以用使用bootstrap等，这里就不做相应的介绍了。  

## 最后
在简单说一下node-SQLite3的相关api:    
- new sqlite3.Database(filename,[mode],[callback])   
    返回数据库对象并且自动打开和连接数据库
- sqlite3.verbose()   
    集成数据库的执行模式，以便于调试，它没有重置的方法。
- Database#run(sql,param,...],[callback])   
    运行指定参数的SQL语句，完成之后调用回调函数，它不返回任何数据，在回调函数里面有一个参数，SQL语句执行成功，则参数的值为null,反之为一个错误的对象，它返回的是数据库的操作对象。在这个回调函数里面当中的this,里面包含有lastId(插入的ID)和change(操作影响的行数,如果执行SQL语句失败，则change的值永远为0);
-  Database#get(sql,[param,...],[callback])   
    运行指定参数的SQL语句，完成过后调用回调函数。如果执行成功，则回调函数中的第一个参数为null,第二个参数为结果集中的第一行数据，反之则回调函数中只有一个参数，只参数为一个错误的对象。
- Database#all(sql,[param,...],[callback])   
    运行指定参数的SQL语句，完成过后调用回调函数。如果执行成功，则回调函数中的第一个参数为null,第二个参数为查询的结果集，反之，则只有一个参数，且参数的值为一个错误的对象。
- Database#prepare(sql,[param,...],[callback])   
    预执行绑定指定参数的SQL语句，返回一个Statement对象，如果执行成功，则回调函数的第一个参数为null,反之为一个错误的对象。
- Database#close([callback])    
    关闭和释放数据库对象
- Database#serialize([callback])
    如果提供回调，它将立即被调用，即此方法的回调不是异步回调。在该回调中调度的所有数据库语句将被序列化运行，即一个接一个地执行。 函数返回后，数据库将再次设置为其原始模式。
-  Database#parallelize([callback])
    如果提供回调，它将立即被调用，即此方法的回调不是异步回调。在该回调中调度的所有数据库语句将并行运行。函数返回后，数据库将再次设置为其原始模式。