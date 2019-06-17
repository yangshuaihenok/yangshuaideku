- why
  无状态

- cookie
  本地存储
  来源：
  1， JS document.cookie 可读可写

  内容：
   name:
   value:
   path: cookie在哪个路径下生效

   /           所有路径
   /user       user以及user下面的
   /user/abc   user/abc以及下面的

  domian:

  httpOnly: true/false 如果设置为true ，就不能通过JS获取cookie的值
  maxAge: 在几秒之后 cookie被删除
  secure：安全 只会在https协议下传输
  koa: ms    js: s


  作用范围：
    domain + path
    在什么域名什么路径下面生效
    浏览器检查存储的 cookie，会发送给服务端
    而且：http 传输报文的大小
    放在cookie 请求头里面发送

  用途：
    状态管理  true
    用户个性化设置  false
    规定死

- session
    会话
    靠后台自己实现
    很多个用户 产生很多session


    userId
    sessionId 用户通过自己 sessionId 查询自己的状态
    cookie：sessionId = id