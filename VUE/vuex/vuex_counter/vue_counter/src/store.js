import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

//管理
const state = {
    count:0
}
// 组件里的computed
const getters = {
    eventOrOdd : state => state.count % 2 === 0 ? 'event':'odd'
}
//改变  唯一
const mutations = {
    increment(state){
        state.count++
    },
    decrement(state){
        state.count--
    }
}
//动作
const actions = {
    increment:({ commit }) => commit('increment'),
    decrement:({ commit }) => commit('decrement'),
    // actions 不可以修改state ,可以读
    incrementIfOdd({ commit,state }){
        if((state.count+1) % 2 === 0){
            commit('increment')
        }
    },
    incrementAsync({commit}){
        // actions axios 异步取数据
        setTimeout(() => {
            commit('increment');
            resolve();
        }, 2000);
    }
}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})