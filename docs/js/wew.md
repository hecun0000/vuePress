---
title: javascript与php终止后续程序
date: 2017-10-15 23:00:48
tags: JavaScript
categories: 前端
copyright: true
---

## 弹出框  

   ```js
var rs=window.confirm("您是否要删除指定记录");  
   ```

rs 有两个返回值: 
- true: 点击确认按钮
- false: 点击取消按钮  

## JS return : 可停止后续代码执行  



终止JS运行有如下几种可能：

1. 终止函数的运行的方式有两种

- 在函数中使用return，则当遇到return时，函数终止执行，控制权继续向下运行

- 在函数中使用try-catch异常处理，需要结束时，使用throw抛出异常

2. 终止动画特效的运行的方式是使用stop方法

- stop([clearQueue], [gotoEnd]) ：停止所有在指定元素上正在运行的动画

- 如果队列中有等待执行的动画(并且clearQueue没有设为true)，将被马上执行

3. 终止表单提交的方式：在表单提交事件中使用return false；可以阻止表单提交

- 终止定时函数执行的方式：使用window.clearInterval(定时器对象)或者window.clearTimeout(定时器对象);可以终止正在执行的定时器

## PHP exit : 可停止后续代码执行   

die();

dsga g
ASDGAGD


