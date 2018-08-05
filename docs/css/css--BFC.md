---
title: CSS--常见面试题总结
tags: CSS
categories: 前端
copyright: true
---

### 对前端界面工程师这个职位是怎么样理解的？它的前景会怎么样？ 
前端是最贴近用户的程序员，比后端、数据库、产品经理、运营、安全都近。

- 实现界面交互
- 提升用户体验
- 有了Node.js，前端可以实现服务端的一些事情
- 参与项目，快速高质量完成实现效果图，精确到1px；
- 与团队成员，UI设计，产品经理的沟通；
- 做好的页面结构，页面重构和用户体验；
- 处理hack，兼容、写出优美的代码格式；
- 针对服务器的优化、拥抱最新前端技术。
 
# css 常见基础面试题  



1. css引入的方式有哪些?link和@import的区别?  
    引入方式3种：行内添加定义style属性值，页面头部内内嵌调用和外链调用，
    区别：
    + link是xhtml标签，除了加载css外，还可以定义RSS等其他事务，@import只能加载CSS
    + link引用CSS时候，页面载入的时候同时加载，@import需要页面网页完全载入后加载
    + link是XHTML标签，没有兼容问题，@import是在CSS2.1提出的，低版本的浏览器不支持。
    + link支持使用javascript控制DOM去改变样式，但是@import不支持。 
2. img标签上的title和alt属性区别是什么?
    - alt是当图片不能正常显示的时候，用文字代替
    - title该属性提供信息
3. translate()方法能移动一个元素在z轴上的位置？
    不能。translate()方法只能改变x轴，y轴上的位移
4. display:none 和visibilty:hidden的区别：
    display:none和visibility:hidden都是把网页上某个元素隐藏起来的功能，
    但两者有所区别，                                        
    - visibility:hidden属性会使对象不可见，但该对象在网页所占的空间没有改变（看不见但摸得到），等于留出了一块空白区域，
    - 而display:none`属性会使这个对象彻底消失（看不见也摸不到）
5. 请描述 BFC(Block Formatting Context) 及其如何工作。
    浮动元素和绝对定位元素，非块级盒子的块级容器（例如 inline-blocks, table-cells, 和 table-captions），以及overflow值不为“visiable”的块级盒子，
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
