import axios from 'axios';
import { API_SET_AVATAR_ACCOUNT } from '../../api/index';
import {setAvatarAccountSuccess, setAvatarAccountError } from '../Actions/Auth/getAccountMe';

export const setAvatarAccount = (dispatch , checkfile) => {
    var abc = checkfile ;
    setTimeout(() => {
        abc = checkfile;
        console.log('1: ' , abc);
      }, 5000)
    const formData = new FormData(); 

    formData.append('file', checkfile);
    // axios.post(API_SET_AVATAR_ACCOUNT,formData)
    //     .then(response => {
    //         dispatch(setAvatarAccountSuccess(response.data))
    //         return response.data;
    //     })
    //     .catch(error => {
    //         dispatch(setAvatarAccountError(error))
    //     });
}