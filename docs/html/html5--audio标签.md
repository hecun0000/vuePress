---
sidebar: auto
---

# html5 中audio标签的使用

## 如何工作  
```html
<audio src="song.mp3"></audio>  
```
同时在audio的标签中插入文字则会在不支持的浏览器中显示出来  

### 常用的控制函数:  

 1. load(): 加载音频, 视频软件
 2. play(): 加载并播放音频,视频文件或重新播放暂停的音乐, 视频
 3. pause(): 暂停处于播放状态的音频或者视频
 4. canPlayType(obj): 检查浏览器是否能够播放指定的音频类型  

### 只读的媒体属性  

 1. duration: 获取媒体文件的播放时长, 以s为单位, 如果无法获取则为NaN
 2. paused: 如果媒体文件被暂停, 则返回true; 否则为false  
 3. ended: 如果媒体文件播放完毕返回true; 否则为false
 4. startTime: 返回起始播放时间
 5. error: 返回错误代码
 6. currentSrc: 以字符串的形式返回当前正在播放或加载的文件  

### 可用JavaScript控制的属性值:  

 1. autoPlay: 自动播放已经加载的媒体文件
 2. loop: 为true的时候为自动播放
 3. currentTime: 当前媒体文件已经播放的时长
 4. controls: 显示或隐藏用户播放控制界面
 5. volume: 音量值; 在0到1.0之间
 6. muted: 是否静音  
 7. autobuffer: 是否进行缓冲加载  
   
### Audio对象方法  
 1. addTextTrack(): 向音频中添加新的文本轨道
 2. fastSeek(): 在音频播放器中指定播放时间  
 3. getStartDate(): 返回新的 Date 对象，表示当前时间线偏移量

[参考文章][1]


  [1]: http://caibaojian.com/html5-audio.html