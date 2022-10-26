import { GET_LIST_ACCOUNT_STAFF, GET_LIST_ACCOUNT_STAFF_ERR, SET_ACCOUNT_STAFF_USER_SUCCESS, SET_ACCOUNT_STAFF_USER_FALSE, SET_ACCOUNT_STAFF_USER_ERROR } from '../../Constants/listConstants';
import {WarningRegister} from '../../../components/Message/Warning';
import {ErrorRegister} from '../../../components/Message/Error';
import {SuccessRegisterStaff} from '../../../components/Message/Success';

export const getListStaffs = (state , action) => {
    switch(action.type) {
        case GET_LIST_ACCOUNT_STAFF:
            return {
                ...state,
                all: action.payload,
                total : action.payload.length,
                show : action.payload.slice(0, 5),
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

export const AddCountUser = (state , action) => {
    switch(action.type) {
        case SET_ACCOUNT_STAFF_USER_SUCCESS:
            SuccessRegisterStaff();
            return {
                ...state,
                action : action.payload.success
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
                action : action.payload.success
            }
        default: 
        return [...state];
    }
}