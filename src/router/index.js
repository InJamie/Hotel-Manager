import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 路由信息数组
const routes = [
  {
    path: '/',
    name: '',
    component: () => import('@v/Login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
