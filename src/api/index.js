import Vue from 'vue'
import Axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios,Axios)

let req_url=process.env=='production'?'http://m78star.top':'http://localhost:3000'

export const reqLogin=(data)=>{
	return Vue.axios.post(req_url+'/login',data)
};