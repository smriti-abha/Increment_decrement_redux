import changeNumber from "./UpDown";
import {combineReducers} from 'redux';

const rootReducer=combineReducers({
  changeNumber:changeNumber
})

export default rootReducer;