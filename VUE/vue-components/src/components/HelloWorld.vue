<template>
  <div class="hello">
    <v-button size='small' @click.native="handleClick">按钮</v-button>
    <v-menu></v-menu>
  </div>
</template>

<script>
import button from './com/button'
import menu from './com/menu'
export default {
  name: 'HelloWorld',
  provide(){
    return {
      3:this.obj
    }
  },
  data () {
    return {
      msg:'喜欢唱、跳、rap、篮球',
      obj:{
        name:'蔡徐坤'
      }
    }
  },
  components:{
    "v-button":button,
    "v-menu":menu
  },
  methods: {
    handleClick(){
      // console.log(123)
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
