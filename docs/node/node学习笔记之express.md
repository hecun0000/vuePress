---
sidebar: auto
---

# node学习笔记之express

使用express框架生成一个新的Express程序。 

## 生成程序框架
这里使用express-generator来初始化一个项目。可以生成模板，公共资源文件，配置等很多东西。当然也可以自定义。
然后，全局安装express-generator: 
```npm install -g express-generator```

使用express -e listing6_6 初始化一个项目，生成项目目录如下： 

├── app.js   
├── bin   
│   └── www    
├── package.json    
├── public    
│   ├── images    
│   ├── javascripts    
│   └── stylesheets   
│       └── style.css   
├── routes    
│   ├── index.js   
│   └── users.js   
└── views   
    ├── error.ejs    
    └── index.ejs    
下面简单看一下app.js文件：  
```js
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// 输出有颜色区分的日志，以便于开发调试
app.use(logger('dev'));
// 解析请求主体
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// 指定路由
app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
```
然后： 
```
cd listing6_6
npm install
npm start
```
然后就可以在浏览器中访问 http://localhost:3000/ : 

![20181129225130](http://static.hecun.site/20181129225130.png)

## 梳理下需求 
本次主要完成一个在线留言板的小应用：  
- 用户可以登录，注册，退出
- 用户可以发消息
- 可以分页浏览条目
- 支持认证简单的REAST API

然后，分析路由构成： 

- api路由： 
    - GET /api/entries:             获取条目列表
    - GET /api/entries/page:        获取单页条目
    - POST /api/entry:              获取单页条目
- Web UI 路由：
    - GET/post:                     显示创建新条目的表单
    - GET/post:                     提交新的留言条目
    - GET/register:                 显示注册表单
    - POST/register:                创建新的用户账号
    - GET/login:                    显示登录的表单
    - POST/login:                   登录
    - GET/logout:                   退出

##　express和程序的配置

