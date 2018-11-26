---
title: Vue----内置指令  
tags: Vue
categories: 前端
copyright: true
sidebar: auto
---

# Vue----内置指令 

### 基本指令   
- v-clock   
v-clock不需要表达式;  
**用法**: 这个指令保持在元素上直到关联实例结束编译。和 CSS 规则如 [v-cloak] { display: none } 一起用时，这个指令可以隐藏未编译的 Mustache 标签直到实例准备完毕。
```html
<div id="app" v-clock>
    {{message}}
</div>
```
对应的vue代码如下:   
```js
var app = new Vue({
    el: '#app',
    data: {
        message: '这是一段文本'
    }
})
```
当网速较慢的时候, vue.js文件还没有加载完的时候. 页面中会显示{{message}}. 直到DOM被加载完成后, 才会被替换. 为避免页面闪动的情况, 可以使用css解决这个问题:  
```css
[v-clock] {
    display: none;
}
```
[点击查看demo](https://hecun0000.github.io/VueJsDemo/directive/v-clock.html/)  
在做vue的大型应用时, 内容的加载有路由去实现的, 所以可以不使用v-clock的指令.
- v-once  
也是一个不需要表达式的指令.  
**用法**: 定义的元素或组件中只渲染一次, 包括: 元素或组件的所有子节点, 在首次渲染后, 不在随着数据的变化而被重新渲染, 将或被视为静态内容.   
### 条件渲染指令  
- v-if
- v-else-if
- v-else
Vue在渲染页面元素的时候, 由于效率考虑, 会竟可能的复用已有的元素而非重新进行渲染, 实例如下:   
```html
<div id="app">
    <template v-if="type==='name'">
        <label>用户名: </label>
        <input type="text" placeholder="输入用户名">
    </template>
    <template v-else>
        <label>邮箱: </label>
        <input type="text" placeholder="输入邮箱">
    </template>
    <button @click="handleToggleClick">切换输入类型</button>
</div>
```
对应的Vue代码如下:  
```js
var app = new Vue({
    el: '#app',
    data: {
        type: "name"
    },
    methods: {
        handleToggleClick(){
            this.type = this.type==='name'?'mail':'name'
        }
    }
})
```
[点击查看demo](https://hecun0000.github.io/VueJsDemo/directive/demo2.html/)  
在运行之后, 会发现在输入用户名之后, 点击按钮,刚才输入的用户名还在input框中. 说明input元素被复用了.
如是不要要这种复用, 需要在input元素中加入key属性, 并且保证key值得唯一性.  
[点击查看demo](https://hecun0000.github.io/VueJsDemo/directive/demo3.html/)   
- v-show  
这个仅仅是是在Dom元素中加入css样式:  
```
display: none;
```
**注意v-show不可以在tamplate上使用**
### 列表渲染指令 v-for
