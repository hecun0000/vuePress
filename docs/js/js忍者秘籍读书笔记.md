---
sidebar: auto   
sidebarDepth: 2
---

# JavaScript忍者秘籍 - 读书笔记   

## 函数：定义与参数   

![js忍者秘籍读书笔记-函数.定义与参数-20195384120](http://img.hecun.site/js忍者秘籍读书笔记-函数.定义与参数-20195384120.png)


## 函数进阶：理解函数的调用  

![js忍者秘籍读书笔记-函数进阶：理解函数的调用-201952173720](http://img.hecun.site/js忍者秘籍读书笔记-函数进阶：理解函数的调用-201952173720.png)

### 为什么this参数表示函数的上下文？   
 `this`  是在运行时的时候进行绑定的，并不是编写的时候绑定。它的上下文取决于函数调用时的各种条件，`this`  的绑定和函数的声明位置没有任何关系，只取决于函数的调用方式。 
 当一个函数被调用的时候，会创建一个活动记录（也可以称作为上下文）。这个记录会包括函数在哪里被调用的，函数的调用方式，传入参数等信息。 `this` 就是记录的一个属性，会在函数执行的过程中使用。


### 函数调用的方式
- 作为一个函数（function）- say(), 直接被调用   
- 作为一个方法（methods）- hecun.say() 关联在一个对象上，实现面向对象的流程
- 作为一个构造函数（constructor）- new Hecun()， 实例化一个新的对象  
- 通过函数的apply或者call方法 - say.call(hecun)或者say.bind(hecun)


### 函数（function）和方法（methods）之间有什么区别？ 

- 函数调用： 函数的上下文（ `this` 关键字的值）有两种可能性：在非严格模式下，它将是全局的上下文（ `window` 对象），而在严格模式下，它将是 `undefined`。
- 方法调用： 当函数作为某个对象的方法被调用时，该对象会成为函数的上下文。并且在函数的内部可以通过参数访问到。

### 如果一个构造函数显式的返回一个对象会发生什么？ 

如果构造函数返回一个对象，则该对象将作为整个表达式的值返回，而传入构造函数的 `this` 将被丢弃。
::: tip  
如果构造函数返回的是非对象类型，则忽略返回值，返回新创建的对象。
:::

### 实现一个forEach()函数   

forEach 遍历函数将每个元素传给回调函数，将当前元素作为回调函数的上下文。 
 
```js
function forEach(list, callback) {
    for(var n = 0; n < list.length; n++) {
        callback(list[n], n)
    }
}
``` 
## 精通函数：闭包和作用域  
![js忍者秘籍读书笔记-精通函数：闭包和作用域-20195222293](http://img.hecun.site/js忍者秘籍读书笔记-精通函数：闭包和作用域-20195222293.png)

### 一个变量或方法有几种不同的作用域？这些作用域分别表示什么？  
- 全局作用域： 声明在函数外部的变量，在代码中任何地方都能访问到的对象拥有全局作用域  
- 函数作用域： 声明在函数内部的变量，和全局作用域相反，局部作用域一般只在固定的代码片段内可访问到
- 块级作用域： 声明在最近的词法环境中



### 如何定位标识符及其值？ 
在访问外部代码结构中的变量，如果在当前环境中无法找到某一个标识符，就会对外部环境进行查找。一旦查找到匹配的变量，或是全局环境中仍无法找到对应的标识符而返回错误，就会停止查找。 


### 什么是可变变量？ 如何在JavaScript中定义可变变量？

可变变量： 声明的我变量可以变更任意次数。可以用 `var` 或 `let` 声明可变变量

### 注册标识符的过程

![js忍者秘籍读书笔记-变量声明过程-20195217371](http://img.hecun.site/js忍者秘籍读书笔记-变量声明过程-20195217371.png)


## 未来的函数：生成器和promise  

### 生成器函数的主要用途是什么？  

### 在异步代码中。为什么使用 promise 比使用简单的回调更好？  

### 使用 promise.race 来执行很多长期执行的任务时， promise 最终会在什么时候变成 resolved 状态？它什么时候会无法变成 resolved 状态？   

## 处理集合  

### 模拟实现Set   

```js
class MySet {
    constructor () {
        this.data = {};
        this.length = 0;
    }
    has(item) {
        return typeof this.data[item] !== "undefined";
    }

    add(item) {
        if(!this.has(item)){
            this.data[item] = true;
            this.length++;

            return this.data;
        }
    }
    remove(item) {
        if(this.has(item)){
            delete this.data[item];
            this.length--;
        }
    }
}

const text = new MySet();

text.add('hecun');
text.add('hecun');
text.add('禾寸');

console.log(text);

text.remove('hecun');

console.log(text, text.data);
```

## 历史弥新的事件  

### 深入事件循环   

在事件的循环中不仅仅包含事件队列， 而是具有至少两个队列， 除了事件，还要保持浏览器执行的其他操作。这些操作被称为任务， 并且分为两类， 宏任务和微任务。  

宏任务， 包括创建主文档对象，解析HTML, 执行主线（或全局）JavaScript代码，更改当前的URL以及各种事件， 如页面加载， 输入， 网络事件和定时器事件。从浏览器的角度来看，宏任务代表一个个离散的，独立的工作单元。运行完任务后，浏览器可以继续其他调度，如重新渲染页面的UI或执行垃圾回收。

微任务是更小的任务。微任务更新应用程序的状态，但必须在浏览器任务继续执行其他任务之前执行，浏览器任务包括重新渲染页面UI。微任务的案例包括Promise回调函数，DOM发生变化等。微任务需要我们能尽快的，通过异步的方式执行，同时不能产生新的微任务。微任务是的我们能够在重新渲染UI之前指定的行为，避免不必要的UI重绘，UI重绘会应用程序状态不连续。   

**事件循环基于两个基本原则**：  

- 一次处理一个任务
- 一个任务开始后知道运行完成，不会被其他任务中断  

### 玩转定时器  

JavaScript定时器处理方式  

| method| format | 描述 | 
| --| -- | --- | 
| setTimeOut| id = setTimeOut(fn, delay) | 启动一个计时器，在指定的延迟事件结束执行一次回调函数，返回标识计时器的唯一值 | 
| clearTimeOut| clearTimeOut(id) | 当指定定时器， 尚未触发时，取消定时器 |
| setInterval| id = setInterval(fn, delay) | 启动一个计时器，按照指定的延迟间隔不断执行回调函数| 
| clearInterval| clearInterval(id) | 取消指定的定时器 |  

**延迟执行和间隔执行的区别**：  

```js
setTimeOut( function repeatName(){
    // some long block of code ....
    setTimeOut(repeatName, 10);
}, 10);

setInterval(()=>{
    // some long block of code ....
}, 10);
```

setTimeOut 内的代码在前一个回调执行完成后，至少延迟10ms执行回调函数（取决于事件队列的状态，等待事件只会大于10ms）,而setInterval会尝试每10ms执行回调函数，不关心前一个回调函数是否执行。间隔执行函数可以一个接一个依次执行。 

当我们知道超过结束时间时，无法保证超时回调精准执行。不像间隔执行函数那样每10ms触发一次，它是重新安排每10ms后执行。

### 处理计算复杂度极高的任务   


