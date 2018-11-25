

module.exports = {
    title: "hecun's blog",
    description: '进击的程序源-hecun',
    keywords: '进击的程序源,hecun,禾寸',
    head: [
        ['link', { rel: 'icon', type: "image/x-icon", href: '/img/logo.ico' }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
        ['link', { rel: 'apple-touch-icon', href: '/img/logo.ico' }],
        ['mate', { name: 'keywords', content: '进击的程序源,hecun,禾寸' }],
        // ['script', { type: 'text/javascript', src: baidu }],
    ],
    themeConfig: {
        nav: [
            { text: '主页', link: '/' },
            // {
            //     text: '博文',
            //     items: [
            //         { text: 'JS', link: '/js/' },
            //         { text: 'VUE', link: '/vue/' },
            //         { text: 'CSS', link: '/css/' }
            //     ]
            // },
            { text: 'JavaScript', link: '/js/' },
            { text: 'VUE', link: '/vue/' },
            { text: 'CSS', link: '/css/' },
            { text: 'node', link: '/node/' },
            { text: '关于', link: '/about/' },
            { text: 'Github', link: 'https://github.com/hecun0000' },
        ],
        // sidebar: [
        //     {
        //         title: 'js',
        //         collapsable: true,
        //         children: [
        //             '/js/',
        //             '/js/es6----数字类型',
        //             '/js/JavaScript----bind()',
        //             '/js/JavaScript----ES6中某些API',
        //             '/js/JavaScript----indexOf() forEach() map方法重写',
        //             '/js/JavaScript----let-关键字-简要了解',
        //             '/js/JavaScript----在vue项目中使用token的身份验证',
        //             '/js/JavaScript----小练习',
        //             '/js/JavaScript----数组 鄙视题',
        //             '/js/JavaScript----数组api',
        //             '/js/JavaScript----运算符 鄙视题',
        //             '/js/JavaScript--数组排序',
        //             '/js/JavaScript-new关键字',
        //             '/js/JavaScript-this关键字',
        //             '/js/JavaScript-判断数组类型的几种方式',
        //             '/js/JavaScript-闭包-鄙视题',
        //         ]
        //     },
        //     {
        //         title: 'vue',
        //         collapsable: true,
        //         children: [
        //             '/vue/',
        //             '/vue/Vue----内置指令',
        //             '/js/中软面试题整理',
        //             '/vue/vue----组件通信',
        //             '/vue/Vue----计算属性',
        //         ]
        //     },
        //     {
        //         title: 'css',
        //         collapsable: true,
        //         children: [
        //             '/css/',
        //             '/css/css--BFC',
        //             '/css/css--rem学习笔记',
        //         ]
        //     },
        //     {
        //         title: 'html',
        //         collapsable: true,
        //         children: [
        //             '/html/',
        //             '/html/html5--audio标签',
        //         ]
        //     }
        // ],
        // sidebar: 'auto',
        sidebarDepth: 2,
        lastUpdated: 'Last Updated',
        displayAllHeaders: true
    },
    serviceWorker: true,
}