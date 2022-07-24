import { collection, getDocs, addDoc } from "firebase/firestore/lite";
import { db } from "../../main";
export const eventsModule = {
  namespaced: true,
  state: {
    events: [],
    loading: false,
  },
  mutations: {
    GET_EVENTS(state, events) {
      state.events = events;
    },

    SET_LOADING(state, newLoading) {
      state.loading = newLoading;
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

    async addEvent({ commit }, newEvent) {
      commit("SET_LOADING", true);
      const docRef = await addDoc(collection(db, "cities"), {
        name: newEvent.name,
        country: newEvent.region,
      });
      console.log("Document written with ID: ", docRef.id);
      commit("SET_LOADING", false);
    },
  },
  getters: {
    getEventById: (state) => (id) => {
      const event = state.events.find((item) => item.id === id);
      return event;
    },
  },
};
