import { GET_LIST_ACCOUNT_STAFF, GET_LIST_ACCOUNT_STAFF_ERR } from '../../Constants/listConstants';
import {WarningRegister} from '../../../components/Message/Warning';

export const getListStaffs = (state , action) => {
    switch(action.type) {
        case GET_LIST_ACCOUNT_STAFF:
            return {
                ...state,
                data: action.payload
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