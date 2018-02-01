import Vue from 'vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)


import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

import './mui/css/mui.css'
import './mui/fonts/mui-icons-extra.ttf'


import APP from './components/APP.vue'

import router from './router.js'

const vm = new Vue({
  el: '#app',
  render: c => c(APP),
  
  router
})