import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects'

import tubeReducer from './tube/reducer';
import watchLineStatus from './tube/sagas';

export const rootReducer = combineReducers({
  tube: tubeReducer
})

export function* rootSaga() {
  yield all([
    watchLineStatus(),
  ]);
}
