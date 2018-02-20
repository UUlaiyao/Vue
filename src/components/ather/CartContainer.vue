<template>
  <div>
      <!-- <h3>购物车</h3> -->
    
     <div class="closeshop-list">
         	<div class="mui-card closeshop-item" v-for="(item,i) in goodslist" :key="item.id">
				<div class="mui-card-content">
					<div class="mui-card-content-inner" >
            <!-- {{idstr}} -->
            <!-- 开关区域 -->
            <mt-switch v-model="idMapstate[item.id]" @change="keychanged(item.id,idMapstate[item.id])"></mt-switch>
            <img :src="item.thumb_path" alt="">
            <div class="info">
                <div class="title">{{ item.title}}</div>
                <div class="buy">
                    <span class="price">&yen;{{ item.sell_price }}</span>
                    <nobox :initnumber="IDmapcount[item.id]" :id="item.id"></nobox>
                    <a href="javascript:void(0)" class="del" @click="del(item.id,i)">删除</a>
                </div>

            </div>
					</div>
				</div>
			</div>
            <!-- 结算 -->
            <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner setlenment" >
						<div>
                <p >总计（不含运费）{{setlementinfo.amount}}</p>
                <p>已勾选商品 <span class="red">{{setlementinfo.c}} 件</span> ,总价&yen; <span class="red">{{setlementinfo.amount}}</span> </p>
            </div>
            <mt-button type="danger">去结算</mt-button>
					</div>
				</div>
			</div>
     </div>

     <hr>
  <!-- {{ IDmapcount }} -->
  <!-- {{setlementinfo}} -->
  <!-- {{idMapstate}} -->
  </div>
</template>


<script>
import nobox from "../subComponents/closeshop.vue";
import { mapGetters, mapMutations } from "vuex";

export default {
  data() {
    return {
      goodslist: []
    };
  },
  created() {
    this.getCartGoods();
  },
  methods: {
    ...mapMutations(["delfromcart", "updataGoodState"]),
    async getCartGoods() {
      const { data } = await this.$http.get(
        "/api/goods/getshopcarlist/" + this.idstr
      );
      if (data.status === 0) {
        this.goodslist = data.message;
        // console.log(this.goodslist)
      }
    },
    del(id, i) {
      this.goodslist.splice(i, 1);
      this.delfromcart(id);
    },
    keychanged(id, state) {
      //   console.log(state);
      this.updataGoodState({ id, state });
    }
  },

  computed: {
    ...mapGetters(["idstr", "IDmapcount", "idMapstate", "setlementinfo"])
  },
  components: {
    nobox
  }
};
</script>


<style lang="scss" scoped>
.closeshop-list {
  .closeshop-item {
    .mui-card-content-inner {
      display: flex;
      img {
        width: 60px;
        height: 60px;
      }
      .info {
        display: flex;
        flex: 1;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        .title {
          font-size: 13px;
        }
        .buy {
          display: flex;
          justify-content: space-between;
          .price {
            color: red;
            font-weight: bold;
            font-size: 16px;
          }
        }
      }
    }
  }
}
.setlenment {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .red {
    color: red;
  }
}
</style>
