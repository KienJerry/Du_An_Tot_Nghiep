import {SET_JOBS_LOGIN, SET_JOBS_REGISTER, SET_JOBS_FORGOT_PASSWORD, CHECK_FALSE_SAVE_ACCOUNT, CHECK_SUCCESS_SAVE_ACCOUNT,} from "../../Constants/listConstants"
import axios from 'axios';
import { API_LOGIN, API_REGISTER, API_FORGOT_PW } from '../../../api/index';
import { SuccessRegister, SuccessForgotPw,SuccessLogin } from '../../../components/Message/Success';
import { ErrorLogin, ErrorAccountBan, ErrorAccountLOCK, ErrorRegister, ErrorForgotPW } from '../../../components/Message/Error';
import { WarningRegister } from '../../../components/Message/Warning';

export const SetJobLogin = (payload) => {
    axios.post(API_LOGIN, payload)
        .then(response => {
            if (response.data.success === true) {
                // SuccessLogin();
                TokenLogin(payload);
            } else if (response.data.message === "Ban!") {
                ErrorAccountBan()
            } else if (response.data.message === "LOCK!") {
                ErrorAccountLOCK()

            } else {
                ErrorLogin()
            }
        })
        .catch(error => {
            WarningRegister()
        });
    return {
        type: SET_JOBS_LOGIN,
        payload,
    }
}

export const SetJobRegister = payload => {
    axios.post(API_REGISTER, payload)
        .then(response => {
            if (response.data.success === true) {
                SuccessRegister()
            } else {
                ErrorRegister()
            }
        })
        .catch(error => {
            WarningRegister()
        });
    return {
        type: SET_JOBS_REGISTER,
        payload
    }
}

export const SetJobForgotPassword = payload => {
    axios.post(API_FORGOT_PW, payload)
        .then(response => {
            if (response.data.success === true) {
                SuccessForgotPw();
            } else {
                ErrorForgotPW()
            }
        })
        .catch(error => {
            WarningRegister()
        });
    return {
        type: SET_JOBS_FORGOT_PASSWORD,
        payload
    }
}

export const TokenLogin = payload => {
    if (payload.checked === true) {
        delete payload.passWord;
        localStorage.setItem('Save_Login', JSON.stringify(payload));
        return {
            type: CHECK_SUCCESS_SAVE_ACCOUNT,
            payload
        }
    } else {
        delete payload.passWord;
        localStorage.setItem('Save_Login', JSON.stringify(payload));
        return {
            type: CHECK_FALSE_SAVE_ACCOUNT,
            payload
        }
    }
};