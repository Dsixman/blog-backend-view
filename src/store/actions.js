import * as mutation from './mutation_type'
import * as api from '../api'

export default{
    async getAuth({commit},request){
        await api.reqLogin(request).then((response)=>{
            console.log(response)
            let data=response.data
            let token=data.token
            console.log('mutation.RECEIVE_TOKEN: '+mutation.RECEIVE_TOKEN)
            commit(mutation.RECEIVE_TOKEN,{token})
            localStorage.setItem('token',token)
            console.log(localStorage.getItem('token'))
        }).catch((err)=>{
            console.log(err)
        })
    }
}