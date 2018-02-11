<template>
  <div class="newinfo-container">
    <h3 class="title">{{ getlists.title }}</h3>
    <p class="info">
      <span>发表时间：{{ getlists.add_time }}</span>
      <span>点击：{{ getlists.click }}次</span>
    </p>
    <hr>
    <div class="content" v-html="getlists.content"></div>
 

    <comments :id='id'></comments>  

  </div>
</template>

<script>
//导入子组件
import comments from '../subComponents/Component.vue'

export default {
  data() {
    return {
      getlists: {}
    };
  },
  created() {
    this.getnewlists();
  },
  methods: {
    async getnewlists() {
      const { data } = await this.$http.get("/api/getnew/" + this.id);
      // console.log(data);
      if (data.status === 0) {
        this.getlists = data.message[0];
      }
    }
  },
  props: ["id"],
  components:{
    comments
  }
};
</script>

<style lang="scss" scoped>
.newinfo-container{
    padding: 3px;
}
.title{
    font-size: 15px;
    color: red;
    text-align: center;
    margin: 15px 0;
}
.info{
    display: flex;
    justify-content: space-around;
    color: #26a2ff;
    font-size: 12px;
}
</style>

