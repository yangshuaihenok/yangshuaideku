const { createStore,combineReducers } = require('redux');
// action.type 常量 决定了dispatch这次要干什么

// reducer 可以收到action的信息
const add = {
    type:'INCREMENT'
}
const reduce = {
    type:'DECREMENT'
}
function filmReducer(state = [], action){
    switch (action.type){
        case 'ADD_FILM':
            return [...state,action.film];
        default:
            return state;
    }
}
function reducer(state,action){
    console.log('触发-----',action.type)
    if(action.type === 'INCREMENT'){
        return state+1
    }else if(action.type === 'DECREMENT'){
        return state-1
    }else{
        return 0;
    }
}
const index = combineReducers({
    count:reducer,
    films:filmReducer
})
// createStore 只接受reducer
const store = createStore(index);
// console.log(store.getState()); // 获取reducer返回的值

// 回调 每次reducer被调用 自发运行
store.subscribe(()=>{
    console.log(store.getState())
})
store.dispatch(add); // 调用了reducer, 参数action是一个对象
store.dispatch(add)
// console.log(store.getState()); // 获取reducer返回的值
store.dispatch(reduce)
// console.log(store.getState());

store.dispatch({
    type:'ADD_FILM',
    a:1,
    b:2,
    id:3,
    film:{name:'0000000000'}
})