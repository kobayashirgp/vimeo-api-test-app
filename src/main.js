import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import store from "./plugins/store";
import router from "./plugins/router";
import player from "./plugins/vimeo";

Vue.config.productionTip = false;

new Vue({
  vuetify,
  store,
  router,
  player,
  render: h => h(App)
}).$mount("#app");
