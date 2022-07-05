import { combineReducers } from 'redux';
import { counterReducer } from './Counter.reduce';
import { medicinesReducer } from './medicine.reducer';
export const rootReducer = combineReducers({
    counter: counterReducer,
    medicines:medicinesReducer
})