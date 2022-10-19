import { FETCH_ACCOUNT_ME_SUCCESS, FETCH_ACCOUNT_ME_ERROR, SET_AVATAR_ACCOUNT, ERR_AVATAR_ACCOUNT } from '../../Constants/listConstants';
import { SuccessRegister } from '../../../components/Message/Success';
import {WarningRegister} from '../../../components/Message/Warning';
import {ErrorFALSE} from '../../../components/Message/Error';
import header from '../../../containers/Admin/PageAdmin/Header/indexHeaderAdmin'

export const getAccountMe = (state , action) => {
    switch(action.type) {
        case FETCH_ACCOUNT_ME_SUCCESS:
            return {
                ...state,
                account: [action.payload[0]]
            }
        case FETCH_ACCOUNT_ME_ERROR:
            WarningRegister();
            return [...state]
        default: 
        return [...state];
    }
}

export const setProductAccountAvatar = (state , action) => {
    switch(action.type) {
        case SET_AVATAR_ACCOUNT:
            SuccessRegister();
            return {
                ...state,
                account: [action.payload]
            }
        case ERR_AVATAR_ACCOUNT:
            ErrorFALSE();
            return [...state]
        default: 
        return [...state];
    }
}