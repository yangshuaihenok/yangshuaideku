<template>
    <div class="sidebar" :class="{showSidebar: showSidebar}">
        <div class="sidebar-con" :class="{showbar: showSidebar}">
            <div class="head">
                <div class="avatar">
                    <img src="http://p1-tt.bytecdn.cn/large/pgc-image/54b94f79a2ec4f09bc457137b35c3fb0" alt="" />
                </div>
                <div class="name"><span>杨帅</span></div>
            </div>
            <div class="menu">
                <ul>
                    <li @click="_hidebar">
                        <router-link to="/user">
                        <i class="icon">&#xe63c;</i>
                        <span>个人中心</span>
                        </router-link>
                    </li>
                    <li @click="_hidebar">
                        <router-link to="">
                        <i class="icon">&#xe631;</i>
                        <span>音效调整</span>
                        </router-link>
                    </li>
                    <li @click="_hidebar">
                        <router-link to="">
                        <i class="icon">&#xe65b;</i>
                        <span>定时关闭</span>
                        </router-link>
                    </li >
                        <li @click="_hidebar">
                        <router-link to="/user">
                        <i class="icon">&#xe601;</i>
                        <span>听歌识曲</span>
                        </router-link>
                    </li>
                        <li @click="_hidebar">
                        <router-link to="">
                        <i class="icon">&#xe600;</i>
                        <span>帮助</span>
                        </router-link>
                    </li>
                    <li @click="_hidebar">
                        <router-link to="">
                        <i class="icon">&#xe61f;</i>
                        <span>设置</span>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
        <div v-show="showSidebar" class="sidebar_mask" @click="_hidebar"></div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'    //mapGetters可以把getters里的东西全部解构出来
export default {
    data () {
        return {
        }
    },
    computed:{
        ...mapGetters([
            "showSidebar"          //拿到了showSidebar这条数据
        ])
    },
    methods:{
        _hidebar () {
            this.$store.dispatch('setShowSidebar',false)                                //这里能用是因为在main.js里引入了store并且在Vue的实例上挂载了store所以能使用 dispatch 调用actions里的方法
        },
        _show () {
            this.$store.dispatch('setShowSidebar',true)
        }
    }
}
</script>

<style lang="stylus" scoped>
@import "../assets/css/function"
.sidebar 
  color #e8e8e8
  .sidebar-con 
    background #040308
    position absolute
    top 0
    left px2rem(-400px)
    transform translateZ(0)
    opacity 0
    width px2rem(350px)
    z-index 1002
    height 100%
    overflow auto
    transition all 0.3s ease

    &.showbar 
      transform translateX(px2rem(400px))
      opacity 1
    
    .head 
      text-align center
      .avatar 
        width px2rem(90px)
        height 2.4rem
        // background #f1f1f1
        border-radius 50%
        margin px2rem(60px) auto px2rem(15px)
        img 
          width 100%
        
      
      .name 
        font-size px2rem(32px)
      
    
    .menu 
      margin-top px2rem(30px)
      ul 
        li 
          height px2rem(90px)
          line-height px2rem(90px)
          a 
            display block
            padding-left px2rem(60px)
            .icon 
              font-size px2rem(36px)
              vertical-align middle
            
            span 
              vertical-align middle
              font-size px2rem(24px)
              padding-left px2rem(20px)
              color #fff
            
          
          &hover 
            .icon,
            span 
              color #902444
  .sidebar_mask 
    position fixed
    width 100%
    margin 0 auto
    top 0
    left 0
    bottom 0
    right 0
    z-index 1001
    background rgba(0, 0, 0, 0.4)
</style>
