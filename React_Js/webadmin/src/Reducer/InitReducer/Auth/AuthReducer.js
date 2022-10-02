import {Password} from './index';
import {PASS_WORD , RE_PASS_WORD } from '../../Actions/ListAction'

export const ValidatePw =  (state = Password , action) => {
    switch (action) {
        case PASS_WORD:
            return{
                ...state,
            }
    
        default:
            break;
    }
}