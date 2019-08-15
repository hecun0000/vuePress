---
sidebar: auto   
sidebarDepth: 2
---

# 学习JavaScript数据结构与算法笔记   

## 栈  

栈是一种遵从后进先出原则的集合。新添加的或待删除的


```js
class Stack {
    constructor() {
        this.count = 0;
        this.items = {};
    }
    push(element) {
        this.items[this.count] = element;
        this.count++;
    }
    size() {
        return this.count;
    }
    isEmpty() {
        return this.count === 0;
    }
    pop() {
        if(this.isEmpty()) {
            return undefined;
        }
        this.count--;
        const result = this.items[this.count];
        delete this.items[this.count];
        return result;
    }
    peek() {
        if(this.isEmpty()) {
            return undefined;
        }
        return this.items[this.count - 1];
    }
    clear() {
        this.items = {};
        this.count = 0;
    }
    toString() {
        if(this.isEmpty()){
            return '';
        }
        let objString = `${this.items[0]}`;
        for(let i = 1; i<this.count;i++) {
            objString = `${objString},${this.items[i]}`;
        }
        return objString;
    }
}
```

## 队列和双端队列

### 队列

```js

/**
 *创建队列
 *
 * @class Queue
 */
class Queue {
    constructor() {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    }
    /**
     *向队列中一个或多个新的项
     */
    enqueue(element) {
        this.items[this.count] = element;
        this.count++;
    }

    /**
     * 移除队列中的第一项
     */
    dequeue() {
        if (this.isEmpty()) {
            return undefined;
        }
        const result = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount++;
        return result;
    }

    /**
     * 返回队列中第一个元素
     */
    peek() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[0];
    }

    /**
     * 队列是否为空
     */
    isEmpty() {
        return this.size() === 0
    }

    /**
     * 返回队列包含的元素个数
     */
    size() {
        return this.count - this.lowestCount;
    }

    /**
     * 清空队列
     */
    clear() {
        this.items = {};
        this.count = 0;
        this.lowestCount = 0;
    }

    toString() {
        if (this.isEmpty()) {
            return undefined;
        }

        let objString = `${this.items[this.lowestCount]}`;
        for(let i = this.lowestCount + 1; i< this.count; i++) {
            objString = `${objString},${this.items[i]}`;
        }
        return objString;
    }
}
```


### 双端队列

```js
/**
 *创建双端队列
 *
 * @class Deque
 */
class Deque {
    constructor() {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    }
    /**
     *向队列前端添加元素
     *
     * @memberof Queue
     */
    addFront(element) {
        if (this.isEmpty()) {
            // 队列为空
            this.addBack();
        } else if (this.lowestCount > 0) {
            // 前端有元素已经被移除
            this.lowestCount--;
            this.items[this.lowestCount] = element;
        } else {
            // 从前端加入元素， 其他元素向后移
            for (let i = this.count; i > 0; i--) {
                this.items[i] = this.items[i - 1];
            }
            this.count++;
            this.lowestCount = 0;
            this.items[0] = element;
        }
    }

    /**
    * 移除队列中的第一项
    */
    removeFront() {
        if (this.isEmpty()) {
            return undefined;
        }
        const result = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount++;
        return result;
    }

    /**
     *向队列中一个或多个新的项
     */
    addBack(element) {
        this.items[this.count] = element;
        this.count++;
    }

    /**
     *移除队列中最后一项
     *
     * @memberof Queue
     */
    removeBack() {
        if (this.isEmpty()) {
            return undefined;
        }
        const result = this.items[this.count];
        delete this.items[this.count];
        this.count--;
        return result;
    }

    /**
     * 返回队列中第一个元素
     */
    peekFront() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[0];
    }

       /**
     * 返回队列中最后一个元素
     */
    peekBackl() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.count-1];
    }

    /**
     * 队列是否为空
     */
    isEmpty() {
        return this.size() === 0
    }

    /**
     * 返回队列包含的元素个数
     */
    size() {
        return this.count - this.lowestCount;
    }

    /**
     * 清空队列
     */
    clear() {
        this.items = {};
        this.count = 0;
        this.lowestCount = 0;
    }

    toString() {
        if (this.isEmpty()) {
            return undefined;
        }

        let objString = `${this.items[this.lowestCount]}`;
        for (let i = this.lowestCount + 1; i < this.count; i++) {
            objString = `${objString},${this.items[i]}`;
        }
        return objString;
    }
}


let deque = new Deque();
console.log(deque.isEmpty());

deque.addBack('he')
deque.addBack('cun')
console.log(deque.toString()); // he,cun

deque.addBack('hecun');
console.log(deque.toString()); // he,cun,hecun
console.log(deque.size()); // 3
console.log(deque.isEmpty()); // false

deque.removeFront();
console.log(deque.toString()); //cun,hecun

deque.removeBack();
console.log(deque.toString()); // cun

deque.addFront('进击的程序源');
console.log(deque.toString()); //进击的程序源, cun
```

### 使用队列和双端队列解决问题   

#### 击鼓传花   

这里我们会得到一个名单，把里面的名字都加入队列。给定一个数字，然后迭代队列。从队列开头移除一项，在将其添加至队列末尾，模拟击鼓传花（如果你把花传给了旁边的人，你被淘汰的威胁就解除了）。一旦到达给定的传递次数，拿着花的人就会淘汰，最后剩下的一个人就是胜者。

