<template>
    <div class="main-content">
        <Header></Header>
    </div>
</template>
<script>
import Header from '@components/common/Header'
// import Header from '../components/common/Header'
export default {
    name:'maincontent',
    data(){
        return {
            msg:'hello world'
        }
    },
    components:{
        Header
    }
}
</script>
