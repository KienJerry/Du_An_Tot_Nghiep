import * as constants from '../../Constants/listConstants';
import * as succ from '../../../components/Message/Success';
import { WarningRegister } from '../../../components/Message/Warning';
import * as fal from '../../../components/Message/Error';

export const ActionPrj = (state, action) => {
    switch (action.type) {
        case constants.SET_ADD_PROJECTS_SUCCESS:
            succ.SuccessAdd();
            return {
                ...state,
                event:{
                    ...state.event,
                    event: action.payload
                }
            }
        case constants.SET_ADD_PROJECTS_FALSE:
            fal.ErrorAddProject();
            return {
                ...state,
                event:{
                    ...state.event,
                    event: action.payload
                }
            }
        case constants.SET_ADD_PROJECTS_ERROR:
            WarningRegister();
            return {
                ...state,
            }
        default:
            return { ...state };
    }
}