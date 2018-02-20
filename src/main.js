import Vue from 'vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Vuex from 'vuex'
Vue.use(Vuex)

const cart = JSON.parse(localStorage.getItem('cart') || '[]')


const store = new Vuex.Store({
  state: {
    cart
  },
  mutations: {
    addToshopcar(state, info) {
      //把商品添加到购物车的函数
      //  state.cart.push(info)
      let isfind = false
      state.cart.some(item => {
        if (item.id == info.id) {
          item.count += info.count
          isfind = true
          return true
        }
      })
      if (!isfind) {
        state.cart.push(info)
      }
      // console.log(info)
      localStorage.setItem('cart', window.JSON.stringify(state.cart))

    },
    //更新商品
    updatedGoodscount(state, info) {
      state.cart.some(item => {
        if (item.id == info.id) {
          item.count = info.count
          return true
        }
      })
      localStorage.setItem('cart', window.JSON.stringify(state.cart))
    },
    delfromcart(state, id) {
      state.cart.some((item, i) => {
        if (item.id == id) {
          state.cart.splice(i, 1)
          return true
        }
      })
      localStorage.setItem('cart', window.JSON.stringify(state.cart))
    },
    updataGoodState(state, info) {
      state.cart.some(item => {
        if (item.id == info.id) {
          item.state = info.state
          return true
        }
      })
      localStorage.setItem('cart', window.JSON.stringify(state.cart))
    }
  },
  getters: {
    totalcount(state) {
      let c = 0;
      // console.log(state.cart)
      state.cart.forEach(item => {
        c += item.count
      })
      return c
    },
    //购物车中所有商品id的字符串
    idstr(state) {
      let arr = []
      state.cart.forEach(item => {
        arr.push(item.id)
      })
      return arr.join(',')
    },
    //购物车中id与count的关系
    IDmapcount(state) {
      const o = {}
      state.cart.forEach(item => {
        o[item.id] = item.count
      })
      return o
    },
    idMapstate(state) {
      //id与选中状态的关系
      const o = {};
      state.cart.forEach(item => {
        o[item.id] = item.state
      })
      return o
    },
    setlementinfo(state) {
      let info = { c: 0, amount: 0 }
      state.cart.forEach(item => {
        if (item.state) {
          info.c += item.count
          info.amount += item.count * item.price
        }
      })
      return info
    }
  }

})


import moment from 'moment'
Vue.filter('dateFormat', function (val) {
  // 借助于 moment.js 包来快速格式化时间
  return moment(val).format('YYYY-MM-DD HH:mm:ss')
})

import VuePreview from 'vue2-preview'
Vue.use(VuePreview)

import axios from "axios"
Vue.prototype.$http = axios
axios.defaults.baseURL = 'http://39.106.32.91:3000'


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
  store

})