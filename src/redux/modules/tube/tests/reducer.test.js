// @flow
import tubeReducer from '../reducer';
import { fetchLineStatusSuccess, fetchLineStatusFailure } from '../actions';

const initialState = {
  lineStatus: [],
  error: null,
};

const mockResponse = [
  {
    "$type": "Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities",
    "id": "jubilee",
    "name": "Jubilee",
    "modeName": "tube",
    "disruptions": [],
    "created": "2019-01-22T13:26:33.337Z",
    "modified": "2019-01-22T13:26:33.337Z",
    "lineStatuses": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineStatus, Tfl.Api.Presentation.Entities",
        "id": 0,
        "statusSeverity": 10,
        "statusSeverityDescription": "Good Service",
        "created": "0001-01-01T00:00:00",
        "validityPeriods": []
      }
    ],
    "routeSections": [],
    "serviceTypes": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineServiceTypeInfo, Tfl.Api.Presentation.Entities",
        "name": "Regular",
        "uri": "/Line/Route?ids=Jubilee&serviceTypes=Regular"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineServiceTypeInfo, Tfl.Api.Presentation.Entities",
        "name": "Night",
        "uri": "/Line/Route?ids=Jubilee&serviceTypes=Night"
      }
    ],
    "crowding": {
      "$type": "Tfl.Api.Presentation.Entities.Crowding, Tfl.Api.Presentation.Entities"
    }
  }
]

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
