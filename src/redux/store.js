import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, compose } from 'redux';

import { rootReducer, rootSaga } from './modules';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();
const middlewares = applyMiddleware(sagaMiddleware);

const store = createStore(rootReducer, composeEnhancers(middlewares));
sagaMiddleware.run(rootSaga);

export default store;
