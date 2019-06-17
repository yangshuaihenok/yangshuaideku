el: #root  根挂载节点
App component + vue-router + vuex 混合在一起的应用

new Vue({
    el:'#app',
    render: h=>h(App)
})


- Vue 难点： 数据管理
    组件状态，data(){},
    兄弟组件需要共享时，登录
    用props 传递过去
    应用状态

- 当页面有多个组件要共享状态时
    将共享状态放在这些组件的父组件data里管理
    状态唯一，放在一个地方(父组件) 方便管理
    如果不一样，状态有可能不同步
    父子组件通信，v-on:increment="increment"
    props: this.$emit();