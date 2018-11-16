# Grid 布局初识

目前已经2018年了，浏览器大部分已经开始支持grid的布局，作为一个前端狗，是时候该学习一下了！

::: tip 基础知识

这里要提两个核心概念，这两个核心概念有点类似于Flexbox布局：

- Grid容器（对应Flexbox布局中的Flex容器）
- Grid项目（对应Flexbox布局中的Flex项目）
:::

## 我的第一个grid布局

如下是相应的html结构： 
```html
<div class="container">
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
</div>
```
相应的css如下： 
```css
.container {
    display: grid;
    height: 400px;
    width: 400px;
}

.item {
    background: #3eaf7c;
}
```
下面是真实的浏览器的显示情况，为了方便观看，我给每一个item添加了一个border边框： 

<div class="container0">
    <div class="item0"></div>
    <div class="item0"></div>
    <div class="item0"></div>
    <div class="item0"></div>
    <div class="item0"></div>
</div>


<style scoped>
.container0 {
    display: grid;
    height: 400px;
    width: 400px;
}

.item0 {
    background: #3eaf7c;
    border: 1px solid #282c34;
}
</style>

给容器设定了grid的布局默认的会产生网格，在页面上可能看不出变化。

##  来一个三列布局
代码如下： 

所用的csss属性有： 
grid-template-columns：该属性是基于 网格列. 的维度，去定义网格线的名称和网格轨道的尺寸大小。
grid-template-rows：该属性是基于 网格行. 的维度，去定义网格线的名称和网格轨道的尺寸大小。

对应的属性值有： 
- 长度 非负的长度的数值： 如200px;
- 百分比 非负值用来指定子项占父容器的百分比；
- flex fr 用单位 fr 来定义网格轨道大小的弹性系数 当外层用一个 minmax() 表示时，它将是一个自动最小值(即 minmax(auto, flex) ) .
- max-content 是一个用来表示以网格项的最大的内容来占据网格轨道的关键字。
- min-content 是一个用来表示以网格项的最大的最小内容来占据网格轨道的关键字。
- minmax(200px, 1fr) 是一个来定义大小范围的属性，大于等于min值，并且小于等于max值
- fit-content() 相当于公式 min(max-content, max(auto, argument))，类似于auto 的计算(即 minmax(auto, max-content))，除了网格轨道大小值是确定下来的，否则该值都大于 auto 的最小值

```html
<div class="container-1">
    <div class="item-1"></div>
    <div class="item-1"></div>
    <div class="item-1"></div>
</div>
```

```css
.container-1 {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    height: 400px;
    width: 400px;
}

.item-1 {
    background: #3eaf7c;
    border: 1px solid #282c34;
}
```

<div class="container-1">
    <div class="item-1"></div>
    <div class="item-1"></div>
    <div class="item-1"></div>
</div>


<style scoped>
.container-1 {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    height: 400px;
    width: 400px;
}

.item-1 {
    background: #3eaf7c;
    border: 1px solid #282c34;
}
</style>

## 下面来个间隔 grid-gap

- grid-gap ：可以用固定值，也可用百分比值

若设定两个值： 分别表示row-gap 和 column-gap；


```html
<div class="container-2">
    <div class="item-2"></div>
    <div class="item-2"></div>
    <div class="item-2"></div>
</div>
```

```css
.container-2 {
    display: grid;
    height: 400px;
    width: 400px;
    grid-gap:5px 20px;
    grid-template-columns: 1fr 1fr 1fr;
}

.item-2 {
    background: #3eaf7c;
    border: 1px solid #282c34;
}
```

<div class="container-2">
    <div class="item-2"></div>
    <div class="item-2"></div>
    <div class="item-2"></div>
    <div class="item-2"></div>
    <div class="item-2"></div>
</div>


<style scoped>
.container-2 {
    display: grid;
    height: 400px;
    width: 400px;
    grid-gap:5px 20px;
    grid-template-columns: 1fr 1fr 1fr;
}

.item-2 {
    background: #3eaf7c;
    border: 1px solid #282c34;
}
</style>

## item相关属性

- grid-column： 为 grid-column-start + grid-column-end的组合值；

- grid-column-start: number | name | span number | span name | auto
   
- grid-column-end: number | name | span number | span name | auto

grid-row:   grid-row-start + grid-row-end的组合值
- grid-row-start: number | name | span number | span name | auto
   
- grid-row-end: number | name | span number | span name | auto


1. number：网格线的编号或者网格的名称
2. span number ：该网格项将跨越所提供的网格轨道数量
3. span name ：该网格项将跨越到它与提供的名称位置
4. auto ：表示自动放置，自动跨度，默认会扩展一个网格轨道的宽度或者高度

还是来个列子： 
我们想要有一个300px的侧边栏高度，并且让他的位置是垂直方向的2 / 3。我们可以使用grid-row: 2 / 4来实现，这个特性和grid-column非常的类似,

