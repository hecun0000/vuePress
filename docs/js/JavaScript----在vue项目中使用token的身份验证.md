# 从在vue项目中使用token的身份验证    
## 工作原理  

1. 前端页面进行登录操作, 将用户名与密码发给服务器;  
2. 服务器进行效验, 通过后生成token, 包含信息有密钥, uid, 过期时间, 一些随机算法等 ,然后返回给前端 
3. 前端将token保存在本地中, 建议使用localstorage进行保存.  下次对服务器发送请求时, 带上本地存储的token
4. 服务器端,进行对token的验证, 通过的话, 进行相应的增删改查操作, 并将数据返回给前端
5. 为通过则返回错误码, 提示保错信息, 然后跳转到登录页.

相应步骤:   

所用技术: vuex + axios + localStorage + vue-router

1. 在登录路由添加自定义mate字段, 来记录用户是否已经登录  

```js
//router.js
{
    path: "/login",
    name: "login",
    component: resolve => require(['./login.vue'], resolve),
    meta: { 
        requiresAuth: true 
    }
} 
```

2. 设置路由拦截  

```js
router.beforeEach((to, from, next) => {
    //matched的数组中包含$route对象的检查元字段
    //arr.some() 表示判断该数组是否有元素符合相应的条件, 返回布尔值
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!auth.loggedIn()) {
            next({
                path: '/login',
                query: { redirect: to.fullPath }
            })
        } else {
            next()
        }
    } else {
        next() // 确保一定要调用 next()
    }
})
```

3. 设置拦截器  
    在后面的所有请求中都将携带token进行. 我们利用axios中的拦截器, 通过配置http response inteceptor, 当后端接口返回401 Unauthorized(未授权), 让用户重新登录.  

```js
// http request 拦截器
axios.interceptors.request.use(
    config => {
        if (store.state.token) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
            config.headers.Authorization = `token ${store.state.token}`;
        }
        return config;
    },
    err => {
        return Promise.reject(err);
    });

// http response 拦截器
axios.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    // 返回 401 清除token信息并跳转到登录页面
                    store.commit(types.LOGOUT);
                    router.replace({
                        path: 'login',
                        query: {redirect: router.currentRoute.fullPath}
                    })
            }
        }
        return Promise.reject(error.response.data)   // 返回接口返回的错误信息
    });
```

4. 将token存储在本地中  
可以使用cookies/local/sessionStograge   
三者的区别:   
    1. sessionStorage 不能跨页面共享的，关闭窗口即被清除，  
    2. localStorage 可以同域共享，并且是持久化存储的  
    3. 在 local / session storage 的 tokens，就不能从不同的域名中读取,甚至是子域名也不行.  
  解决办法使用Cookie.demo: 假设当用户通过 app.yourdomain.com 上面的验证时你生成一个 token 并且作为一个 cookie 保存到 .yourdomain.com,然后，在 youromdain.com 中你可以检查这个 cookie 是不是已经存在了，并且如果存在的话就转到 app.youromdain.com去。这个 token 将会对程序的子域名以及之后通常的流程都有效（直到这个 token 超过有效期）
  只是利用cookie的特性进行存储而非验证.

关于XSS和XSRF的防范:   

- XSS 攻击的原理是，攻击者插入一段可执行的 JavaScripts 脚本，该脚本会读出用户浏览器的 cookies 并将它传输给攻击者，攻击者得到用户的 Cookies 后，即可冒充用户。
- 但是要防范 XSS 也很简单，在写入 cookies 时，将 HttpOnly 设置为 true，客户端 JavaScripts 就无法读取该 cookies 的值，就可以有效防范 XSS 攻击。
- 因为 Tokens 也是储存在本地的 session storage 或者是客户端的 cookies 中，也是会受到 XSS 攻击。所以在使用 tokens 的时候，必须要考虑过期机制，不然攻击者就可以永久持有受害用户帐号。

```js
    //login.vue
    methods: {
        login(){
            if (this.token) {
                //存储在本地的localStograge中
                this.$store.commit(types.LOGIN, this.token)
                //跳转至其他页面
                let redirect = decodeURIComponent(this.$route.query.redirect || '/');
                this.$router.push({
                    path: redirect
                })
            }
        }
    }
```

在vuex中: 

```js
import Vuex from 'vuex';
import Vue from 'vue';
import * as types from './types'

Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        user: {},
        token: null,
        title: ''
    },
    mutations: {
        //登录成功将, token保存在localStorage中
        [types.LOGIN]: (state, data) => {
            localStorage.token = data;
            state.token = data;
        },
        //退出登录将, token清空
        [types.LOGOUT]: (state) => {
            localStorage.removeItem('token');
            state.token = null
        }
    }
});
```

在./types.js中: 

```js
export const LOGIN = 'login';
export const LOGOUT = 'logout';
```

个人简单学习与了解. 