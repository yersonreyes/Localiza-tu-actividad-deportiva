import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import Store from "@/store/";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
    meta: {
      accessLevel: "public",
    },
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
    meta: {
      accessLevel: "public",
    },
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
    meta: {
      accessLevel: "public",
    },
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  const accessLevel = to.meta.accessLevel;
  const activeLogin = Store.getters["session/activeLogin"];

  if (accessLevel === "public") {
    next();
  } else if (accessLevel === "private") {
    if (activeLogin) {
      next();
    } else {
      next("/login");
    }
  }
});
export default router;
