(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{167:function(t,s,n){"use strict";n.r(s);var a=n(0),o=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[n("h2",{attrs:{id:"工作原理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#工作原理","aria-hidden":"true"}},[t._v("#")]),t._v(" 工作原理")]),t._v(" "),n("ol",[n("li",[t._v("前端页面进行登录操作, 将用户名与密码发给服务器;")]),t._v(" "),n("li",[t._v("服务器进行效验, 通过后生成token, 包含信息有密钥, uid, 过期时间, 一些随机算法等 ,然后返回给前端")]),t._v(" "),n("li",[t._v("前端将token保存在本地中, 建议使用localstorage进行保存.  下次对服务器发送请求时, 带上本地存储的token")]),t._v(" "),n("li",[t._v("服务器端,进行对token的验证, 通过的话, 进行相应的增删改查操作, 并将数据返回给前端")]),t._v(" "),n("li",[t._v("为通过则返回错误码, 提示保错信息, 然后跳转到登录页.")])]),t._v(" "),n("p",[t._v("相应步骤:")]),t._v(" "),n("p",[t._v("所用技术: vuex + axios + localStorage + vue-router")]),t._v(" "),n("ol",[n("li",[t._v("在登录路由添加自定义mate字段, 来记录用户是否已经登录")])]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token comment"}},[t._v("//router.js")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    path"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"/login"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    name"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"login"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    component"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" resolve "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("require")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token string"}},[t._v("'./login.vue'")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" resolve"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    meta"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n        requiresAuth"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v(" \n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n")])])]),n("ol",{attrs:{start:"2"}},[n("li",[t._v("设置路由拦截")])]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("router"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("beforeEach")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("to"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("from")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" next"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("//matched的数组中包含$route对象的检查元字段")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("//arr.some() 表示判断该数组是否有元素符合相应的条件, 返回布尔值")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("to"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("matched"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("some")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("record "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" record"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("meta"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("requiresAuth"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token operator"}},[t._v("!")]),t._v("auth"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("loggedIn")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{attrs:{class:"token function"}},[t._v("next")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                path"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'/login'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                query"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" redirect"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" to"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fullPath "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{attrs:{class:"token function"}},[t._v("next")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{attrs:{class:"token function"}},[t._v("next")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// 确保一定要调用 next()")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("ol",{attrs:{start:"3"}},[n("li",[t._v("设置拦截器"),n("br"),t._v("\n在后面的所有请求中都将携带token进行. 我们利用axios中的拦截器, 通过配置http response inteceptor, 当后端接口返回401 Unauthorized(未授权), 让用户重新登录.")])]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token comment"}},[t._v("// http request 拦截器")]),t._v("\naxios"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("interceptors"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("request"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("use")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    config "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("store"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("token"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  "),n("span",{attrs:{class:"token comment"}},[t._v("// 判断是否存在token，如果存在的话，则每个http header都加上token")]),t._v("\n            config"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("headers"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Authorization "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token template-string"}},[n("span",{attrs:{class:"token string"}},[t._v("`token ")]),n("span",{attrs:{class:"token interpolation"}},[n("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("store"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("token"),n("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),n("span",{attrs:{class:"token string"}},[t._v("`")])]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" config"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    err "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" Promise"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("reject")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("// http response 拦截器")]),t._v("\naxios"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("interceptors"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("response"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("use")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    response "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" response"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    error "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("response"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{attrs:{class:"token keyword"}},[t._v("switch")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("response"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("status"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),n("span",{attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("401")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                    "),n("span",{attrs:{class:"token comment"}},[t._v("// 返回 401 清除token信息并跳转到登录页面")]),t._v("\n                    store"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("commit")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("types"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token constant"}},[t._v("LOGOUT")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                    router"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("replace")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                        path"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'login'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                        query"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("redirect"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" router"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("currentRoute"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fullPath"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n                    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" Promise"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("reject")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("response"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("   "),n("span",{attrs:{class:"token comment"}},[t._v("// 返回接口返回的错误信息")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("ol",{attrs:{start:"4"}},[n("li",[t._v("将token存储在本地中"),n("br"),t._v("\n可以使用cookies/local/sessionStograge"),n("br"),t._v("\n三者的区别:\n"),n("ol",[n("li",[t._v("sessionStorage 不能跨页面共享的，关闭窗口即被清除，")]),t._v(" "),n("li",[t._v("localStorage 可以同域共享，并且是持久化存储的")]),t._v(" "),n("li",[t._v("在 local / session storage 的 tokens，就不能从不同的域名中读取,甚至是子域名也不行."),n("br"),t._v("\n解决办法使用Cookie.demo: 假设当用户通过 app.yourdomain.com 上面的验证时你生成一个 token 并且作为一个 cookie 保存到 .yourdomain.com,然后，在 youromdain.com 中你可以检查这个 cookie 是不是已经存在了，并且如果存在的话就转到 app.youromdain.com去。这个 token 将会对程序的子域名以及之后通常的流程都有效（直到这个 token 超过有效期）\n只是利用cookie的特性进行存储而非验证.")])])])]),t._v(" "),n("p",[t._v("关于XSS和XSRF的防范:")]),t._v(" "),n("ul",[n("li",[t._v("XSS 攻击的原理是，攻击者插入一段可执行的 JavaScripts 脚本，该脚本会读出用户浏览器的 cookies 并将它传输给攻击者，攻击者得到用户的 Cookies 后，即可冒充用户。")]),t._v(" "),n("li",[t._v("但是要防范 XSS 也很简单，在写入 cookies 时，将 HttpOnly 设置为 true，客户端 JavaScripts 就无法读取该 cookies 的值，就可以有效防范 XSS 攻击。")]),t._v(" "),n("li",[t._v("因为 Tokens 也是储存在本地的 session storage 或者是客户端的 cookies 中，也是会受到 XSS 攻击。所以在使用 tokens 的时候，必须要考虑过期机制，不然攻击者就可以永久持有受害用户帐号。")])]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("    "),n("span",{attrs:{class:"token comment"}},[t._v("//login.vue")]),t._v("\n    methods"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{attrs:{class:"token function"}},[t._v("login")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token keyword"}},[t._v("this")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("token"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),n("span",{attrs:{class:"token comment"}},[t._v("//存储在本地的localStograge中")]),t._v("\n                "),n("span",{attrs:{class:"token keyword"}},[t._v("this")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$store"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("commit")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("types"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token constant"}},[t._v("LOGIN")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("this")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("token"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),n("span",{attrs:{class:"token comment"}},[t._v("//跳转至其他页面")]),t._v("\n                "),n("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" redirect "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("decodeURIComponent")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token keyword"}},[t._v("this")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$route"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("query"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("redirect "),n("span",{attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'/'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),n("span",{attrs:{class:"token keyword"}},[t._v("this")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$router"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("push")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    path"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" redirect\n                "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("在vuex中:")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Vuex "),n("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'vuex'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Vue "),n("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'vue'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("as")]),t._v(" types "),n("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'./types'")]),t._v("\n\nVue"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("use")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Vuex"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("Vuex"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Store")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    state"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        user"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        token"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("null")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        title"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("''")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    mutations"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{attrs:{class:"token comment"}},[t._v("//登录成功将, token保存在localStorage中")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("types"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token constant"}},[t._v("LOGIN")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("state"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            localStorage"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("token "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" data"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            state"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("token "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" data"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{attrs:{class:"token comment"}},[t._v("//退出登录将, token清空")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("types"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token constant"}},[t._v("LOGOUT")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("state"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            localStorage"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("removeItem")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'token'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            state"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("token "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("null")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[t._v("在./types.js中:")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{attrs:{class:"token constant"}},[t._v("LOGIN")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'login'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{attrs:{class:"token constant"}},[t._v("LOGOUT")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'logout'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[t._v("个人简单学习与了解.")])])}],!1,null,null,null);s.default=o.exports}}]);