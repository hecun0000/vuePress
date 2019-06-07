---
sidebar: auto
---

# promise 异步任务处理


## 简要了解
promise对象是对我们现在尚未得到但将来会得到值得占位符；是能够得知异步计算结果的一种保证。     

使用新的内置函数promise来创建一个promise需要传入一个函数，这个函数被称为执行函数，它包含两个参数 `resolve` 和 `reject` 。 当把两个内置函数： `resolve` 和 `reject` 作为函数传入 `Promise` 构造函数后， 执行函数会立即调用。我们可以手动调用 `resolve` 和 `reject` 让承诺兑现。   

代码调用 `Promise` 对象内置的 then 方法, 我们向这个方法传入了两个回调函数。一个成功回调函数和一个失败函数。当承诺实现则一个回调会被调用，当承诺失败第二个回调会被调用。   

## 理解简单回调所带来的问题  

1. 错误处理困难  
    
    当长时间任务开始运行，调用回调函数的代码一般不会和开始任务的这段代码位于时间循环的统一步骤。导致错误经常会丢失。   

2. 持续连续步骤非常棘手     
    
    在如下代码中，会增加代码的复杂度，代码会越来越难来管理。（回调地狱）

    ```js
    getJSON("data/nanjas.json", function(err, nanjsa){
        getJSON(nanjsa[0].location, function(err, locationInfo){
            sendOrder(locationInfo, function(err, status){
                // ...
            })
        }}
    }}
    ```
3. 执行多任务并行任务  

    会增加一些很多样板代码，且仅仅用于并行任务执行多个行动。   

## 深入研究 promise  

    




## 手写Promise  






```js
function Promise(executor) {
    var self = this
    self.status = 'pending' 
    // Promise当前的状态
    self.data = undefined 
     // Promise的值
    self.onResolvedCallback = [] 
    // Promise resolve时的回调函数集，因为在Promise结束之前有可能有多个回调添加到它上面
    self.onRejectedCallback = [] 
    // Promise reject时的回调函数集，因为在Promise结束之前有可能有多个回调添加到它上面

    function resolve(value) {
        if (self.status === 'pending') {
            self.status = 'resolved'
            self.data = value
            for (var i = 0; i < self.onResolvedCallback.length; i++) {
                self.onResolvedCallback[i](value)
            }
        }
    }

    function reject(reason) {
        if (self.status === 'pending') {
            self.status === 'rejected'
            self.data = reason
            for (var i = 0; i < self.onRejectedCallback.length; i++) {
                self.onRejectedCallback[i](reason)
            }
        }
    }

    try { 
        // 考虑到执行executor的过程中有可能出错，
        // 所以我们用try/catch块给包起来，
        // 并且在出错后以catch到的值reject掉这个Promise
        executor(resolve, reject) // 执行executor
    } catch (e) {
        reject(e)
    }
}

Promise.prototype.then = function (onResolved, onRejected) {
    var self = this
    var promise2

    // 根据标准，如果then的参数不是function，则我们需要忽略它，此处以如下方式处理
    onResolved = typeof onResolved === 'function' ? onResolved : function (value) { }
    onRejected = typeof onRejected === 'function' ? onRejected : function (reason) { }

    if (self.status === 'resolved') {
        // 如果promise1(此处即为this/self)的状态已经确定并且是resolved，我们调用onResolved
        // 因为考虑到有可能throw，所以我们将其包在try/catch块里
        return promise2 = new Promise(function (resolve, reject) {
            try {
                var x = onResolved(self.data)
                if (x instanceof Promise) { 
                    // 如果onResolved的返回值是一个Promise对象，直接取它的结果做为promise2的结果
                    x.then(resolve, reject)
                }
                resolve(x) 
                // 否则，以它的返回值做为promise2的结果
            } catch (e) {
                reject(e) 
                // 如果出错，以捕获到的错误做为promise2的结果
            }
        })
    }

    // 此处与前一个if块的逻辑几乎相同，区别在于所调用的是onRejected函数，就不再做过多解释
    if (self.status === 'rejected') {
        return promise2 = new Promise(function (resolve, reject) {
            try {
                var x = onRejected(self.data)
                if (x instanceof Promise) {
                    x.then(resolve, reject)
                }
            } catch (e) {
                reject(e)
            }
        })
    }

    if (self.status === 'pending') {
        // 如果当前的Promise还处于pending状态，我们并不能确定调用onResolved还是onRejected，
        // 只能等到Promise的状态确定后，才能确实如何处理。
        // 所以我们需要把我们的**两种情况**的处理逻辑做为callback放入promise1(此处即this/self)的回调数组里
        // 逻辑本身跟第一个if块内的几乎一致，此处不做过多解释
        return promise2 = new Promise(function (resolve, reject) {
            self.onResolvedCallback.push(function (value) {
                try {
                    var x = onResolved(self.data)
                    if (x instanceof Promise) {
                        x.then(resolve, reject)
                    }
                } catch (e) {
                    reject(e)
                }
            })

            self.onRejectedCallback.push(function (reason) {
                try {
                    var x = onRejected(self.data)
                    if (x instanceof Promise) {
                        x.then(resolve, reject)
                    }
                } catch (e) {
                    reject(e)
                }
            })
        })
    }
}

// 为了下文方便，我们顺便实现一个catch方法
Promise.prototype.catch = function (onRejected) {
    return this.then(null, onRejected)
}
```




