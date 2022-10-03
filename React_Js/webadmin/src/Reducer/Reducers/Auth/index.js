import { SET_JOBS_LOGIN, SET_JOBS_REGISTER, SET_JOBS_FORGOT_PASSWORD, CHECK_SUCCESS_SAVE_ACCOUNT, CHECK_FALSE_SAVE_ACCOUNT } from '../../Constants/listConstants';

export const success = (state, action) => {
    switch (action.type) {
        case SET_JOBS_LOGIN:
            return {
                ...state,
                jobs: action.payload,
                // jobs: [...state.jobs, action.payload],
            }
        default:
            break;
    }

    return state;
}
export const Succ_Register = (state, action) => {
    switch (action.type) {
        case SET_JOBS_REGISTER:
            return {
                ...state,
                jobs: action.payload,
            }
        default:
            break;
    }

    return state;
}
export const Succ_ForgotPw = (state, action) => {
    switch (action.type) {
        case SET_JOBS_FORGOT_PASSWORD:
            return {
                ...state,
                jobs: action.payload,
            }
        default:
            break;
    }

    return state;
}
export const Save_Login_Acount = (state, action) => {
    switch (action.type) {
        case CHECK_SUCCESS_SAVE_ACCOUNT:
            return {
                ...state,
                jobs: action.payload,
            }
        case CHECK_FALSE_SAVE_ACCOUNT:
            return {
                ...state,
                jobs: action.payload,
            }
        default:
            break;
    }

    return state;
}