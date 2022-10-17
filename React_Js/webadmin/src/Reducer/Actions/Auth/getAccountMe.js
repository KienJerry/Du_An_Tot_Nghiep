import { FETCH_ACCOUNT_ME_SUCCESS, FETCH_ACCOUNT_ME_ERROR, SET_AVATAR_ACCOUNT, ERR_AVATAR_ACCOUNT} from "../../Constants/listConstants";

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

export const setAvatarAccountSuccess = (payload) => {
    return {
        type: SET_AVATAR_ACCOUNT,
        payload: payload
    }
}

export const setAvatarAccountError = (payload) => {
    return {
        type: ERR_AVATAR_ACCOUNT,
        payload: payload
    }
}