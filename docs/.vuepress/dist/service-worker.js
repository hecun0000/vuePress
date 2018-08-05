/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "0f774c975c58f4cdbfdb0f3df3012fb2"
  },
  {
    "url": "assets/css/0.styles.a951fa46.css",
    "revision": "acd9d39b289b91f6d5782c870549592f"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.fc13595d.js",
    "revision": "133a4e751e669fa120669aa44344c758"
  },
  {
    "url": "assets/js/11.5be0b20c.js",
    "revision": "f582e8b4c717b9305f18aa2134ee5206"
  },
  {
    "url": "assets/js/12.8b15763e.js",
    "revision": "e59633664f8291bcfb5c25697cfbd74a"
  },
  {
    "url": "assets/js/13.eccf94d9.js",
    "revision": "fb12a9faa1f37d7dfddea958605124a1"
  },
  {
    "url": "assets/js/14.b54f952c.js",
    "revision": "df7dfa40898d7f1eea7be3235f2df1e2"
  },
  {
    "url": "assets/js/15.4366cb1a.js",
    "revision": "ec046b3802da737b471f304319de1cf0"
  },
  {
    "url": "assets/js/16.f0020e84.js",
    "revision": "ae8a06c55c196a134a4770d0f8f5e1a7"
  },
  {
    "url": "assets/js/17.f036e3a9.js",
    "revision": "ab29591f0b6dfec3637faabcbe427152"
  },
  {
    "url": "assets/js/18.b373f4f1.js",
    "revision": "bb77d94293880421d663f023becd1dbb"
  },
  {
    "url": "assets/js/19.69e9d52a.js",
    "revision": "54054e6a298586633d502841a1fee0da"
  },
  {
    "url": "assets/js/2.285762ea.js",
    "revision": "93afbd4e91ed17280e84a6930dc81b17"
  },
  {
    "url": "assets/js/20.fa87e6ab.js",
    "revision": "a66e5cd1b7f112bbb4e5ae81fdb6e83b"
  },
  {
    "url": "assets/js/21.5e77bd5d.js",
    "revision": "c9ec7214feafaeb146c9ba0704b9149e"
  },
  {
    "url": "assets/js/22.94d76691.js",
    "revision": "3b7cf8a4c1f06356f27b93a53e3b2172"
  },
  {
    "url": "assets/js/23.cb42ffea.js",
    "revision": "84eb1b037459e4e0b29ea7befac72b99"
  },
  {
    "url": "assets/js/24.34a62490.js",
    "revision": "df5b4c30cfa6ad0452a0336a1317798e"
  },
  {
    "url": "assets/js/25.8ae0f53a.js",
    "revision": "d95daf4c00abf433c6d8e1a1ff78a4ba"
  },
  {
    "url": "assets/js/26.6e2433e2.js",
    "revision": "916fa3186513ab67a2c5460e7675fac4"
  },
  {
    "url": "assets/js/27.fca4b9d8.js",
    "revision": "18887b1dc8e92d5b47fd2d3fa6944c88"
  },
  {
    "url": "assets/js/28.ea5bd219.js",
    "revision": "44cdab04cb55a52cc84a447d7107bce8"
  },
  {
    "url": "assets/js/29.77e9e865.js",
    "revision": "dfeb9d53f8301358f5eef7802bc3d61a"
  },
  {
    "url": "assets/js/3.8383dafe.js",
    "revision": "bd1307c12f77c9f2b1f46d35ddc6672f"
  },
  {
    "url": "assets/js/30.5ee8ae91.js",
    "revision": "5bbba20899ca2b9173f1f52c210d2090"
  },
  {
    "url": "assets/js/4.88423077.js",
    "revision": "b28b16250ac99153a064a5364860c8bb"
  },
  {
    "url": "assets/js/5.7bf4d87f.js",
    "revision": "c74cfc2e6742cee4486d0a3026f55040"
  },
  {
    "url": "assets/js/6.058373b9.js",
    "revision": "c2aa7e19975bd0e2286d656a25c26785"
  },
  {
    "url": "assets/js/7.3884a514.js",
    "revision": "49edd3fcf9e389983e582cf8ff420f39"
  },
  {
    "url": "assets/js/8.f7f29a62.js",
    "revision": "1ea2414daa44d9d66bd707b13ed154be"
  },
  {
    "url": "assets/js/9.81258964.js",
    "revision": "c16836fb79b8ccb8e3487030f4e0e421"
  },
  {
    "url": "assets/js/app.5ac09712.js",
    "revision": "983d699ab41104840dca6ba7b6eb464a"
  },
  {
    "url": "css----居中.html",
    "revision": "cdbf0c224cc4b1a6fa56b55b5e582680"
  },
  {
    "url": "css--BFC.html",
    "revision": "ca0d16c2a1d1b90a4e3c36c6e8cfcc6d"
  },
  {
    "url": "css--rem学习笔记.html",
    "revision": "3be7585539eacdb35c4c3b5eb158da68"
  },
  {
    "url": "es6----数字类型.html",
    "revision": "19a5fd7db63670afdc2c3934eb3ea363"
  },
  {
    "url": "hello-world.html",
    "revision": "1610080f32c6978d2c68fa1bcf54e80a"
  },
  {
    "url": "html5--audio标签.html",
    "revision": "eb1e8ecd9c5f820001b8b21db40d85c5"
  },
  {
    "url": "index.html",
    "revision": "d4f85cb5c132e9a9a1f452dbc17595ec"
  },
  {
    "url": "JavaScript----bind().html",
    "revision": "c0745d1ee276f7dc1e08b398a248c7e6"
  },
  {
    "url": "JavaScript----ES6中某些API.html",
    "revision": "70f87e3d90e848a3fed05e53df098ef4"
  },
  {
    "url": "JavaScript----indexOf() forEach() map方法重写.html",
    "revision": "2e88607ec6943889f252bd835be04476"
  },
  {
    "url": "JavaScript----let-关键字-简要了解.html",
    "revision": "09d521f5cec728a9c23c0861266f7d58"
  },
  {
    "url": "JavaScript----在vue项目中使用token的身份验证.html",
    "revision": "8aa491ba40af0ee00915b82c731308af"
  },
  {
    "url": "JavaScript----小练习.html",
    "revision": "5b49355892e661b3c94932f28db80e67"
  },
  {
    "url": "JavaScript----数组 鄙视题.html",
    "revision": "bb475d8c6d3e8fd40be2cb76d7200f77"
  },
  {
    "url": "JavaScript----数组api.html",
    "revision": "98c14fab5e43dd334e23d3761e0afd94"
  },
  {
    "url": "JavaScript----运算符 鄙视题.html",
    "revision": "9b78df300cd461a7db7f49800c633367"
  },
  {
    "url": "JavaScript--数组排序.html",
    "revision": "fb1933b98c5b04a66d2f0b79150d26d8"
  },
  {
    "url": "JavaScript-new关键字.html",
    "revision": "0ade2ce426a0fb977582609e17234991"
  },
  {
    "url": "JavaScript-this关键字.html",
    "revision": "4c91cc618323bd34ad1cfac445d26493"
  },
  {
    "url": "JavaScript-判断数组类型的几种方式.html",
    "revision": "3786ad3a150e7c4123ac2b9fe1bea168"
  },
  {
    "url": "JavaScript-闭包-鄙视题.html",
    "revision": "5bfc2efd7a35799f53b4d22613664fe4"
  },
  {
    "url": "Vue----vue-router.html",
    "revision": "df72d76c8f9f84c00189f6deb6b83b33"
  },
  {
    "url": "Vue----内置指令.html",
    "revision": "e9cee59c1aae184511d6ee77bc165304"
  },
  {
    "url": "vue----组件通信.html",
    "revision": "192f65ac37b54a60829e1f60f01d1d41"
  },
  {
    "url": "Vue----计算属性.html",
    "revision": "3f6c1915b77df7aa35daed24213d67ff"
  },
  {
    "url": "wew.html",
    "revision": "02ecb8f2c9de29760d8d49e03556473c"
  },
  {
    "url": "中软面试题整理.html",
    "revision": "f8701119408635832fa72d379653c9d4"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
