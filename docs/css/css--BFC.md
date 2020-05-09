---
title: CSS--常见面试题总结
tags: CSS
categories: 前端
copyright: true
sidebar: auto
---

都会为他们的内容创建新的BFC（块级格式上下文）;  
    **会触发BFC的条件有**： 
    - float的值不为none。
    - overflow的值不为visible。
    - display的值为table-cell, table-caption, inline-block 中的任何一个.
    - position的值不为relative 和static.
    **折叠的结果：**
    - 两个相邻的外边距都是正数时，折叠结果是它们两者之间较大的值。
    - 两个相邻的外边距都是负数时，折叠结果是两者绝对值的较大值。
    - 两个外边距一正一负时，折叠结果是两者的相加的和。
6. 常见兼容性问题？
    - png24位的图片在iE6浏览器上出现背景，解决方案是做成PNG8.也可以引用一段脚本处理.
    - 浏览器默认的margin和padding不同。解决方案是加一个全局的*{margin:0;padding:0;}来统一。
    - IE6双边距bug:块属性标签float后，又有横行的margin情况下，在ie6显示margin比设置的大。
    - 浮动ie产生的双倍距离（IE6双边距问题：在IE6下，如果对元素设置了浮动，同时又设置了margin-left或margin-right，margin值会加倍。）
    ```css 
    #box{ 
        float:left; 
        width:10px; 
        margin:0 0 0 100px;
    }
```
        这种情况之下IE会产生20px的距离，解决方案是在float的标签样式控制中加入
        _display:inline;  
        
        将其转化为行内属性。(_这个符号只有ie6会识别)
    + 首先，巧妙的使用“\9”这一标记，将IE游览器从所有情况中分离出来。
    + 接着，再次使用“+”将IE8和IE7、IE6分离开来，这样IE8已经独立识别。
    ```css
.bb{
        background-color:#f1ee18;/*所有识别*/
        .background-color:#00deff\9; /*IE6、7、8识别*/
        +background-color:#a200ff;/*IE6、7识别*/
        _background-color:#1e0bd1;/*IE6识别*/
    }
    ```
        **上下margin重合问题**    
        ie和ff都存在，相邻的两个div的margin-left和margin-right不会重合，但是margin-top和margin-bottom却会发生重合。
        解决方法，养成良好的代码编写习惯，同时采用margin-top或者同时采用margin-bottom。
7. 解释下浮动和它的工作原理？清除浮动的技巧
    浮动元素脱离文档流，不占据空间。浮动元素碰到包含它的边框或者浮动元素的边框停留。
    1. 使用空标签清除浮动。
   这种方法是在所有浮动标签后面添加一个空标签 定义css clear:both. 弊端就是增加了无意义标签。
    2. 使用overflow。
   给包含浮动元素的父标签添加css属性 overflow:auto; zoom:1; zoom:1用于兼容IE6。
    3. 使用after伪对象清除浮动。
   该方法只适用于非IE浏览器。具体写法可参照以下示例。使用中需注意以下几点。一、该方法中必须为需要清除浮动元素的伪对象中设置 height:0.
