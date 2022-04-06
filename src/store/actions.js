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
            commit(mutation_type.RECEIVE_ALL_ARTICALS,{ allArticals})
            //console.log(state.allCategory)
        }).catch(err=>{
            console.log(err)
        })
    },
    async findArtical({commit},request){
        await api.reqFindArtical(request).then(response=>{
            console.log('find articals')
            console.log(response)
            let findArtical=response.data.findartical
            commit(mutation_type.RECEIVE_ALL_ARTICALS,{ findArtical})
            //console.log(state.allCategory)
        }).catch(err=>{
            console.log(err)
        })
    },
    async updateArtical({commit},request){
        await api.reqDeleteArtical(request).then(response=>{
            
            console.log('update artical')
            console.log(response)
            let stateText=response.data.stateText
            commit(mutation_type.RECEIVE_STATE_TEXT,{stateText})
            //console.log(state.allCategory)
        }).catch(err=>{
            console.log(err)
        })
    },
    async deleteArtical({commit},request){
        await api.reqDeleteArtical(request).then(response=>{
            
            console.log('delet artical')
            console.log(response)
            let stateText=response.data.stateText
            commit(mutation_type.RECEIVE_STATE_TEXT,{stateText})
            //console.log(state.allCategory)
        }).catch(err=>{
            console.log(err)
        })
    },

    async getAllCategory({commit}){
        await api.reqAllCategory().then(response=>{
            
            console.log('all category')
            console.log(response)
            let allCategory=response.data.allCategory
            let computedCategory= allCategory
            commit(mutation_type.RECEIVE_ALL_CATEGORY,{ allCategory})
            commit(mutation_type.RECEIVE_COMPUTED_CATEGORY,{computedCategory})

            //console.log(state.allCategory)
        }).catch(err=>{
            console.log(err)
        })
    },
    async addCategory({commit},request){
        await api.reqAddCategory(request).then(response=>{
            console.log('add category111')
            console.log(response)
            //let allCategory=response.data.allCategory
            let stateText=response.data.stateText
            commit(mutation_type.RECEIVE_STATE_TEXT,{stateText})
            //console.log(state.allCategory)
        }).catch(err=>{
            console.log(err)
        })
    },
    async editorCategory({commit},request){
        await api.reqEditorCategory(request).then(response=>{
        console.log('editor category')
        console.log(response)
        //let allCategory=response.data.allCategory
        let stateText=response.data.stateText
        commit(mutation_type.RECEIVE_STATE_TEXT,{stateText})
        //console.log(state.allCategory)
    }).catch(err=>{
        console.log(err)
    })
},


    async deleteCategory({commit},request){
        await api.reqDeleteCategory(request).then(response=>{
            console.log('delete category')
            console.log(response)
            let stateText=response.data.stateText
            commit(mutation_type.RECEIVE_STATE_TEXT,{stateText})
            //console.log(state.allCategory)
        }).catch(err=>{
            console.log(err)
        })
    },
    async getAllReports({commit}){
        await api.reqAllReports().then(response=>{
            
            console.log('all reports')
            console.log(response)
            let allReports=response.data.allReports
            commit(mutation_type.RECEIVE_ALL_REPORTS,{ allReports})
            //console.log(state.allCategory)
        }).catch(err=>{
            console.log(err)
        })
    },
    async addReport({commit},request){
        await api.reqAddReport(request).then(response=>{
            console.log('add report')
            console.log(response)
            let stateText=response.data.stateText
            //let =response.data.stateText
            commit(mutation_type.RECEIVE_STATE_TEXT,{ stateText})
            //console.log(state.allCategory)
        }).catch(err=>{
            console.log(err)
        })
    },
    async deleteReport({commit},request){
        await api.reqDeleteReport(request).then(response=>{
            console.log('delete report')
            console.log(response)
            let stateText=response.data.stateText
            commit(mutation_type.RECEIVE_STATE_TEXT,{stateText})
            //console.log(state.allCategory)
        }).catch(err=>{
            console.log(err)
        })
    },
    computedReports({commit},data){
        let computedReports=data
        commit(mutation_type.RECEIVE_COMPUTED_REPORTS,{computedReports})
    },
    computedArticals({commit},data){
        let computedArticals=data
        commit(mutation_type.RECEIVE_COMPUTED_ARTICALS,{computedArticals})
    },
    computedCategory({commit},data){
        let computedCategory=data
        commit(mutation_type.RECEIVE_COMPUTED_CATEGORY,{computedCategory})
    }
    
}