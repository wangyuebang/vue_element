import Vue from 'vue'
import VueRouter from 'vue-router'
import SpFlow from "../views/SpFlow";
import Index from "../views/Index";
import AddSpFlow from "../views/AddSpFlow";
import UpdateSpFlow from "../views/UpdateSpFlow";

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: '爬虫管理',
    component: Index,
    redirect:'spFlow',
    show:true,
    children :[
      {
        path: '/spFlow',
        name: '查询爬虫',
        component: SpFlow
      },
      {
        path: '/addSpFlow',
        name: '添加爬虫',
        component: AddSpFlow
      },
      {
        path: '/updateSpFlow',
        component: UpdateSpFlow,
        show:false
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
