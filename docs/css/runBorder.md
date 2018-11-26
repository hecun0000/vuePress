---
sidebar: auto
---
# 跑马灯边框


<css-effects-runBorder/>

::: tip 思路
1. 先实现一个背景为斜条纹的父元素；
2. 给元素添加动画，给背景定位添加相应的动画
3. 在子元素中写真实的需求
:::

思路有了，代码就相对比较简单：

```html
<template>
    <div  class="running">
        <div class="container1">
            hecun
        </div>
    </div>
</template>
<style lang="scss" scoped>
.running {
  width: 100%;
  height: 250px;
  font-size: 60px;
  line-height: 250px;
  text-align: center;
  color: #fff;
  background: repeating-linear-gradient(
    158.78deg,
    transparent,
    transparent 15px,
    #999 0px,
    #999 30px
  );
  animation: shine 3s infinite linear;
  padding: 1px;
  .container1 {
    background-image: linear-gradient(to right, #74ebd5 0%, #9face6 100%);
  }
}
@keyframes shine {
  0% {
    background-position: -1px -1px;
  }

  100% {
    background-position: -120px -120px;
  }
}
</style>

```
