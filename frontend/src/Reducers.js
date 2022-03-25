import useReducer from './reducers/useReducer';
import { combineReducers } from "redux";

export default combineReducers({
   user: useReducer
});