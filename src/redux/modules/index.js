import { combineReducers } from 'redux';
import tubeReducer from './tube/reducer';

export const rootReducer = combineReducers({
  tube: tubeReducer
})
