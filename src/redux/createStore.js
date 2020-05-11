import { createStore, applyMiddleware, compose } from 'redux'
import { logger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'

// creates the store
export default (rootReducer: Object, rootSaga: Object) => {
  /* ------------- Redux Configuration ------------- */

  const middleware = []
  const enhancers = []

  const sagaMiddleware = createSagaMiddleware()
  middleware.push(sagaMiddleware)
  middleware.push(logger)

  enhancers.push(applyMiddleware(...middleware))

  const store = createStore(rootReducer, compose(...enhancers))

  // start the root saga
  sagaMiddleware.run(rootSaga, store.dispatch)

  return store
}
