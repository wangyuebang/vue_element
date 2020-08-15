import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import PageOne from "../views/PageOne";
import PageTwo from "../views/PageTwo";
import App from "../App";
import PageThree from "../views/PageThree";
import PageFour from "../views/PageFour";
import Index from "../views/Index";

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: '导航1',
    component: Index,
    redirect:'pageOne',
    children :[
      {
        path: '/pageOne',
        name: '页面1',
        component: PageOne
      },
      {
        path: '/pageTwo',
        name: '页面2',
        component: PageTwo
      }
    ]
  },
    {
      path: '/navigation',
      name: '导航2',
      component: Index,
      children :[
        {
          path: '/pageThree',
          name: '页面3',
          component: PageThree
        },
        {
          path: '/pageFour',
          name: '页面4',
          component: PageFour
        }
      ]
    }

  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
