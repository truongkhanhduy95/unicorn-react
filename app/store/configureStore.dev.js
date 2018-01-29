import { createStore, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../saga/sagas';

const sagaMiddleware = createSagaMiddleware();
const createDevStoreWithMiddleware = compose(
  applyMiddleware(sagaMiddleware),
  applyMiddleware(createLogger()),
  // DevTools.instrument(),
)(createStore);

export default function configureStore() {
  const store = createDevStoreWithMiddleware(rootReducer);

  // enable webpack hot module replacement for reducers
  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');
      store.replaceReducer(nextRootReducer);
    });
  }

  sagaMiddleware.run(rootSaga);

  return store;
}
