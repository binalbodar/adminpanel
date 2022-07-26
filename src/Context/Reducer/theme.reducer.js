import * as ActionTypes from "../ActionTypes"

export const ThemeReducer = (state, action)=>{
    switch (action.type) {
        case ActionTypes.TOOGAL_THEME:
            return{
                ...state,
                theme:action.paylod
            }
    
        default:
            return state;
    }
}