```js
const Queue = require('./Queue')

function hotPotato(elementList, num) {
    const queue = new Queue()
    const elimitatedList = [];
    
    for (let i = 0; i < elementList.length; i++) {
        queue.enqueue(elementList[i])        
    }

    while(queue.size() > 1) {
        for (let i = 0; i < num; i++) {
            queue.enqueue(queue.dequeue())
        }
        elimitatedList.push(queue.dequeue())
    }

    return {
        elimitated: elimitatedList,
        winner: queue.dequeue()
    }
}

const names = ['john', 'jack', 'camila', 'ingrid', 'carl']
const result = hotPotato(names, 7 )
result.elimitated.forEach(name=>{
    console.log(`${name}在击鼓传花游戏中淘汰`)
})

console.log(`胜利者： ${result.winner}`);
```

#### 回文检查器   

回文的检查最简单的方式就是将字符串反向排列并检查和原字符串是否相同。

```js
const Deque = require('./Deque')

function palindromeCheacker(aString) {

    if (aString === undefined || aString === null || (aString !== null && aString.length === 0)) {
        return false
    }
    const deque = new Deque()
    const lowerString = aString.toLocaleLowerCase().split(' ').join('')
    let isEqual = true
    let firstChar, lastChar
    for (let i = 0; i < lowerString.length; i++) {
        deque.addBack(lowerString.charAt(i))
    }
    while (deque.size() > 1 && isEqual) {
        firstChar = deque.removeFront()
        lastChar = deque.removeBack()
        if (firstChar !== lastChar) {
            console.log(firstChar, lastChar, firstChar !== lastChar, 'firstChar !== lastChar')
            isEqual = false
        }
    }
    return isEqual
}

console.log('a', palindromeCheacker('a'))
console.log('aa', palindromeCheacker('aa'))
console.log('kayak', palindromeCheacker('kayak'))
console.log('level', palindromeCheacker('level'))
console.log('Was it a car or a cat I saw', palindromeCheacker('Was it a car or a cat I saw'))
console.log('Step on no pets', palindromeCheacker('Step on no pets'))
```

## 链表  
 
链表存储有序的元素集合，但不同于数组，链表中的元素在内存中并不是连续放置的。每个元素有一个储存元素的本身的节点和一个指向下一个元素的引用组成。

相对数组，链表的好处在于，添加和移除元素的时候不需要移动其他元素。然而，链表需要使用指针，因此在实现链表时注意。

### 普通链表

所用公共函数：  
defaultEquals

```js
export const defaultEquals = (a, b) => a === b;
```
Node:

```js
export class Node {
  constructor(element){
    this.element = element;
    this.next = undefined;
  }
}
```

实现普通链表：  

```js
import { defaultEquals } from './util'
import { Node } from './models/linked-list-models'

export default class LinkedList {
  constructor(equalsFn = defaultEquals) {
    this.count = 0;
    this.head = undefined;
    this.equalsFn = equalsFn;
  }

  /**
   * 向链表的尾部添加一个新的元素
   * 
   * @param {*} element 添加的元素
   * @memberof LinkedList
   */
  push(element) {
    const node = new Node(element);
    let current;
    if (this.head == null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next != null) {
        current = current.next
      }
      current.next = node;
    }
    this.count++;
  }

  /**
   *向链表的特定位置添加一个新的元素
   *
   * @param {*} element 要添加的元素
   * @param {*} index  要添加的位置
   * @memberof LinkedList
   */
  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new Node(element);
      if (index === 0) {
        const current = this.head;
        node.next = current;
        this.head = node;
      } else {
        const previous = this.getElementAt(index - 1);
        const current = previous.next;
        node.next = current;
        previous.next = node;
      }
      this.count++;
      return node;
    }
    return false;
  }

  /**
   *返回链表中特定位置的元素
   *
   * @param {*} index 特定位置
   * @memberof LinkedList
   */
  getElementAt(index) {
    if (index >= 0 && index <= this.count) {
      let node = this.head;
      for (let i = 0; i < index && node != null; i++) {
        node = node.next;
      }
      return node;
    }
    return undefined;
  }

  /**
   *从链表中移除一个元素
   *
   * @param {*} element 要移除的元素
   * @memberof LinkedList
   */
  remove(element) {
   const index = this.indexOf(element);
   return this.removeAt(index);
  }

  /**
   *返回元素在链表中的索引， 若没有则返回-1
   *
   * @param {*} element 要查找的元素
   * @memberof LinkedList
   */
  indexOf(element) {
    let current = this.head;
    for (let i = 0; i < this.count && this.current != null; i++) {
      if (this.equalsFn(element, current.name)) {
        return i;
      }
      current = current.next;
    }
    return -1;
  }

  /**
   *从链表的指定位置移除一个元素
   *
   * @param {*} index 指定的位置
   * @memberof LinkedList
   */
  removeAt(index) {
    if (index >= 0 && index < this.count) {
      let current = this.count;

      if (index == 0) {
        this.head = current.next
      } else {
        const previous = this.getElementAt(index - 1);
        current = previous.next;
        previous.next = current.next
      }
      this.count--;
      return current.element
    }
    return undefined;
  }

  /**
   *判断该链表是不是为空
   *
   * @memberof LinkedList
   */
  isEmpty() {
    return this.size() === 0;
  }

  /**
   *返回链表包含的元素个数
   *
   * @memberof LinkedList
   */
  size() {
    return this.count;
  }

  /**
   *获取头部元素
   *
   * @returns
   * @memberof LinkedList
   */
  getHead() {
    return this.head;
  }

  /**
   *返回整个链表的字符串
   *
   * @memberof LinkedList
   */
  toString() {
    if (this.head == null) {
      return ''
    }
    let objString = `${this.head.element}`;
    let current = this.head.next;
    for (let i = 1; i < this.size() && current != null; i++) {
      objString = `${current.element}`;
      current = current.next;
    }
    return objString;
  }
}
```

### 双向列表  

1