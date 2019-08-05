# 对 es6 理解
    es6 相对es5 ECMAScript 的第六次修订
    es2015 随着bable webpack构建工具的成熟，
    es6 已经成为js 编程的事实标准
    我认为es6比es5更简洁，提高开发效率，让js更优雅

   ---- 新增的特性
      --let 变量 和 const 常量声明，具有var没有的块级作用域，
        比如循环事件监听时闭包就不需要了，
        var 有变量提升作用域的能力，let const 不会到顶级对象，使用的变量或常量一下要升级
      
      --箭头函数
        简化函数的表达形式
        1，不用function关键字 ()=>{}
        2, 如果只有一个参数，()也可以省去
        3，如果代码直接返回，{}也可以省去 右侧就是返回值
        4，有效规避了this丢失的问题，指向上一级

      --模板字符串
        增强版字符串，用``，他的多行表达方式特别适合 react jsx template 的书写
        DOM 或者HTML模板的构建 更加优雅
      
      --解构赋值
        可解，spread 可合，reset 从对象或者数组中提取值，对变理进行赋值，提高开发效率

      --for of 循环
        for 计步 数组 友好，但是对象 Set Map 类数组 以及字符串都可以遍历

      --Set es6新增的数据解构，类似数组，唯一的，没有重复的值

      --import export es6 的模块化，es6原生支持的module，
        将JS代码分割成不同小块独立开发，一个文件一个类，一个独立的模块，
        比如说utils api

      -- ...展开符

      --终于支持原生的class关键字了， js 有了传统的面向对象的写法，extends 不过他只是语法糖，
        底层还是基于原型的面向对象

      -- promise 为JS提供了异步解决方案，规避了回调地狱(then)，代码的书写和执行是一样的

      --更好的异步解决方案的 es7 的async await
        koa就是基于 async await 快速的取代了express的地位

      --vue react 响应式编程依赖的proxy defineProperty 监听对象的改变做一些事情

      --es6提供新的数据类型，Symbol