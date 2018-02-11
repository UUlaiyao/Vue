<template>
  <div class="app-container">
    <mt-header fixed title="我的Vue">
        <span slot="left" @click="goBack" v-if="flag">
          <mt-button icon="back">返回</mt-button>
        </span>
    </mt-header>

	<transition>
	   <router-view></router-view>
	</transition>
 

  <nav class="mui-bar mui-bar-tab">
			<router-link to="/home" class="mui-tab-item-my" href="#tabbar">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link to="/menber" class="mui-tab-item-my" href="#tabbar-with-chat">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link to="/cart" class="mui-tab-item-my" href="#tabbar-with-contact">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link to="/search" class="mui-tab-item-my" href="#tabbar-with-map">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>


  </div>
</template>

<script>
import { Header } from "mint-ui";
import { Indicator } from 'mint-ui';
export default {
  data() {
    return {
			flag:false
		};
  },
  created() {
    this.interceptors();
  },
  methods: {
    interceptors() {
      // Add a request interceptor
      this.$http.interceptors.request.use(config => {
        // Do something before request is sent
        Indicator.open({
          text: "Loading...",
          spinnerType: "fading-circle"
        });

        return config;
      });

      // Add a response interceptor
      this.$http.interceptors.response.use(response => {
        // Do something with response data
        Indicator.close();
        return response;
      });
		},
		goBack() {
      this.$router.go(-1);
    }
  },
  watch: {
		'$route.path':{
			  handler: function(newVal) {
        /* if (newVal === "/home") {
        this.flag = false;
      } else {
        this.flag = true;
      } */
        console.log("被强制执行了一次watch");
        this.flag = !(newVal === "/home");
      },
      immediate: true // 衡水老白干
		}
	}
};
</script>


<style lang="scss" scoped>
.app-container {
  padding-top: 40px;
  overflow: hidden;
}
.app-container{
  padding-bottom: 55px;
}
.v-enter {
  opacity: 0;
  transform: translateX(100%);
}
.v-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}



// 自定义 mui-tab-item-my 类名，解决 tabbar 和 mui.js 之间冲突的问题
.mui-bar-tab .mui-tab-item-my.mui-active {
  color: #007aff;
}

.mui-bar-tab .mui-tab-item-my {
  display: table-cell;
  overflow: hidden;
  width: 1%;
  height: 50px;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #929292;
}

.mui-bar-tab .mui-tab-item-my .mui-icon {
  top: 3px;
  width: 24px;
  height: 24px;
  padding-top: 0;
  padding-bottom: 0;
}

.mui-bar-tab .mui-tab-item-my .mui-icon ~ .mui-tab-label {
  font-size: 11px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
}

</style>

