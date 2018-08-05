---
layout: pages
title: let 关键字--简要了解
date: 2017-10-07 11:45:40
tags: JavaScript
categories: 前端
copyright: true
---
## let<br> 
>可以声明一个块范围变量.可以将变量绑定到任意作用域中(通常是{......}的内部).即let为其声明的变量隐式的劫持了所在的块作用域内.  


### 先来个闭包的小例子:
```js
for(var i=1; i<=5; i++){
	setTimeout(function timer(){
		console.log(i);
	},i*1000)
}
```
我们所想要的是,分别输出数字1~5,每秒钟一次,每次一个.  
实际上,这段代码所运行的结果是以每秒钟一次输出一个6, 一共五次.  
  
仔细分析后,延迟函数的回调是在循环结束后才进行的.事实上,当定时器运行时即使每个迭代中执行的是setTime(.. , 0 ),所有的回调函数依然是在循环结束后才会被执行,因此,会每次输出一个6出来.  

**继续尝试:**
```js
for(var i=1; i<=5; i++){
	(function(){
		setTimeout(function timer(){
			console.log(i);
		},i*1000)
	})();
}
```
很明显这样做也不可以,的确在每个延迟函数会将每次迭代中创建的作用域封闭起来.但是这样的封闭明显不可以,这样只形成了个空的作用域.  
 
**继续改造:**
```js
for(var i=1; i<=5; i++){
	(function(j){
		setTimeout(function timer(){
			console.log(j);
		},i*1000)
	})(i);
}
```
在迭代都会生成一个新的作用域,使得延迟函数的回调可以将新的作用域封闭在每个迭代内壁.这样后,每个迭代中都会产生一个正确的变量值共我们使用! 即产生了5个独立的闭包作用域,供延迟函数调用的时候使用.  

### let 重返作用域 
下来对上面的例子进行进一步的加工:
```js
for(var i=1; i<=5; i++){
	let j=i;
	setTimeout(function timer(){
		console.log(j);
	},j*1000)
}
```
这样在每一次迭代中,let都会声明一次,随后每个迭代都会使用上一个迭代结束时值来初始化这个变量.即产生了闭包作用域.  
  
**进一步简化:** 
```js
for(let i=1; i<=5; i++){
	setTimeout(function timer(){
		console.log(i);
	},i*1000)
}
```
仔细看看就会发现只是将 var 关键字换成了**let**关键字;  
这才是let的正确打开方式.


