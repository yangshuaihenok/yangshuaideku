<template>
    <div class="task">
        <div class="t">
            <h1>任务追踪</h1>
        </div>
        <div class="r">
            <p>
                <strong>
                    <router-link to="/list">创建一个任务</router-link>
                </strong>
            </p>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
    .task
        position absolute
        top 120px
        width 510px
        height 237px
        left 260px
        text-align center 
        background #f7f7f7
        border-radius 5px
        .t
             font-size 50px
             padding 20px
        .r
            font-size 20px
            padding 20px

</style>
