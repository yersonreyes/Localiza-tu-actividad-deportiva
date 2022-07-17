import { getAuth, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore/lite";
import { db } from "../../main";
import Router from "@/router";

export const sessionModule = {
  namespaced: true,
  state: {
    sesion: null,
    loading: false,
    user: {
      avatar: "",
      name: "",
      lastName: "",
      email: "",
    },
  },
  getters: {
    activeLogin(state) {
      return !!state.sesion;
    },
  },
  mutations: {
    SET_SESION(state, newSesion) {
      state.sesion = newSesion;
    },
    SET_LOADING(state, newLoading) {
      state.loading = newLoading;
    },
    SET_USER(state, newUser) {
      state.user = newUser;
    },
  },
  actions: {
    async subscribeToAuthStateChange({ commit }) {
      const auth = getAuth();
      auth.onAuthStateChanged((sesion) => {
        commit("SET_SESION", sesion);
      });
    },

    async signInWithEmailAndPassword({ commit }, credentials) {
      commit("SET_LOADING", true);
      try {
        const auth = getAuth();
        await signInWithEmailAndPassword(
          auth,
          credentials.email,
          credentials.password
        );
      } catch (e) {
        console.error("falló al intentar autenticarse", e);
      } finally {
        commit("SET_LOADING", false);
        Router.push("/");
      }
    },

    async signOut() {
      const auth = getAuth();
      await signOut(auth).then(() => {
        Router.push("/login");
      });
    },

    async getUser({ commit, state }) {
      const user = doc(db, "users", state.sesion.email);
      const docSnap = await getDoc(user);
      if (docSnap.exists()) {
        commit("SET_USER", docSnap.data());
      } else {
        // doc.data() will be undefined in this case
        console.log("User data not found!");
      }
    },
  },
};
