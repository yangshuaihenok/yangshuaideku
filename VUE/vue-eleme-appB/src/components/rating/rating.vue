<template>
    <div class="">
        <div class="rating">
            <div class="evaluation-left">
                <p class="one">{{score}}</p>
                <p class="two">综合评分 </p>
                <p class="three">高于周边商家{{rankRate}}%</p>
            </div>
            <div class="evaluation-right">
                <div class="attitude">服务态度<star></star>{{serviceScore}}</div>
                <div class="score">商品评分<star></star>{{foodScore}}</div>
                <div class="time">送达时间 38分钟</div>
            </div>
        </div>
    </div>
</template>

<script>
import star from '@/components/star/star'
export default {
    name:'Rating',
    data(){
        return{
          score:0,
          rankRate:0,
          serviceScore:0,
          foodScore:0,
        }
    },
    components:{
        star
    },
    created () {
    this.$http.get('https://www.easy-mock.com/mock/5ca2c29464930718b239eb94/lm/vue-eleme-rating')
      .then(res => {
        console.log(res)
        if (res.data.errno === 0) {
          
        }
      })
    this.$http.get('https://www.easy-mock.com/mock/5ca2c29464930718b239eb94/lm/vue-eleme-seller')
      .then(res => {
        console.log(res)
        if (res.data.errno === 0) {
          this.score = res.data.data.score;
          this.rankRate = res.data.data.rankRate;
          this.serviceScore = res.data.data.serviceScore;
          this.foodScore = res.data.data.foodScore;
        }
      })
  }
}
</script>

<style lang="stylus" scoped>
.rating
    display flex
    padding-top 10px
    .evaluation-left
        flex 1
        text-align center
        border-right 1.5px solid rgba(7, 17, 27, 0.5)
        .one
            color #e0620d
            font-size 26px
        .two
            font-size: 10px;
            line-height: 15 px;
        .three
            font-size 10px
            line-height 15px
            opacity 0.6
    .evaluation-right
        flex 2
        text-align center

</style>
