import { collection, getDocs } from "firebase/firestore/lite";
import { db } from "../../main";
export const eventsModule = {
  namespaced: true,
  state: {
    events: [],
  },
  mutations: {
    GET_EVENTS(state, events) {
      state.events = events;
    },
  },
  actions: {
    // GET / OBTENER / Consulta instantánea
    async getEvents({ commit }) {
      const events = [];
      await getDocs(collection(db, "events")).then((res) => {
        res.forEach((doc) => {
          let event = doc.data();
          event.id = doc.id;
          events.push(event);
        });
        commit("GET_EVENTS", events);
      });
    },
  },
};
