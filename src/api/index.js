import Vue from 'vue'
import Axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios,Axios)

let req_url=process.env=='production'?'http://m78star.top':'http://localhost:3000'

export const reqLogin=(data)=>{
	return Vue.axios.post(req_url+'/login',data)
};
export const reqSaveBlog=(data)=>{
	return Vue.axios.post(req_url+'/editblog',data)
};
export const reqAllCategory=()=>{
	return Vue.axios.get(req_url+'/getallcategory')
};
export const reqAddReport=()=>{
	return Vue.axios.get(req_url+'/addreport')
};
export const reqAllReports=()=>{
	return Vue.axios.get(req_url+'/getallreport')
};
export const reqAddCategory=()=>{
	return Vue.axios.get(req_url+'/addcategory')
};
export const reqAllArticals=()=>{
	return Vue.axios.get(req_url+'/getallarticals')
};
export const reqDeleteArtical=(request)=>{
	return Vue.axios.get(req_url+'/deteleartical',request)
};
export const reqUpdateArtical=(request)=>{
	return Vue.axios.get(req_url+'/updateartical',request)
};
export const reqDeleteReport=(request)=>{
	return Vue.axios.get(req_url+'/detelereport',request)
};
export const reqDeleteCategory=(request)=>{
	return Vue.axios.get(req_url+'/detelereport',request)
};