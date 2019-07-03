import { State } from '@/store/interface';
import { Commit } from 'vuex';
import { getMovieList } from '@/api/movie';

const getters = {
    
}
const state: State = {
    movieList:[
        {
            name:'阿凡达',
            title:'科幻',
            id:'0001'
        }
    ]
}
const mutations = {

}
const actions = {
    // 与api交流  前后端的分离点
    // commit mutations
    async movieList(context:{commit:Commit},cate:string){
        const res = await getMovieList(cate)
          .then((response)=>response)
        return res;
    }
}
export default {
    state,
    getters,
    mutations,
    actions
}