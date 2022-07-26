import Vue from "vue";
import Vuex from "vuex";
import { sessionModule as session } from "./modules/sessionModule.js";
import { eventsModule as events } from "./modules/EventsModule.js";
import { geolocationModule as geolocation } from "./modules/geolocationModule";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    events,
    session,
    geolocation,
  },
});
