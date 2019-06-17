## css 预编译语言stylus
 写的是stylus.styl 在浏览器端运行的是.css
 前端工作流在发生改变
 界面开发工作被重新定义了，从小米加步枪变生产线
 stylus main.styl -o main.css
 编译 -o 输出
 stylus 提供了css不具备的变量定义，模块化，定义函数，快捷   是新的语法
 -w watch 监听文件修改，同步编译


 1. 变量
 2. 减少输入{};:
 3. 函数
 4. 嵌套
    .book-bought 购买模块
      .lable
        img

flex是css 在移动时代最爽的布局方案，手机端子元素们对齐方式， 水平 主轴 justify-content
纵轴 align-items center

传统方案是 img + 兄弟终点 vertical-align:middle



#flex的考点  自适应
1. flex:1 比例划分，只给一个元素设置，占据其他元素之外的所有
2. 父元素与多个子元素之间的关系
   水平对齐 justify-content
   垂直对齐 align-items
3. 剩余空间 flex-grow