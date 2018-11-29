---
sidebar: auto
---
# node学习笔记之mongodb

## 安装
本人系统为deepin的系统： 

下载地址： https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-4.0.4.tgz

1. 解压 ```tar -zxvf mongodb-linux-x86_64-2.6.0.tgz```
2. 更改安装目录到/usr/local下：  ```tar -zxvf mongodb-linux-x86_64-2.6.0.tgz```
3. 创建mongodb的数据库存放路径：``` mkdir -p /data/db ```
4. 创建mongodb数据库日志存放路径：```mkdir -p /usr/local/mongodb/log/```（存放在安装路径下）
5. 添加path：
```
$ vim /etc/profile

添加一下代码到文件的最后一行，并保存:
export PATH=$PATH:/usr/local/mongodb/bin

使设置生效：source /etc/profile
进入控制台：mongo（在任意位置）
```

## mongoDB 常用命令： 

- show dbs; 查看已有的数据库 
- use hecun; 进入名为heucn的数据库
- show collections; 查看该数据库下所有集合

### 查询
db.user.find(); 查询当前数据库下user合集中所有数据   
db.user.findOne(); 查询当前数据库下user合集中一条数据   
db.user.find({"name":"hecun"}); 查询当前数据库下user合集中name为hecun的数据  


### 插入
db.user.insert({"name":"李华"}); 向user合集中添加一条数据 

### 修改
db.user.update({"name":"hecun",{"name":"hecun","age":18}}); 将user集合中的name为hecun的数据添加一个age为18的属性； 


### 删除   
db.user.remove({"name":"hecun"}); 删除user合集中name为hecun的所有数据   
db.user.drop(); 删除user合集，返回true    
db.dropDatabase();删除数据库
![20181125142645](http://static.hecun.site/20181125142645.png)

## 使用js写mongo命令

### 简单使用
命名一个goTask.js 的文件，内容如下：

```js
var userName = 'hecun';
var timeStamp = Date.parse(new Date());
var jsonDatabase = {
    "loginName":userName,
    'loginTime':timeStamp
}
//相当于 use hecunUSer
var db= connect('hecunUser');

db.login.insert(jsonDatabase);
print('[demo]:log print success')
```
在命令行中输入，```mongo ./goTask.js```   
然后去查看数据库：  
![2018112514512](http://static.hecun.site/2018112514512.png)

### 批量插入

首先，利用for循环进行插入，然后使用批量插入，进行一个时间的对比;

```js
var startTime = new Date().getTime();
var db = connect('batchTest');

// 循环插入
for (var i = 0; i < 1000; i++) {
    db.test.insert({ "num": i })
}

var runTime = new Date().getTime() - startTime;

print('demo runTime is ' + runTime + 'ms')

var batchStartTime = new Date().getTime();
// 批量插入
var arr = [];
for (var i = 0; i < 1000; i++) {
    arr.push({ 'num': i })
}
db.test.insert(arr)
var batchRunTime = new Date().getTime() - batchStartTime;
print('demo batch runTime is ' + batchRunTime + 'ms')
```
最后在控制台打印出的时间差距还是挺大的:   

```
demo runTime is 198ms
demo batch runTime is 6ms
```
## update相关

### 基本错误
首先，插入一条测试数据。
然后，将user集合中，王司徒的朋友改为曹操。先试着执行下
```js
var db = connect('hecun')
// 插入
db.user.insert({"name":"王司徒","friend":"诸葛亮"})
// 修改
db.user.update({"name": "王司徒"},{"friend": "曹操"})
```
结果呢，update会将王司徒的整条数据进行替换，而不是只改朋友这个属性： 

![2018112992318](http://static.hecun.site/2018112992318.png)

然后，进行修改下： 
```js
var db = connect('hecun')
// 插入
db.user.insert({"name":"王司徒","friend":"诸葛亮"})
// 修改
db.user.update({"name": "王司徒"},{"name": "王司徒","friend": "曹操"})
```
显然，这样就好了，但是感觉是有点麻烦。。

![201811299335](http://static.hecun.site/201811299335.png)

### update修改器

$set 修改某一个属性   
```js
var db = connect('hecun')
// 插入
db.user.insert({"name":"王司徒1","friend":"诸葛亮"})
// 修改
db.user.update({"name": "王司徒1"},{$set:{"friend": "曹操"}})
// 插入
db.user.insert({"name":"王司徒3","skill":{"one":"厚颜无耻","two":"骂街"}})

db.user.update({"name": "王司徒3"},{$set:{"skill.two": "快嘴"}})
```
查看效果: 
![2018112910526](http://static.hecun.site/2018112910526.png)

$unset 用于将key删除   
```js
db.user.update({"name": "王司徒3"},{$unset:{"skill.two": "快嘴"}})
```

$inc 对数字进行计算   
所操作的属性值必须为number类型： 
```js
db.user.insert({"name":"王司徒4","friend":"诸葛亮","age":18})
db.user.update({"name":"王司徒4"},{$inc:{"age": +30}})
```
multi 批量操作   

对user集合中，所有friend为曹操，添加一个爱好的属性：
```js
// 插入
db.user.update({"friend":"曹操"},{$set:{"interest": []}},{multi:true})
```
multi是有两个值：true代表全部修改，false代表只修改一个（默认值）

upsert 在更新找不到数据时，会直接插入一条新数据
upsert有两个值：true代表没有就添加，false代表没有不添加(默认值)。
```js
db.user.update({"name":"王朗"},{$set:{"age": 20}},{upsert:true})
```