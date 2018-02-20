<template>

  <div class="shopinfooing-cnm">
     <transition @before-enter="before" @enter="enter" @after-enter="afterenter">
     <div class="ball" v-show="flag" ref="ball" ></div>
     </transition>
    
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
              <nobox :max="getshopinfo.stock_quantity" @func="getselectcont"></nobox>
            </p>
            <mt-button type="primary" size="small">立即购买</mt-button>
            <mt-button type="danger" size="small" @click="addTocart">加入购物车</mt-button>
           
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
import nobox from "../subComponents/computer.vue";

import { mapMutations } from "vuex";

export default {
  data() {
    return {
      getshoplunl: [],
      getshopinfo: {},
      flag: false,
      selectcount: 1
    };
  },
  created() {
    this.getshoplun();
    this.getshopifo();
  },
  methods: {
    ...mapMutations(["addToshopcar"]),

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
    goCmt() {
      this.$router.push("/home/goodscmt/" + this.id);
    },
    GoodsDesc() {
      this.$router.push("/home/Goodsdesc/" + this.id);
    },
    addTocart() {
      this.flag = !this.flag;
      // console.log('xuanzhon'+this.selectcount)
      //加购物车传一个状态默认打开,商品单价传
      this.addToshopcar({
        id: this.id,
        count: this.selectcount,
        state: true,
        price: this.getshopinfo.sell_price
      });
    },
    before(el) {
      el.style.transform = "translate(0,0)";
    },
    enter(el, done) {
      el.offsetWidth;
      //获取小球dom元素Element.getBoundingClientRect()
      //vue在数据变更时候不能 ---ref创建一个元素的引用
      // console.log(this.$refs.ball)//获取元素
      const ballPosition = this.$refs.ball.getBoundingClientRect();
      const badgePosiion = document
        .getElementById("badge")
        .getBoundingClientRect();
      const y = badgePosiion.top - ballPosition.top;
      const x = badgePosiion.left - ballPosition.left;
      // console.log(x)
      // console.log(y)
      el.style.transform = "translate(" + x + "px," + y + "px)";
      el.style.transition = "all 0.4s cubic-bezier(.35,-0.64,.95,.94)";
      done(); //让after函数有效果
    },
    afterenter(el) {
      this.flag = !this.flag;
    },
    getselectcont(c) {
      //获取选中的数量值
      this.selectcount = c;
    }
  },
  props: ["id"],
  components: {
    swper,
    nobox
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
  .ball {
    width: 15px;
    height: 15px;
    background-color: red;
    position: absolute;
    top: 390px;
    left: 150px;
    // transform: translate(80px,200px);
    border-radius: 50%;
    z-index: 10;
  }
}
</style>
