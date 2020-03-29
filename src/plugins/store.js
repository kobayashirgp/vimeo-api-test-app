import Vuex from "vuex";
import Vue from "vue";
import { TOGGLE_HOME_NAVIGATION_DRAWER } from "../utils/actions";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    ano: 2020,
    drawer: null,
    token: null
  },
  getters: {
    token: state => state.token
  },
  mutations: {
    TOGGLE_HOME_NAVIGATION_DRAWER(state, payload) {
      state.drawer = payload;
    }
  },
  actions: {
    TOGGLE_HOME_NAVIGATION_DRAWER: (state, payload) => {
      state.commit(TOGGLE_HOME_NAVIGATION_DRAWER, payload);
    }
  }
});

export default store;
