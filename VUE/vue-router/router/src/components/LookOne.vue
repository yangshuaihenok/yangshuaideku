<template>
    <div class="look-one">{{msg}}
        <div class="go-two" @click='goTwo'>go to looktwo</div>
    </div>
</template>

<script>
export default {
    name:'LookOne',
    data(){
        return{
            msg:'LOOKONE'
        }
    },
    methods:{
        goTwo(){
            // this.$router.push('/look/look-two')
            // this.$router.push({path:'/look/look-two'})
            this.$router.push({ name:'LookTwo',params:{id:123} })
        }
    },
    beforeRouteEnter (to,from,next){
        console.log(from,to)
        next()
    },
    beforeRouteLeave (to,from,next){
        console.log(from,to)
        next()
    }
}
</script>
