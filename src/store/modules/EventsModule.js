import { collection, getDocs, addDoc } from "firebase/firestore/lite";
import { db } from "../../main";
export const eventsModule = {
  namespaced: true,
  state: {
    events: [],
    loading: false,
    bookings: [],
  },
  mutations: {
    GET_EVENTS(state, events) {
      state.events = events;
    },

    ADD_EVENT(state, newEvent) {
      state.events.push(newEvent);
    },

    ADD_BOOKING(state, newBooking) {
      state.bookings.push(newBooking);
    },
    GET_BOOKING(state, bookings) {
      state.bookings = bookings;
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
      const docRef = await addDoc(collection(db, "events"), newEvent);
      newEvent.id = docRef.id;
      commit("SET_LOADING", false);
    },
    async getBookings({ commit }) {
      const bookings = [];
      await getDocs(collection(db, "bookings")).then((res) => {
        res.forEach((doc) => {
          let booking = doc.data();
          booking.id = doc.id;
          bookings.push(booking);
        });
        commit("GET_BOOKING", bookings);
      });
    },

    async addBooking({ commit }, newBooking) {
      commit("SET_LOADING", true);
      const docRef = await addDoc(collection(db, "bookings"), newBooking);
      newBooking.id = docRef.id;
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
