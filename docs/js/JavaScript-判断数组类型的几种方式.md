---
sidebar: auto
---

# 判断一个对象是不是数组?共有几种方式?
解析: typeof: 只能区分原始类型的函数   
     并不能进一步细致区分出对象的类型名;

方法如下:
## 判断爹(原型对象)  
  var bool=父对象.isPrototypeOf(子对象);
## 判断妈(构造函数) 之一
  obj.constructor===构造函数;
  问题: constructor 是隐藏属性,并不推荐使用;
## 判断妈(构造函数) 之二
  obj instanceof 构造函数;
强调: 以上两种方式都不仅检查直接的父类型,也检查是不是整个原型链的
## 验DNA
  原理: 在每个对象内都有一个隐藏属性 Class   
  属性: class保存了对象创建时的最初类型;不会随着继承关系的改变而改变;  
  思路: 只有Object.prototype 中最原始 toString() 才能输出 class 属性
  返回值: [object class属性值];  //Object Array Date  

  易错点: 使用子对象.toString(), 容易被父对象中的toString()所重写  

  解决: 用call 强行调用Object.prototype中的 toString();
  Object.prototype.toString.call(obj);
## isArray()
  作用: 专门判断任何一个对象是不是Array类型
  语法: var bool=Array.isArray(obj);
** 第四种 第五种方法都是严格验证  **

# 鄙视二 何时函数定义在原型对象中,何时将函数直接定义在构造函数上?
答: 如果只允许指定类型的子对象才能使用的函数,必须放在原型对象中,继承使用
    如果希望不限制类型,所有对象都使用的函数,可以直接放在构造函数上:
比如 : sort()    push()   isArray()
    Array.prototype.sort();
    Array.prototype.push();
    Array.isArray();