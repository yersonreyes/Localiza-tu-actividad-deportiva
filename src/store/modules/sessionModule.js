import {
  getAuth,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore/lite";
import { db } from "../../main";
import Router from "@/router";

export const sessionModule = {
  namespaced: true,
  state: {
    session: null,
    loading: false,
    user: {
      avatar: "",
      name: "",
      lastName: "",
      email: "",
    },
    error: null,
    errorRegister: null,
  },
  getters: {
    activeLogin(state) {
      return !!state.session;
    },

    activeError(state) {
      return !!state.error;
    },

    errorRegister(state) {
      if (state.errorRegister === null) {
        return false;
      } else if (
        state.errorRegister ===
        "Firebase: Password should be at least 6 characters (auth/weak-password)."
      ) {
        return "La contraseña debe tener mas de 6 caracteres";
      } else if (
        state.errorRegister == "Firebase: Error (auth/email-already-in-use)."
      ) {
        return "El correo ya esta en uso";
      }
    },
  },
  mutations: {
    SET_SESSION(state, newSession) {
      state.session = newSession;
    },
    SET_LOADING(state, newLoading) {
      state.loading = newLoading;
    },
    SET_USER(state, newUser) {
      state.user = newUser;
    },
    SET_ERROR(state, newError) {
      state.error = newError;
    },
    SET_ERROR_REGISTER(state, newErrorRegister) {
      state.errorRegister = newErrorRegister;
    },
  },
  actions: {
    async subscribeToAuthStateChange({ commit }) {
      const auth = getAuth();
      return new Promise((resolve) => {
        auth.onAuthStateChanged((session) => {
          commit("SET_SESSION", session);
          resolve();
        });
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
        commit("SET_ERROR", null);
        Router.push("/");
      } catch (e) {
        console.error("falló al intentar autenticarse", e);
        commit("SET_ERROR", e);
      } finally {
        commit("SET_LOADING", false);
      }
    },

    async signOut() {
      const auth = getAuth();
      await signOut(auth).then(() => {
        Router.push("/login");
      });
    },

    async getUser({ commit, state }) {
      const user = doc(db, "users", state.session.email);
      const docSnap = await getDoc(user);
      if (docSnap.exists()) {
        commit("SET_USER", docSnap.data());
      } else {
        // doc.data() will be undefined in this case
        console.log("User data not found!");
      }
    },

    async registerUser({ commit }, credentials) {
      const auth = getAuth();
      await createUserWithEmailAndPassword(
        auth,
        credentials.email,
        credentials.password
      )
        .then(() => {
          setDoc(doc(db, "users", credentials.email), {
            email: credentials.email,
            name: credentials.name,
            lastName: credentials.lastName,
            avatar: credentials.avatar,
          });
          commit("SET_USER", {
            email: credentials.email,
            name: credentials.name,
            lastName: credentials.lastName,
            avatar: credentials.avatar,
          });
          commit("SET_ERROR_REGISTER", null);
          Router.push("/");
        })
        .catch((error) => {
          var errorMessage = error.message;
          commit("SET_ERROR_REGISTER", errorMessage);
        });
    },
  },
};
