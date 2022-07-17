import Vue from "vue";
import Vuex from "vuex";
import { sessionModule as session } from "./modules/sessionModule.js";
import { eventsModule as events } from "./modules/eventsModule.js";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    events,
    session,
  },
});
