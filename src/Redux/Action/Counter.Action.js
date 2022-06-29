import * as ActionTypes from "../ActionTypes";
export const incrementCounter = () => (dispach) => {
    dispach({type: ActionTypes.INCREMENT_COUNTER})
}
export const decrementCounter=()=>(dispach)=>{
    dispach({type: ActionTypes.DECREMENT_COUNTER})
}