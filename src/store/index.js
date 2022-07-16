import Vue from "vue";
import Vuex from "vuex";
import { sessionModule as session } from "./modules/sessionModule.js";
import { eventsModule as events } from "@/store/modules/eventsModule";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    events,
    session,
  },
});
