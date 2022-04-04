import * as mutation_type from './mutation_type'
// import{
//     RECEIVE_ALL_CATEGORY,
//     RECEIVE_TOKEN,
//     RECEIVE_BLOG
//  } from './mutation_type'
export default {
    [mutation_type.RECEIVE_TOKEN](state,{token}){
        state.token=token
    },
    [mutation_type.RECEIVE_BLOG](state,{blog}){
        state.blog=blog
    },
    [mutation_type.RECEIVE_ALL_CATEGORY](state,{allCategory}){
        state.allCategory=allCategory
    } ,
    [mutation_type.RECEIVE_ALL_ARTICLAS](state,{allArticals}){
        state.allArticals=allArticals
    },
    [mutation_type.RECEIVE_ALL_REPORt](state,{allReport}){
        state.allReport=allReport
    },
    [mutation_type.RECEIVE_UPDATE_ARTICAL](state,{stateText}){
        state.stateText=stateText
    },
    [mutation_type.RECEIVE_DELETE_ARTICAL](state,{stateText}){
        state.stateText=stateText
    } ,
    [mutation_type.RECEIVE_ADD_CATEGORY](state,{stateText}){
        state.stateText=stateText
    },
    [mutation_type.RECEIVE_DELETE_CATEGORY](state,{stateText}){
        state.stateText=stateText
    } ,
    [mutation_type.RECEIVE_ADD_REPORT](state,{stateText}){
        state.stateText=stateText
    },
    [mutation_type.RECEIVE_DELETE_REPORT](state,{stateText}){
        state.stateText=stateText
    }  
}