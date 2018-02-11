import Vue from 'vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)


import moment from 'moment' 
Vue.filter('dateFormat', function (val) {
  // 借助于 moment.js 包来快速格式化时间
  return moment(val).format('YYYY-MM-DD HH:mm:ss')
})

import VuePreview from 'vue2-preview'
Vue.use(VuePreview)

import axios from "axios"
Vue.prototype.$http=axios
axios.defaults.baseURL='http://39.106.32.91:3000'


import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

import './mui/css/mui.css'
import './mui/css/icons-extra.css'
import './mui/fonts/mui-icons-extra.ttf'


import APP from './components/APP.vue'

import router from './router.js'

const vm = new Vue({
  el: '#app',
  render: c => c(APP),
  router,
  
})