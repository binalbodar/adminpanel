import * as ActionTypes from "../ActionTypes"
const initialstate = {
    isLoading: false,
    doctore: [],
    error: ''
}
export const medicinesReducer = (state = initialstate, action) => {
    console.log(action.type, action.payload, state);
    switch (action.type) {
        case ActionTypes.LOADING_DOCTORE:
            return {
                ...state,
                isLoading: true,
                // doctore: [],
                error: ''
            }
        case ActionTypes.GET_DOCTORE:
            return {
                ...state,
                isLoading: false,
                doctore: action.payload,
                error: ''
            }
        case ActionTypes.ERROR_DOCTORE:
            return {
                ...state,
                isLoading: false,
                doctore: [],
                error: action.payload
            }
        case ActionTypes.POST_DOCTORE:
            return {
                ...state,
                isLoading: false,
                doctore: state.doctore.concat(action.payload),
                error:''
            }
            case ActionTypes.DELETE_DOCTORE:
            return {
                ...state,
                isLoading: false,
                doctore: state.doctore.filter((d)=>d.id!==action.payload),
                error:''
            }
            case ActionTypes.UPADATE_DOCTORE:
            return {
                ...state,
                isLoading: false,
                doctore: state.doctore.map((l)=>{
                    if (l.id===action.payload.id) {
                        return action.payload
                    } else {
                        return l
                    }
                }),
                error:''
            }
        default:
            return state;
    }
}