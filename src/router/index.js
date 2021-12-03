import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "HomePage",
    meta: {
      title: "Список дел",
      layout: "main-layout",
    },
    component: () => import("@/pages/HomePage.vue"),
  },
  {
    path: "/info",
    name: "InfoPage",
    meta: {
      title: "Информация",
      layout: "main-layout",
    },
    component: () => import("@/pages/InfoPage.vue"),
  },
  {
    path: "/login",
    name: "login",
    meta: {
      title: "Авторизация",
      layout: "auth-layout",
    },
    component: () => import("@/pages/LoginPage.vue"),
  },
  {
    path: "/registration",
    name: "registration",
    meta: {
      title: "Регистрация",
      layout: "auth-layout",
    },
    component: () => import("@/pages/RegistrationPage.vue"),
  },
  {
    path: "/todo",
    name: "Todo",
    meta: {
      title: "Задание",
      layout: "main-layout",
    },
    component: () => import("@/pages/ToDoPage.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const { accessToken } = localStorage;
  if (accessToken || to.name === "login" || to.name === "registration") {
    next();
  } else {
    next("/login");
  }
});

export default router;
