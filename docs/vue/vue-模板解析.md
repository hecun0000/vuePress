# vue模板解析

## 基本思路 
1. 将el的所有子节点取出，添加到一个新建的文档fragment对象中
2. 对fragment中所有的层次子节点递归进行编译解析处理
    - 对表达式文件节点进行解析
    - 对元素的指令属性进行解析
        - 事件指令解析

## 基本流程

```js

function Compile(el,vm) {
    this.$vm = vm;
    //判断el是不是元素节点
    this.$el = this.isElementNode(el)? el: document.querySelector(el);

    if(this.$el){
        // 将页面中的node节点，保存在$fragment中
        this.$fragment = this.node2Fragment(this.$el);
        // 初始化
        this.init();
        // 将$fragment追加到node节点下
        this.$el.appendChild(this.$fragment);
    }
}


Compile.prototype = {
    init:function(){
        this.compileElement(this.$fragment);
    },
    compileElement:function(el){
        // 获取子节点
        let childNode = el.childNodes;
        // 使用递归进行节点遍历
        
        //判断子节点是否为文本节点

        // 判断子节点是否为文本节点 

            // 并利用正则表达式匹配双花括号

                // 拿到双花括号中的变量，更新节点到试图中

        // 若为元素节点，采用递归遍历继续遍历



    },
    // 将node节点转化为fragment
    node2Fragment:function(el){
        // 创建fragment对象
        let fragment = document.createDocumentFragment(), child;
        // 遍历node节点，将节点插入到fragment中
        while (child = el.firstChild) {
            // 一个节点只会存在一个父节点
            fragment.appendChild(child)
        }
        return fragment;
    },
    // 判断节点是不是元素节点
    isElementNode:function (node) {
        return node.nodeType == 1;
    }
}

```

