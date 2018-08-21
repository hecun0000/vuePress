# elementUI下sku生成和table组件的单元框合并

## 需求及效果展示

在商品创建中，不可避免会出现商品的规格生成。效果如图:
![avatar](http://oxi9lrcsm.bkt.clouddn.com/TIM%E6%88%AA%E5%9B%BE20180821111448.png)
## sku的生成

<!-- <js-bishi/> -->
这里不得不说笛卡尔积算法： 
```js
//笛卡尔积算法
descartes(list) {
    //parent上一级索引;count指针计数
    var point = {};
    var result = [];
    var pIndex = null;
    var tempCount = 0;
    var temp = [];
    //根据参数列生成指针对象
    for (var index in list) {
        if (typeof list[index] == 'object') {
            point[index] = {
                'parent': pIndex,
                'count': 0
            }
            pIndex = index;
        }
    }
    //单维度数据结构直接返回
    if (pIndex == null) {
        return list;
    }
    //动态生成笛卡尔积
    while (true) {
        for (var index in list) {
            tempCount = point[index]['count'];
            temp.push(list[index][tempCount]);
        }
        //压入结果数组
        result.push(temp);
        temp = [];
        //检查指针最大值问题
        while (true) {
            if (point[index]['count'] + 1 >= list[index].length) {
                point[index]['count'] = 0;
                pIndex = point[index]['parent'];
                if (pIndex == null) {
                    return result;
                }
                //赋值parent进行再次检查
                index = pIndex;
            } else {
                point[index]['count']++;
                break;
            }
        }
    }
}
```
该方法接收一个数组的参数，返回生成一个多维数组，其中每一项则是一个sku结果；

```js
let list = [['red','yellow'],["33","34"]];
let result = descartes(list);
console.log(result);
//"[["red","33"],["red","34"],["yellow","33"],["yellow","34"]]"
```
在实际工作中，一般还需要对返回的结果进行处理；
在sku中，我们需要对每一条数据添加商品数量和库存等数据；
对此利用如下函数进行简单的处理；
其中this.cols是进行动态列展示相关函数，后面进行解释；
```js
computedSku(result) {
    let ret = this.descartes(result);
    let skuResult = [];
    let col = [];
    for (var i = 0; i < ret.length; i++) {
         //添加的数据
        var sku = {
            price_original: "",
            stock: "",
            packaging_fee: ""
        }; 
       //保存刚才生成的笛卡尔积生成的数据
        sku.attr_info = [];
        for (var j = 0; j < ret[i].length; j++) {
            //列表展示动态列的相关数据 后面进行解释
            col[j] = {
                prop: `attr_info[${j}].attr_value`, 
                label: ret[i][j].attributeValue
            };
            sku.attr_info.push({
                attributeId: ret[i][j].attributeId,
                attributeValue: ret[i][j].attributeValue,
                attributeValId: ret[i][j].attributeValId,
                attr_value: ret[i][j].attr_value
            });
        }
        skuResult.push(sku);
    }
    this.tableData = skuResult;
    this.cols = col;
    this._normalize(skuResult); //合并单元格相关函数，后面解释
}
```
到此，sku的结果生成结束；
数据结果如下： 
```json
[
    {
        "price_original": "",
        "stock": "",
        "packaging_fee": "",
        "attr_info": [
            {
                "attributeId": "352",
                "attributeValue": "内存",
                "attributeValId": "1131",
                "attr_value": "32G"
            },
            {
                "attributeId": "351",
                "attributeValue": "颜色",
                "attributeValId": "1128",
                "attr_value": "碳黑色"
            }
        ]
    },
    {
        "price_original": "",
        "stock": "",
        "packaging_fee": "",
        "attr_info": [
            {
                "attributeId": "352",
                "attributeValue": "内存",
                "attributeValId": "1131",
                "attr_value": "32G"
            },
            {
                "attributeId": "351",
                "attributeValue": "颜色",
                "attributeValId": "1129",
                "attr_value": "酒红色"
            }
        ]
    }
]
```
## table组件动态列展示

一般情况下，创建商品选择属性可能是一个也可能是多个，总之很不确定；则生成的列表的列数也不固定；
1. 利用v-for动态的生成table的列数据cols，cols中prop表示每行展示数据的值，label表示表头中每列的标题文字；
cols的数据基本格式如下：
```json
[
    {
        "prop": "attr_info[0].attr_value",
        "label": "内存"
    },
    {
        "prop": "attr_info[1].attr_value",
        "label": "颜色"
    }
]
```

2. 利用v-for进行动态渲染；
```vue
<el-table-column
        v-for="(col,index) in cols"
        :key="index"
        width="160px"
        show-overflow-tooltip
        :property="col.prop" 
        :label="col.label">
</el-table-column>
```

## table组件中合并单元格
相关的属性：
| 参数 |说明| 类型|
| ------------- |:-------------:| -----|
| span-method  | 合并行或列的计算方法 |	Function({ row, column, rowIndex, columnIndex })|
|row-class-name  |  行的 className 的回调方法，也可以使用字符串为所有行设置一个固定的 className。|Function({row, rowIndex})/String|

相关的事件：

| 事件名 |	说明 |	 参数|
| ------------- |:-------------:| -----|
| cell-mouse-enter |	当单元格 hover 进入时会触发该事件 |	row, column, cell, event |
| cell-mouse-leave	| 当单元格 hover 退出时会触发该事件 |	row, column, cell, event|

```js
//记录列中那几行重复，并做标记
_normalize(data) {
    var dataObj = {}
    let result;
    this.cols.forEach((val, $i) => {
        this.contactArray[$i] = [];
        result = data.map((item, index) => {

            //第一行则不做判断
            if (index === 0) {
                this.contactArray[$i].push(1);
                this.contactDot = 0;
            } else {
                //判断第二列，

                //若第一列中，该行数值为0

                //若为第二行则判断，该列的值和上一列值进行对比
                let newVal = data[index].attr_info[$i].attributeValId;
                let last = data[index - 1].attr_info[$i].attributeValId;
                if (newVal === last) {
                    this.contactArray[$i][this.contactDot] += 1;
                    this.contactArray[$i].push(0);
                } else {
                    this.contactArray[$i].push(1);
                    this.contactDot = index;
                }
            }

            //处理合并单元框之后的样式问题
            let firstItem = data[index].attr_info[0].attr_value;
            item.rowIndex = index;
            if (dataObj[firstItem]) {
                dataObj[firstItem].push(index)
            } else {
                dataObj[firstItem] = []
                dataObj[firstItem].push(index)
            }
        })
    })

    for (var k in dataObj) {
        if (dataObj[k].length > 0) {
            this.tableDataIndexArr.push(dataObj[k])
        }
    }
    return result
}
```

利用span-method 方法进行单元框的合并：      
目前只做第一列的单元框合并，这样显得比较简洁；如需要多列的单元框合并，只需要在objectSpanMethod的方法中，继续添加和改造。
```js
 //合并单元格
objectSpanMethod({row, column, rowIndex, columnIndex}) {
    let index = columnIndex;
    if (index == 0) {
        const _row = this.contactArray[0][rowIndex];
        const _col = _row > 0 ? 1 : 0;
        return {
            rowspan: _row,  //需要合并的列数量
            colspan: _col    //单元格的宽，若为0就不显示单元格
        };
    }
}
```
下来就是处理样式问题，在鼠标移入移除时，利用js动态的添加class名，达到样式处理；

```js
 // 单元格中的鼠标玉移出事件
cellMouseLeave(row, column, cell, event) {
    this.curRowArr = [];
},
// 单元格中的鼠标玉移入事件
cellMouseEnter(row, column, cell, event) {
    this.tableDataIndexArr.forEach((arr, i) => {
        if (arr.indexOf(row.rowIndex) != -1) {
            this.curRowArr = arr;
        }
    })

},
tableRowClassName({row, rowIndex}) {
    let temArr = this.curRowArr;
    for (let i = 0; i < temArr.length; i++) {
        if (rowIndex == temArr[i]) {
            return 'span-method-row-class'
        }
    }
}
```
::: tip
其中span-method-row-class需要在全局样式表中添加，不可vue的单文件中添加，否则不起作用；
:::

到此，所用的东西就完了！！！  
[查看源代码](https://github.com/hecun0000/Jcss/blob/master/sku/sku.vue)