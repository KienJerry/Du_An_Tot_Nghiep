import { GET_LIST_ACCOUNT_STAFF, GET_LIST_ACCOUNT_STAFF_ERR, SET_ACCOUNT_STAFF_USER_SUCCESS, SET_ACCOUNT_STAFF_USER_FALSE, SET_ACCOUNT_STAFF_USER_ERROR,
    GET_NEW_ACCOUNT_STAFF_USER_SUCC, GET_NEW_ACCOUNT_STAFF_USER_FALSE, GET_NEW_ACCOUNT_STAFF_USER_ERROR, SET_NEW_ACCOUNT_STAFF_USER_SUCCESS , SET_NEW_ACCOUNT_STAFF_USER_ERROR,
    SET_NEW_ACCOUNT_STAFF_USER_CANCEL} from "../../Constants/listConstants";

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

export const getAccountNewStaffSucc = (payload) => {
    return {
        type: GET_NEW_ACCOUNT_STAFF_USER_SUCC,
        payload: payload
    }
}
export const getAccountNewStaffFalse = (payload) => {
    return {
        type: GET_NEW_ACCOUNT_STAFF_USER_FALSE,
        payload: payload
    }
}

export const getAccountNewStaffErr = (payload) => {
    return {
        type: GET_NEW_ACCOUNT_STAFF_USER_ERROR,
        payload: payload
    }
}

export const setAccountNewStaffSucc = (payload) => {
    return {
        type: SET_NEW_ACCOUNT_STAFF_USER_SUCCESS,
        payload: payload
    }
}

export const setAccountNewStaffCancel = (payload) => {
    return {
        type: SET_NEW_ACCOUNT_STAFF_USER_CANCEL,
        payload: payload
    }
}

export const setAccountNewStaffErr = (payload) => {
    return {
        type: SET_NEW_ACCOUNT_STAFF_USER_ERROR,
        payload: payload
    }
}