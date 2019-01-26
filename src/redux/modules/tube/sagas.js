import { takeEvery, put, call } from "redux-saga/effects"
import { FETCH_LINE_STATUS } from './actionTypes'
import { fetchLineStatusSuccess, fetchLineStatusFailure } from "./actions"
import { fetchLineStatus } from "../../../services/api/lineStatus"

export function* fetchLineStatusSaga() {
  try {
    const result = yield call(fetchLineStatus)
    yield put(fetchLineStatusSuccess(result.data))
  } catch (error) {
    yield put(fetchLineStatusFailure(error))
  }
}

export default function* watchLineStatus() {
  yield takeEvery(FETCH_LINE_STATUS.REQUEST, fetchLineStatusSaga)
}
