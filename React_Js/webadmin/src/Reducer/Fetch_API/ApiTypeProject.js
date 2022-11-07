import axios from 'axios';
import * as types from '../../api/index';
import * as actions from '../Actions/Managament/ProjectManagement';

export function setAddTypeProject({ dispatch, values }) {
    axios.post(types.API_ADD_PROJECT_MANAGEMENT, values)
        .then(response => {
            {
                response.data.success === true ?
                dispatch(actions.setAddProjectTypeManagementSucc(response.data))
                :
                dispatch(actions.setAddProjectTypeManagementFalse(response.data))
            }
            return response.data;
        })
        .catch(error => {
            dispatch(actions.setAddProjectTypeManagementErr(error))
        });
}


export function getListTypeProject(dispatch) {
    axios.get(types.API_LIST_PROJECT_MANAGEMENT)
        .then(response => {
            dispatch(actions.getListProjectTypeManagementErr(response.data))
            return response.data;
        })
        .catch(error => {
            dispatch(actions.setAddProjectTypeManagementErr(error))
        });
}