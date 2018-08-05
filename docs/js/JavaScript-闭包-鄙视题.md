---
title: JavaScript----闭包 鄙视题
date: 2017-10-07 18:24:09
tags: JavaScript
categories: 前端
copyright: true
---

# 如题 

```js
function Foo() {
    getName = function () { alert (1); };
    return this;
}
Foo.getName = function () { alert (2);};
Foo.prototype.getName = function () { alert (3);};
var getName = function () { alert (4);};
function getName() { alert (5);}
 
//请写出以下输出结果：
Foo.getName();
getName();
Foo().getName();
getName();
new Foo.getName();
new Foo().getName();
new new Foo().getName();
```
这道题的主要综合考察了的JavaScript的综合能力，包含了变量定义提升、this指针指向、运算符优先级、原型、继承、全局变量污染、对象属性及原型属性优先级等知识.  
## 第一问  
>Foo.getName();  

先简要的看一下上半部分的代码: 首先创建了一个名为Foo的函数;  
接下来给Foo的静态属性getName存储了一个匿名函数;  
给Foo的原型对象创建一个名为getName的匿名函数;  
之后又通过函数变量表达式创建了一个getName的函数;  
最后再声明一个叫getName函数。

那么,第一问就毫不犹豫的输出2;  
## 第二问  
>getName();  

第二问，直接调用getName函数。则调用当前作用域内的getName函数，所以这里应该直接把关注点放在4和5上.  
4与5的区别在函数声明和函数表达式两种方式的区别:  
- 函数声明: 在JS中函数声明会被提升到作用域的最前面,即使代码写在最后面,也会被提升值最前面;
- 函数表达式: 存储函数的变量会被提升至作用域的最前面,但是函数的表达式的赋值过程在运行的时候才会执行,并且只能等到赋值操作完成时才会被调用; 
下面分别看一下两者运行起来的差别:  

### 函数声明
```js
var getName;
    console.log(getName)//function getName() {alert(5);}
    getName()//5
    function getName() {
        alert (5);
    }```
### 函数表达式
```js
var getName;
    console.log(getName)//undefined
    getName()//Uncaught TypeError: getName is not a function
    var getName = function() {
        alert (4);
    }
    ```
那么, 答案也就很明确了, 为4. 

## 第三问  
>Foo().getName();  

首先,执行了Foo函数,并返回了this,this的指向是由所在函数的调用方式决定的。而此处的直接调用方式,this指向window对象.遂Foo函数返回的是window对象，相当于执行window.getName();即执行getName()由于在函数Foo执行的过程中,其函数内部的getName的赋值操作会将var getName = function () { alert (4);}给赋值为function () { alert (1);}, 此时全局
作用域中的getName就变为function () { alert (1);}. 从而该答案为1. 

## 第四问  
>getName();  

该问题和三个相同,由于getName被修改过了.所以答案为1.  
## 第五问  
>new Foo.getName();  

该问题要考虑函数执行的优先级顺序:  

  - 19  圆括号                       n/a ( … )
  - 18  成员访问         从左到右    … . …
  - 18  new (带参数列表) n/a         new … ( … )
  - 17  new (无参数列表) 从右到左    new …  
  - 17  函数调用         从左到右    … ( … )
则函数的执行顺序是:  

>new (Foo.getName)();  

+ 点的优先级(18)比new无参数列表(17)优先级高
+ 当点运算完后又因为有个括号()，此时就是变成new有参数列表(18) 所以直接执行new;  
>.成员访问(18)->new有参数列表(18)

## 第六问  
>new Foo().getName();  

该执行顺序可以看做是:  
>(new Foo()).getName(); 

+ 点的优先级和 new 有参数列表是相同的,按从左向右的顺序执行  
> new有参数列表(18)->.成员访问(18)->()函数调用(17);

## 第七问  
>new new Foo().getName();  

同样是运算符优先级问题.  
>new ((new Foo()).getName)();  

new有参数列表(18)->new有参数列表(18); 

先初始化Foo的实例化对象，然后将其原型上的getName函数作为构造函数再次new，所以最终结果为3;   

## 答案  
```js
function Foo() {
    getName = function () { alert (1); };
    return this;
}
Foo.getName = function () { alert (2);};
Foo.prototype.getName = function () { alert (3);};
var getName = function () { alert (4);};
function getName() { alert (5);}

//答案：
Foo.getName();//2
getName();//4
Foo().getName();//1
getName();//1
new Foo.getName();//2
new Foo().getName();//3
new new Foo().getName();//3
```