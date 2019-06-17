--清除浮动的几种方法
  1 在父元素闭合标签上加上 <div style="clear:left"></div>
  2 在父元素的css上加
    div.content{
    float:left;
   }
  3 使用css中的伪类after,给父元素div添加一个clearFix的class类
    .clearFix::after{
      content:'';
      diaplay:block;
      clear:both;
    }
  4 利用BFC简称（块级格式化上下文） 的效果来弥补父容器的高度塌陷
    div.content{
      overflow:hidden;auto;scroll;
    }
  5 尼古拉斯大师 方法：把父容器的display设置为table，
