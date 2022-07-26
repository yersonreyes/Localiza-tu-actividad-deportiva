import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//Firebase

import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore/lite";
import { getAuth } from "firebase/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/storage";

//Bootstrap

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

//Mapboxgl
import mapboxgl from "mapbox-gl";
mapboxgl.accessToken =
  "pk.eyJ1IjoieWVyc29uZGV2IiwiYSI6ImNrbXVvaGI1dzEzbXYycG81OGE1aW1ndHoifQ.KbWYHPe1oIQFmkr8ofD6jg";

//Material Design Icons

import mdiVue from "mdi-vue";
import * as mdijs from "@mdi/js";
import { mdiTennis } from "@mdi/js";
import { mdiSoccer } from "@mdi/js";
import { mdiSnowboard } from "@mdi/js";
import { mdiTennisBall } from "@mdi/js";
import { mdiSwim } from "@mdi/js";
import { mdiHiking } from "@mdi/js";
import { mdiDumbbell } from "@mdi/js";
import { mdiWeightLifter } from "@mdi/js";
import { mdiSurfing } from "@mdi/js";

Vue.use(mdiVue, {
  icons: mdijs,
  mdiTennis,
  mdiSoccer,
  mdiSnowboard,
  mdiTennisBall,
  mdiHiking,
  mdiSwim,
  mdiDumbbell,
  mdiWeightLifter,
  mdiSurfing,
});

const firebaseConfig = {
  apiKey: "AIzaSyBk5kBlW80N1L59SMukCqrXsu7fwYb6oAw",
  authDomain: "fitmapp-648f7.firebaseapp.com",
  projectId: "fitmapp-648f7",
  storageBucket: "fitmapp-648f7.appspot.com",
  messagingSenderId: "1089976430779",
  appId: "1:1089976430779:web:44f201a107ed0f6ca5399e",
};

firebase.initializeApp(firebaseConfig);
const storageRef = firebase.storage().ref();
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

export { db, auth, storageRef };

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
