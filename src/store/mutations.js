//import * as mutation_type from './mutation_type'
import{
    RECEIVE_ALL_CATEGORY,
    RECEIVE_TOKEN,
    RECEIVE_BLOG
 } from './mutation_type'
export default {
    [RECEIVE_TOKEN](state,{token}){
        state.token=token
    },
    [RECEIVE_BLOG](state,{blog}){
        state.blog=blog
    },
    [RECEIVE_ALL_CATEGORY](state,{allCategory}){
        state.allCategory=allCategory
    }
    
}