<template>
    <div>
        <h3>动态渲染 vue文件的组件</h3>
        <iD :code="code"></iD>
    </div>
</template>

<script>
import iD from '../components/com/display.vue'
import defaultCode from './default-code'
export default {
    data() {
        return {
            code:'default'
        }
    },
    components:{
        iD
    },
    methods: {
        
    },
}
</script>

<style>

</style>
