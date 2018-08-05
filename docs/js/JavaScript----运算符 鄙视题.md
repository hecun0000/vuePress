---
title: JavaScript 运算符鄙视题
tags: JavaScript
categories: 前端
copyright: true
---
在JS中 null>0为false,nul==0为false,为什么null>=0为true?

解析: 至于深层次理论我探讨不了;
但在&lt;&lt;JavaScript高级程序设计&gt;&gt;中这样写道:
- 50p 关系操作符中, 如果一个操作数是数值，则将另一个操作数转换为一个数值，然后执行数值比较。即在null>0的比较中,会将null默认进行转换,Number(null)为0,然后进行比较,所得结果为false;在null>=0则为true;
- 52p  相等操作符中, 要比较相等性之前，不能将 null 和 undefined 转换成其他任何值。即在null==0的比较中,结果为false;