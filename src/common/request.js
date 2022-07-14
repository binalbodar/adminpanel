import axios from 'axios';
import { BASE_URL } from '../sharad/baseurl';

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 2000
});

const sendRequest = (config) => {
    return axiosInstance.request(config)
}

export const getRequest=(path)=>{
    return sendRequest({
        url:path,
        method:"GET"
    })
}
