---
sidebar: auto
---

# node 学习笔记二

## 创建定制的npm脚本

npm run 命令等同于npm run-script, 用npm run script-name可以运行任何脚本。下面用babel搭建一个构建客户端脚本的命令。   
首先新建项目，安装依赖： 
```
mkdir es2015-example 
cd es2015-example  
npm init -y 
npm install --save-dev babel-cli babel-preset-es2015 
echo '{"presets":["es2015"]}' > .babelrc
```
接下来，打开package.json在script下面添加babel属性： 
```json
 "babel": "./node_modules/.bin/babel browser.js -d build/",
```
下面简单写一下browser.js: 
```js
class Example {
    render(){
        return '<h1>Example</h1>'
    }
}

const example = new Example()
console.log(example.render());
```
下面运行一下```npm run babel```,可以看到在根目录下多了一个build的文件夹，里面有一个编译过后的browser.js。内容如下：  
```js
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Example = function () {
    function Example() {
        _classCallCheck(this, Example);
    }

    _createClass(Example, [{
        key: 'render',
        value: function render() {
            return '<h1>Example</h1>';
        }
    }]);

    return Example;
}();

var example = new Example();
console.log(example.render());
```
然而在通常的项目中，还会用到压缩代码，这里要用到uglify： 
```npm i -S uglify-es```
然后在script下添加名为uglify的属性：  
```json
"uglify": "./node_modules/.bin/uglifyjs build/browser.js -o build/browser.min.js"
```
完成后执行就会看到在build文件夹中会多出一个browser.min.js的文件。 
上述两个命令可以组合到一起，然而调用两个任务： 
```json
"build":"npm run babel && npm run uglify"
```
## 把gulp添加到项目中
新建node项目:
```
npm i -g gulp-cli 
mkdir gulp-example 
cd gulp-example
npm init -y
npm i -S gulp
```
```
cnpm i -S gulp-concat react react-dom babel-preset-react
cnpm i -S gulp-sourcemaps gulp-babel babel-preset-es2015
```


```js 
const gulp = require('gulp')
const sourcemaps = require('gulp-sourcemaps')
const babel = require('gulp-babel')
const concat = require('gulp-concat')
const watch = require('gulp-watch')

gulp.task('default',()=>{
    return gulp.src('app/*.jsx')
            .pipe(sourcemaps.init())
            .pipe(babel({
                presets:['es2015','react']
            }))
            .pipe(concat('all.js'))
            .pipe(sourcemaps.write('.'))
            .pipe(gulp.dest('./dist'));
})

gulp.task('watch',()=>{
    watch('app/**.jsx',()=>gulp.start('default'))
})
```
app/index.jsx: 
```js
import React from 'react'
import ReactDOM from 'react-dom'
ReactDOM.render(
    <h1>hello world</h1>,
    document.getElementById('example')
)
```


## 把webpack添加到项目中
