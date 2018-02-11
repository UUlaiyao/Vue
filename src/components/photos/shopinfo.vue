<template>
  <div>
      <div class="shoplist">
        <router-link :to="'/home/shoppinfooing/'+item.id" class="shop-item" v-for="item in getshopl" :key="item.id" >
          <img :src="item.img_url" alt="">
          <h1 class="title">{{ item.title}}</h1>
          <div class="info">
            <p class="price">
            <span class="new">{{ item.sell_price}}</span>
            <span class="old">{{ item.market_price}}</span>
          </p>
          <p class="sell">
            <span>热卖中</span>
            <span>剩余{{ item.stock_quantity}}件</span>
          </p>
          </div>
          
        </router-link>
        
          <mt-button type="danger" size="large" style="margin-top: 7px;" @click="getMore">加载更多</mt-button>
        </div>
    
      
      
    
  </div>
</template>

<script>

  export default {
    data(){
      return {
        pageindex:1,
        getshopl:[]
      }
    },
    created(){
      this.getshopli()
    },
    methods:{
      async getshopli(){
        const {data}= await this.$http.get('/api/getgoods?pageindex='+this.pageindex)

        if(data.status===0){
          this.getshopl = this.getshopl.concat(data.message);
        }
      },
      getMore(){
        this.pageindex++
        this.getshopli()
      }
    },
    props:[]
  }
</script>


<style lang="scss" scoped>
.shoplist {
  display: flex;
  flex-wrap: wrap;
  border: 1px solid #000;
  justify-content: space-between;
  padding: 0 7px 7px 7px;
  .shop-item {
    width: 49%;
    border: 1px solid #000;
    margin-top: 7px;
    box-shadow: 0 0 7px #ccc;
    padding: 2px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    img {
      width: 100%;
      vertical-align: middle;
    }
    .title{
      font-size: 14px;
    }
    .info{
       background-color: #eee;
      overflow: hidden;
      p {
        margin: 5px 0 0 0;
      }
      .price {
        .new {
          font-size: 16px;
          color: red;
          font-weight: bold;
        }
        .old {
          font-size: 13px;
          margin-left: 15px;
          text-decoration: line-through;
        }
      }
      .sell {
        display: flex;
        justify-content: space-between;
        font-size: 13px;
      }
    }
  }
}
</style>

