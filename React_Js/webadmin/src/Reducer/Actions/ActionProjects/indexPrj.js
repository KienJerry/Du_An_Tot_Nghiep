import * as constants from "../../Constants/listConstants";

export const setAddSuccsetProject = (payload) => {
    return {
        type: constants.SET_ADD_PROJECTS_SUCCESS,
        payload: payload
    }
}
export const setAddFalseProject = (payload) => {
    return {
        type: constants.SET_ADD_PROJECTS_FALSE,
        payload: payload
    }
}
export const setAddErrorProject = (payload) => {
    return {
        type: constants.SET_ADD_PROJECTS_ERROR,
        payload: payload
    }
}