<div class="container-3">
    <div class="item-3 item1-3">
        grid-column: 1/4;
    </div>
    <div class="item-3 item2-3">
        grid-row: 2/4;
    </div>
    <div class="item-3"></div>
    <div class="item-3"></div>
    <div class="item-3"></div>
</div>


<style scoped>
.container-3 {
    display: grid;
    height: 400px;
    width: 400px;
    grid-gap:5px 20px;
    grid-template-columns: 1fr 1fr 1fr ;
}

.item-3 {
    background: #3eaf7c;
    border: 1px solid #282c34;
}

.item1-3 {
    grid-column: 1/4;
}

.item2-3 {
    grid-row: 2/4;
}

</style>

```html
<div class="container-3">
    <div class="item-3 item1-3"></div>
    <div class="item-3 item2-3"></div>
    <div class="item-3"></div>
    <div class="item-3"></div>
    <div class="item-3"></div>
</div>
```


```css
.container-3 {
    display: grid;
    height: 400px;
    width: 400px;
    grid-gap:5px 20px;
    grid-template-columns: 1fr 1fr 1fr;
}

.item-3 {
    background: #3eaf7c;
    border: 1px solid #282c34;
}

.item1-3 {
    grid-column: 1/4;
}

.item2-3 {
    grid-row: 2/4;
}
```

下面利用span 合并相应的单元格，看一下效果： 

<div class="container-4">
    <div class="item-4 item1-4">
        grid-column: 1/ 4;
    </div>
    <div class="item-4 item2-4">
        grid-row: 2/4;
    </div>
    <div class="item-4 item3-4">
        grid-column: 2 / span 2;<br>
        grid-row: 2 / span 2;
    </div>
    <div class="item-4"></div>
    <div class="item-4"></div>
    <div class="item-4"></div>
</div>


<style scoped>
.container-4 {
    display: grid;
    height: 400px;
    width: 400px;
    grid-gap:5px 20px;
    grid-template-columns: 1fr 1fr 1fr;
}

.item-4 {
    background: #3eaf7c;
    border: 1px solid #282c34;
}

.item1-4 {
    grid-column: 1/ 4;
}

.item2-4 {
    grid-row: 2/4;
}

.item3-4 {
    grid-column: 2 / span 2;
    grid-row: 2 / span 2;
}
</style>
相应的代码如下： 
```html
<div class="container-4">
    <div class="item-4 item1-4">
        grid-column: 1/ 4;
    </div>
    <div class="item-4 item2-4">
        grid-row: 2/4;
    </div>
    <div class="item-4 item3-4">
        grid-column: 2 / span 2;<br>
        grid-row: 2 / span 2;
    </div>
    <div class="item-4"></div>
    <div class="item-4"></div>
    <div class="item-4"></div>
</div>
```

```css
.container-4 {
    display: grid;
    height: 400px;
    width: 400px;
    grid-gap:5px 20px;
    grid-template-columns: 1fr 1fr 1fr;
}

.item-4 {
    background: #3eaf7c;
    border: 1px solid #282c34;
}

.item1-4 {
    grid-column: 1/ 4;
}

.item2-4 {
    grid-row: 2/4;
}

.item3-4 {
    grid-column: 2 / span 2;
    grid-row: 2 / span 2;
}
```

下面来一个常规的网页布局： 

<div class="container-5">
    <div class="item-5 item1-5">
        grid-column: 1/ 4;
    </div>
    <div class="item-5 item2-5">
        grid-row: 2/4;
    </div>
    <div class="item-5 item3-5">
        grid-column: 2 / span 2;<br>
        grid-row: 2 / span 2;
    </div>
    <div class="item-5 item4-5">
         grid-row: 2 / 4;
        align-self:end;
        height:150px;
    </div>
    <div class="item-5 item5-5">
     grid-column: 1/4;
     </div>
</div>


<style scoped>
.container-5 {
    display: grid;
    height: 400px;
    width: 400px;
    grid-gap:5px 20px;
    grid-template-columns: 1fr 1fr 1fr;
}

.item-5 {
    background: #3eaf7c;
    border: 1px solid #282c34;
}

.item1-5 {
    grid-column: 1/ 4;
}

.item2-5 {
    grid-row: 2/4;
}

.item3-5 {
    grid-column: 2 / span 1;
    grid-row: 2 / span 2;
}

.item4-5 {
    grid-row: 2 / 4;
    align-self:end;
    height:150px;
}
.item5-5 {
    grid-column: 1/4;
}
</style>

其中align-self, justify-self： 
熟悉flex布局看到属性应该不会陌生： 
- Positional Alignment：关键词有start、end、center
- Baseline Alignment：关键词有baseline、first baseline、last baseline
- Distributed Alignment：关键词有space-between和space-around


下面对上面的例子继续升级： 其中内容部分对宽高进行设置，然后设置垂直居中，上下居中： 

