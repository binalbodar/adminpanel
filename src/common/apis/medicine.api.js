import { deleteRequest, getRequest, postRequest, putRequest } from "../request"

export const getMedicinesData = () => {
    return getRequest("medicine")
}
export const addMedicinesData = (data) => {
    return postRequest("medicine", data)
}

export const deleteMedicinesData = (id) => {
    return deleteRequest("medicine/", id)
}

export const upadateMedicinesData = (data) => {
    return putRequest("medicine/", data)
}