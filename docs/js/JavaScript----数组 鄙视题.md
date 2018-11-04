## 数组 鄙视题  

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

## 运算符鄙视题

在JS中 null>0为false,nul==0为false,为什么null>=0为true?

解析: 至于深层次理论我探讨不了;
但在&lt;&lt;JavaScript高级程序设计&gt;&gt;中这样写道:
- 50p 关系操作符中, 如果一个操作数是数值，则将另一个操作数转换为一个数值，然后执行数值比较。即在null>0的比较中,会将null默认进行转换,Number(null)为0,然后进行比较,所得结果为false;在null>=0则为true;
- 52p  相等操作符中, 要比较相等性之前，不能将 null 和 undefined 转换成其他任何值。即在null==0的比较中,结果为false;


## 数组记忆

判断一个数是不是质数?
原理: 利用对象的快速查找,避免利用循环对数组的遍历,从而提高程序的执行效率.

```js
var isPrime=(function(){
  var hash={};
  return function(n){
    if(!isNaN(n)&&n>1){  //排除不是正整数的情况
      if(n<=3) return true; //  排除2和3的情况
      else if(n%2==0) return false; //排除偶数的情况
      else if(hash[n]!==undefined){
        console.log("不用执行for循环...");    
        //若hash对象中已经有了则直接返回,避免再次判断
        return hash[n];
      }else{
        console.log("执行for循环...");
        for(var i=3;i<=Math.sqrt(n);i+=2){
          if(n%i==0){
            hash[n]=false;
            return false;
          }
        }
        hash[n]=true;
        return true;
      }
    }else
      throw new Error(
        "必须输入>1的数字");
  }
})();
```

## 数组排序


- 冒泡排序



- 插入排序

原理: i从1开始向右遍历每一个数 将i位置的元素临时保存在变量t中
```js
var arr=[4,2,5,3,1];
function insertSort(arr){
  for(var i=1;i<arr.length;i++){
    var t=arr[i];
    var p=i-1;
    while(p>=0&&arr[p]>=t){
      arr[p+1]=arr[p];
      p--;
    }
    arr[p+1]=t;
  }
}
insertSort(arr);
console.log(arr);//1,2,3,4,5;
```





- 快速排序

```js
var arr=[6,3,1,5,4,7,2];
function quickSort(arr){
  if(arr.length<=1) return arr;
  else{
    var c=parseInt((arr.length-1)/2);
    var cv=arr.splice(c,1)[0];
    var left=[],right=[];
    for(var i=0;i<arr.length;i++){
      if(arr[i]<=cv) left.push(arr[i]);
      else right.push(arr[i]);
    }
    return quickSort(left).concat(
      cv,quickSort(right)
    );
  }
}
arr=quickSort(arr);
console.log(arr);
```

