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
    "revision": "24c7276bfc35f4c01515fa70ea7365d7"
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
    "url": "assets/js/10.c6021ce0.js",
    "revision": "a043e15c9d6eb7ceb72c2ab93e50499a"
  },
  {
    "url": "assets/js/11.4f75adb1.js",
    "revision": "7906df2b0e69099a54fb5c2218c6f0b0"
  },
  {
    "url": "assets/js/12.6db15496.js",
    "revision": "c93cce16234dbb722cf789c8931f8dae"
  },
  {
    "url": "assets/js/13.d7b6e3dc.js",
    "revision": "8c21f8a2cfcd0c0a2a92a3c7b6283809"
  },
  {
    "url": "assets/js/14.8ce8f308.js",
    "revision": "651de2e857f517cf4363746ef322bbb1"
  },
  {
    "url": "assets/js/15.434dca82.js",
    "revision": "c3f49faf35a281a9427ed58e644d3e9e"
  },
  {
    "url": "assets/js/16.6e4d1894.js",
    "revision": "e38826bfb5e21a07c32f333349cb56f7"
  },
  {
    "url": "assets/js/17.63502e31.js",
    "revision": "251eae15a689973db628326227f7e3a9"
  },
  {
    "url": "assets/js/18.76b8960c.js",
    "revision": "890b1da0cf42bb1c7ad84c5493c424f0"
  },
  {
    "url": "assets/js/19.c83041ed.js",
    "revision": "f5fbd33d4647a84b25eac1e32ee9f1fd"
  },
  {
    "url": "assets/js/2.285762ea.js",
    "revision": "93afbd4e91ed17280e84a6930dc81b17"
  },
  {
    "url": "assets/js/20.c60af9bd.js",
    "revision": "61abfdbc3f774367c4cc22deec294173"
  },
  {
    "url": "assets/js/21.ee1a6abf.js",
    "revision": "d46496337d08912ec4eaf8766d88ff71"
  },
  {
    "url": "assets/js/22.440a6f94.js",
    "revision": "cf9c8a860008fb8d9926d8e6a3d6eaef"
  },
  {
    "url": "assets/js/23.e227c6fb.js",
    "revision": "f1f85deaa1d1c4431d2efff23dedf5e5"
  },
  {
    "url": "assets/js/24.2c352091.js",
    "revision": "ea1f3e62fbad2b509a1fc809858605f3"
  },
  {
    "url": "assets/js/25.33f9882b.js",
    "revision": "84a7472d84cf393c38e0841916097bd9"
  },
  {
    "url": "assets/js/26.b54a4262.js",
    "revision": "7eb0234732fa5ecc62cd1f2c6af9fb33"
  },
  {
    "url": "assets/js/27.080597f1.js",
    "revision": "58b70bf39e9dea086550480350ac303e"
  },
  {
    "url": "assets/js/28.41f31b89.js",
    "revision": "cb0878939f526f90990ee31587a55cfc"
  },
  {
    "url": "assets/js/29.a2a7c5dd.js",
    "revision": "1eb293c2d485d545642d9db532928d1a"
  },
  {
    "url": "assets/js/3.8ef1040c.js",
    "revision": "dfd726889c10e186a4b00d657e555539"
  },
  {
    "url": "assets/js/30.7929fabd.js",
    "revision": "2b232cd2933ba782239e1564d26b2685"
  },
  {
    "url": "assets/js/31.92395620.js",
    "revision": "453aca5581fe438eab62b4e7993a4654"
  },
  {
    "url": "assets/js/32.7630d6dd.js",
    "revision": "04273dda8ac246a1f205f81b2508d19e"
  },
  {
    "url": "assets/js/4.5467294f.js",
    "revision": "c32d070554c47518db8b04568da676fe"
  },
  {
    "url": "assets/js/5.9c658dd2.js",
    "revision": "fb69972f23b1b2b0e9bf499d3344c746"
  },
  {
    "url": "assets/js/6.d7afcbfb.js",
    "revision": "1bf917d782cb3e230e9bc10779ca2c64"
  },
  {
    "url": "assets/js/7.fea6e388.js",
    "revision": "9e0c7b2ba02e2b297c619c528776cbfe"
  },
  {
    "url": "assets/js/8.db9a5d2f.js",
    "revision": "1e80ceb91b484afda19fb23638e949ac"
  },
  {
    "url": "assets/js/9.404e6c0e.js",
    "revision": "750a8e6db020999763b38a772259e177"
  },
  {
    "url": "assets/js/app.f2aadfd7.js",
    "revision": "4da96c594e5e3c2b5807ca6111f79f12"
  },
  {
    "url": "css/css--BFC.html",
    "revision": "8d1ba5022a0a56d0b20d5489d8f0fdb9"
  },
  {
    "url": "css/css--rem学习笔记.html",
    "revision": "5cbe52937e578654f8f5c8250f4530d9"
  },
  {
    "url": "css/index.html",
    "revision": "690bc7a6ce1be6897ddaf25cb106d30b"
  },
  {
    "url": "html/html5--audio标签.html",
    "revision": "537c1a8033d647a57087e9e3629221ea"
  },
  {
    "url": "html/index.html",
    "revision": "a98297b6226e208fb11c02a846d87679"
  },
  {
    "url": "index.html",
    "revision": "e319e01fe609937c0035f6ff69b47476"
  },
  {
    "url": "js/es6----数字类型.html",
    "revision": "716ba164044092ca1477f2c9d1b1f698"
  },
  {
    "url": "js/index.html",
    "revision": "f9d08b770466fdc9002be7898d8b7a19"
  },
  {
    "url": "js/JavaScript----bind().html",
    "revision": "fd15447c47458de5f5965aaac77bb7f2"
  },
  {
    "url": "js/JavaScript----ES6中某些API.html",
    "revision": "eafc2e1bd8d73c9cc40927d32ee5c81f"
  },
  {
    "url": "js/JavaScript----indexOf() forEach() map方法重写.html",
    "revision": "5bec523ad935ebd966c874ddf1c2c9ef"
  },
  {
    "url": "js/JavaScript----let-关键字-简要了解.html",
    "revision": "e38dde56ffcd7ec6c56df4d2e8327140"
  },
  {
    "url": "js/JavaScript----在vue项目中使用token的身份验证.html",
    "revision": "549709ae9d353a9ad8ad563232cfae49"
  },
  {
    "url": "js/JavaScript----小练习.html",
    "revision": "128d1fc4e3e2537e6e1b9fdcabb27c20"
  },
  {
    "url": "js/JavaScript----数组 鄙视题.html",
    "revision": "fe6af1e34520ef9859b8dd6852dcfb5b"
  },
  {
    "url": "js/JavaScript----数组api.html",
    "revision": "a6e7374fc91b9575141e866d496959d7"
  },
  {
    "url": "js/JavaScript----运算符 鄙视题.html",
    "revision": "4ba1156654c4a1a6f6abce7957f5b53d"
  },
  {
    "url": "js/JavaScript--数组排序.html",
    "revision": "63569ac857a81d05bf064b15f00a075d"
  },
  {
    "url": "js/JavaScript-new关键字.html",
    "revision": "9e4596073f858a3889ca8170e12eb6e0"
  },
  {
    "url": "js/JavaScript-this关键字.html",
    "revision": "d5416eb629f855ac0a34a74b28c5fabc"
  },
  {
    "url": "js/JavaScript-判断数组类型的几种方式.html",
    "revision": "5f3a88c59970df833ece940862276b44"
  },
  {
    "url": "js/JavaScript-闭包-鄙视题.html",
    "revision": "eb3ba50c0276a51f0678bcee4be6450b"
  },
  {
    "url": "js/wew.html",
    "revision": "11d982b15ceea5850ae31a73ea6ee30f"
  },
  {
    "url": "vue/index.html",
    "revision": "fd5896b7bbbb577619c356e848da6f29"
  },
  {
    "url": "vue/Vue----vue-router.html",
    "revision": "cb496454837402bb4945eaa5225de167"
  },
  {
    "url": "vue/Vue----内置指令.html",
    "revision": "e50c81246350d86293c7f50ba8a51487"
  },
  {
    "url": "vue/vue----组件通信.html",
    "revision": "06678727a297e857de0a79cf23933071"
  },
  {
    "url": "vue/Vue----计算属性.html",
    "revision": "61987dbca441693d450eb85964dfe76f"
  },
  {
    "url": "vue/中软面试题整理.html",
    "revision": "ec177a223efde3cbc3e2a0c12956ec5a"
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
