---
sidebar: auto
---
# 实现一个下拉列表组件

效果如下：
<vue-popDropdown />

实现方式： 利用vue中自定义指令directive；

先来看一下vue官网中的例子：
<div><input/></div>

```js
// 注册一个全局自定义指令 `v-focus`
Vue.directive('focus', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el) {
    // 聚焦元素
    el.focus()
  }
})
```
这样基本就是一个全局的自定义指令了,可以是页面在刚加载完成后使input自动获取焦点。

```HTML
<input v-focus>
```
## 钩子函数

- bind: 只调用一次，指令第一次绑定到元素时调用。一般为初始化时使用。 

- inserted: 被绑定元素插入父节点时调用。

- update:所在组件的 VNode 更新时调用，**但是可能发生在其子 VNode 更新之前**。

- componentUpdated: 指令所在组件的 VNode 及其子 VNode 全部更新后调用。

- unbind: 只调用一次，指令与元素解绑时调用。

## 钩子函数参数

- el：指令所绑定的元素的dom对象 。

- binding：一个对象，包含以下属性：

    - name：指令名，不包括 v- 前缀。

    - value：指令的绑定值，一般为表达式或函数

    - oldValue：指令绑定的前一个值，仅在 update 和 componentUpdated 钩子中可用。无论值是否改变都可用。

    - expression：字符串形式的指令表达式。例如 v-my-directive="1 + 1" 中，表达式为 "1 + 1"。

    - arg：传给指令的参数，可选。例如 v-my-directive:foo 中，参数为 "foo"。

    - modifiers：一个包含修饰符的对象（.enter,.esc,.13等）。

- vnode：Vue 编译生成的虚拟节点。

- oldVnode：上一个虚拟节点，仅在 update 和 componentUpdated 钩子中可用。

**下面回到正题：**
::: tip 思路
定义一个show的参数，来控制下拉框中内容的显示与隐藏。
:::


### 页面样式

```vue
<template>
    <div id='down'>
        <div class="main" v-clickoutside="handleClose">
            <button @click="show=!show">点击显示下拉菜单</button>
            <div class="dropdown" v-show="show">
                <p>下拉框中的内容，点击外面区域可以关闭</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      show: false
    };
  },
  methods: {
    handleClose() {
      this.show = false;
    }
  }
};
</script>
<style lang="scss" scoped>
.main {
  width: 125px;

  button {
    display: block;
    width: 100%;
    color: #fff;
    background-color: #39f;
    border: 0;
    padding: 6px;
    text-align: center;
    font-size: 12px;
    border-radius: 4px;
    cursor: pointer;
    outline: none;
    position: relative;

    &:active {
      top: 1px;
      left: 1px;
    }
  }

  .dropdown {
    width: 100%;
    height: 150px;
    margin: 15px 0;
    font-size: 12px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);

    p {
      display: inline-block;
      padding: 6px;
    }
  }
}
</style>
```
### 自定义指令部分

```js
export default {
 directives: {
    clickoutside: {
      bind(el, binding, vnode) {
        function documentHandler(e) {
          if (el.contains(e.target)) {
            return false;
          }
          
          if (binding.expression) {
            binding.value(e);
          }

        el.__vueClickOutside__ = documentHandler;
        document.addEventListener("click", documentHandler);
      },
      unbind(el, binding) {
        document.removeEventListener("click", el.__vueClickOutside__);
        delete el.__vueClickOutside__;
      }
    }
  }
}
```
其中： contains()用来判断元素是不是在自定元素内部，返回为布尔值。

若点击的元素包含在main在中，直接return false；  
否则将指令里面传递的函数绑定在该元素的click事件上；

当组件销毁或移除时，需要移除掉所绑定的click事件；






<!-- 1. 在update钩子中支持表达式的更新
2. 扩展clickoutside.js, 实现点击显示下拉菜单后，通过按下键盘中的ESC键也可以关闭下拉菜单
3. 将2中的ESC按键关闭功能作为可选项， 提示，可以用修饰符，比如v-clickoutside.esc; -->