import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuelidate from 'vuelidate'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import { sync } from 'vuex-router-sync';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.config.productionTip = false
Vue.use(Vuelidate);
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
sync(store, router);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')