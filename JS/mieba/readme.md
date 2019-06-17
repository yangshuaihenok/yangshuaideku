- 小程序 诞生于react大红之后
  MVVM 组件 vant
  数据驱动界面
  Vue 语法简洁
- Vue 与小程序共异
1. 思想
  网页，new Vue({
    el:'#app'
  })
2. 组件
  Vue.component('',{
    template:'',
    data(){
      return {

      }
    }
  })

- mvvm不需要dom 因为dom低效
  所以用ref查找元素节点

- 组件的思想
 Vue.component('Heroes',{
   props:{
     参数：参数的约束
   }
   template：`

   `
 })

 组件化思维
 <Heroes :heroes="heroes"/>

 小程序-- src="{{item.src}}"
 Vue --  :src="item.src"

 props
 ref="allAudio" this.$refs