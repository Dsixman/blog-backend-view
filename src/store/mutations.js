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
    [mutation_type.RECEIVE_ALL_ARTICALS](state,{allArticals}){
        state.allArticals=allArticals
    },
    [mutation_type.RECEIVE_ALL_REPORTS](state,{allReport}){
        state.allReport=allReport
    },
    [mutation_type.RECEIVE_STATE_TEXT](state,{stateText}){
        state.stateText=stateText
    },
    [mutation_type.RECEIVE_FIND_ARTICAL](state,{findArtical}){
        state.findArtical=findArtical
    },
    [mutation_type.RECEIVE_SEARCH_REPORT](state,{searchReport}){
        state.searchReport=searchReport
    },
    [mutation_type.RECEIVE_COMPUTED_ARTICALS](state,{computedArticals}){
        state.computedArticals=computedArticals
    },
    [mutation_type.RECEIVE_COMPUTED_CATEGORY](state,{computedCategory}){
        state.computedCategory=computedCategory
    },
    [mutation_type.RECEIVE_COMPUTED_REPORTS](state,{computedReports}){
        state.computedReports=computedReports
    },

    [mutation_type.RECEIVE_EDITOR_CATEGORY](state,{editorCategory}){
        state.editorCategory=editorCategory
    },
 
}