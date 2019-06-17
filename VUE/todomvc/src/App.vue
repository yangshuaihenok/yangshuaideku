<template>
  <div class="">
    <counter />
  </div>
</template>

<script>
// 两个兄弟组件，共享count数据
// count 不能属于其中任意组件私有，   data(){},props
import Counter from './components/Counter';
export default {
  data(){
    return{
    }
  },
  components:{
    'counter':Counter
  },
  methods:{
    
  }
}
</script>

<style>

</style>
