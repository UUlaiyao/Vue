import Vue from 'vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)


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
  
  router
})