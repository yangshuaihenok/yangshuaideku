<template>
    <div class="header">
        <router-link tag="div" class="h header-plan" to="/">
            <span class="plan">计划板</span>
        </router-link>
        <router-link tag="div" class="h header-home" to="/home">
            <span class="home">首页</span>
        </router-link>
        <router-link tag="div" class="h header-list" to="/list">
            <span class="list">计划列表</span>
        </router-link>
    </div>
</template>

<script>
export default {
    name:'top',
    data() {
        return {
            
        }
    },
}
</script>

<style lang="stylus" scoped>
.header 
    width 100%
    height 70px
    background #aaaaaa47
    display flex
    padding-left: 115px;
    .h
        padding 0 20px
        line-height 70px
    .header-plan
        font-size x-large
</style>
