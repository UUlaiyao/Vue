<template>
<div>
    <com :id="id"></com>
</div>
 
</template>
<script>
    import com from '../subComponents/Component.vue'
    export default{
        props:['id'],
        components:{
            com
        }
    }
</script>

<style lang="scss" scoped>

</style>
