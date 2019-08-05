- js 垃圾回收是自动的
- 回收内存
    function 局部变量
    跨页面

1. 可达性 作为评判依据
    显而易见，因为一些原因不能被删除
    - 全局变量 // 不会被销毁
    - 当前嵌套调用链上的其他函数的变量和参数
    这些值被称为根
2. 如果引用或引用链可以从根访问任何其他值，则认为该值可以访问

let user ={
    name:'yang'
}
global
  |
Object
name:'yang'

user是一个全局变量，= 引用式赋值
name 基础属性  ——》字符串类型的 yang

user = null // 触发一次垃圾回收


let user ={
    name:'yang'
}
let admin = user
user = null // 回收不了