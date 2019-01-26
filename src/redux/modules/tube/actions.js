import * as actionTypes from './actionTypes';

const fetchLineStatusRequest = () => ({
  type: actionTypes.FETCH_LINE_STATUS.REQUEST,
});

const fetchLineStatusSuccess = lineStatus => ({
  type: actionTypes.FETCH_LINE_STATUS.SUCCESS,
  lineStatus,
});

const fetchLineStatusFailure = error => ({
  type: actionTypes.FETCH_LINE_STATUS.FAILURE,
  error,
});

export {
  fetchLineStatusRequest,
  fetchLineStatusSuccess,
  fetchLineStatusFailure,
};
