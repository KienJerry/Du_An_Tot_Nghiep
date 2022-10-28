import axios from "axios";
import { API_GET_LIST_ACCOUNT, API_SET_SEARCH_STAFF, API_SET_ACCOUNT_STAFF } from '../../api/index';
import { getListAccountSuc, getListAccountErr, setAccountError, setAccountFalse, setAccountSuccess } from '../Actions/ListStaff/ListAccount';

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

export const BanAccUserStaff = async() => {
    await axios.get(API_GET_LIST_ACCOUNT)
    .then(response => {
        console.log(response.data);
        return response.data;
    })
    .catch(error => {
        console.log(error);
    });
}