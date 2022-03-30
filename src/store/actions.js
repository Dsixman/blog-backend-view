import{
    RECEIVE_ALL_CATEGORY,
    RECEIVE_TOKEN,
    RECEIVE_BLOG
 } from './mutation_type'
import * as api from '../api'
import Axios from 'axios'

export default{
    async getAuth({commit},request){
        let data
        await api.reqLogin(request).then((response)=>{
            console.log(response)
            data=response.data
            let token=data.token
            commit(RECEIVE_TOKEN,{token})
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
            commit(RECEIVE_BLOG,{blog})
        
        }).catch((err)=>{
            console.log(err)
        })
    },
    async getAllCategory({commit}){
        await api.reqAllCategory().then(response=>{
            console.log(response)
            let allCategory=response.data.category
            commit(RECEIVE_ALL_CATEGORY,{allCategory})
            //console.log(state.allCategory)
        }).catch(err=>{
            console.log(err)
        })
    }
}