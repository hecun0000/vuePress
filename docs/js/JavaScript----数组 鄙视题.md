# 数组 鄙视题  

已知如下数组：
```js
var arr = [[1,2,2],[3, 4, 5, 5],[6, 7, 8, 9,[11,12,[12,13,[14]]]],10];
```
编写一个程序将数组扁平化去并除其中重复部分数据，最终得到一个升序且不重复的数组
思路:先转换成字符串,然后去掉重复部分,排序;
arr.toString().split(",");   //强制转换为字符串,并拼成数组
//去重
```js
 var str=[];
for(var i=0;i<arr.length;i++){
    if(str.indexOf(arr[i])==-1){
         str.push(arr[i]);js
    }
}  
//排序
str.sort(function(a,b){return a-b;});
```
完整代码:
```js
var arr = [[1,2,2],[3, 4, 5, 5],[6, 7, 8, 9,[11,12,[12,13,[14]]]],10];
arr=arr.toString().split(",");
var str=[];
for(var i=0;i<arr.length;i++){
    if(str.indexOf(arr[i])==-1){
        str.push(arr[i]);
    }
}  
str.sort(function(a,b){return a-b;})
console.log(str);
```