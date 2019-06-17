<template>
  <div id="app">
    <button @click="decrement">-</button>
    clicked {{$store.state.count}} times,count is{{eventOrOdd}}
    <button @click="increment">+</button>
    <button @click="incrementIfOdd">incrementIfOdd</button>
    <button @click="incrementAsync">incrementasync</button>
  </div>
</template>

<script>
// 借
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'App',
  computed:mapGetters([
      'eventOrOdd'
    ]),
  methods: mapActions([
    'increment',
    'decrement',
    'incrementIfOdd',
    'incrementAsync'
  ])
}
</script>

<style>

</style>
