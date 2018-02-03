import VueRouter from 'vue-router'

import HomeContainer from './components/ather/HomeContainer.vue'
import menberContainer from './components/ather/MemberContainer.vue'
import CartContainer from './components/ather/CartContainer.vue'
import SearchContainer from './components/ather/SearchContainer.vue'
import newinfo from './components/photos/newinfo.vue'
import messageinfo from './components/photos/messageinfo.vue'
import imginfo from './components/photos/imginfo.vue'
import relationinfo from './components/photos/relationinfo.vue'
import shopinfo from './components/photos/shopinfo.vue'
import videoinfo from './components/photos/videoinfo.vue'
import newlist from './components/refer/newlist.vue'


const router =new VueRouter({
    routes:[
        {path:'/',redirect:'/home'},
        {path:'/home',component:HomeContainer},
        {path:'/menber',component:menberContainer},
        {path:'/cart',component:CartContainer},
        {path:'/search',component:SearchContainer},
        {path:'/home/newinfo',component:newinfo},
        {path:'/home/imginfo',component:imginfo},
        {path:'/home/shopinfo',component:shopinfo},
        {path:'/home/videoinfo',component:videoinfo},
        {path:'/home/relationinfo',component:relationinfo},
        {path:'/home/messageinfo',component:messageinfo},
        {path:'/home/newlist/:id',component:newlist,props:true}
    ],
    linkActiveClass:'mui-active'
})

export default router