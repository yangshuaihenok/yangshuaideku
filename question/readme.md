# 一  js全局执行上下文为我们创建了两个东西：全局对象和this关键字
    new 的实现原理
        1 创建一个空对象，创造函数的this指向这个空对象
        2 这个新对象被执行原型连接
        3 执行构造函数，将属性或者方法添加到this引用的对象上
        4 如果构造函数中没有返回其他对象，那么返回this，即创建的新对象。否则，返回构造函数返回的对象

# 二  call  bind  apply  
    1,  b.call(a,2,3,4) 把b的this指针作用域强行指向a中，括号内可以有多个参数，第一个是要转变的作用域指向，后面的参数是函数里面要用到的

    2,  b.apply(a,[]) 和call相似 但是后面的数值参数需要用数组

    3,  b.call() || b.apply() 此时this的作用域指向window

    4, var c = b.bind(a)  
        c() 4
        bind返回的是一个修改过的函数 要用函数的方法去调用
        bind（）可以传参，c()也可以传，但是是按照顺序接收的

# 三  深浅拷贝
   1. 数组解构:
     let [x,y] = [1,2]  // x=1  y=2
   2. 对象解构
     let {foo,bar} = {foo:'aaa',bar:'bbb'}  // foo='aaa',bar='bbb'
     允许给赋值的变量重命名
     let {foo:baz} = {foo:'abc'}  // console.log(baz)才能输出 'abc'

   3. 浅拷贝
        只是对第一层属性进行拷贝，当第一层的属性为基本数据类型时，
        新对象和原对象互不影响。但是如果第一层的属性是 /复杂数据类型/ 时
        那么新对象和原对象的属性值其指向的是同一块内存地址
   4. 深拷贝
        是将对象以及值复制过来，两个对象修改其中任意一个的值，其中一个不会改变

# 四  闭包
    闭包是有权限访问另一个函数作用域中的变量的函数 
      作用
       1. 能够访问函数定义时所在的词法作用域（阻止其被回收）
       2. 私有化变量
       3. 模拟块级作用域
       
# 五  数组去重
    Set()  自带api. Set()自动把重复的去掉
    indexOf() 自带api. 在调用indexOf的数组内查找括号内的数的下标、索引。
    includes()  自带api. 检查对调用它的数组内有没有括号内的，返回 true 和 false

# 六  防抖节流
    

# 七  判断数据类型及原理
    typeof 判断简单数据类型   let a = 'hello', b = 123,c = true,d = undefined,e = null,
    instanceof 判断复杂数据类型  f = {}, g = [], h = function(){}

    instance的原理： __proto__是每一个实例都有的属性，可以访问[prototype]属性，实例的__proto__与其
                    构造函数的prototype指向的是同一对象


# url长度的限制
    HTTP协议并没有限制url的长度，是浏览器或者web浏览器做了Url 长度的限制，并且只针对于get请求做的限制
# get post请求
  - 在缓存方法上的区别
    get请求类似查找的过程，用户获取数据，可以不用每次都与数据库链接，所以可以使用缓存
    post 不同，post一般做的是修改和删除数据的工作，所以必须与数据库交互，所以不能使用缓存


# 前端数据流
    在dom标准的事件模型中，事件流包括下面几个阶段：
        事件捕获阶段
        处于目标阶段
        事件冒泡阶段
    addEventListener第三个参数，为true时捕获，false时冒泡，默认是false （IE 只支持事件冒泡）


# 懒加载 预加载
    预加载：提前加载图片，当用户需要查看图片时可以直接从本地缓存中渲染
    懒加载：最为服务器的前端优化，减少请求或延迟请求
    （懒加载对服务器有一定的缓解压力作用，预加载则会增加服务器的压力）


# js 中的各种位置
    clienHeight: 表示可视区域的高度，不包含border和滚动条
    offsetHeight：表示可视区域的高度，包含border和滚动条
    scrollHeight：表示所有区域的高度，包含因为滚动被隐藏的部分
    clienTop：表示边框border的厚度，在未指定的情况下一般的为0 
    scrollTop：滚动后被隐藏的高度


# js拖拽功能的实现
    通过mousedown mousemove mouseup 原生方法计算鼠标移动的 X Y 坐标，再赋予需要拖拽的绝对位置 实现

# 类的创建于与继承


# click在ios手机上有300ms的延迟  原因及解决方案
    1.<meta name="viewport" content="width=device-width, initial-scale=no">
    2.FastClick,第三方脚本,原理：监测到touchend事件后，立刻发出模拟click事件，并把浏览器300ms之后真实发生的事件阻断


# cookie sessionStorage localStorage的区别
    cookie: 数据始终会在同源的HTTP请求中携带（即使不需要），即cookie在浏览器和服务器之间来回传递
        而sessionStorage和localStorage 不会自动把数据发给服务器仅在本地保存
        cookie还有路径（path）概念，可以限定cookie只属于某个路径下
        cookie存储大小只有4kb左右

    sessionStorage：仅在当前浏览器窗口关闭前有效，不能长久保存

    localStorage：在所有的同源窗口都是共享的，cookie也是
        缓存大小在5M左右
