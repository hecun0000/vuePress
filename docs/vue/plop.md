---
sidebar: auto
---

# 骚年请不要复制tameplate了 

## 写在前面   

天天搬砖，也早已变成了cv工程师。频繁的复制粘贴，复制完成后再删除，枯燥且无聊。项目中我们通常在编辑器中配置快捷键生成代码片段。好像这些也满足不了cv的欲望。在项目中配置业务相关的一些模板文件，显得尤为重要。不受编辑器的限制，更好的自定义配置，显得更为强大。 这里使用[plop](https://www.npmjs.com/package/plop)工具进行一些配置，下面一起看看吧！  

## 先看效果

![展示图.gif](http://static.hecun.site/hecun158532009407947.gif)


## 安装

一般选在安装到本地项目中，执行下面命令进行安装：

```shell
// 全局安装
npm i -g plop

// 本地安装
npm i --save-dev plop
```
配置 scripts 命令：

```json
// package.json
"scripts": {
  // ...
  "g": "plop --plopfile generators/index.js"
  // ...
}
```
运行 `npm run g` 即可执行相关配置。相关配置后面慢慢介绍。


## 基本配置   

相关配置可参考官方文档，我仅仅介绍下，我自己在项目中的配置， 大家可以参考一下。

这里我在我自己的一个项目基础上添加，项目地址为[点击查看](https://github.com/hecun0000/vue-tamplate)。

首先展示下目录结构： 

```sh
├ generators    // 主要配置文件
  ├─api         // api 相关配置
  ├─component   // component 相关配置
  ├─store       // vue 相关配置
  ├─utils       // 工具函数
  ├─view        // view 相关配置
  └─index.js    // 入口文件
```

```js
// 引入各模块位置文件
const componentGenerrator = require('./component/index.js')
const viewGenerrator = require('./view/index.js')
const storeGenerrator = require('./store/index.js')
const apiGenerrator = require('./api/index.js')

module.exports = plop => {
  // component 相关
  plop.setGenerator('component', componentGenerrator)
  // views 相关
  plop.setGenerator('views', viewGenerrator)
  // vuex 相关
  plop.setGenerator('vuex', storeGenerrator)
  // api 相关
  plop.setGenerator('api', apiGenerrator)
}
```

### vuex 模块配置  

首先预览下效果： 

![vuex.gif](http://static.hecun.site/hecun158532081935789.gif)

在vuex的模块中，主要是生成一个 modules 文件。根据模板文件生成文件，并放在 store/modules 文件夹下。模板文件如下： 

```js
// ./store/modules.hbs 模板文件
const state = {

}

const mutations = {

}

const actions = {

}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
```

该模板的生成还是十分简单，我们只需要用户输入一个文件名, 这里使用 `modules` 接受用户在命令行中输入的模块名称，在动态生成文件路径中使用。

```js
// ./store/index.js 配置文件
module.exports = {
  description: 'vuex modules', // 这里是对该plop的功能描述
  // 问题询问
  prompts: [
    {
      type: 'input',  // 问题类型 此处为输入
      name: 'modules', // actions 和 hbs 模板文件中可使用该变量
      message: '请输入模块名称', // 问题
      default:'app' // 问题的默认答案
    }
  ],
  // 操作行为
  actions: [
    {
      type: 'add', // 操作类型，这里是添加文件
      path: '../src/store/modules/{{kebabCase modules}}.js', // 添加的文件的路径
      templateFile: './store/modules.hbs'   // 模板文件的路径
    }
  ]
}
```
其中 `kebabCase` 可格式化数据，将 `modules` 转化为小驼峰的格式。
常用的还有下面的关键词： 
- camelCase: changeFormatToThis  小驼峰 
- properCase/pascalCase: ChangeFormatToThis 大驼峰

更多关键词，请查看相关文档[点击查看](https://github.com/plopjs/plop#case-modifiers)  

### api 模块配置  

首先预览下效果： 
![api.gif](http://static.hecun.site/hecun158532049044137.gif)

在api模块的配置和上述操作类似，我直接贴一下相关配置， 只介绍一下不同的部分。  

```js
// ./api/index.js
module.exports = {
  description: 'api 配置文件 ',
  prompts: [
    {
      type: 'input',
      name: 'dir',
      message: '请输入文件夹名称'
    },
    {
      type: 'input',
      name: 'file',
      message: '请输入文件名称'
    }
  ],
  actions: [
    {
      type: 'add',
      path: '../src/api/{{camelCase dir}}/{{camelCase file}}.js',
      templateFile: './api/api.hbs'
    }
  ]
}
```

```js
// ./api/api.hbs
import Request from '@/utils/request'

export const get{{properCase file}}List = data => Request.get('{{kebabCase dir}}/{{kebabCase file}}', data)
```
在模板文件中，我们可以使用 `dir` , `file`用户输入的变量， 然后修改模板文件中的内容。

### views 相关配置 

首先预览下效果： 
![展示图.gif](http://static.hecun.site/hecun158532009407947.gif)

该配置比前面的稍微复杂一点，但是一步一步分析也很容易理解。

1. 请输入 `views` 所在文件夹名称!  
在该询问中，添加了重名验证，在输入重复名称时，会提示并且可以重新输入文件夹名称。保存用户输入至 `dir` 变量中
2. 请输入 `views` 名称？  
和之前的的配置没有什么区别，主要获取新建的文件名称。保存至变量 `name` 中。

3. 是否需要 编辑弹窗 组件？   
将用户选在结果保存在 `hasDialog` 中，在 `actions` 属性可以为函数，参数为用户输入变量，需返回  `actions` 的配置数组。这样就可以在 `actions` 中根据 `hasDialog` 进行动态判断生成 `action`。

4. 是否添加 api 配置文件?   
将用户选在结果保存在 `hasApi` 中，然后在 `actions` 中进行判断。此处可以直接执行已经配置好的命令，动态生成。这里使用 `node` 中的 `child_process.exec`函数执行命令  `npm run g api ${dir} ${name}` 即可。

5. 是否添加 `vuex moudule` 文件?   
同理根据 `hasVuex` 的值，执行 `npm run g vuex ${name}`命令即可

[child_process.exec相关文档](http://nodejs.cn/api/child_process.html#child_process_child_process_exec_command_options_callback)


在经过上述询问后，我们也得到了  `hasDialog` , `hasApi` , `hasVuex` , `name` , `dir` 相关的变量。同时，也需要在 `.hbs` 模板文件中动态的显示部分代码片段。

```js
import { pagination } from '@/mixins'
{{#if hasApi}}
import { get{{properCase name}}List } from '@/api/{{kebabCase dir}}/{{kebabCase name}}'
{{/if}}
{{#if hasDialog}}
import { {{properCase name}}Dialog } from './components'
{{/if}}

export default {
  name: 'Role',
  {{#if hasDialog}}
  components: {
    {{properCase name}}Dialog
  },
  {{/if}}
  mixins: [pagination], // 封装分页相关函数
  data () {
    return {
      {{#if hasApi}}
      listApi: get{{properCase name}}List, // 列表请求地址
      {{/if}}
      searchForm: {}
    }
  },
  mounted () {
    {{#if hasApi}}
    this.getListData()
    {{/if}}
  },
  methods: {
    handleCheck (row) {
      {{#if hasDialog}}
      this.$refs.{{properCase name}}Dialog.openDialog(row, 'check')
      {{/if}}
    }
  }
}
```

下面为主要配置文件： 
```js
const exec = require('child_process').exec
const componentExist = require('../utils/index')

module.exports = {
  description: 'views 页面',
  prompts: [
    {
      type: 'input',
      name: 'dir',
      default: 'container',
      message: '请输入 views 所在文件夹名称!',
      validate: value => {
        if ((/.+/).test(value)) {
          return componentExist(value) ? '组件名 或 views名已经存在' : true
        }
        return '请输入views 所在文件夹名称'
      }
    },
    {
      type: 'input',
      name: 'name',
      default: 'page',
      message: '请输入 views 名称!'
    },
    {
      type: 'confirm',
      name: 'hasDialog',
      default: true,
      message: '是否需要 编辑弹窗 组件?'
    },
    {
      type: 'confirm',
      name: 'hasApi',
      default: true,
      message: '是否添加 api 配置文件?'
    },
    {
      type: 'confirm',
      name: 'hasVuex',
      default: true,
      message: '是否添加 vuex moudule 文件?'
    }
  ],

  actions: data => {
    const { hasDialog, hasApi, hasVuex, name, dir } = data
    const actions = []

    actions.push({
      type: 'add',
      path: '../src/views/{{kebabCase name}}/{{properCase name}}.vue',
      templateFile: './view/view.hbs'
    })

    if (hasDialog) {
      actions.push({
        type: 'add',
        path: '../src/views/{{kebabCase name}}/components/{{properCase name}}Dialog.vue',
        templateFile: './view/dialog.hbs'
      })
      actions.push({
        type: 'add',
        path: '../src/views/{{kebabCase name}}/components/index.js',
        templateFile: './view/components.hbs'
      })
    }
    if (hasApi) {
      actions.push(data => {
        const { name } = data
        const cmd = `npm run g api ${dir} ${name}`
        exec(cmd, (err, res, stderr) => {
          if (err || stderr) return err || stderr
          process.stdout.write(res)
        })
        return '已添加 api 配置文件'
      })
    }
    if (hasVuex) {
      actions.push(_ => {
        const cmd = `npm run g vuex ${name}`
        exec(cmd, (err, res, stderr) => {
          if (err || stderr) {
            return err || stderr
          }
          process.stdout.write(res)
        })
        return '已添加 vuex modules 配置文件'
      })
    }

    return actions
  }
}
```
完整示例请参考[项目地址 https://github.com/hecun0000/vue-tamplate](https://github.com/hecun0000/vue-tamplate)顺便求个start

## 最后说两句    

上述只是一个简单配置，项目中可以根据项目特点进行模板定制，从而提升工作效率。如果你有更好的建议欢迎留言评论，大家共同交流学习，共同进步。如果看完后，觉得对你有用欢迎、点赞、评论、分享！！！谢谢！！！

另外，我也开通了个人公众号，欢迎关注！！！

<div class="code-box">
  <span class="h-name">禾寸</span>
  <span class="h-title">欢迎关注！喜欢就坚持吧！</span>
  <img class="qr-code" src="http://static.hecun.site/hecun158193959460065.jpg">
</div>
<style>
.qr-code {
 	width: 60% !important;
  margin: auto;
  display: block;
}
.h-name {
   text-align: center !important;
  display: block;
  font-size: 14px;
  font-weight: bold;
  margin: 18px 0 8px;
}
.h-title {
  text-align: center !important;
  display: block;
  font-size: 12px;
}
</style>
