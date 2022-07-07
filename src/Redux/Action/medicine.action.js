import * as ActionTypes from "../ActionTypes"
import { BASE_URL } from "../../sharad/baseurl"

export const getMedicines = () => (dispatch) => {
  try {
    dispatch(loadingMedicine());
    setTimeout(function () {
      return (
        fetch(BASE_URL + 'posts')
          .then(response => {
            if (response.ok) {
              return response;
            } else {
              var error = new Error('Error ' + response.status + ': ' + response.statusText);
              error.response = response;
              throw error;
            }
          },
            error => {
              var errmess = new Error(error.message);
              throw errmess;
            })
          .then((response) => response.json())
          .then(medicine => dispatch({ type: ActionTypes.GET_MEDICINE, payload: medicine }))
          .catch(error => console.log(error))
      )
    }, 2000)
  } catch (error) {
    console.log(error);
  }
}

export const loadingMedicine = () => (dispach) => {
  dispach({ type: ActionTypes.LOADING_MEDICINE })
}

export const errorMedicine = (error) => (dispach) => {
  dispach({ type: ActionTypes.ERROR_MEDICINE , payload:error})
}

export const postMedicione = (data) => (dispatch) => {
  try {
    dispatch(loadingMedicine());
    setTimeout(function () {
      return (
        fetch(BASE_URL + 'posts',{
          method: 'POST', // or 'PUT'
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })
          .then(response => {
            if (response.ok) {
              return response;
            } else {
              var error = new Error('Error ' + response.status + ': ' + response.statusText);
              error.response = response;
              throw error;
            }
          },
            error => {
              var errmess = new Error(error.message);
              throw errmess;
            })
          .then((response) => response.json())
          .then(medicine => dispatch({ type: ActionTypes.GET_MEDICINE, payload: medicine }))
          .catch(error => console.log(error))
      )
    }, 2000)
  } catch (error) {
    console.log(error);
  }
}