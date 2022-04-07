import Vue from 'vue'
import Axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios,Axios)

let req_url=process.env=='production'?'http://m78star.top':'http://localhost:3000'

export const reqLogin=(request)=>{
	return Vue.axios.post(req_url+'/login',request)
};
export const reqSaveBlog=(request)=>{
	return Vue.axios.post(req_url+'/editblog',request)
};
export const reqAllCategory=()=>{
	return Vue.axios.get(req_url+'/getallcategory')
};
export const reqAddReport=(request)=>{
	return Vue.axios.post(req_url+'/addreport',request)
};
export const reqAllReports=(request)=>{
	return Vue.axios.get(req_url+'/getallreport',request)
};
export const reqAddCategory=(request)=>{
	return Vue.axios.post(req_url+'/addcategory',request)
};

export const reqEditorCategory=(request)=>{
	return Vue.axios.post(req_url+'/editorcategory',request)
};

export const reqAllArticals=()=>{
	return Vue.axios.get(req_url+'/getallarticals')
};
export const reqFindArtical=(request)=>{
	return Vue.axios.post(req_url+'/findartical',request)
};
export const reqUpdateReport=(request)=>{
	return Vue.axios.post(req_url+'/updatereport',request)
};
export const reqDeleteArtical=(request)=>{
	return Vue.axios.post(req_url+'/deleteartical',request)
};
export const reqUpdateArtical=(request)=>{
	return Vue.axios.post(req_url+'/updateartical',request)
};
export const reqDeleteReport=(request)=>{
	return Vue.axios.post(req_url+'/deletereport',request)
};
export const reqDeleteCategory=(request)=>{
	return Vue.axios.post(req_url+'/deletecategory',request)
};