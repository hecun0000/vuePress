---
title: CSS-----rem学习笔记  
date: 2017-12-31 16:40:50  
tags: 前端  
categories: 读书笔记  
copyright: true  
sidebar: auto
---

# rem 学习笔记
## 摘要  

在长度单位中, 我们已经了解了很多单位, 如px, em,百分比的方法, 在css3中新出的rem,相比于前面的三种有着了更多优势.  

## 关于em 

为了方便计算, 我们会将body的字体大小设置成为10px; 然后在用em进行单位的换算:  
```css
body {
    font-size: 62.5%;  //body的默认大小时16px;
}
```
在使用em做单位的时候, 估计手边需要准备上一个计算器, 来算一下单位转换的问题,  

- **元素自身没有设置字号大小时**，元素的width、height、line-height、margin、padding、border等值转换都按下面公式转换;  
**父元素的font-size / 需要转换的像素值 = em值**   

- **当元素自身设置了字号的大小时**, 元素的字体还是依照上面的公式进行计算. 
而其他属性的计算公式如下:  
**元素的font-size / 需要转换的像素值 = em值**   

这样的算来算去, 你完全可以去干会计了.  


## 什么是rem 

rem（font size of the root element）是指相对于根元素的字体大小的单位。简单的说它就是一个相对单位。看到rem大家一定会想起em单位，em（font size of the element）是指相对于父元素的字体大小的单位。它们之间其实很相似，只不过一个计算规则是依赖根元素一个是依赖父元素计算。  

rem是相对于根元素html，这样就意味着，我们只需要在根元素确定一个px字号，则可以来算出元素的宽高。  

所以在响应式布局中以及webApp中有着很出色的表现.  

## 怎么使用rem  
之前已经说过,rem是相对根元素来计算大小的. 在浏览器中根元素的大小时16px. 下表是我提供的一个参考的单位换算的表格:<table style="margin:auto"><thead><tr><th>Pixels</th><th>EMs</th><th>Percent</th><th>Points</th></tr></thead><tbody><tr class="odd"><td>6px</td><td>0.375em</td><td>37.5%</td><td>5pt</td></tr><tr class="even"><td>7px</td><td>0.438em</td><td>43.8%</td><td>5pt</td></tr><tr class="odd"><td>8px</td><td>0.500em</td><td>50.0%</td><td>6pt</td></tr><tr class="even"><td>9px</td><td>0.563em</td><td>56.3%</td><td>7pt</td></tr><tr class="odd"><td>10px</td><td>0.625em</td><td>62.5%</td><td>8pt</td></tr><tr class="even"><td>11px</td><td>0.688em</td><td>68.8%</td><td>8pt</td></tr><tr class="odd"><td>12px</td><td>0.750em</td><td>75.0%</td><td>9pt</td></tr><tr class="even"><td>13px</td><td>0.813em</td><td>81.3%</td><td>10pt</td></tr><tr class="odd"><td>14px</td><td>0.875em</td><td>87.5%</td><td>11pt</td></tr><tr class="even"><td>15px</td><td>0.938em</td><td>93.8%</td><td>11pt</td></tr><tr class="odd selected base" style="color:red" ><td>16px</td><td>1.000em</td><td>100.0%</td><td>12pt</td></tr><tr class="even"><td>17px</td><td>1.063em</td><td>106.3%</td><td>13pt</td></tr><tr class="odd"><td>18px</td><td>1.125em</td><td>112.5%</td><td>14pt</td></tr><tr class="even"><td>19px</td><td>1.188em</td><td>118.8%</td><td>14pt</td></tr><tr class="odd"><td>20px</td><td>1.250em</td><td>125.0%</td><td>15pt</td></tr><tr class="even"><td>21px</td><td>1.313em</td><td>131.3%</td><td>16pt</td></tr><tr class="odd"><td>22px</td><td>1.375em</td><td>137.5%</td><td>17pt</td></tr><tr class="even"><td>23px</td><td>1.438em</td><td>143.8%</td><td>17pt</td></tr><tr class="odd"><td>24px</td><td>1.500em</td><td>150.0%</td><td>18pt</td></tr></tbody>
</table>    

