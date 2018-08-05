
# css 上下左右垂直居中


首先,在css中有很多关于居中的属性设置,也有很多方法,以下进行简要总结:

- 水平居中
	- 对于行内元素(inline)：text-align: center;
	- 对于块级元素(block)：设置宽度且 marigin-left 和 margin-right 是设成 auto
	- 对于多个块级元素：对父元素设置 text-align: center;，对子元素设置 display: inline-block;；或者使用 flex 布局
- 垂直居中P
	- 对于行内元素(inline)
		- 单行：设置上下 pandding 相等；或者设置 line-height 和 height 相等
		- 多行：设置上下 pandding 相等；或者设置 display: table-cell; 和 vertical-align: middle;；或者使用 flex 布局；或者使用伪元素
	- 对于块级元素(block)：下面前两种方案，父元素需使用相对布局
		- 已知高度：子元素使用绝对布局 top: 50%;，再用负的 margin-top 把子元素往上拉一半的高度
		- 未知高度：子元素使用绝对布局 position: absolute; top: 50%; transform: translateY(-50%);
		- 使用 Flexbox：选择方向，justify-content: center;
- 水平垂直居中
	- 定高定宽：先用绝对布局 top: 50%; left: 50%;，再用和宽高的一半相等的负 margin 把子元素回拉
	- 高度和宽度未知：先用绝对布局 top: 50%; left: 50%;，再设置 transform: translate(-50%, -50%);
	- 使用 Flexbox：justify-content: center; align-items: center;

接下来详细介绍水平垂直居中:


-  第一种方法:

利用相对定位或绝对定位:将上右下左的位置设置为0;margin设置为auto;
**注意**: 该元素需要设置宽高
	

```css
div{
	position: absolute;
	width :600px;
	height :200px;
	top:0;
	bottom :0;
	left : 0;
	right : 0;
	margin: auto;
	text-align: center;
	line-height: 200px;
	font: bold 100px "微软雅黑";
	color:#6cf;
}```
	```
	HTML中:<div>hello world</div>	
	```
效果图如下:<br>
<img src="http://a2.qpic.cn/psb?/V10sL07m4fJQVr/zb0MpqlJ.*m.rgUL7JndSbl8v7DUmavvZnOd3AMUHCI!/b/dHUAAAAAAAAA&ek=1&kp=1&pt=0&bo=cgSAAnIEgAIDACU!&vuin=1639586328&tm=1506607200&sce=60-1-1&rf=0-0" alt="">
同理,也可以这样写:

```css
div{
	position:absolute;
	top:0;
	bottom:0;
	margin:auto 0;  //垂直方向的auto 发挥的作用
	width:300px;
	height:300px;
}
```


- 第二种方法:

已知宽高的容器的水平垂直方向居中：

```css
div{
	width: 300px;
	height:300px;
	position: absolute;
	top:50%;
	left:50%;
	margin-top: -150px; //自身高度的一半
	margin-left:-150px; 
}
```
在锤子科技网站的登录页就采用了该方法:<br>
<img src="http://a1.qpic.cn/psb?/V10sL07m3Ta2CB/.08xxwGKMpGkpVYN4L.USfHvkbGNz9jMOHyZbXneiUQ!/b/dPkAAAAAAAAA&bo=RQUgA0UFIAMDCSw!&rf=viewer_4" alt="">
锤子科技网页中相应的CSS代码如下:<br>
<img src="http://a3.qpic.cn/psb?/V10sL07m3Ta2CB/QVxkfNNlyH5AQOAOAr3YT.ybaLOh.U7Z6IaPtrkcP6Y!/b/dEQAAAAAAAAA&bo=QAEgAUABIAEDCSw!&rf=viewer_4" alt=""><br>
未知宽高的容器的水平垂直方向居中：

```css
div{
	width:300px;
	height:300px;
	position:absolute;
	top:50%;
	left:50%;
	transform:translate(-50%,-50%);//将元素向上向左偏移自身的一半
}
```

-  第三种方法:<br>

采用表格布局的方法:

```css
.container{
  display: table;
}
.container .div{
  display: table-cell;
  vertical-align:middle;
}
```