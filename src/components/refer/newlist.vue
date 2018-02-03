<template>
  <div>

    <h3 class="title">{{ getlists.title }}</h3>
    <p class="info">
      <span>发表时间：{{ getlists.add_time }}</span>
      <span>点击：{{ getlists.click }}次</span>
    </p>
    <hr>

      <h1>new 闲情</h1>
  </div>
</template>

<script>
    export default{
        data(){
            return{
                getlists:{},
                
            }
        },
        created(){
            this.getnewlists()
        },
        methods:{
            async getnewlists() {
                const { data } = await this.$http.get('/api/getnew/'+this.id)
                console.log(data);
                if(data.status===0){
                    this.getlists=data.message[0]
                }
                
            }
        },
        props:['id']
    }
</script>

<style lang="sass" scoped>

</style>

