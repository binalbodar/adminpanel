import * as ActionTypes from "../ActionTypes"
const initialstate={
    isLoading:false,
    medicines:[],
    error:''
}
export const medicinesReducer=(state=initialstate,action)=>{
    console.log(action.type, action.payload);
    switch(action.type){
        case ActionTypes.LOADING_MEDICINE:
            return{
                ...state,
                isLoading:true,
                medicines:[],
                error:''
            }
        case ActionTypes.GET_MEDICINE:
            return{
                ...state,
                isLoading:false,
                medicines:action.payload,
                error:''
            }
        case ActionTypes.ERROR_MEDICINE:
            return{
                ...state,
                isLoading:false,
                medicines:[],
                error:action.payload
            }
            default:
                return state;
    }
}