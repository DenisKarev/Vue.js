import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: (h) => h(App),
  // created() {
  //   if (sessionStorage.redirect) {
  //     const redirect = sessionStorage.redirect;
  //     delete sessionStorage.redirect;
  //     this.$router.push(redirect);
  //   }
  // },
}).$mount("#app");
