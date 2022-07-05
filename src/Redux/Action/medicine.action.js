import * as ActionTypes from "../ActionTypes"
import { BASE_URL } from "../../sharad/baseurl"

export const getMedicines=()=>(dispatch)=>{
    try {
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
            .then((response)=>response.json())
            .then(medicine => dispatch({type:ActionTypes.GET_MEDICINE,payload:medicine}))
        .catch(error=>console.log(error))
    } catch (error) {
        console.log(error);
    }
}