<div class="container-6">
    <div class="item-6 item1-6">
        grid-column: 1/ 4;
    </div>
    <div class="item-6 item2-6">
        grid-row: 2/4;
    </div>
    <div class="item-6 item3-6">
        grid-column: 2 / span 1;<br>
    grid-row: 2 / span 2;<br>
    width:300px;<br>
    height:300px;<br>
    align-self: center;<br>
    justify-self:center;
    </div>
    <div class="item-6 item4-6">
         grid-row: 2 / 4;
        align-self:end;
        height:150px;
    </div>
    <div class="item-6 item5-6">
     grid-column: 1/4;
     </div>
</div>


<style scoped>
.container-6 {
    display: grid;
    height: 600px;
    width: 600px;
    grid-gap:5px;
    grid-template-columns: 1fr 3fr 1fr;
}

.item-6 {
    background: #3eaf7c;
    border: 1px solid #282c34;
}

.item1-6 {
    grid-column: 1/ 4;
}

.item2-6 {
    grid-row: 2/4;
}

.item3-6 {
    grid-column: 2 / span 1;
    grid-row: 2 / span 2;
    width:300px;
    height:300px;
    align-self: center;
    justify-self:center;
}

.item4-6 {
    grid-row: 2 / 4;
    align-self:end;
    height:150px;
}
.item5-6 {
    grid-column: 1/4;
}
</style>

更妙的是，在CSS Grid布局中可以直接定义网格区域，用来放置对应的网格项目。
利用 grid-template-areas来声明区块的别名，然后使用grid-area调用声明好的网格区域名称来放置对应的网格项目。
下面来一个5*4的网格： 
```html
<section class="grid">
  <div class="title">title</div>
  <div class="nav">nav</div>
  <div class="main">main</div>
  <div class="aside">aside</div>
  <div class="footer">footer</div>
</section>
```
```css
.grid {
  display: grid;
  width: 100%;
  max-width: 500px;
  grid-template-columns: 100px 100px 100px 100px 100px;
  grid-template-rows: 100px 100px 100px 100px;
  grid-template-areas:  'title title title title aside' 
                        'nav main main main aside' 
                        'nav main main main aside' 
                        'footer footer footer footer footer';
}
.title {
  grid-area: title;
}

.nav {
  grid-area: nav;
}

.main {
  grid-area: main;
}

.aside {
  grid-area: aside;
}

.footer {
  grid-area: footer;
}
```
简直不能在方便！！！


<template>
<section class="grid">
  <div class="title">title</div>
  <div class="nav">nav</div>
  <div class="main">main</div>
  <div class="aside">aside</div>
  <div class="footer">footer</div>
</section>
</template>


<style lang="scss" scoped>
body {
  padding-top: 40px;
  background: #f5f7f8;
}

$bgColors: #b03532 #33a8a5 #30997a #6a478f #da6f2b;
.grid {
  display: grid;
  width: 100%;
  max-width: 500px;
  grid-template-columns: 100px 100px 100px 100px 100px;
  grid-template-rows: 100px 100px 100px 100px;
  grid-template-areas:  'title title title title aside' 
                        'nav main main main aside' 
                        'nav main main main aside' 
                        'footer footer footer footer footer';
  div {
    color: white;
    font-size: 20px;
    padding: 20px;
    @for $i from 1 through length($bgColors) {
      &:nth-child(#{$i}) {
        background: nth($bgColors, $i);
      }
    }
  }
}

.title {
  grid-area: title;
}

.nav {
  grid-area: nav;
}

.main {
  grid-area: main;
}

.aside {
  grid-area: aside;
}

.footer {
  grid-area: footer;
}



</style>




基础的用法先说到这里了！  

## 来个响应式

下面来一个响应式的例子：
三列布局： 

<div class="box">
<div>1</div>
<div>2</div>
<div>3</div>
<div>4</div>
<div>5</div>
<div>6</div>
</div>

<style>
.box {
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-template-rows:repeat(2,180px);
    grid-gap: 5px;
}
.box > div{
    background: url(http://static.hecun.site/51217728_p0.jpg) no-repeat;
    background-size:contain;
    color:#fff;
    font-size: 30px;
}
</style>

首先对.box进行属性设置
```css
.box {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows:180px 180px;
    grid-gap: 5px;
}
```
利用repeat对代码进行简化： 
```css
.box {
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-template-rows:repeat(2,180px);
    grid-gap: 5px;
}
```
自适应auto-fit代替设定的固定数字： 
```css
.box {
    display: grid;
    grid-template-columns: repeat(auto-fit,320px);
    grid-template-rows:repeat(2,180px);
    grid-gap: 5px;
}
```

这个时候，基本可以做到根据屏幕进行换行了，但是还会出现当末尾不足一个的时候也会换行，导致后面出现空白显然这不是我们想要的结果。

最后利用: minmax(320px,1fr);
这样可以做到每一项子元素最小的时候为320px，其他情况会布满整个屏幕，不会流出空白

```css
.box {
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(320px,1fr));
    grid-template-rows:repeat(2,180px);
    grid-gap: 5px;
}
```


[查看预览](http://hecun0000.github.io/Jcss/grid/index.html)