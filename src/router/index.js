import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomePage',
    meta: {
      title: 'Список дел',
      layout: 'main-layout'
    },
    component: () => import('@/pages/HomePage.vue')
  },
  {
    path: '/info',
    name: 'InfoPage',
    meta: {
      title: 'Информация',
      layout: 'main-layout'
    },
    component: () => import('@/pages/InfoPage.vue')
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      title: 'Авторизация',
      layout: 'auth-layout'
    },
    component: () => import('@/pages/LoginPage.vue')
  },
  {
    path: '/registration',
    name: 'registration',
    meta: {
      title: 'Регистрация',
      layout: 'auth-layout'
    },
    component: () => import('@/pages/RegistrationPage.vue')
  },
  {
    path: '/logout',
    name: 'logout',
    meta: {
      title: 'Выход'
    },
    component: () => import('@/pages/LogoutPage.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router