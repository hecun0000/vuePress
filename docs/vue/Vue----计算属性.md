---
title: Vue----计算属性  
tags: Vue
categories: 前端
copyright: true
sidebar: auto
---
# Vue----计算属性  

模板内表达式常用于简单的计算, 但是计算的逻辑复杂的时候, 就会难以维护, 然而计算属性就是解决该类问题.   
来个简单的例子:  
```html
<div id="example">
  {{ message.split('').reverse().join('') }}
</div>
```
当需要反复调用上面的值, 则就相当麻烦, 而且会带较大的维护成本.  
### 简要了解  
```html
<div id="app">
    总价:{{prices}} 
</div>
```
对应的vue相关代码如下:  
```javascript
var app = new Vue({
    el: "#app",
    data: {
        package1:[
            {
                name: "iphone 7",
                price: 7199,
                count: 2
            },
            {
                name: "ipad",
                price: 2888,
                count: 2
            }
        ],
        package2:[
            {
                name: "apple",
                price: 2,
                count: 21
            },
            {
                name: "banana",
                price: 2888,
                count: 10
            }
        ]
    },
    computed: {
        prices: function(){
            var prices = 0;
            for(item of this.package1){
                prices+=item.price;
            }
            for(item of this.package2){
                prices+=item.price;
            }
            return prices;
        }
    }
})
```
[点击查看demo](https://hecun0000.github.io/VueJsDemo/computed/demo1.html/)  
这样就可以解决上述问题, 需要多处引用的话, 直接调用计算属性对应的值即可.  
然而在当package1或者package2中的商品有任何变化时, 比如购买数量或增删商品时, 计算属性的prices就自动更新, 同时试图中的数据也会进行改变.  

其次. 在计算属性中, 每一个属性都会有一个getter和一个setter. 在上述例子中都是使用了计算属性的默认方法, 只是利用了getter进行数据的读取. 当需要手动的修改数据时, 就会触发一个setter函数, 执行一些自定义的操作:  
```html
<div id="app">
    姓名: {{fullname}}
</div>
```
对应的vue相关代码如下:   
```js
var app = new Vue({
    el: "#app",
    data: {
        firstname: "Jack",
        lastname: "Green"
    },
    computed: {
        fullname: {
            //getter 用于读取数据
            get: function(){
                return this.firstname+""+this.lastname;
            },
            // setter 写入数据触发
            set: function(newValue){
                var names = newValue.split(" ");
                this.firstname = names[0];
                this.lastname = names[names.length-1];
            }
        }
    }
})
```
[点击查看demo](https://hecun0000.github.io/VueJsDemo/computed/setter.html/)  
当对app.fullname进行修改时, 会触发setter, 同时数据与试图也会立马更新.  
更直观的话, 可以在控制台直接对app.fullname进行修改, 观察其变化.  
同时在使用组件时也可以动态传递props属性.  
**小技巧**: 
- 计算属性可以依赖其他的计算属性;
- 不仅可以依赖当前实例的数据, 也可以依赖于其他实例的数据;  
例如:   
```html
<div id="app1"></div>
<div id="app2">
    {{reversedText}}
</div>
```
对应的vue代码如下: 
```js
var app1 = new Vue({
    el: "#app1",
    data: {
        text: "123,456"
    }
});
var app2 = new Vue({
    el: "#app2",
    computed: {
        reversedText: function(){
            // 这里依赖的是实例app1的数据text
            return app1.text.split(",").reverse().join(',');
        }
    }
})
```
[点击查看demo](https://hecun0000.github.io/VueJsDemo/computed/demo3.html/)  
当text发生改变的时候, 计算属性也会跟着更新同时更新视图.  

### 计算属性与缓存
其实, 在利用methods里的方法也会达到和计算属性同样的效果. 
计算属性是基于它的依赖缓存的. 一个计算属性所依赖的数据发生变化时, 它才会重新获取新的值. 只要所依赖的数据没有更新, 计算属性也不会更新. 相比于methods只要视图发生更新,则函数也会被执行.  
在使用计算属性还是methods取决于你是否需要缓存, 当遍历大量数组和做大量计算的时候, 应当时候计算属性, 除非你不希望得到缓存. 