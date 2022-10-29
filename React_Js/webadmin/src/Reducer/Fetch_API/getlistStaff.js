import axios from "axios";
import {
    API_GET_LIST_ACCOUNT, API_SET_SEARCH_STAFF, API_SET_ACCOUNT_STAFF, API_GET_ACCOUNT_NEW, API_SET_ACCOUNT_NEW_AGR,
    API_SET_ACCOUNT_NEW_CANCEL, API_BAN_ACCOUNT, API_UN_BAN_ACCOUNT, API_SET_POSITION_ACCOUNT_USER
} from '../../api/index';
import {
    getListAccountSuc, getListAccountErr, setAccountError, setAccountFalse, setAccountSuccess, getAccountNewStaffFalse,
    getAccountNewStaffSucc, getAccountNewStaffErr, setAccountNewStaffSucc, setAccountNewStaffErr, setAccountNewStaffCancel,
    setAccountBanErr, setAccountBanSuc, setAccountDefaulbanSuc, setPositionAccountSuc
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

export const BanAccUserStaff = async ({ dispatchBan, e, value }) => {
    switch (e.key) {
        case '2':
            await axios.post(API_BAN_ACCOUNT, value)
                .then(response => {
                    dispatchBan(setAccountBanSuc(response.data))
                    return response.data;
                })
                .catch(error => {
                    dispatchBan(setAccountBanErr(error))
                });
            break;
        case '3':
            await axios.post(API_UN_BAN_ACCOUNT, value)
                .then(response => {
                    dispatchBan(setAccountDefaulbanSuc(response.data))
                    return response.data;
                })
                .catch(error => {
                    dispatchBan(setAccountBanErr(error))
                });
            break;
        default:
            switch (e.key) {
                case "5":
                    value.keychucvu = e.key = "Phó giám đốc";
                    break;
                case "6":
                    value.keychucvu = e.key = "Quản lý";
                    break;
                case "7":
                    value.keychucvu = e.key = "Trưởng phòng";
                    break;
                case "8":
                    value.keychucvu = e.key = "Phó phòng";
                    break;
                case "9":
                    value.keychucvu = e.key = "Nhân viên";
                    break;
                case "10":
                    value.keychucvu = e.key = "Kế toán";
                    break;
                case "11":
                    value.keychucvu = e.key = "Nhân sự";
                    break;
                case "12":
                    value.keychucvu = e.key = "Khác";
                    break;
                default:
                    break;
            }
            await axios.post(API_SET_POSITION_ACCOUNT_USER, value)
                .then(response => {
                    dispatchBan(setPositionAccountSuc(response.data))
                    return response.data;
                })
                .catch(error => {
                    dispatchBan(setAccountBanErr(error))
                });
            break;
    }
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