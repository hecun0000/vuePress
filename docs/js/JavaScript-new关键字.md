---
sidebar: auto
---

# new 关键字  
对象是某个特定引用对象的**实例**.新对象使用new操作符后面跟一个构造函数来创建的.构造函数本身就是一个普通函数,只不过该函数是由创建新对象的目的而被定义.  

在创建Object实例的方式有两种:  
 
- 使用new操作符后跟 Object构造函数. 如下图所示;
  
```js  
var person = new Object();
person.name = "nico";
persom.age=12;
```
 
- 使用对象字面量表示法,如下所示:  

```js  
var person = {
	name : "nico";
	age : 12;
}
```
下面来一个小小例子:  

```js
function Person(name,age){
	this.name=name;
	this.age=age;
	this.sayName=function(){
		alert(this.name);
	};
}
	var person=new Person("张三",20);  
//此处为 构造对象，构造对象的话，返回的新对象是由解析器自己生成的。  

	var person=Person("张三",20);	  
//报错 person undefined 此处为普通函数调用，又没有给定返回值，出错。  

	person.sayName();  
```
> 注意：构造函数在没有返回值的情况下，默认返回新对象实例。  

则可以得出, 
  
+ 当用new调用构造函数时;  
+ 没有new时则为普通函数调用.在此种情况，函数内部的this，指向的是window ,函数执行过后，并没有返回值，那么就默认返回一个undefined.但是在控制台中可以看到，window对象中，挂载了age,sayName等变量。  

对于return回的内容:  

**如果函数返回值为常规意义上的值类型（Number、String、Boolean）时，new 函数将会返回一个该函数的实例对象，而如果函数返回一个引用类型（Object、Array、Function），虽然new函数与直接调用函数产生的结果等同，但是是两个不同的过程，一个是构造对象、一个是函数调用。**

## 补充一点  
构造函数:  
> 在JavaScript中, 构造函数只是一些使用new操作符时被调用的函数. 它们并不会属于某个类, 也不会实例化一个类. 实际上, 它们甚至都不能说是一种特殊的函数类型, 它们只是被new操作符调用的普通函数而已.   
  
在使用new来调用函数, 或者说是发生构造函数的调用时, 会自动执行下面的操作.  
1. 创建(或者说构造)一个全新的对象.  
2. 这个新对象会被执行[[prototype]]连接.  
3. 这个新对象会绑定到函数调用的this.  
4. 如果没有返回其他对象, 那么new表达式中的函数会自动的返回这个新对象.  
  
 

