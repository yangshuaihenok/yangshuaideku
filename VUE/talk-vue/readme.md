基于 Vue 2.0 + Vuex + VueRouter 全家桶实现方案来模仿网易云音乐WebApp项目 
css预编译工具使用的是Sass,音乐滚动加载用的是berrterscore,全面采用ES6风格

解决了哪些问题
- 图片懒加载 vue-lazyload
- 前后端分离 
    使用node.js NeteaseCloudMusicAPI proxy
    8080 + 3000
- 引入了fastclick 
- 设计了store
    songs 要播放的数组
    index 播放的下标
    song 正在放的
    singer 歌手
    mode 播放模式
    favoriteList 喜欢❤
    searchHistory playHistory
- iconfont
- eslint