import { FETCH_ACCOUNT_ME_SUCCESS, FETCH_ACCOUNT_ME_ERROR} from "../../Constants/listConstants";

export const fetchAccountMeSuccess = (payload) => {
    return {
        type: FETCH_ACCOUNT_ME_SUCCESS,
        payload: payload
    }
}

export const fetchAccountMeError = (payload) => {
    return {
        type: FETCH_ACCOUNT_ME_ERROR,
        payload: payload
    }
}