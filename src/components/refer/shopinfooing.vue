<template>

  <div class="shopinfooing-cnm">
     

    <!-- 轮播 -->
    <div class="mui-card">
        <div class="mui-card-content">
            <div class="mui-card-content-inner">
               <swper :list="getshoplunl" :imgsrc="'src'" :isfull="false"></swper>
            </div>
        </div>
    </div>
    <div class="mui-card" >
        <div class="mui-card-header">{{getshopinfo.title}}</div>
        <div class="mui-card-content">
            <div class="mui-card-content-inner">
            <p class="price">
              <span class="old">市场价：{{getshopinfo.market_price}}<del>￥</del></span>
              <span>销售价：<span class="new">￥{{getshopinfo.sell_price}}</span></span>
            </p>
            <p>
              <span>购买数量：</span>
              <computer></computer>
            </p>
            <mt-button type="primary" size="small">立即购买</mt-button>
            <mt-button type="danger" size="small" >加入购物车</mt-button>
           
            </div>
        </div>
    </div>
    <div class="mui-card">
        <div class="mui-card-header">ssss</div>
        <div class="mui-card-content">
            <div class="mui-card-content-inner">
            <p>商品货号：{{getshopinfo.goods_no }}</p>
            <p>库存情况：{{getshopinfo.stock_quantity}}件</p>
            <p>上架时间：{{getshopinfo.add_time | dateFormat}}</p>
            </div>
        </div>
        <div class="mui-card-footer btn-bottoms">
            <mt-button type="primary" size="large" plain @click="GoodsDesc">图文介绍</mt-button>
            <mt-button type="danger" size="large" plain style="margin-top: 10px;" @click="goCmt">商品评论</mt-button>
            
        </div>
    </div>

  </div>

</template>
<script>
import swper from "../subComponents/Swper.vue";
import computer from '../subComponents/computer.vue'
export default {
  data() {
    return {
      getshoplunl: [],
      getshopinfo: {}
    };
  },
  created() {
    this.getshoplun();
    this.getshopifo();
  },
  methods: {
    async getshoplun() {
      const { data } = await this.$http.get("/api/getthumimages/" + this.id);
      if (data.status === 0) {
        // data.message.forEach(item => {
        //     item.img=item.src
        // });
        this.getshoplunl = data.message;
      }
    },
    async getshopifo() {
      const { data } = await this.$http.get("/api/goods/getinfo/" + this.id);
      if (data.status === 0) {
        this.getshopinfo = data.message[0];
      }
    },
    goCmt(){
        this.$router.push("/home/goodscmt/"+this.id)
    },
    GoodsDesc(){
         this.$router.push("/home/Goodsdesc/" + this.id);
    }
  },
  props: ["id"],
  components: {
    swper,
    computer
  }
};
</script>


<style lang="scss" scoped>
.shopinfooing-cnm {
  overflow: hidden;

  .btn-bottoms {
    display: block;
    }
.price {
    .old {
        margin-right: 10px;
    }
    .new {
        color: red;
        font-size: 16px;
        font-weight: bold;
    }
    }
}

</style>
