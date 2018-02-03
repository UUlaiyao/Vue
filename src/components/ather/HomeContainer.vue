<template>
  <div>
    <mt-swipe :auto="4000">
        <mt-swipe-item v-for="item in lunbolist" :key="item.img">
            <img :src="item.img" alt="">
        </mt-swipe-item>
    </mt-swipe>

     <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newinfo">
		                    <img src="../../images/menu1.png" alt="">
		                    <div class="mui-media-body">新闻资讯</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/imginfo">
		                    <img src="../../images/menu2.png" alt="">
		                    <div class="mui-media-body">图片分享</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/shopinfo">
		                   <img src="../../images/menu3.png" alt="">
		                    <div class="mui-media-body">商品购买</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/messageinfo">
		                  <img src="../../images/menu4.png" alt="">
		                    <div class="mui-media-body">留言</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/videoinfo">
		                   <img src="../../images/menu5.png" alt="">
		                    <div class="mui-media-body">视频</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/relationinfo">
		                    <img src="../../images/menu6.png" alt="">
		                    <div class="mui-media-body">联系</div></router-link></li>
		       
		        </ul> 


    <h2>首页</h2>
  </div>
</template>


<script>
export default {
  data() {
    return {
      lunbolist: []
    };
  },
  created() {
    this.getLunbo();
  },

  methods: {
    async getLunbo() {
      const { data } = await this.$http.get("/api/getlunbo");
      //   console.log(data.message);

      if (data.status === 0) {
        this.lunbolist = data.message;
      }
    }
  }
};
</script>


<style lang="scss" scoped>
.mint-swipe {
  height: 180px;
}
.mint-swipe-item {
  &:nth-child(1) {
    background-color: pink;
  }
  &:nth-child(2) {
    background-color: skyblue;
  }
  &:nth-child(3) {
    background-color: yellowgreen;
  }
}
.mint-swipe-items-wrap {
  img {
    width: 100%;
    height: 100%;
    vertical-align: middle;
  }
}
.mui-table-view {
  img {
    width: 60px;
    height: 60px;
  }
}
.mui-grid-view.mui-grid-9 {
  background-color: #fff;
  border: none;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell {
  border: none;
}
</style>
