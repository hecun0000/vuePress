
# JavaScript-鄙视题之indexOf() forEach() map方法重写
## 请重写indexOf()方法 #
```js
if(typeof Array.prototype.indexOf !="function")
      Array.prototype.indexOf=function(elem,fromi){
        document.write("调用自定义indexOf...<br>");
        fromi=fromi||0;//默认值
        //this->将来调用indexOf的.前的子对象
        var arr=this;
        for(var i=fromi;i<arr.length;i++){
          if(arr[i]===elem) return i;
        }
        return -1;
      }
```
## 请重写forEach()方法 #
```js
if (typeof Array.prototype.forEach != 'function') {
        Array.prototype.forEach = function(callback){
            for (var i = 0; i < this.length; i++){
                if(arr[i]=undefined) {
                    callback(this[i], i, this);
                }
            }
        }
    }
```
## 请重写map方法 #
```js
if (typeof Array.prototype.map != 'function') {
        Array.prototype.map = function (callback) {
            var arr=this;
            var result=[];
            for(var i=0;i<arr.length;i++){
                if(arr[i]=undefined){
                    result[i]=callback(arr[i],i,arr);
                }
            }
        }
    }
```
## JavaScript bind()方法的重写


>bind()方法创建一个新的函数, 当被调用时，将其this关键字设置为提供的值，
>在调用新函数时，在任何提供之前提供一个给定的参数序列;

据了解bind()方法只在ie10以上的浏览器中可以支持,为此,在低版本浏览器下运行需重写bind()方法;

```js
var result = fun.bind(thisArg[, arg1[, arg2[, ...]]]);
 result(newArg1, newArg2...);
```

首先,先初步的实现,先考虑传入一个参数的情况
```js
if(!("bind" in Function.prototype)){
	Function.prototype.bind=function(obj){
		var fun = this;   //this用来绑定将来调用bind的原函数对象
		return function(){
			fun.call(obj);
		}
		//利用闭包将this牢牢地绑定在obj上
	}
	function calc(base,bonus1,bonus2){
	  console.log(this.ename+"的总工资是"+(
	    base+bonus1+bonus2
	  ));
	}
}
var lilei={ename:"Li Lei"};
var lilei_calc = calc.bind(lilei,10000,3000,2000);
lilei_calc();
//Li Lei的总工资是NaN
```
此方法虽说没能正确输出结果,起码初步实现this的绑定;基本功能实现下来进行进一步改造;
通常,bind()传入的参数,往往不止一个;所以利用agruments进行接收;
```js
 if(!("bind" in Function.prototype))
	Function.prototype.bind=function(obj){
		var fun = this;
		var agrs=Array.prototype.slice.call(arguments,1);
				//调用Array原型对象中的slice()将arguments类数组中除了第一项的值取出来,并存为数组
		return function(){
			var sals=//arguments.slice()
			  Array.prototype.slice.call(arguments);
			fun.apply(obj,agrs.concat(sals));//apply()要求必须为数组
		}
	}
function calc(base,bonus1,bonus2){
  console.log(this.ename+"的总工资是"+(
    base+bonus1+bonus2
  ));
}
var lilei={ename:"Li Lei"};
var lilei_calc = calc.bind(lilei,10000,2000,3000);
lilei_calc();

```
基本功能实现;
此外,还可以基于ES6对上述代码进行修改简化,得到下面的版本,至于低版本的浏览器支不支持我就不得而知了!
```js
Function.prototype.bind=function(obj,...args){
    console.log("调用自定义的bind");
    var fun=this;
    //args本来就不包含obj，且是纯正的数组！
    return function(...sals){
      fun.call(obj,...args.concat(sals));
    }
  }
```