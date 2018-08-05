---
title: [JavaScript 小练习]
tags: JavaScript
categories: 前端
copyright: true
---
最近在http://www.codewars.com上练习js的题, 受益颇多;

1. 求数组中的最小值;  

```js
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args)
  }
}
```

```js
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return args.sort((a,b)=>a-b)[0];
  }
}
```

2. 从一段英文中,返回对应字符串在字母表的位置;  
  e.g.

```js
alphabet_position("The sunset sets at twelve o' clock.");

return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11";
```

我的答案:  

```js
function alphabetPosition(text) {
  var result = [];
  for(var i=0; i<text.length; i++){
	var test =text.charCodeAt(i);
	var we = test>=97? test-96:test-64;
	if(we>=1 && we<=26){
		result.push(we);
	}
  }
  return result.join(" ");
}

var a = alphabetPosition("The sunset sets at twelve o' clock.");

console.log(a)
```
缺点: 使用了数组的api,有了一些不必要的操作;  
best: 

```js
function alphabetPosition(text) {
  var result = "";
  for (var i = 0; i < text.length; i++){
    var code = text.toUpperCase().charCodeAt(i)
    if (code > 64 && code < 91) result += (code - 64) + " ";
  }

  return result.slice(0, result.length-1);
}
```
3. 去除字符串中多余的字符;

e.g.: 
> songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB")   
  // =>  WE ARE THE CHAMPIONS MY FRIEND
  
我的答案:  

```js
function songDecoder(song){
  return song.replace(/(WUB)+/g," ").trim();
}
```
best: 

```js 
function songDecoder(song){
  return song.split('WUB').filter(Boolean).join(' ');
}
```

4. 字符串中首字母大写:  

自己的方法没做出来, 多多少少有点bug;

大神们的办法:  
+ 正则:  

```js
String.prototype.toJadenCase = function () {
  return this.replace(/(^|\s)[a-z]/g, function(x){ return x.toUpperCase(); });
};
```
+ 纯js:

```js
String.prototype.toJadenCase = function () { 
  return this.split(" ").map(function(word){
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(" ");
}
```

css方式:  

text-transform 值：
+ Capitalize 英文拼音的首字母大写
+ Uppercase 英文拼音字母全大写
+ Lowercase 英文拼音字母全小写


5. 
```js
accum("abcd");    // "A-Bb-Ccc-Dddd"
accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt");    // "C-Ww-Aaa-Tttt"
```
我的答案: 

```js
function accum(s) {
	var str = "";
	for (var i = 0; i < s.length; i++) {
		var str1 = s[i];
		for (var j = 0; j <=i; j++) {
			if (j==0) {
				str+=str1.toUpperCase();
			}else{
				str+=str1.toLowerCase();
			}
		}
		str+="-";
	}
	return str.slice(0,-1);
}
```
大佬就是大佬: 

```js
function accum(s) {
  return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}
```

6. 选取数组中值得长度为4的值;

大佬的方法:  

```js
function friend(friends){
  return friends.filter(n => n.length === 4)
}
```

我的方法:  

```js
function friend(friends){
  var arr = [];
  for(var a = 0; a<friends.length; a++){
    if(friends[a].length==4){
      arr.push(friends[a]);
    }
  }
  return arr;
}
```