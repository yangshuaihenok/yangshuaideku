const code = 
`<template>
    <div>
        <input v-model="message"></input>
        {{message}}
    </div>
</template>
<script>
    export default{
        data(){
            return {
                message:''
            }
        }
    }
</script>`

export default code 

