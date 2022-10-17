import { FETCH_ACCOUNT_ME_SUCCESS, FETCH_ACCOUNT_ME_ERROR, SET_AVATAR_ACCOUNT, ERR_AVATAR_ACCOUNT } from '../../Constants/listConstants';
import { initAccountMe } from '../../InitReducer/Auth/getAccountMe';
import {WarningRegister} from '../../../components/Message/Warning';

export const getAccountMe = (state = initAccountMe, action) => {
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

export const setProductAccountAvatar = (state = initAccountMe, action) => {
    switch(action.type) {
        case SET_AVATAR_ACCOUNT:
            return {
                ...state,
                account: [action.payload[0]]
            }
        case ERR_AVATAR_ACCOUNT:
            WarningRegister();
            return [...state]
        default: 
        return [...state];
    }
}