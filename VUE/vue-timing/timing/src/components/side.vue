<template>
    <div class="side">
        <div class="duration">
            <span class="side-duration">已有时长</span>
        </div>
        <div class="hour">
            <span class="side-hour">{{how}}小时</span>
        </div>
    </div>
</template>

<script>
export default {
    props:{
    },
    data() {
        return {
            how:0
        }
    },
}
</script>

<style lang="stylus" scoped>
    .side
        position absolute
        top 120px
        width 180px
        height 250px
        left 20px
        text-align center
        margin 0 10px 0 10px
        border 1px solid #aaaaaa
        border-radius 5%
        .duration
            font-size xx-large
            background #f7f7f7
            line-height 125px
            border-bottom 1px solid #aaaaaa
        .hour
            font-size xx-large
            line-height 125px

</style>
