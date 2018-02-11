<template>
  <div class="photoinfo-container">
     
    <h3 class="title">{{ getpinfo.title }}</h3>
    <p class="info">
      <span>发表时间：{{ getpinfo.add_time | dateFormat }}</span>
      <span>点击：{{ getpinfo.click }}次</span>
    </p>
    <div class="thumbs">
        <img class="preview-img" v-for="(item, index) in getlunpinfo" :src="item.src" height="100" @click="$preview.open(index, getlunpinfo)" :key="item.src">
    </div>
     
     <div class="content" v-html="getpinfo.content"></div>

     <commen :id="id"></commen>
  </div>
</template>

<script>

    import commen from '../subComponents/Component.vue'

    export default{
        data(){
            return{
                getpinfo:{},
                getlunpinfo:[]
            }
        },
        created(){
            this.getphotoinfo()
            this.getlunboph()
        },
        methods:{
            async getphotoinfo(){
                const {data}=await this.$http.get('/api/getimageInfo/'+this.id)
                console.log(data);
                
                if(data.status===0){
                    this.getpinfo=data.message[0]
                }
            },
            async getlunboph(){
                const {data}=await this.$http.get('/api/getthumimages/'+this.id)
                if(data.status===0){
                    data.message.forEach(item=>{
                        item.w=600
                        item.h=600
                    })
                    this.getlunpinfo=data.message
                }
            }
        },
        props:['id'],
        components:{
            commen
        }
    }
</script>

<style lang="scss" scoped>
.photoinfo-container {
  padding: 3px;

  .title {
    font-size: 15px;
    text-align: center;
    margin: 15px 0;
    color: #26a2ff;
  }
  .info {
    font-size: 13px;
    display: flex;
    justify-content: space-between;
  }
  .content {
    line-height: 30px;
    font-size: 13px;
  }

  .thumbs {
    img {
      margin: 10px;
      box-shadow: 0 0 7px #666;
    }
  }
}
</style>

