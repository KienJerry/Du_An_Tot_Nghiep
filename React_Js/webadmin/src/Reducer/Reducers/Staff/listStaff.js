import {
    GET_LIST_ACCOUNT_STAFF, GET_LIST_ACCOUNT_STAFF_ERR, SET_ACCOUNT_STAFF_USER_SUCCESS, SET_ACCOUNT_STAFF_USER_FALSE, SET_ACCOUNT_STAFF_USER_ERROR,
    GET_NEW_ACCOUNT_STAFF_USER_SUCC, GET_NEW_ACCOUNT_STAFF_USER_FALSE, GET_NEW_ACCOUNT_STAFF_USER_ERROR, SET_NEW_ACCOUNT_STAFF_USER_SUCCESS, SET_NEW_ACCOUNT_STAFF_USER_ERROR,
    SET_NEW_ACCOUNT_STAFF_USER_CANCEL
} from '../../Constants/listConstants';
import { WarningRegister } from '../../../components/Message/Warning';
import { ErrorRegister, ErrorFALSE } from '../../../components/Message/Error';
import { SuccessRegisterStaff, SuccessRegister, SuccessNewAccountCancel } from '../../../components/Message/Success';

export const getListStaffs = (state, action) => {
    switch (action.type) {
        case GET_LIST_ACCOUNT_STAFF:
            return {
                ...state,
                all: action.payload,
                total: action.payload.length,
                show: action.payload.slice(0, 5),
            }
        case GET_LIST_ACCOUNT_STAFF_ERR:
            WarningRegister();
            return {
                ...state
            }
        default:
            return [...state];
    }
}

export const AddCountUser = (state, action) => {
    switch (action.type) {
        case SET_ACCOUNT_STAFF_USER_SUCCESS:
            SuccessRegisterStaff();
            return {
                ...state,
                action: action.payload.success
            }
        case SET_ACCOUNT_STAFF_USER_ERROR:
            WarningRegister();
            return {
                ...state
            }
        case SET_ACCOUNT_STAFF_USER_FALSE:
            ErrorRegister();
            return {
                ...state,
                action: action.payload.success
            }
        default:
            return [...state];
    }
}

export const getListDataAccountNew = (state, action) => {
    switch (action.type) {
        case GET_NEW_ACCOUNT_STAFF_USER_SUCC:
            return {
                ...state,
                all: action.payload,
            }
        case GET_NEW_ACCOUNT_STAFF_USER_FALSE:
            return {
                ...state,
                all: {}
            }
        case GET_NEW_ACCOUNT_STAFF_USER_ERROR:
            WarningRegister();
            return {
                ...state
            }
        default:
            return { ...state };
    }
}

export const setListDataAccountNewAgr = (state, action) => {
    switch (action.type) {
        case SET_NEW_ACCOUNT_STAFF_USER_SUCCESS:
            SuccessRegister();
            return {
                ...state,
                all: action.payload,
            }
        case SET_NEW_ACCOUNT_STAFF_USER_CANCEL:
            SuccessNewAccountCancel();
            return {
                ...state,
                all: action.payload,
            }
        case SET_NEW_ACCOUNT_STAFF_USER_ERROR:
            ErrorFALSE();
            return {
                ...state,
                all: {}
            }
        default:
            return { ...state };
    }
}