函数的节流与防抖

- 搜索建议
   Google suggest
   input value =>ajax
   分词搜索
   key 没必要每次都触发Ajax  浪费性能
   过滤一些无效的请求，输入完整的一个词再去搜索


- 防抖的关键
   频繁的输入时，怎么减少请求
   debounce (ajax,500) 生成一个函数，控制执行，停止输入时，执行一次 
   setTimeout delay 之后一定会执行一次
   在规定时间内 被clear