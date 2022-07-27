import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import EventDetailsView from "../views/EventDetailsView.vue";
import EventCreateView from "../views/EventCreateView.vue";
import UserProfileView from "../views/UserProfileView.vue";
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
    path: "/register",
    name: "register",
    component: RegisterView,
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
  {
    path: "/event",
    name: "event",
    props: true,
    component: EventCreateView,
    meta: {
      accessLevel: "private",
    },
  },
  {
    path: "/events/:id",
    name: "events",
    props: true,
    component: EventDetailsView,
    meta: {
      accessLevel: "public",
    },
  },
  {
    path: "/profile",
    name: "profile",
    props: true,
    component: UserProfileView,
    meta: {
      accessLevel: "private",
    },
  },
];

const router = new VueRouter({
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
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
