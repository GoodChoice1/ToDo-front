import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomePage',
    meta: {
      title: 'Список дел'
    },
    component: () => import('@/pages/HomePage.vue')
  },
  {
    path: '/info',
    name: 'InfoPage',
    meta: {
      title: 'Информация'
    },
    component: () => import('@/pages/InfoPage.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router