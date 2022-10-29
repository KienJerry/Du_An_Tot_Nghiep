import axios from "axios";
import { API_GET_LIST_ACCOUNT, API_SET_SEARCH_STAFF, API_SET_ACCOUNT_STAFF, API_GET_ACCOUNT_NEW, API_SET_ACCOUNT_NEW_AGR, API_SET_ACCOUNT_NEW_CANCEL } from '../../api/index';
import {
    getListAccountSuc, getListAccountErr, setAccountError, setAccountFalse, setAccountSuccess, getAccountNewStaffFalse,
    getAccountNewStaffSucc, getAccountNewStaffErr, setAccountNewStaffSucc, setAccountNewStaffErr, setAccountNewStaffCancel
} from '../Actions/ListStaff/ListAccount';

export const getStaff = (dispatch, value) => {
    if (value == "" || value == undefined || value == null) {
        axios.get(API_GET_LIST_ACCOUNT)
            .then(response => {
                dispatch(getListAccountSuc(response.data))
                return response.data;
            })
            .catch(error => {
                dispatch(getListAccountErr(error))
            });
    } else {
        axios.post(API_SET_SEARCH_STAFF, { name: value })
            .then(response => {
                if (response.data.success === false) {
                    axios.get(API_GET_LIST_ACCOUNT)
                        .then(response => {
                            dispatch(getListAccountSuc(response.data))
                            return response.data;
                        })
                        .catch(error => {
                            dispatch(getListAccountErr(error))
                        });
                } else {
                    dispatch(getListAccountSuc(response.data))
                    return response.data;
                }
            })
            .catch(error => {
                dispatch(getListAccountErr(error))
            });
    }
}

export const setAccountUserStaff = (dispatch, values) => {
    axios.post(API_SET_ACCOUNT_STAFF, values)
        .then(response => {
            {
                response.data.success === false ?
                    dispatch(setAccountFalse(response.data.success))
                    :
                    dispatch(setAccountSuccess(response.data))
            }
            return response.data;
        })
        .catch(error => {
            dispatch(setAccountError(error))
        });
}

export const BanAccUserStaff = async (e) => {
    console.log(e);
    // await axios.get(API_BAN_ACCOUNT)
    // .then(response => {
    //     console.log(response.data);
    //     return response.data;
    // })
    // .catch(error => {
    //     console.log(error);
    // });
}

export const getAccountUserStaffNew = (dispatch) => {
    axios.post(API_GET_ACCOUNT_NEW)
        .then(response => {
            {
                response.data.success === false ?
                    dispatch(getAccountNewStaffFalse(response.data.success))
                    :
                    dispatch(getAccountNewStaffSucc(response.data))
            }
            return response.data;
        })
        .catch(error => {
            dispatch(getAccountNewStaffErr(error))
        });
}

export const setAccountUserStaffNewAgr = ({ dispatchAgr, key, item }) => {
    {
        key === '1' ?
            axios.post(API_SET_ACCOUNT_NEW_AGR, item)
                .then(response => {
                    {
                        dispatchAgr(setAccountNewStaffSucc(response.data))
                    }
                    return response.data;
                })
                .catch(error => {
                    dispatchAgr(setAccountNewStaffErr(error))
                })
            :
            axios.post(API_SET_ACCOUNT_NEW_CANCEL, item)
            .then(response => {
                {
                    dispatchAgr(setAccountNewStaffCancel(response.data))
                }
                return response.data;
            })
            .catch(error => {
                dispatchAgr(setAccountNewStaffErr(error))
            })
    }
}