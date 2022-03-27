import * as mutation_type from './mutation_type'
export default {
    [mutation_type.RECEIVE_TOKEN](state,{token}){
        state.token=token
    }
}