在来个小例子:    
```css
html {
    font-size: 62.5%; //将根元素转化成为10px, 
} 
body {
    font-size: 1.4rem; //将body的字体大小设置为14px;
}
h1 {
    font-size: 2.4rem; //将h1的字体大小设置为24px;
}
```
这样就解决了px和emd的不足之处.  

## 浏览器兼容性  

好的技术想要运用, 最该考虑到的问题就是浏览器的兼容性.  Mozilla Firefox 3.6+、Apple Safari 5+、Google Chrome、IE9+和Opera11+ .IE6~8我只想呵呵一笑. 
## rem与WebApp  

在如今移动端我们面临着这种屏幕的大小和各种分辨率, 在我们写css的时候简直是一种噩梦, 不同屏幕上想要相同的显示效果,变得很难.  
在我们切图的时候,经常碰到的单位是px, 在WebApp中常用的布局,有流式布局, 限死宽度,还有一些响应式的布局.  
- 流式布局:  
其在布局的时候,利用百分比控制宽度, 高度使用px来固定, 这样带来的问题就是在一些手机屏幕比较大时, 元素会拉的比较长, 这样感觉就会比较奇怪.  
- 固定宽度的做法:  
就是在早期将页面的宽度限制为320px的做法, 当手机的屏幕宽与320px的时候, 两边会出现空白. 当然也消除了流式布局的弊端, 前端写起页面也简单. 当手机屏幕过大的时候, 屏幕内的按钮就会特别小, 不便于操作.   
- 响应式的做法  
一般在中小型的企业门户, 个人站点, 个人博客等可以在用响应式的布局方式, 一步到位, 而且减少了, 前端的工作成本. 相反在稍微大型的网站中, 使用响应式的布局, 则工作量大, 不利于后期的维护.  
- 设置viewport进行缩放  
在天猫的app中就采用了此方法. 以宽度320为基准, 进行缩放最大缩放到320*1.3 = 416, 416基本可以兼容到iPhoneo 6plus的宽度了. 虽说简单粗暴, 同时有人说到在缩放的时候会出现页面变糊的情况.   
通常会在HTML页面的头部添加如下代码:   

```html
<meta name="viewport" content="width=320,maximum-scale=1.3,user-scalable=no">
```

### rem的做法  
铺垫的有点长了.开始吧!  
上面已经说过, rem只取决于页面的根元素的font-size的大小. 只要我们在不同尺寸的屏幕设置不同的根元素font-size的大小值,就可以实现!  
先看一组表格:<table style="margin:auto"><tr><td>宽度</td><td>320</td><td>384</td><td>480</td><td>640</td></tr><tr><td>屏幕对比比例</td><td>0.5</td><td>0.6</td><td>0.75</td><td>1</td></tr><tr><td>HTML font-size</td><td>10px</td><td>12px</td><td>15px</td><td>20px</td></tr><tr><td>元素的宽度(px)</td><td>100px</td><td>120px</td><td>150px</td><td>200px</td></tr><tr><td>元素的宽度(rem)</td><td>10rem</td><td>10rem</td><td>10rem</td><td>10rem</td></tr></table>
在平时的开发过程中, 我们可以针对设计的几种屏幕来进行计算, 然后配合媒体查询(media query)来适配不同的屏幕.  

```css
html {
    font-size : 20px;
}
@media only screen and (min-width: 401px){
    html {
        font-size: 25px !important;
    }
}
@media only screen and (min-width: 428px){
    html {
        font-size: 26.75px !important;
    }
}
@media only screen and (min-width: 481px){
    html {
        font-size: 30px !important; 
    }
}
@media only screen and (min-width: 569px){
    html {
        font-size: 35px !important; 
    }
}
@media only screen and (min-width: 641px){
    html {
        font-size: 40px !important; 
    }
}
```
上面的也不是全适配, 也可以通过JavaScript进行动态计算进行全适配,具体可以参考  
[Rem精简版实现自适应-优化flexible.js](http://caibaojian.com/simple-flexible.html)  
[flexible.js的项目地址](https://github.com/kujian/simple-flexible/)