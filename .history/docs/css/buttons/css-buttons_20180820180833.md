# css 按钮

## 样式1： 
先上效果：

<css-button-buttonBoxShadow/>

[预览地址](http://hecun0000.github.io/Jcss/button/button-before-after.html)
### 利用BoxShadow实现

::: tip 思路 
利用css中box-shadow属性实现后面的方块，在hover时，更改相应的颜色
:::

```css
nav li {
  width: 8rem;
  height: 3rem;
  font-size: 14px;
  text-align: center;
  line-height: 3rem;
  font-family: sans-serif;
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;
  transition: 0.3s;
  margin: 1rem;
  background: #fff;
  box-shadow: 0.5rem 0.5rem goldenrod;
  transition: all 0.3s linear;
  font-weight: 600;
}

nav li:hover {
  color: #fff;
  background: goldenrod;
  transform: translate(0.5rem, 0.5rem);
  box-shadow: -0.5rem -0.5rem #fff;
}
```
### 利用伪类实现

::: tip 思路 
利用伪类元素分别实现两个方块，然后hover的时候去更改相应的样式修改
:::

```css
 nav li {
    width: 20rem;
    height: 7rem;
    font-size: 20px;
    text-align: center;
    line-height: 7rem;
    font-family: sans-serif;
    text-transform: uppercase;
    letter-spacing: 1px;
    position: relative;
    transition: 0.3s;
    margin: 3rem;
}

nav li::before,
nav li::after {
    content: '';
    position: absolute;
    width: inherit;
    height: inherit;
    top: 0;
    left: 0;
    transition: 0.3s;
}

nav li::before {
    background-color: white;
    z-index: -1;
    box-shadow: 0.2rem 0.2rem 0.5rem rgba(0, 0, 0, 0.2);
}

nav li::after {
    background-color: goldenrod;
    transform: translate(1.5rem, 1.5rem);
    z-index: -2;
}

nav li:hover {
    transform: translate(1.5rem, 1.5rem);
    color: white;
}

nav li:hover::before {
    background-color: goldenrod;
}

nav li:hover::after {
    background-color: white;
    transform: translate(-1.5rem, -1.5rem);
}
```
## 样式2:JD立即购买
<css-button-buttonJDBuyNow/>

[预览地址](http://hecun0000.github.io/Jcss/button/JD-buy-now-button.html)

::: tip 思路 
利用伪类元素实现类似光斑效果，并添加相应的动画
:::

```css
.jd .buy-now::before {
  content: " ";
  background-image: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0.2),
    rgba(255, 255, 255, 0)
  );
  width: 85px;
  height: 35px;
  position: absolute;
  left: -30px;
  animation: user_MyHjf8SpWr 2s 0s infinite normal linear;
}

.jd .buy-now:after {
  content: " >";
  font-family: simsun;
  font-weight: bold;
  font-size: 12px;
}

@keyframes user_MyHjf8SpWr {
  0% {
    transform: translateX(0) skewX(-30deg);
  }
  100% {
    transform: translateX(650px) skewX(-30deg);
  }
}
```
## 样式3:hover渐变按钮

<css-button-buttonHover/>

该效果最主要就是用了css中的径向渐变，并通过css变量更为简单的完成；

css-径向渐变：  

radial-gradient（设置渐变的中心，渐变形状 渐变大小，起始颜色值，中间颜色值 中间颜色位置，终点颜色）

- 渐变中心，可选参数，如30px 20px指距离左侧30px距离上侧20px，可以是像素，可以是百分比，也可以是关键字，默认为中心位置。

- 渐变形状，可选参数，可以取值circle或eclipse【默认】

- 渐变大小，可循环参数，可以取值

    1. closest-side：指定径向渐变的半径长度为从圆心到离圆心最近的边

    2. closest-corner：指定径向渐变的半径长度为从圆心到离圆心最近的角

    3. farthest-side：指定径向渐变的半径长度为从圆心到离圆心最远的边

    4. farthest-corner：指定径向渐变的半径长度为从圆心到离圆心最远的角

    5. contain：包含，指定径向渐变的半径长度为从圆心到离圆心最近的点。类同于closest-side

    6. cover：覆盖，指定径向渐变的半径长度为从圆心到离圆心最远的点。类同于farthest-corner
::: tip
 circle farthest-corner圆形渐变  
 ellipse farthest-corner椭圆渐变
:::

```css
.button::before {
	--size: 0;

	content: '';
	position: absolute;
	left: var(--x);
	top: var(--y);
	width: var(--size);
	height: var(--size);
	background: radial-gradient(circle closest-side, #4405f7, transparent);
	transform: translate(-50%, -50%);
	transition: width .2s ease, height .2s ease;
}

.button:hover::before {
	--size: 400px;
}
```

```js
document.querySelector('.button').onmousemove = (e) => {
    const x = e.pageX - e.target.offsetLeft
    const y = e.pageY - e.target.offsetTop
    e.target.style.setProperty('--x', `${ x }px`)
    e.target.style.setProperty('--y', `${ y }px`)
}
```










