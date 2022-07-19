import * as ActionTypes from "../ActionTypes"
import { BASE_URL } from "../../sharad/baseurl"
import { addMedicinesData, deleteMedicinesData, getMedicinesData, upadateMedicinesData } from "../../common/apis/medicine.api";

export const getMedicines = () => (dispatch) => {
  try {
    dispatch(loadingMedicine());

    setTimeout(function(){
      getMedicinesData()
      .then((data) => dispatch(({ type: ActionTypes.GET_MEDICINE, payload: data.data })))
      .catch((error) => dispatch(errorMedicine(error.message)))
    })

    // setTimeout(function () {
    //   return fetch(BASE_URL + 'medicine')
    //     .then(response => {
    //       if (response.ok) {
    //         return response;
    //       } else {
    //         var error = new Error('Error ' + response.status + ': ' + response.statusText);
    //         error.response = response;
    //         throw error;
    //       }
    //     },
    //       error => {
    //         var errmess = new Error(error.message);
    //         throw errmess;
    //       })
    //     .then((response) => response.json())
    //     .then(medicine => dispatch(({ type: ActionTypes.GET_MEDICINE, payload: medicine })))
    //     .catch((error) => dispatch(errorMedicine(error.message)))
    // }, 2000)
  } catch (error) {
    dispatch(errorMedicine(error.message))
  }
}

export const loadingMedicine = () => (dispach) => {
  dispach({ type: ActionTypes.LOADING_MEDICINE })
}

export const errorMedicine = (error) => (dispach) => {
  dispach({ type: ActionTypes.ERROR_MEDICINE, payload: error })
}

export const addMedicines = (data) => (dispatch) => {
  try {
    dispatch(loadingMedicine());

    setTimeout(function (){
      addMedicinesData(data)
      .then((data)=>dispatch(({type: ActionTypes.POST_MEDICINE, payload:data.data})))
      .catch((error) => dispatch(errorMedicine(error.message)))
    }, 1000)

    // setTimeout(function () {
    //   return fetch(BASE_URL + 'medicine', {
    //     method: 'POST', 
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(data),
    //   })
    //     .then(response => {
    //       if (response.ok) {
    //         return response;
    //       } else {
    //         var error = new Error('Error ' + response.status + ': ' + response.statusText);
    //         error.response = response;
    //         throw error;
    //       }
    //     },
    //       error => {
    //         var errmess = new Error(error.message);
    //         throw errmess;
    //       })
    //     .then((response) => response.json())
    //     .then(medicine => dispatch(({ type: ActionTypes.POST_MEDICINE, payload: medicine })))
    //     .catch((error) => dispatch(errorMedicine(error.message)))
    // }, 2000)
  } catch (error) {
    dispatch(errorMedicine(error.message))
  }
}

export const deleteMedicines=(id)=>(dispatch)=>{
  try {

    deleteMedicinesData(id)
    .then(dispatch(({type: ActionTypes.DELETE_MEDICINE, payload: id})))
    .catch((error) => dispatch(errorMedicine(error.message)))

    // return fetch(BASE_URL + 'medicine/' + id, {
    //   method: 'DELETE'
    // })
    //   .then(response => {
    //     if (response.ok) {
    //       return response;
    //     } else {
    //       var error = new Error('Error ' + response.status + ': ' + response.statusText);
    //       error.response = response;
    //       throw error;
    //     }
    //   },
    //     error => {
    //       var errmess = new Error(error.message);
    //       throw errmess;
    //     })
    //   .then((response) => response.json())
    //   .then(medicine => dispatch(({ type: ActionTypes.DELETE_MEDICINE, payload: id })))
    //   .catch((error) => dispatch(errorMedicine(error.message)))
  } catch (error) {
    dispatch(errorMedicine(error.message))
  }
}

export const upadateMedicine =(data)=>(dispatch)=>{
  try {

    upadateMedicinesData(data)
    .then((data)=>dispatch(({type: ActionTypes.UPADATE_MEDICINE, payload: data.data})))
    .catch((error) => dispatch(errorMedicine(error.message)))
    
    // return fetch(BASE_URL + 'medicine/' + data.id, {
    //   method: 'PUT',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(data),
    // })
    //   .then(response => {
    //     if (response.ok) {
    //       return response;
    //     } else {
    //       var error = new Error('Error ' + response.status + ': ' + response.statusText);
    //       error.response = response;
    //       throw error;
    //     }
    //   },
    //     error => {
    //       var errmess = new Error(error.message);
    //       throw errmess;
    //     })
    //   .then((response) => response.json())
    //   .then(medicine => dispatch(({ type: ActionTypes.UPADATE_MEDICINE, payload: data})))
    //   .catch((error) => dispatch(errorMedicine(error.message)))
  } catch (error) {
    dispatch(errorMedicine(error.message))
  }
}
