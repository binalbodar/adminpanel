import * as ActionTypes from "../ActionTypes"
const initialstate = {
    isLoading: false,
    medicines: [],
    error: ''
}
export const medicinesReducer = (state = initialstate, action) => {
    console.log(action.type, action.payload, state);
    switch (action.type) {
        case ActionTypes.LOADING_MEDICINE:
            return {
                ...state,
                isLoading: true,
                // medicines: [],
                error: ''
            }
        case ActionTypes.GET_MEDICINE:
            return {
                ...state,
                isLoading: false,
                medicines: action.payload,
                error: ''
            }
        case ActionTypes.ERROR_MEDICINE:
            return {
                ...state,
                isLoading: false,
                medicines: [],
                error: action.payload
            }
        case ActionTypes.POST_MEDICINE:
            return {
                ...state,
                isLoading: false,
                medicines: state.medicines.concat(action.payload),
                error:''
            }
            case ActionTypes.DELETE_MEDICINE:
            return {
                ...state,
                isLoading: false,
                medicines: state.medicines.filter((d)=>d.id!==action.payload),
                error:''
            }
            case ActionTypes.UPADATE_MEDICINE:
            return {
                ...state,
                isLoading: false,
                medicines: state.medicines.map((l)=>{
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