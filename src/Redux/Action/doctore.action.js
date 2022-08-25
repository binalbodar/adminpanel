import * as ActionTypes from "../ActionTypes"
import { collection, addDoc, getDocs, doc, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from "../../firbase";

//GET DOCTORE
export const getDoctore = () => async (dispatch) => {
  try {
    dispatch(loadingDoctore());
    const querySnapshot = await getDocs(collection(db, "doctore"));

    let data = [];

    querySnapshot.forEach((doc) => {

      data.push({ id: doc.id, ...doc.data() })



    });
    dispatch({ type: ActionTypes.GET_DOCTORE, payload: data })

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
    dispatch({ type: ActionTypes.POST_DOCTORE, payload: { id: docRef.id, ...data } })
  } catch (error) {
    dispatch(errorDoctore(error.message))
  }
}

//DELETE DOCTORE
export const deleteDoctore = (id) => async (dispatch) => {
  try {
    await deleteDoc(doc(db, "doctore", id));
    dispatch({ type: ActionTypes.DELETE_DOCTORE, payload: id })
  } catch (error) {
    dispatch(errorDoctore(error.message))
  }
}

//UPDATE DOCTORE
export const upadateDoctore = (data) => async (dispatch) => {
  // console.log(data.id);
  try {
    const doctoreRef = doc(db, "doctore", data.id);

    // Set the "capital" field of the city 'DC'
    await updateDoc(doctoreRef, {
      name: data.name,
      age: data.age,
      city: data.city,
      department: data.department
    });
    dispatch({type: ActionTypes.UPADATE_DOCTORE, payload: data})
  } catch (error) {
    dispatch(errorDoctore(error.message))
  }
}