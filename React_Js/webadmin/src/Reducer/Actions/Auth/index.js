import { SET_JOBS_LOGIN, SET_JOBS_REGISTER,SET_JOBS_FORGOT_PASSWORD } from "../../Constants/listConstants"
import axios from 'axios';
import { API_LOGIN, API_REGISTER,API_FORGOT_PW } from '../../../api/index';
import { SuccessRegister,SuccessForgotPw } from '../../../components/Message/Success';
import { ErrorLogin, ErrorAccountBan, ErrorAccountLOCK, ErrorRegister,ErrorForgotPW } from '../../../components/Message/Error';
import { WarningRegister } from '../../../components/Message/Warning';

export const SetJobLogin = payload => {
    axios.post(API_LOGIN, payload)
        .then(response => {
            if (response.data.success === true) {
                SuccessRegister()
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
        payload
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