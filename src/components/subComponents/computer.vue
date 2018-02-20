<template>
    <div class="mui-numbox" data-numbox-min='1' >
        <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
        <input @change="countchange" ref="nobox" class="mui-input-numbox" type="number" value="1" />
        <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
</template>

<script>
import mui from '../../mui/js/mui.js'
    export default{
        methods:{
            countchange(){
                const count = parseInt(this.$refs.nobox.value)
                this.$emit("func",count)

            }
        },
        mounted(){
            //初始化mui的数字框
            mui('.mui-numbox').numbox()
            console.log(this.max);//undefind   [商品详情,生命周期中有异步的请求，不知道你什么时候回来，所以组件创建完毕值还没回来]
            //watch用法
        },
        props:['max'],
        watch:{
            'max':function(newval,oldval){
            // console.log(newval)
            mui('.mui-numbox').numbox().setOption('max',newval)
            
            }
        }
    }    
</script>
<style lang="scss" scoped>

</style>

