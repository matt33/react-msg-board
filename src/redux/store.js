import {combineReducers} from 'redux'
import rootSaga from '~sagas/'
import configureStore from './createStore'

// import all reducers
import {reducer as messagesReducer} from './messagesRedux'
import {reducer as networkRequestsReducer} from './networkRequestsRedux'

const messageBoardReducer = combineReducers({
  messages:        messagesReducer,
  networkRequests: networkRequestsReducer
})

export default configureStore(messageBoardReducer, rootSaga)
