# vue 数据代理

## 简单介绍

- 数据代理： 通过一个对象代理到另一个对象中的属性的操作（读/写）
- vue数据代理： 通过vm对象来代理data对象中所用的属性操作
- 好处： 更方便操作data的数据

## 基本流程 

- 通过Object.defineProperty()给vm添加data对象的属性对应的属性描述符
- 所有添加的属性都包含getter/setter
- getter/setter 内部去操作data中对应的属性数据



主要html相关代码： 
```html 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>mvvm</title>
    <script src="js/mvvm.js"></script>
</head>
<body>
<div id='test'></div>
<script>
    const  vm = new MVVM({
        el:'#test',
        data:{
            name:'hecun'
        }
    })

    console.log(vm)
</script>
</body>
</html>
```

这里用es6的方法写一下MVVM的构造函数： 

```js
class MVVM {
    constructor(options){
        //将配置对象保存到vm
        this.$options = options;
        //将data对象保存到vm和变量data中
        let data = this._data = this.$options.data;
        //遍历data中的属性
        Object.keys(data).forEach((key)=>{
            this._proxy(key)
        })
    }

    _proxy(key) {
        let that = this;
        //给vm添加指定名称的属性（使用属性描述符）
        Object.defineProperty(that,key,{
            configurable:false, //不能重新定义
            enumerable:true,    //可以枚举遍历
            // 当通过vm.xxx读取属性值调用时， 从data中获取对应的属性值返回，  代理读操作
            get() {
                return that._data[key];
            },
            //当通过vm.xxx = value时，
            set(newVal) {
                that._data[key] = newVal;
            }
        })
    }
}
```

