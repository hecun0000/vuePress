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
