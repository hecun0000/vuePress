
# 数字判断和转换 
## 数字验证  
Number.isFinite(xx)  
一般对数字进行验证, 只要是数字, 不论是浮点型还是整型都会返回true, 其他的时候返回false.   

```js
let a = 12;
console.log(Number.isFinite(a));//true
console.log(Number.isFinite('jspang'));//false
console.log(Number.isFinite(NaN));//false
console.log(Number.isFinite(undefined));//false
console.log(Number.isFinite('1'));//false
```
## NaN验证  
NaN是特殊的非数字, 可以使用Number.isNaN()来验证. 
```js
console.log(Number.isNaN(NaN)); //true
```
## 判断是否为整数
Number.isInteger(xx);

```js
let a = 123.3333;
console.log(Number.isInteger(a)); //false
```

## 整数和浮点数的转换
Number.parseInt();
Number.parseFloat();

## 整数取值范围操作





## 判断开头是否存在：

```js
blog.startsWith('hecun');
```

## 判断结尾是否存在：

```js
blog.endsWith('hecun');
```

## 复制字符串  

```js
document.write('hecun|'.repeat(3));
```

## json数组的格式转换
### Array.from()方法：
必须写length, 若没有length属性则转换为空数组
```js
let json = {
   "0": "hecun", 
   "1": "hecun1", 
   "2": "hecun2",
   length:3
}
var arr = Array.from(json);
console.log(arr);
```
### Array.of()方法：
主要功能负责将一堆文本或者变量转换为数组。  
主要用来弥补一些array()方法的不足，Array.of()可以用来代替Array()和new Array();

```js
Array() // []  
Array(3) // [, , ,]  
Array(3, 11, 8) // [3, 11, 8]  
  
Array.of() // []  
Array.of(3) // [3]  
Array.of(3, 11, 8) // [3,11,8]  
  
Array.of(3).length // 1   
Array.of(undefined) // [undefined]  
Array.of(1) // [1]  
Array.of(1, 2) // [1, 2]  
```

```js
let arr = Array.of(3,4,5,6);
console.log(arr);
```
## 将json转化为对象
```js
JSON.parse(text[, reviver])
```

## 对象或者数组 转换为一个 JSON字符串

```js
JSON.stringify(value[, replacer [, space]])
```

所需参数： 
- value
将要序列化成 一个JSON 字符串的值。
- replacer 可选
如果该参数是一个函数，则在序列化过程中，被序列化的值的每个属性都会经过该函数的转换和处理；如果该参数是一个数组，则只有包含在这个数组中的属性名才会被序列化到最终的 JSON 字符串中；如果该参数为null或者未提供，则对象所有的属性都会被序列化；关于该参数更详细的解释和示例，请参考使用原生的 JSON 对象一文。
- space 可选
指定缩进用的空白字符串，用于美化输出（pretty-print）；如果参数是个数字，它代表有多少的空格；上限为10。该值若小于1，则意味着没有空格；如果该参数为字符串(字符串的前十个字母)，该字符串将被作为空格；如果该参数没有提供（或者为null）将没有空格。