const api = 'http://localhost:3001/';
const getAccountMe = 'getaccountme/';
const getManagement = 'quanly/';
const getGroupUser = 'getListManagerGr/';
export const API_REGISTER = api + 'dangky';
export const API_LOGIN = api + 'dangnhap';
export const API_FORGOT_PW = api + 'quen-mat-khau';
export const API_GET_ACCOUNT = api + 'getaccountme';
export const API_SET_AVATAR_ACCOUNT = api + getAccountMe + 'edituploadfile';
export const API_SET_DEL_AVATAR_ACCOUNT = api + getAccountMe + 'deleteuploadfile';
export const API_GET_URL_IMAGE = api + 'images/';
export const API_GET_URL_IMAGE_USER_OUTLINE = api + 'images/user.png';
export const API_SET_PASSWORD = api + 'doi-mat-khau';
export const API_GET_LIST_ACCOUNT = api + 'showaccount';
export const API_SET_SEARCH_STAFF = api + 'search-staff';
export const API_SET_ACCOUNT_STAFF = api + 'dangkyStaff';
export const API_BAN_ACCOUNT = api + 'ban-account';
export const API_UN_BAN_ACCOUNT = api + 'un-ban-account';
export const API_GET_ACCOUNT_NEW = api + 'new-account-staff';
export const API_SET_ACCOUNT_NEW_AGR = api + 'new-account-agr';
export const API_SET_ACCOUNT_NEW_CANCEL = api + 'new-account-cancel';
export const API_SET_POSITION_ACCOUNT_USER = api + 'update-quyen-account';
export const API_GET_LIST_ACCOUNT_BAN = api + 'getlistaccountbanorduyet';
export const API_GET_LIST_ACCOUNT_POSITION = api + 'getlistaccountchucvu';
export const API_HET_LIST_ACCOUNT_USER_FORGOT_PASS = api + 'getListAccountUserForgotPw';
export const API_SET_USER_ACCOUNT_PW = api + 'setPassAccount';
export const API_SET_DEL_USER_ACCOUNT_PW = api + 'setDelPassAccount';
export const API_ADD_PROJECT_MANAGEMENT = api + getManagement + 'them-quan-ly-loai-du-an';
export const API_DEL_PROJECT_MANAGEMENT = api + getManagement + 'xoa-quan-ly-loai-du-an';
export const API_UPDATE_PROJECT_MANAGEMENT = api + getManagement + 'sua-quan-ly-loai-du-an';
export const API_LIST_PROJECT_MANAGEMENT = api + getManagement + 'danh-sach-quan-ly-loai-du-an';
export const API_GET_LIST_USER_LEADER = api + 'getListManagerGr';
export const API_GET_LIST_USER_USER = api + 'getListManagerGrAccountUnlock';
export const API_SET_ADD_GR = api + getGroupUser + 'them-nhom-moi';
export const API_GET_DETAIL_GR = api + getGroupUser + 'chi-tiet-nhom';
export const API_GET_USER_PROJ = api + getGroupUser + 'detail-user-account';
export const API_GET_LIST_GR_TYPE = api + 'getListGrType';
export const API_GET_DETAIL_ACCOUNT = api + 'detail-account';
export const API_SET_ADD_NEW_PROJECTS = api + 'add-new-prj';
export const API_GET_LIST_PROJECT_OPEN = api + 'get-list-project-open';
export const API_GET_USER_LEADER_PROJ = api + 'getaccountmeID';