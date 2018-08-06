
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