(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{206:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),a("p",[t._v("当需要反复调用上面的值, 则就相当麻烦, 而且会带较大的维护成本.")]),t._v(" "),t._m(3),t._v(" "),t._m(4),a("p",[t._v("对应的vue相关代码如下:")]),t._v(" "),t._m(5),a("p",[a("a",{attrs:{href:"https://hecun0000.github.io/VueJsDemo/computed/demo1.html/",target:"_blank",rel:"noopener noreferrer"}},[t._v("点击查看demo"),a("OutboundLink")],1),a("br"),t._v("\n这样就可以解决上述问题, 需要多处引用的话, 直接调用计算属性对应的值即可."),a("br"),t._v("\n然而在当package1或者package2中的商品有任何变化时, 比如购买数量或增删商品时, 计算属性的prices就自动更新, 同时试图中的数据也会进行改变.")]),t._v(" "),a("p",[t._v("其次. 在计算属性中, 每一个属性都会有一个getter和一个setter. 在上述例子中都是使用了计算属性的默认方法, 只是利用了getter进行数据的读取. 当需要手动的修改数据时, 就会触发一个setter函数, 执行一些自定义的操作:")]),t._v(" "),t._m(6),a("p",[t._v("对应的vue相关代码如下:")]),t._v(" "),t._m(7),a("p",[a("a",{attrs:{href:"https://hecun0000.github.io/VueJsDemo/computed/setter.html/",target:"_blank",rel:"noopener noreferrer"}},[t._v("点击查看demo"),a("OutboundLink")],1),a("br"),t._v("\n当对app.fullname进行修改时, 会触发setter, 同时数据与试图也会立马更新."),a("br"),t._v("\n更直观的话, 可以在控制台直接对app.fullname进行修改, 观察其变化."),a("br"),t._v("\n同时在使用组件时也可以动态传递props属性."),a("br"),t._v(" "),a("strong",[t._v("小技巧")]),t._v(":")]),t._v(" "),t._m(8),t._v(" "),t._m(9),a("p",[t._v("对应的vue代码如下:")]),t._v(" "),t._m(10),a("p",[a("a",{attrs:{href:"https://hecun0000.github.io/VueJsDemo/computed/demo3.html/",target:"_blank",rel:"noopener noreferrer"}},[t._v("点击查看demo"),a("OutboundLink")],1),a("br"),t._v("\n当text发生改变的时候, 计算属性也会跟着更新同时更新视图.")]),t._v(" "),t._m(11),t._v(" "),t._m(12)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"vue-计算属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-计算属性","aria-hidden":"true"}},[this._v("#")]),this._v(" Vue----计算属性")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("模板内表达式常用于简单的计算, 但是计算的逻辑复杂的时候, 就会难以维护, 然而计算属性就是解决该类问题."),s("br"),this._v("\n来个简单的例子:")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("example"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  {{ message.split('').reverse().join('') }}\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"简要了解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#简要了解","aria-hidden":"true"}},[this._v("#")]),this._v(" 简要了解")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("app"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    总价:{{prices}} \n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" app "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Vue")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    el"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"#app"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    data"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        package1"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                name"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"iphone 7"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                price"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("7199")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                count"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("2")]),t._v("\n            "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                name"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"ipad"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                price"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("2888")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                count"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("2")]),t._v("\n            "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        package2"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                name"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"apple"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                price"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("2")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                count"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("21")]),t._v("\n            "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                name"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"banana"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                price"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("2888")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                count"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("10")]),t._v("\n            "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    computed"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        prices"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" prices "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("for")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item "),a("span",{attrs:{class:"token keyword"}},[t._v("of")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("package1"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                prices"),a("span",{attrs:{class:"token operator"}},[t._v("+=")]),t._v("item"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("price"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("for")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item "),a("span",{attrs:{class:"token keyword"}},[t._v("of")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("package2"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                prices"),a("span",{attrs:{class:"token operator"}},[t._v("+=")]),t._v("item"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("price"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" prices"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("app"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    姓名: {{fullname}}\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" app "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Vue")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    el"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"#app"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    data"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        firstname"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Jack"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        lastname"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Green"')]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    computed"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        fullname"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{attrs:{class:"token comment"}},[t._v("//getter 用于读取数据")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("get")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("firstname"),a("span",{attrs:{class:"token operator"}},[t._v("+")]),a("span",{attrs:{class:"token string"}},[t._v('""')]),a("span",{attrs:{class:"token operator"}},[t._v("+")]),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lastname"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{attrs:{class:"token comment"}},[t._v("// setter 写入数据触发")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("set")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("newValue"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" names "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" newValue"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("split")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('" "')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("firstname "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" names"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lastname "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" names"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("names"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("计算属性可以依赖其他的计算属性;")]),this._v(" "),s("li",[this._v("不仅可以依赖当前实例的数据, 也可以依赖于其他实例的数据;"),s("br"),this._v("\n例如:")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("app1"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("app2"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    {{reversedText}}\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" app1 "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Vue")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    el"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"#app1"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    data"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        text"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"123,456"')]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" app2 "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Vue")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    el"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"#app2"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    computed"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        reversedText"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{attrs:{class:"token comment"}},[t._v("// 这里依赖的是实例app1的数据text")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" app1"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("text"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("split")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('","')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("reverse")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("join")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("','")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"计算属性与缓存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#计算属性与缓存","aria-hidden":"true"}},[this._v("#")]),this._v(" 计算属性与缓存")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("其实, 在利用methods里的方法也会达到和计算属性同样的效果.\n计算属性是基于它的依赖缓存的. 一个计算属性所依赖的数据发生变化时, 它才会重新获取新的值. 只要所依赖的数据没有更新, 计算属性也不会更新. 相比于methods只要视图发生更新,则函数也会被执行."),s("br"),this._v("\n在使用计算属性还是methods取决于你是否需要缓存, 当遍历大量数组和做大量计算的时候, 应当时候计算属性, 除非你不希望得到缓存.")])}],!1,null,null,null);s.default=e.exports}}]);