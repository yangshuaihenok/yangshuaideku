-- koa 中间件 middleMare
app.use(middleMare)
next 下一个中间件
每一次 use 都会注册一个中间件
[middleMare1,middleMare2]
  - async 函数
  - 洋葱模型：一层一层往里执行 最后一个中间件执行完了，一层层往外执行剩余的代码
  - 解耦 ：每一个中间件负责一件事


以 X 开头的，自定义响应头

-- package.json 项目描述
   依赖： npm install下来的文件
   -S
   ```json
   "dependencies": {
    "ejs": "^2.6.1",
    "koa": "^2.7.0",
    "koa-views": "^6.2.0"
  }
  ```

-- koa 第三方中间件
koa ctx 就是req+res组成的对象
ctx:{
    req:{},
    res:{}
}
koa-views
接着扩展ctx,接着往ctx塞东西
ctx:{
    req:{},
    res:{}，
    render:{}=>{}
}

--ejs
  <%= %>原样输出
  <%- %>解析html
  <% %> 解析 JS