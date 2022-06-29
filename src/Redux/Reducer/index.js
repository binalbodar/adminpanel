import { combineReducers } from 'redux';
import { counterReducer } from './Counter.reduce';
export const rootReducer = combineReducers({
    counter: counterReducer
})