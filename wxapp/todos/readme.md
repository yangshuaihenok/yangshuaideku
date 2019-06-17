- wxml只是模板，不像H5，
看到的是page，不是html,而是编译后的wxml,
js data 拿去做模板生成page view

- 登录 登录后
    页面不是静态，dom 
    通过mvvm实现

- wxml{{}}或者指令data加相应的数据就好
    this.setData{{}} 设置数据，并且带来数据相应部分UI的重新渲染
    数据驱动界面 响应式
    不用dom
    mvvm 数据决定一切
    数据状态 === 界面状态
    登录状态  hasUserInfo  界面在某一刻 有且只有一个状态
    userInfo:{} 数据驱动界面