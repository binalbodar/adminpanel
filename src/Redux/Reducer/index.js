import { combineReducers } from 'redux';
import { counterReducer } from './Counter.reduce';
import { doctoreReducer } from './doctore.reducer';
import { medicinesReducer } from './medicine.reducer';
export const rootReducer = combineReducers({
    counter: counterReducer,
    medicines:medicinesReducer,
    doctore: doctoreReducer
})