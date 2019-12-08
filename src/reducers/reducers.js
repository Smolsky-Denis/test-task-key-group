import { combineReducers } from 'redux'
import {EmailPageInfo} from "./emailReducer";
import {FormState} from "./formReducer";

export default combineReducers({
    ...EmailPageInfo,
    ...FormState
})
