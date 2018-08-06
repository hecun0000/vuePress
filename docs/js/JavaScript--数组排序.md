
#  数组相关面试题

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

