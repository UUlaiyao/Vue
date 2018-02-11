<template>
  <div>
  
        <div id="slider" class="mui-slider ">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						<a :class="['mui-control-item',item.id==0? 'mui-active':'']"  v-for="item in getdatalist" :key="item.id" @click="getPhoto(item.id)">
							{{item.title}}
						</a>
					</div>
				</div>

		</div>
        <ul>
            <router-link :to="'/home/photolist/'+item.id" v-for="item in photolist" :key="item.id" tag="li" >
                <img v-lazy="item.img_url">
                <div class="info">
                <h1 class="title">{{ item.title }}</h1>
                <div class="body">{{ item.zhaiyao }}</div>
          </div>
            </router-link>
        </ul>
  </div>
</template>

<script>
import mui from "../../mui/js/mui.js";


export default {
  data() {
    return {
      getdatalist: [],
      photolist:[]
    };
  },
  mounted() {
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  },
  created() {
    this.getImglist();
    this.getPhoto(0)
  },
  methods: {
    async getImglist() {
      const { data } = await this.$http.get("/api/getimgcategory");
      if (data.status === 0) {
        data.message.unshift({ id: 0, title: "全部" });
        this.getdatalist = data.message;
      }
    },
    async getPhoto(cateId){
        const {data}=await this.$http.get("/api/getimages/" + cateId)
        console.log(data);
        
        if(data.status===0){
            this.photolist=data.message
        }

    }
  }
};
</script>


<style lang="scss" scoped>
#slider {
  // 提高 # slider 区域的 水平手指滑动效果
  touch-action: pan-x;
}
ul {
  list-style: none;
  margin: 0;
  padding: 10px;
  li {
    background-color: #ddd;
    text-align: center;
    box-shadow: 0 0 7px #666;
    position: relative;
    & + li {
      margin-top: 10px;
    }
    img {
      vertical-align: middle;
      width: 100%;
    }
    img[lazy="loading"] {
      width: 40px;
      height: 300px;
      margin: auto;
    }
    .info {
      position: absolute;
      bottom: 0;
      background: rgba(0, 0, 0, 0.5);
      max-height: 85px;
      overflow: hidden;
      .title {
        font-size: 14px;
        color: #fff;
      }
      .body {
        font-size: 13px;
        text-align: left;
        text-indent: 2em;
        color: #fff;
      }
    }
  }
}
</style>

