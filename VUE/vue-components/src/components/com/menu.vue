<template>
    <div class="menu">
        {{message}}
        <!-- {{name.name}} -->
        {{app.user}}
    </div>
</template>

<script>
import bus from '@/bus/bus'
export default {
    inject:['app'],
    data() {
        return {
            message:'美篮校队'
        }
    },
    created() {
        let self = this
        bus.$on('todo',(val)=>{
            this.message = val
            console.log(val)
        })
    },
}
</script>

<style>

</style>
