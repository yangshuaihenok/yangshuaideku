http  req + res
状态码：HTTP响应的一部份
  具体数字：浏览器 用户代理  发送正确代码
statusCode 200 浏览器 成功
header  内容   text/plain


hello world  响应体

1xx  请求正在处理
2xx  请求成功处理
3xx  重定向
  www.xiaomi.com  -> www.mi.com

301 永久跳转,会让浏览器缓存，http://localhost:8080/ 不会再走服务器
302 临时跳转