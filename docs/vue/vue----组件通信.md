---
title: vue----组件通信  
tags: 前端  
categories: vue 
copyright: true  
sidebar: auto
---
> 父组件: 用于数据管理
> 子组件: 用于数据的展示    

1. 父组件给子组件传值  

```html
<parent>
    <child :child-msg="msg"></child>//这里必须要用 - 代替驼峰
</parent>
<scirpt>
export default {
    data(){
        return {
            msg: [1,2,3]
        };
    }
}
</script>
```
子组件接受传值:  
- 方式一:

```js
props: ["child-msg"]
```
- 方式二: 

```js
props: {
    childMsg: Array //这样可以指定传入的类型，如果类型不对，会警告
}
```
- 方式三: 

```js
props: {
    childMsg: {
        type: Array,
        default: [0,0,0] //这样可以指定默认的值
    }
}
```
2. 子组件给父组件传值  
在vue不支持子组件修改数据, 可以通过事件的触发告诉父组件去修改数据: 
子组件:  

```html
<template>
    <div @click="up"></div>
</template>

methods: {
    up() {
        this.$emit('upup','hehe');  
        //主动触发upup方法，'hehe'为向父组件传递的数据
    }
}
```
父组件:  
```html
<div>
    <child @upup="change" :msg="msg"></child>   
    //监听子组件触发的upup事件,然后调用change方法
</div>
methods: {
    change(msg) {
        this.msg = msg;
    }
}
```
3. 非父子组件之间的通信   
创建一个中转站, 用于事件的接受和事件的传递    

```js
let bus = new Vue(); //创建事件中心
```
组件一触发事件: 

```html
<div @click="eve"></div>
methods: {
    eve() {
        Hub.$emit('change','hehe'); //Hub触发事件
    }
}
```
组件二接受事件: 
```html
<div></div>
created() {
    Hub.$on('change', () => { //Hub接收事件
        this.msg = 'hehe';
    });
}
```