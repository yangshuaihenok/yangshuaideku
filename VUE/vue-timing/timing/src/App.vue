<template>
  <div id="app">
    <!-- 头部header -->
    <v-header></v-header>
    <side></side>
    <task></task>
  </div>
</template>

<script>
import header from '@/components/header'
import side from '@/components/side'
import task from '@/components/task'
export default {
  name: 'App',
  components:{
    "v-header":header,
    side,
    task
  }
}
</script>

<style>

</style>
