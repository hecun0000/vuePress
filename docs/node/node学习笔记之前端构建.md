---
sidebar: auto
---

# node学习笔记之前端构建

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
安装依赖： 
```
cnpm i -S gulp-concat react react-dom babel-preset-react
cnpm i -S gulp-sourcemaps gulp-babel babel-preset-es2015
```

在gulpfile.js中配置，gulp相关配置项：  
```js 
const gulp = require('gulp')
const sourcemaps = require('gulp-sourcemaps')
const babel = require('gulp-babel')
const concat = require('gulp-concat')
const watch = require('gulp-watch')

gulp.task('default',()=>{
    return gulp.src('app/*.jsx')  
            //查看app文件夹下所有的jsx文件
            .pipe(sourcemaps.init())
            //建立映射关系
            .pipe(babel({
                presets:['es2015','react']
            }))
            // 将代码用babel进行转化
            .pipe(concat('all.js'))
            // 将所生成的js都写入all.js中
            .pipe(sourcemaps.write('.'))
            //写入相应的映射关系
            .pipe(gulp.dest('./dist'));
            //将文件放入dist文件夹中
})

gulp.task('watch',()=>{
    // 监听app中文件的变动，执行上述流程
    watch('app/**.jsx',()=>gulp.start('default'))
})
```
写一个index.jsx进行下测试： 
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
这个直接贴一部分之前学习webpack是的代码： 
webpack.config.js: 
```js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //引入html-webpack-plugin
const CleanWebpackPlugin = require('clean-webpack-plugin'); //引入
const webpack = require("webpack");

module.exports = {
    entry: './src/js/main.js',
    output: {                        //出口文件
        filename: "[name].bundle.[hash].js", //[hash]会在后面生成随机hash值
        path: path.join(__dirname, "dist")
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader','postcss-loader']
            },
            {
                test:/\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader']
            },
            {
                test: /\.js/,
                exclude: /node_modules/,
                loaders: 'babel-loader'
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        outputPath: 'images/', //输出到images文件夹
                        limit: 500 //是把小于500B的文件打成Base64的格式，写入JS
                    }
                }]
            }

        ],
    },
    plugins: [ // 对应的插件
        new HtmlWebpackPlugin({ //配置
            filename: 'index.html', //输出文件名
            template: './index.html',
             //以当前目录下的index.html文件为模板生成dist/index.html文件
        }),
        new CleanWebpackPlugin(['dist']), //传入数组,指定要删除的目录
        // 热更新，热更新不是刷新
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        inline: true, //打包后加入一个websocket客户端
        hot: true, //热加载
        contentBase: path.resolve(__dirname, 'dist'), //开发服务运行时的文件根目录
        host: 'localhost', //主机地址
        port: 9090, //端口号
        compress: true //开发服务器是否启动gzip等压缩
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: { // 抽离自己写的公共代码
                    chunks: "initial",
                    name: "common", // 打包后的文件名，任意命名
                    minChunks: 2, //最小引用2次
                    minSize: 0 // 只要超出0字节就生成一个新包
                },
                vendor: { // 抽离第三方插件
                    test: /node_modules/, // 指定是node_modules下的第三方包
                    chunks: 'initial',
                    name: 'vendor', // 打包后的文件名，任意命名
                    // 设置优先级，防止和自定义的公共代码提取时被覆盖，不进行打包
                    priority: 10
                },
            }
        }
    },
}
```
[查看详情](https://github.com/hecun0000/Jcss/tree/master/webpackTpl)
