import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../pages/home/Home.vue')
  },
  {
    path: '/city',
    name: 'city',
    component: () => import('../pages/city/City.vue')
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: () => import('../pages/detail/Detail.vue')
  }
]

const router = new VueRouter({
  routes,
  scrollBehavior (to, from, saveScrollPosition) {
    return { x: 0, y: 0 }
  }
})

export default router
