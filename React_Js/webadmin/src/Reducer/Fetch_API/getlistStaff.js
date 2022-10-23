import axios from "axios";
import { API_GET_LIST_ACCOUNT } from '../../api/index';
import { getListAccountSuc, getListAccountErr } from '../Actions/ListStaff/ListAccount';

export const getStaff = (dispatch) => {
    axios.get(API_GET_LIST_ACCOUNT)
        .then(response => {
            dispatch(getListAccountSuc(response.data))
            return response.data;
        })
        .catch(error => {
            dispatch(getListAccountErr(error))
        });
  }