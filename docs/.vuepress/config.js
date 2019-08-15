

module.exports = {
    title: "hecun's blog",
    description: '进击的程序源-hecun',
    keywords: '进击的程序源,hecun,禾寸',
    head: [
        ['link', { rel: 'icon', type: "image/x-icon", href: '/img/logo.ico' }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
        ['link', { rel: 'apple-touch-icon', href: '/img/logo.ico' }],
        ['mate', { name: 'keywords', content: '进击的程序源,hecun,禾寸' }],
    ],
    themeConfig: {
        nav: [
            { text: '主页', link: '/' },
            { text: 'JavaScript', link: '/js/' },
            { text: 'VUE', link: '/vue/' },
            { text: 'CSS', link: '/css/' },
            { text: 'node', link: '/node/' },
            { text: '随想', link: '/think/' },
            { text: 'Github', link: 'https://github.com/hecun0000' },
        ],
        sidebarDepth: 2,
        lastUpdated: 'Last Updated',
        displayAllHeaders: true
    },
    serviceWorker: true,
}