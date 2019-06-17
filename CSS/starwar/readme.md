opacity 透明度

transform:scale 缩放

&nbsp; 空格 （可连续使用）

<br/>或者<br>在需要换行的段落前直接加

<strong>文本</strong>  加粗文本

<span>文本</span> 为文本设置样式 需要在<head>标签中定义span 

<q>文本</q> 给文本加双引号（引用别人的话 自动加引号 适用短句）

<blockquote>引用文本</blockquote> （ 适用长句）

<b>粗体</b>

<i>斜体</i>

<u>下划线</u>

<sub>下标</sub>

<sup>上标</sup>

<hr/> 在文本后面加分割线（hr{ border:1px solid red;}  给分割线定义样式）

<address>联系地址信息</address>

<code>代码语言</code> 注：如果是多行代码，可以使用<pre>标签。

 <audio src="./bgm.mp3" id="bgm"></audio>   在body标签内使用 引用歌曲

<style type="text/css">
  table tr td,th{border:1px solid #000;}    给表格加边框样式
</style>

  .test{    ---------------画一个三角形
      width: 0;
      height: 0;
      border-left: 100px solid transparent;
      border-right: 100px solid transparent;
      border-top: 100px solid #000;
      /* border-bottom: 100px solid #000; */
    }



<table summary="本表格记录2012年到2013年库存记录，记录包括U盘和耳机库存量">  不会显示 只传给搜索引擎
  <caption>2012年到2013年的库存记录</caption>    显示在表格之上的表名
  <tbody>
    <tr>
      <th>班级</th>      th 列表头行
      <th>学生数</th>
      <th>平均成绩</th>
    </tr>
    <tr>
      <td>一班</td>     列表内容
      <td>30</td>
      <td>89</td>
    </tr>
    <tr>
      <td>二班</td>
      <td>35</td>
      <td>85</td>
    </tr>
     <tr>
      <td>二班</td>
      <td>35</td>
      <td>85</td>
    </tr>
  </tbody>
</table>

<ul>
  <li>信息列表</li>
  <li>信息列表</li>    默认在每个信息前加一个黑点（<ul><li>配套使用）
   ......
</ul>           

<ol>
   <li>信息</li>
   <li>信息</li>       默认在每个信息前面加一个序号，（从 1. 开始）
   ......
</ol>

<a  href="目标网址"  title="鼠标滑过显示的文本">链接显示的文本</a>  在浏览器本窗口打开链接

<a href="目标网址" target="_blank">click here!</a>               在浏览器新窗口打开链接

 <img src="图片地址" alt="下载失败时的替换文本" title = "提示文本">  title中是当鼠标停留图片上是显示的文字


        需要文本输入的都要用到表单form


 <form   method="传送方式"   action="服务器文件">         label标签不会向用户呈现任何特殊效果，它的作用是为鼠标用户改                                                         进了可用性。如果你在 label 标签内点击文本，就会触发此控件。
    <label for="username">用户名:</label>                 (注意：标签的 for 属性中的值应当与相关控件的 id 属性值一                                                        定要相同。)
    <input type="text" name="username" />            type="text"决定input的框是可以输入文本的框
    <label for="pass">密码:</label>                        
    <input type="password" name="pass" />            type="passwor" input框只能输入英文和数字
    <input type="submit" value="确定"  name="submit" />           type="submit"决定input是一个确定按钮  
    <input type="reset" value="重置" name="reset" />              type="reset"决定input是一个重置按钮  
   
   账户: 
	 <input type="text" name="username">     效果与上面一二行相似    
    
    
   <label>个人简介：</label>                                   <textarea>用在form标签里 用于输入大段文本
    <textarea cols="50" rows="10">输入默认值</textarea>            rows="行数" cols="列数"  
 
   <label>性别:</label>
    <label>男</label>
    <input type="radio" value="1"  name="gender-man" />        当 type="radio" 时，控件为单选框                  <label>女</label>                                          当 type="checkbox" 时，控件为复选框
    <input type="radio" value="2"  name="gender-woman" />
    
    你喜欢运动吗 <br/>
   <input type="radio" name="ridiolove" value="喜欢" />喜欢
   <input type="radio" name="ridiolove" value="不喜欢" />不喜欢       同一组的单选按钮中  Name取值一定要相同
   <input type="radio" name="ridiolove" value="无所谓" />无所谓
    对哪些运动感兴趣？<br/>
    <input type="checkbox" name="checkbox1" value="跑步" />跑步
    <input type="checkbox" name="checkbox2" value="登山" checked="checked" />登山
    <input type="checkbox" name="checkbox3" value="游泳" checked="checked" />游泳
    <input type="checkbox" name="checkbox4" value="打球" />打球

  <label>爱好:</label>
    <select multiple="multiple">                             multiple设置选项能多选 （需要按住ctrl键）
      <option value="看书">看书</option>                         设置一个只有四个选项的下拉列表
      <option value="旅游" selected="selected">旅游</option>      selected设置默认显示的值
      <option value="运动">运动</option>
      <option value="购物">购物</option>
    </select>

 </form>

CSS

<head>
<style type="text/css">
  p{
    font-size:12px              在英文大括号“｛｝”中的的就是声明，属性和值之间用英文冒号“：”分隔。当有多条声明时，中间                                     可以英文分号“;”分隔
    color:red
    font-weight:bold
  }

  /* >作用于元素的第一代后代， 空格作用于元素的所有后代。 */
  .first span{color:red;}

  .food>li{
      border:1px solid red;  /* 这行代码会使class名为food下的子元素li（水果、蔬菜）加入红色实线边框。 */
  }

  a:hover{color:red;}   设置一个伪类使 a 标签鼠标滑过的状态设置字体颜色变红

</style>
</head>
<body>
  
  {font-size: px  字体大小
  font-weight:bold  粗体
  font-sytle:italic  斜体
  text-decoration:line-through 删除线
  }
  <h1>勇气</h1>
    <p class="first">三年级时，我还是一个<a href="http://www.imooc.com">胆小如鼠</a>的小女孩，上课从来不敢回答老师提出的问题，生怕回答错了老师会批评我。就一直没有这个勇气来回答老师提出的问题。学校举办的活动我也没勇气参加。</p>
    <p id="second">到了三年级下学期时，我们班上了一节公开课，老师提出了一个很<span>简单</span>的问题，班里很多同学都举手了，甚至成绩比我差很多的，也举手了，还说着："我来，我来。"我环顾了四周，就我没有举手。</p>
    <img src="http://img.mukewang.com/52b4113500018cf102000200.jpg" >

</body>


标签的权值为1，类选择符的权值为10，ID选择符的权值最高为100
当具有相同权重值时，处于后面的css样式会被应用
最高权重值：!important


