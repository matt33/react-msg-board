import {takeLatest, all} from 'redux-saga/effects'
import API from '../api/'
import {MessagesTypes} from '../redux/messagesRedux'
import {fetchMessages, fetchInitialData, postMessage} from './messagesSagas'


export default function* root(dispatch) {
  // api object is created as a 'singleton' when index saga is fired off
  const api = API.create(dispatch)
  yield all([
    takeLatest(MessagesTypes.FETCH_MESSAGES_REQUEST, fetchMessages, api),
    takeLatest(MessagesTypes.FETCH_INITIAL_DATA_REQUEST, fetchInitialData, api),
    takeLatest(MessagesTypes.POST_MESSAGE_REQUEST, postMessage, api)
  ])
}
