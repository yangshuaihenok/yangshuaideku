## 跨域
    跨域是浏览器上的安全策略
    同源策略：同协议 域名 端口 都一致，才算是同源。不存在跨域
    不同源 存在跨域

## cors
    规定了一组http的头部字段作用是：允许那些网站通过浏览器有访问的权限
    1. access-X
    2. cookie
    3. 浏览器会先以options 请求方法发起一个预检（preflight）请求，获取是否允许当前的域请求，
       服务器允许之后才会发起正式的请求

## 代理
    1. nginx

## iframe + postMessage
    1. 前端页面 通过iframe引入一个后端目录下的html,
       iframe是不受同源策略限制的
    2. postMessage 用于两个窗口之间的传递数据
    3. 前端页面 通过postMessage 向后端目录下的html 传递接口所需要的请求参数
    4. 后端页面 通过postMessage向前端页面传递接口结果

## iframe + window.name
    iframe共享window.name

## jsonp