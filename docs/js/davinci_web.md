---
sidebar: auto
---

# davinci_web 项目   

## 技术栈

[TypeScript](https://www.tslang.cn/docs/handbook/typescript-in-5-minutes.html)   
[react](https://react.docschina.org/)   
[redux](https://www.redux.org.cn/)   
[react-redux](https://www.redux.org.cn/docs/react-redux/)   
[redux-saga - 处理异步获取数据](https://redux-saga-in-chinese.js.org/)   
[Ant Design - UI组件库](https://3x.ant.design/index-cn)   
[axios 请求库](https://www.kancloud.cn/yunye/axios/234845)   
[react-router 路由](http://react-guide.github.io/react-router-cn/index.html)   


## 目录结构

[项目地址](https://github.com/edp963/davinci/tree/dev-0.3/webapp)   


![davinci_web-微信截图_20200411114959-2020411115016](http://img.hecun.site/davinci_web-微信截图_20200411114959-2020411115016.png)


路由入口文件： `/app/route.ts`  
入口文件: `/app/app.tsx`   


## react 基础

### 组件结构  

在整个项目中的 `.tsx` 文件为前端页面组件, 使用 `typeScript` 语法编写，在 render 函数中使用 `tsx` 编写业务组件。

```js
class Timer extends React.Component {
  constructor() {
    // 初始化 state 和 props 数据
  }
  componentWillMount() {
    // 请求后台接口
  }
  render() {
    // 渲染页面组件
  }
  // 然后构造 DOM 元素插入页面
  componentDidMount() {
    // 请求后台接口
  }

  // 即将从页面中删除
  componentWillUnmount() {
    // 清楚定时器 解除事件绑定等
  }
  // 从页面中删除
}
```

一般会把组件的 `state` 的初始化工作放在 `constructor` 里面去做；在 `componentWillMount` 进行组件的启动工作，例如 `Ajax` 数据拉取、定时器的启动；组件从页面上销毁的时候，有时候需要一些数据的清理，例如定时器的清理，就会放在 `componentWillUnmount` 里面去做。

### 数据流   

`react` 是一个 数据驱动式的框架， 当数据改变时， 就会有效地更新并正确地渲染组件。   

在项目中，组件的数据分为两部分：  

1. `state` 页面内数据：  

只在当前组件内使用，可通过 `this.setState` 方法修改(此方法为异步)  

2.  `props` 数据： 

此处数据包含两部分： 父组件传递的数据和 `redux` 中的状态管理的数据

- 父组件传递的数据  

修改父组件数据，只能使用父组件传递方法，在父组件中通过 `this.setState` 方法修改 

- redux 中的状态管理的数据

修改只能通过 `dispatch` 触发相应的 `action` 在 `reducer` 中进行修改。关于 `redux` 相关后面进行简单介绍。

`Redux` 是 严格的 **单向数据流**。

![davinci_web-4593023-4afcd50ce0354325-2020411113348](http://img.hecun.site/davinci_web-4593023-4afcd50ce0354325-2020411113348.png)

下面以 `Widget` 页面简单介绍下： 

```json
│  actions.ts       // actions 生成函数
│  constants.ts     // actionType 常量声明
│  index.tsx        // 页面入口文件
│  reducer.ts       // 初始化 store 和 处理 reducers 
│  sagas.ts         // 处理异步数据
│  selectors.ts     // 获取 store 中的 state
│  Widget.less      // 页面样式
├─components        // 该页面所用公共组件
├─config            // 操作面板 view 配置
│  │  index.ts      // 入口文件
│  ├─chart          // 图表类型
│  └─pivot          // 透视表
└─render            // 生成 echart 配置文件
    ├─chart         // 图表类型
    └─pivot         // 透视表
```
