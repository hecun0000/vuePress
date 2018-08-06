

# forEach、map、filter、some、every、find五个数组方法 

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