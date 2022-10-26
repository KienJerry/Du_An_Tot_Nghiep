import { GET_LIST_ACCOUNT_STAFF, GET_LIST_ACCOUNT_STAFF_ERR, SET_ACCOUNT_STAFF_USER_SUCCESS, SET_ACCOUNT_STAFF_USER_FALSE, SET_ACCOUNT_STAFF_USER_ERROR } from "../../Constants/listConstants";

export const getListAccountSuc = (payload) => {
    return {
        type: GET_LIST_ACCOUNT_STAFF,
        payload: payload
    }
}

export const getListAccountErr = (payload) => {
    return {
        type: GET_LIST_ACCOUNT_STAFF_ERR,
    }
}

export const setAccountSuccess = (payload) => {
    return {
        type: SET_ACCOUNT_STAFF_USER_SUCCESS,
        payload: payload
    }
}
export const setAccountFalse = (payload) => {
    return {
        type: SET_ACCOUNT_STAFF_USER_FALSE,
        payload: payload
    }
}
export const setAccountError = (payload) => {
    return {
        type: SET_ACCOUNT_STAFF_USER_ERROR,
        payload: payload
    }
}