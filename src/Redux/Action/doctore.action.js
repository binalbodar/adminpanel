import * as ActionTypes from "../ActionTypes"
import { BASE_URL } from "../../sharad/baseurl"
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firbase";

//GET DOCTORE
export const getDoctore = () => (dispatch) => {
  try {
    dispatch(loadingDoctore());
    
  } catch (error) {
    dispatch(errorDoctore(error.message))
  }
}

export const loadingDoctore = () => (dispach) => {
  dispach({ type: ActionTypes.LOADING_DOCTORE })
}

export const errorDoctore = (error) => (dispach) => {
  dispach({ type: ActionTypes.ERROR_DOCTORE, payload: error })
}

//ADD DOCTORE
export const addDoctore = (data) => async (dispatch) => {
  try {
    dispatch(loadingDoctore());
    const docRef = await addDoc(collection(db, "doctore"), data);
    dispatch({ type: ActionTypes.POST_DOCTORE, payload:{id: docRef.id, ...data}})
  
    console.log("Document written with ID: ", docRef.id);
    
  } catch (error) {
    dispatch(errorDoctore(error.message))
  }
}

//DELETE DOCTORE
export const deleteDoctore=(id)=>(dispatch)=>{
  try {
   
  } catch (error) {
    dispatch(errorDoctore(error.message))
  }
}

//UPDATE DOCTORE
export const upadateDoctore =(data)=>(dispatch)=>{
  try {
    
  } catch (error) {
    dispatch(errorDoctore(error.message))
  }
}