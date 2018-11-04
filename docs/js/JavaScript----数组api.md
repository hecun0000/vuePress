

# javascript 常用的数组API

- forEach() 方法对每一个元素执行一次提供的函数
- map() 方法创建一个新数组, 其结果是该数组都执行一次函数, 原数组保持不变
- filter() 方法使执行测试数组的每一个函数, 并放回通过元素的新数组
- some() 方法测试该数组有元素通过了指定函数的测试, 如果有返回true, 否则, false
- every() 方法测试该数组全部元素通过了指定函数的测试, 如果有返回true, 否则, false
- find() 找出符合条件的第一个值,并返回

## forEach()遍历数组: 

```js
var arr= ["a","b","c"];
arr.forEach(function(el,index){
	console.log(el,index)
})
```
结果:  

```
a 0
b 1
c 2
```
## map()返回新数组, 为当前元素加字符串m

```js
arr.map(function(el,index){
	return el+="m"
})
```
则新数组为: ["am", "bm", "cm"];
原数组不变: ["a", "b", "c"];

## filter()对于元素进行过滤:  
```js
var arr = [12, 5, 8, 130, 44];
arr.filter(function(value){
    return value>10
});
```
也等价于: 
```js
arr.filter(item=>item>10)
```
## some()判断元素是否有符合条件,返回布尔值  

```js
var arr = [12, 5, 8, 130, 44];
arr.some(function(value){                   // true
    return value>10
});
```

## every()判断元素是不是全部符合条件, 返回布尔值

```js
var arr = [12, 5, 8, 130, 44];
arr.every(function(value){                  // false
    return value>10
});
```

## find()找出符合条件的第一个值,并返回

```js
var ages = [3,12,4165,131];
ages.find(age=>age>=18)                     //4165
```
### reduce():遍历数组中的每个值,汇总出一个最终的结果
语法:

```js
var result = arr.reduce(function(prev,val,i,arr){
  //prev 
  return prve+val;
},default)
```
其中,匿名函数最多可放四个参数,后面两个参数可以省略;default可作为默认值传入参数运算,也可省略;

```js
var arr = [1,2,3,4,5];
arr.reduce(function(a,b){return a+b;},10); //输出25;
```

#### 节点迭代器:Nodelterator
鄙视题:定义函数,遍历指定父节点下所有子元素
HTML文件如下:
```html
<html>
	<head>
		<title>遍历节点树</title>
		<meta charset="utf-8"/>
		
	</head>
	<body>
		<span>Hello World !</span>
		<ul id="nav">
			<li>电影</li>
			<li>综艺
				<ul>
					<li>跑男</li>
					<li>爸爸</li>
					<li>极限</li>
				</ul>
			</li>
			<li>剧集</li>
		</ul>	
    <script src="js/2.js"></script>
	</body>
</html>
```
方法如下:
- 方法一:递归方式

```js
//Step1: 定义函数，仅遍历指定父元素下的直接子元素
function getChildren1(parent){
  console.log(parent.nodeName);
  var children=parent.children;
  for(var i=0,len=children.length;i<len;i++){
    //Step2: 为每个子元素调用和父元素完全相同的操作
    arguments.callee(children[i]);
  }
}
```

- 方法二:循环方式:

    创建元素节点迭代器
  使用doucment.createNodeIterator()方法,创建它的新实例.这个方法接受四个参数;
  - root: 想要作为搜素起点的树中节点
  - whatToShow: 表示要访问哪些节点的数字代码
  - filter: 该位置表示一个NodeFilter对象,或者一个表示应该接受还是拒绝某种特定节点的函数
  - entityReferenceExpansion: 布尔值, 表示是否要扩展实体引用.这个参数在HTML页面中没有用,因为其中的实体引用不能扩展

  whatToShow常用取值,如下所示:

  - NodeFilter.SHOW_ALL：所有类型节点；
  - NodeFilter.SHOW_ELEMENT：元素；
  - NodeFilter.SHOW_ATTRIBUTE：特性；
  - NodeFilter.SHOW_TEXT：文本；
  - NodeFilter.SHOW_COMMENT;
  - NodeFilter.SHOW_DOCUMENT;
  - NodeFilter.SHOW_DOCUMENT_TYPE;
      

``` js
function getChildren2(parent){
  //创建节点迭代器对象:
  var iterator=document.createNodeIterator(
    parent,   - NodeFilter.SHOW_ELEMENT, null, false 
    //parent:表示作为搜素起点的树中的节点;
    //  - NodeFilter.SHOW_ELEMENT:表示显示元素节点
    //null:该位置表示一个NodeFilter对象,
    //或者一个表示应该接受还是拒绝某种特定节点的函数,一般写为null;
    //false 该位置表示是否扩展实体引用;
  );
  //反复调用iterator的nextNode方法跳到下一个
  do{
    var node=iterator.nextNode();
    if(node!=null)
      console.log(node.nodeName);
    else break;
  }while(true);
}
getChildren2(document.body);

//测速前，暂时删除方法中的console.log
console.time("getChildren1");//开始
getChildren1(document.body);
console.timeEnd("getChildren1");//停止
console.time("getChildren2");
getChildren2(document.body);
console.timeEnd("getChildren2");
```