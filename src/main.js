import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import Axios from 'axios'
import VueAxios from 'vue-axios'

Axios.defaults.headers.common['Auth-Token'] = store.state.token;
Vue.use(VueAxios,Axios)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
