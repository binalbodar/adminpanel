import * as ActionTypes from "../ActionTypes"
import { BASE_URL } from "../../sharad/baseurl"

export const getDoctore = () => (dispatch) => {
  try {
    dispatch(loadingDoctore());
    setTimeout(function () {
      return fetch(BASE_URL + 'doctore')
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
        .then(medicine => dispatch(({ type: ActionTypes.GET_DOCTORE, payload: medicine })))
        .catch((error) => dispatch(errorMedicine(error.message)))
    }, 2000)
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

export const addDoctore = (data) => (dispatch) => {
  try {
    dispatch(loadingDoctore());
    setTimeout(function () {
      return fetch(BASE_URL + 'doctore', {
        method: 'POST', 
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
        .then(medicine => dispatch(({ type: ActionTypes.POST_DOCTORE, payload: medicine })))
        .catch((error) => dispatch(errorMedicine(error.message)))
    }, 2000)
  } catch (error) {
    dispatch(errorDoctore(error.message))
  }
}

export const deleteDoctore=(id)=>(dispatch)=>{
  try {
    return fetch(BASE_URL + 'doctore/' + id, {
      method: 'DELETE'
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
      .then(medicine => dispatch(({ type: ActionTypes.DELETE_DOCTORE, payload: id })))
      .catch((error) => dispatch(errorMedicine(error.message)))
  } catch (error) {
    dispatch(errorDoctore(error.message))
  }
}

export const upadateDoctore =(data)=>(dispatch)=>{
  try {
    return fetch(BASE_URL + 'doctore/' + data.id, {
      method: 'PUT',
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
      .then(doctore => dispatch(({ type: ActionTypes.UPADATE_DOCTORE, payload: data})))
      .catch((error) => dispatch(errorDoctore(error.message)))
  } catch (error) {
    dispatch(errorDoctore(error.message))
  }
}