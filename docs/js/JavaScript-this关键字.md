---
title: JavaScript-this关键字
date: 2017-10-08 16:40:50
tags: 你不知道的JavaScript上卷
categories: 读书笔记
copyright: true
---
<img src="http://oxi9lrcsm.bkt.clouddn.com/56697596_p0.jpg" alt="" style="width: 100%">
  
this到底是一种什么机制?  
this是在运行时进行绑定的,并不是在编写的时候进行绑定的,它的上下文取决于函数调用时的各种条件.this的绑定和函数声明的位置没有任何关系,只取决于**函数调用时的方式**也被称为调用位置.  
当函数在调用时, 会创建一个活动记录(AO, 也被称作为上下文). 这个记录会包含函数在哪里被调用(调用栈), 函数的调用方式, 传入的参数等信息. this就是记录这一属性的, 会在函数执行的过程中用到.  
# 一. 调用位置  
调用位置就是函数在代码中被调用的位置(而不是声明的位置). 
来个小例子, 分析下调用栈和调用位置:  
  
```js 
function baz(){
    //当前的调用栈是: baz
    //因此, 当前调用位置是全局作用域  
    console.log("baz");  
    bar();  // bar的调用位置 
}

function bar(){
    //当前的调用栈是: baz -> bar 
    //因此, 当前的调用位置在baz中
    console.log("bar");
    foo(); // foo的调用位置
}

function foo(){
    //当前调用栈是: baz -> bar -> foo
    //因此,当前的调用位置在foo中
    console.log("foo");
}

baz(); //  baz的调用位置
```
真正地分析出函数的调用位置, 就可以理解this的绑定了.  
# 二.绑定规则  
首先需要找到调用位置, 然后判断需要应用下面四条规则中的那一条. 
## 1.默认规则  
这是最常用的函数调用类型: 独立函数使用.   

```js
function foo(){
    console.log(this.a);
}
var a = 2;
foo();
```

当调用foo()时, this.a 被解析为全局变量a. 因为函数调用时应用了this的默认绑定,因此this会指向全局.  
    
在代码中, foo()直接使用不带任何修饰的函数引用进行调用, 只能认为是默认绑定.  
## 2.隐式绑定  
该规则是调用位置是否具有上下文对象, 或者说是否被某个对象拥有或者包含.  

```js
function foo(){
    console.log(this.a);
}

var obj2 = {
    a : 42;
    foo : foo;  //foo的调用位置
};

var obj1 = {
    a : 2;
    obj2 : obj2;
};

obj1.obj2.foo();  //42
```
首先, foo()是在全局中被声明, 然后被当做引用属性添加到obj2中. 隐式绑定规则会把函数调用中的this绑定到这个上下文对象中. 因此调用foo时的this被绑定在obj2中.  
> 对象属性引用链中只有上一层或者说最后一层在调用位置中作用.  
### 2.1隐式绑定的丢失     

当隐式绑定的函数丢失绑定对象, 就会默认的转为默认绑定. 从而将this绑定到全局对象或者undefined上, 取决于是否为严格模式.  

```js
function foo(){
    console.log(this.a);
}

var obj = {
    a : 2;
    foo : foo;
}

var bar = obj.foo;
var a = "oops, global"; //a为全局对象  
bar(); // "oops, global"
```
在这个例子中:   

```js 
var bar = obj.foo;   
```
bar只是引用了foo函数的本身, 和obj并没有任何关系. 则bar()就是对foo的直接调用. 因此为默认绑定.  
再来一个更有意思的例子: 

```js
function foo(){
    console.log(this.a);
}

function doFoo(fn){
    //fn 其实引用的是foo
    fu(); //调用位置
}

var obj = {
    a : 2;
    foo : foo;
};

var a = "oops, global"; //a为全局对象 
doFoo(obj.foo);  // "oops, global"
```

首先, 在全局作用域中声明了foo的函数; 然后被添加进obj的对象中;然后doFoo函数将foo这个函数作为参数传入进去, 并在其内部进行调用.  
在这个例子中, 参数传递被作为一种隐式的赋值.  
另外, 在回调函数中, 丢失this的绑定也是比较常见的现象.  
## 3.显式绑定  
当我们不想在对象的内部包含函数引用,而想在某个对象上强制调用函数?  
为此,JavaScript提供了call(...), apply(...)和bind(...)方法.  
call()/apply()/bind(): 

1. call()/apply(): 立刻调用函数, 并临时替换函数中的this为指定对象  
   如何:   
   + fun.call(obj,参数值1,参数值2,...)  
   + fun.apply(obj.数组)  
2. bind(): 基于原函数, 创建一个新函数, 永久绑定this为指定对象  
   如何: fun.(obj,参数值,...)
   + 创建一个和fun完全一样的函数  
   + 永久绑定fun中的this为obj  
   + 永久绑定部分参数值    

此外, 在JavaScript语言和宿主环境中许多的新的内置函数, 其作用和bind(...)一样, 去报你的回调函数使用指定的this. 比如 [1,2,3].forEach(for, obj ); 等等...  
  
## 4.new绑定  
new可以影响函数调用时this绑定行为的方法, 我们称之为new绑定.  
  
"构造函数"是类中的一些特殊方法, 使用new初始化时会调用类中的构造函数. 通常的形式是这样的:  

```js
something = new MyClass(...); 
```

构造函数:  
> 在JavaScript中, 构造函数只是一些使用new操作符时被调用的函数. 它们并不会属于某个类, 也不会实例化一个类. 实际上, 它们甚至都不能说是一种特殊的函数类型, 它们只是被new操作符调用的普通函数而已.   
  
在使用new来调用函数, 或者说是发生构造函数的调用时, 会自动执行下面的操作.  
1. 创建(或者说构造)一个全新的对象.  
2. 这个新对象会被执行[[prototype]]连接.  
3. 这个新对象会绑定到函数调用的this.  
4. 如果没有返回其他对象, 那么new表达式中的函数会自动的返回这个新对象.   

# 三.判断this  
  
当判断先根据绑定的优先级来判断函数的调用位置是相应的哪条规则. 可以按照下面的顺序进行判断:  

1. 函数是否存在new中调用? 是则this绑定的是创建的对象.
```js
var bar = new foo();
```
2. 函数是否通过call, apply (显式的绑定)? 如果是的话, this绑定的是指定的对象.
```js
var bar = foo.call(obj2);
```
3. 函数是否在某个上下文对象中调用(隐式绑定)? 如果是的话, this绑定在对应的上下文对象中.  
```js
var bar = obj1.foo();
```
4. 如果以上都不是的话, 使用的为默认绑定, 如果在严格模式下, 就绑定到undefined, 否则为全局对象. 
```js 
var bar = foo();
```





