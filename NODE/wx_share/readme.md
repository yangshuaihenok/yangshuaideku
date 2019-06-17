传统的MVC后端开发

MVVM
Model Page({data:{}})
View  Template wxml
VM {{}} wx:for

MVC 
  model 数据库
  view  静态页面
  controller


web HTTP服务器
端口--3000
Mysql--3306
webserver--80

用户request 通过IP+端口

http
    .createServer(function(request,response){

    })
