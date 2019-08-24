import Vue from "vue"
import  VueRouter from 'vue-router'
import Home from '../pages/Home/Home.vue'
import Order from '../pages/Order/Order.vue'
import Person from '../pages/Person/Person.vue'
import Search from '../pages/Search/Search.vue'
import Login from '../pages/Login/Login.vue'
Vue.use(VueRouter)

export default new VueRouter({
routes:[
  {path:"/login",
  component:Login,
meta:{
  show:false
}},,
    {path:"/home",
  component:Home,
  meta:{
    show:true
  }},
  {path:"/order",
  component:Order,
  meta:{
    show:true
  }},
  {path:"/person",
  component:Person,
  meta:{
    show:true
  }},
  {path:"/search",
  component:Search,
  meta:{
    show:true
  }},
  {
    path:"/",
    redirect:"/home"
    
}
]
})