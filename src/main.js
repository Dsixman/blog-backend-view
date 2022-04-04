import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import Axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios,Axios)
//console.log('mian: '+localStorage.getItem('token'))
Axios.defaults.headers.common['Auth-Token'] = store.state.token||localStorage.getItem('token');
// Axios.interceptors.response.use(data => {
//  // loadinginstace.close();
//   const code = data.data.code;
//   if(code == (401||403||404)) { //未登录
//     router.push('/404')
//   }
// })


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
