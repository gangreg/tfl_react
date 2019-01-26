// @flow
import tubeReducer from '../reducer';
import { fetchLineStatusSuccess, fetchLineStatusFailure } from '../actions';
import mockResponse from './mockLineStatus';

const initialState = {
  lineStatus: [],
  error: null,
};

describe('tube reducer', () => {
  it('should handle FETCH_LINE_STATUS.SUCCESS', () => {
    const action = fetchLineStatusSuccess(mockResponse);
    const newState = tubeReducer(initialState, action);

    expect(newState).toEqual({
      lineStatus: mockResponse,
      error: null,
    });
  });
  it('should handle FETCH_LINE_STATUS.FAILURE', () => {
    const error = 'oh damn';

    const action = fetchLineStatusFailure(error);
    const newState = tubeReducer(initialState, action);

    expect(newState).toEqual({
      lineStatus: [],
      error: 'oh damn',
    });
  });
});
