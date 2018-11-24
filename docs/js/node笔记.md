
mongoDB 常用命令： 

- show dbs; 查看已有的数据库  
- use hecun; 进入名为heucn的数据库

## 查询
db.user.find(); 查询当前数据库下user合集中所有数据
db.user.findOne(); 查询当前数据库下user合集中一条数据 
db.user.find({"name":"hecun"}); 查询当前数据库下user合集中name为hecun的数据


## 插入
db.user.insert({"name":"李华"}); 向user合集中添加一条数据


## 删除
db.user.remove({"name":"hecun"}); 删除user合集中name为hecun的所有数据
db.user.drop(); 删除合集，返回true