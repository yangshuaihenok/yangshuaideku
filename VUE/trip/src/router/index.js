import Vue from 'vue'
import Router from 'vue-router'
import { Toast } from 'mand-mobile'
import User from './module/user'

Vue.use(Router)

const commonRoutes = [
  {path: '/404',component: ()=> import ('@/components/RouterError/404')},
  {path: '/401',component: ()=> import ('@/components/RouterError/401')},
  {path: '*',redirect:'/404'},  // redirect 重定向 用户输入不存在的页面时 跳转到404页面
  {path: '/',redirect:'/trip'},  // 输入根路径 8080不在  跳转到trip
]

// 分模块的路由，合并传入Router
let router = new Router({
  base: process.env.BASE_URL,
  routes: commonRoutes.concat(User)
})

// 导航守卫，非登录状态先登录
router.beforeEach((to,from,next)=>{
  let tmp = localStorage.getItem('user')
  if(!tmp && to.name !== 'Login'){
    Toast.succeed('需要先登录才能继续访问',1500)
    next({ path:'/login' })
    return
  }
  next()
})
export default router