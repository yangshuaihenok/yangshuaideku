<template>
    <div class="look">
        {{msg}}
        {{$route.params.id}}
        <router-view/>
    </div>
</template>

<script>
export default {
    name:'Look',
    data(){
        return{
            msg:'look look'
        }
    }
}
</script>
