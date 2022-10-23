import { GET_LIST_ACCOUNT_STAFF, GET_LIST_ACCOUNT_STAFF_ERR} from "../../Constants/listConstants";

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