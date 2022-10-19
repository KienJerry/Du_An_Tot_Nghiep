import axios from "axios";
import { API_SET_PASSWORD } from '../../api/index';
import { setPasswordSucc, setPasswordFalse, setPasswordErr } from '../Actions/Auth/setPassWord';

export const setPassword = (dispatch, formData) => {
    axios.post(API_SET_PASSWORD,formData)
        .then(response => {
            dispatch(setPasswordSucc(response.data))
            return response.data;
        })
        .catch(error => {
            dispatch(setPasswordErr(error))
        });
  }