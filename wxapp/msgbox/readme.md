- 组件思维
  弹窗组合了一些标签，形成了独立的弹窗功能，在其他页面也要用到，组合成了一个独立的组件，<dialog/>
  页面由组件拼装而成

- 组件语法
  与Page大同小异
  Component({
      data:{},
      properties:{属性类型定义
        title:{
            type:String,
            value:'标题'
        }
      },
      methods:{
          
      }

  })