import * as mutation from './mutation_type'
import * as api from '../api'

export default{
    async getAuth({commit},request){
        await api.reqLogin(request).then((response)=>{
            console.log(response)
            let data=response.data
            let token=data.token
            let expire_time=data.expire_time
            commit(mutation.RECEIVE_TOKEN,token)
            localStorage.setItem('token',{'token':token,'expire_time':expire_time})
        }).catch((err)=>{
            console.log(err)
        })
    }
}