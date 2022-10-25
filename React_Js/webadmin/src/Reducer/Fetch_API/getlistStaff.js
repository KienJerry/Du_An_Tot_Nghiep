import axios from "axios";
import { API_GET_LIST_ACCOUNT, API_SET_SEARCH_STAFF } from '../../api/index';
import { getListAccountSuc, getListAccountErr } from '../Actions/ListStaff/ListAccount';

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
                console.log(response);
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