export const geolocationModule = {
  namespaced: true,

  state: {
    cords: false,
    loading: false,
  },
  mutations: {
    SET_CORDS(state, newcords) {
      state.cords = newcords;
    },
    SET_LOADING(state, newLoading) {
      state.loading = newLoading;
    },
  },
  actions: {
    getInitialLocation({ commit }) {
      commit("SET_LOADING", true);
      return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const cordenadas = [
              position.coords.longitude,
              position.coords.latitude,
            ];

            commit("SET_CORDS", cordenadas);
            resolve();
          },
          (err) => {
            console.log(err);
            reject(err);
            commit("SET_CORDS", false);
          }
        );
      });
    },
  },
};
