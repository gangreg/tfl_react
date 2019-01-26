import * as actionTypes from './actionTypes';

export const initialState = {
  lineStatus: [],
  error: null,
}

const tubeReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_LINE_STATUS.SUCCESS:
      return {
        ...state,
        lineStatus: action.lineStatus,
      };
    case actionTypes.FETCH_LINE_STATUS.FAILURE:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};

export default tubeReducer;
