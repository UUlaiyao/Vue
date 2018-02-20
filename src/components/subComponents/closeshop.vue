<template>
    <div class="mui-numbox" data-numbox-min='1' style="height:26px">
        <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
        <input @change="countchange" ref="nobox" class="mui-input-numbox" type="number" :value="initnumber" />
        <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
</template>

<script>
import mui from '../../mui/js/mui.js';
import { mapMutations } from 'vuex'

    export default{
        methods:{
            ...mapMutations(['updatedGoodscount']),
            countchange(){
                const count = parseInt(this.$refs.nobox.value)
                // this.$emit("func",count)
                this.updatedGoodscount({id:this.id,count:count})
            },

        },
        mounted(){
            //初始化mui的数字框
            mui('.mui-numbox').numbox()
          
        },
        props:['initnumber','id']
     
    }    
</script>
<style lang="scss" scoped>

</style>