import { SET_JOBS_LOGIN, SET_JOBS_REGISTER,SET_JOBS_FORGOT_PASSWORD } from '../../Constants/listConstants';

export const success = (state, action) => {
    switch (action.type) {
        case SET_JOBS_LOGIN:
            return {
                ...state,
                jobs: action.payload,
                // jobs: [...state.jobs, action.payload],
            }
            case SET_JOBS_REGISTER:
            return {
                ...state,
                jobs: action.payload,
            }
            case SET_JOBS_FORGOT_PASSWORD:
                return {
                    ...state,
                    jobs: action.payload,
                }
        default:
            break;
    }

    return state;
}