## script
   1.下载  2. 执行
1. async
    html parse / 下载   并行
    下载完就执行 顺序无法控制
2. defer
    html parse /下载  并行
    整个文档加载完成之后 按照script在文档出现的顺序执行
3. 没有属性
    html parse 和 js 下载执行 都是互斥的

## crossorigin
用于可以引入跨域资源的标签： img  link  script
crossorigin 代表要协商跨域
后端没设置Access-control-* 就会出错
  1. anonymous
    如果使用这个值，会在请求头中加一个origin属性，
  2. use-credentials
    请求的时候带上cookie等验证用户的信息

如果未设置crossorigin,跨域js发生错误，将会向window.onerror 提供很少的信息,通过crossorigin属性可以得到更详细的信息
