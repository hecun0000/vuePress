
---
title: vue-router 懒加载--首屏加载时间优化 
tags: 前端  
categories: vue  
copyright: true  
---

> vue路由懒加载，当页面组件过多的时候，webpack的打包文件就会十分巨大。解决首屏加载时间尤为重要。  

采用方式： 

- 路由懒加载： 

```js
import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Home from '@/components/home'
import Count from '@/components/count'
import Todo from '@/components/todo'

Vue.use(Router)

export default new Router({
    routes:[
        {
            path:'/login',
            name: 'Login',
            component: resolve => require(['@/component/Login'],resolve)
        },
        {
            path:'/',
            name: 'Home',
            component: resolve => require(['@/component/Home'],resolve),
            children: [
                {
                    path:'/',
                    name: 'Skill',
                    component: resolve =>require(['@/component/Skill'],resolve)
                }
            ]
        }
    ]
});
```

**还有一点在使用上述方式时， 打包之后运行的html会报错，需要修改打包时配置路径;
在webpack.prod.conf.js文件中修改**
1. 找到build下面的webpack.prod.conf.js   添加   publicPath："./",
2. 如下:  

```js
output: {
    path: config.build.assetsRoot,
    publicPath: "./",
    filename: utils.assetsPath('js/[name].[chunkhash].js'),
    chunkFilename: utils.assetsPath('js/[id].[chunkhash].js')
}
```


- 非懒加载路由： 

```js
import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Home from '@/components/home'
import Count from '@/components/count'
import Todo from '@/components/todo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'todo',
      component: Todo
    },
    {
      path: '/count',
      name: 'count',
      component: Count
    },
    {
      path:'/index',
      name: 'index',
      component: Index
    },
    {
      path:'/home/:id',
      name: "home",
      component: Home
    }
  ]
})

```