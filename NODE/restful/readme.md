- json 格式 是标准的数据交换
- 前后端开发，/json  json格式来交流
- 全栈 fullstack

- restful 一切都是资源
暴露资源
- 设计URL
    /posts
    /posts/:id
    /comments
    /comments/:id
    /posts/1/comments
HTTP 动词
GET 查询
加一条评论 增加一个资源
post 新增 /comments
DELETE动词  /posts/2  删除posts下的第二条
PUT/PATCH  (put 把新的所有内容替换掉旧的，patch 只要传要更新的局部内容)
     修改 /comments/2 body 最美的不是下雨天


-- restful 
    一切都是资源，url是唯一定位资源的符号
    他有一定的设计原则
    HTTP动词是web资源的状态转换动词

操作      SQL方法      HTTP动词
create    insert      post
read      select      get
update    update      put/patch
delete    delete      delete
