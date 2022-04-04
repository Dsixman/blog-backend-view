import * as mutation_type from './mutation_type'
import * as api from '../api'
import Axios from 'axios'

export default{
    async getAuth({commit},request){
        let data
        await api.reqLogin(request).then((response)=>{
            console.log(response)
            data=response.data
            let token=data.token
            commit(mutation_type.RECEIVE_TOKEN,{token})
            localStorage.setItem('token',token)
            Axios.defaults.headers.common['Auth-Token']=token 
            console.log(localStorage.getItem('token'))
        }).catch((err)=>{
            console.log(err)
        })
    },
    async saveBlog({commit},request){
        await api.reqSaveBlog(request).then((response)=>{
            console.log(response)
            let blog=response.data
            //let to=data.token
            commit(mutation_type.RECEIVE_BLOG,{blog})
        
        }).catch((err)=>{
            console.log(err)
        })
    },
    async getAllArticals({commit}){
        await api.reqAllArticals().then(response=>{
            console.log('allarticals')
            console.log(response)
            let allArticals=response.data.allarticals
            commit(mutation_type.RECEIVE_ALL_CATEGORY,{ allArticals})
            //console.log(state.allCategory)
        }).catch(err=>{
            console.log(err)
        })
    },
    async updateArtical({commit},request){
        await api.reqDeleteArtical(request).then(response=>{
            console.log(this)
            console.log('update artical')
            console.log(response)
            let stateText=response.data.stateText
            commit(mutation_type.RECEIVE_UPDATE_ARTICAL,{stateText})
            //console.log(state.allCategory)
        }).catch(err=>{
            console.log(err)
        })
    },
    async deleteArtical({commit},request){
        await api.reqDeleteArtical(request).then(response=>{
            console.log(this)
            console.log('delet artical')
            console.log(response)
            let stateText=response.data.stateText
            commit(mutation_type.RECEIVE_DELETE_ARTICAL,{stateText})
            //console.log(state.allCategory)
        }).catch(err=>{
            console.log(err)
        })
    },

    async getAllCategory({commit}){
        await api.reqAllCategory().then(response=>{
            console.log(this)
            console.log('all category')
            console.log(response)
            let allCategory=response.data.allCategory
            commit(mutation_type.RECEIVE_ALL_CATEGORY,{ allCategory})
            //console.log(state.allCategory)
        }).catch(err=>{
            console.log(err)
        })
    },
    async deleteCategory({commit},request){
        await api.reqDeleteCategory(request).then(response=>{
            console.log(this)
            console.log('delete category')
            console.log(response)
            let stateText=response.data.stateText
            commit(mutation_type.RECEIVE_DELETE_CATEGORY,{stateText})
            //console.log(state.allCategory)
        }).catch(err=>{
            console.log(err)
        })
    },
    async getAllReports({commit}){
        await api.reqAllReports().then(response=>{
            console.log(this)
            console.log('all reports')
            console.log(response)
            let allReports=response.data.allReportss
            commit(mutation_type.RECEIVE_ALL_CATEGORY,{ allReports})
            //console.log(state.allCategory)
        }).catch(err=>{
            console.log(err)
        })
    },
    async deleteReport({commit},request){
        await api.reqDeleteReport(request).then(response=>{
            console.log(this)
            console.log('delete report')
            console.log(response)
            let stateText=response.data.stateText
            commit(mutation_type.RECEIVE_DELETE_REPORT,{stateText})
            //console.log(state.allCategory)
        }).catch(err=>{
            console.log(err)
        })
    },
}