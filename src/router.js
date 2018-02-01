import VueRouter from 'vue-router'

import HomeContainer from './components/ather/HomeContainer.vue'
import menberContainer from './components/ather/HomeContainer.vue'
import CartContainer from './components/ather/HomeContainer.vue'
import SearchContainer from './components/ather/HomeContainer.vue'



const router =new VueRouter({
    routes:[
        {path:'/',redirect:'/home'},
        {path:'/home',component:HomeContainer},
        {path:'/menber',component:menberContainer},
        {path:'/cart',component:CartContainer},
        {path:'/search',component:SearchContainer},
    ],

})

export default router