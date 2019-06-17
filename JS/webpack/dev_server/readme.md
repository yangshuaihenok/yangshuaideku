- npm run script里的各种工作脚本一定要在根目录
  1， dev 开发时运行的脚本
  2， start 启动服务器的脚本  live-server
  3， build 开发完成后，一键build  生成上线文件  压缩过后的

- webpack bundle 打包工具 一切都可以打包
  1， webpack src/index.js dist/main.js
  2, webpack-cli 命令行的工具
  3， webpack-dev-server 运行webpack编译同时，启动8080端口，web-server


- html template
  1, css
  2, js

- resolve是extensions 加后缀
  module里加 rules:[
                规则
                js->babel->loader->preset->env
                css->style->loader
                stylus->loader

            ]

- 一切皆可打包，打包成可运行的js
  生成的文件，最好Js css 分开
  一个文件，HTTP请求 
  并发多个请求 拆成少数几个文件，js css必须分离，
  样式的抽离