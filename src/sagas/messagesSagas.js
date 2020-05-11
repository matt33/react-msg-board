import {put, call} from 'redux-saga/effects'
import MessagesActions from '../redux/messagesRedux'

export function* fetchMessages(api, {params}) {
  const normalisedParams = normaliseParams(params)
  const {data} = yield call(api.fetchMessages, normalisedParams)
  yield put(MessagesActions.storeMessages(data))
}

export function* fetchColors(api) {
  const {data} = yield call(api.fetchColors)
  yield put(MessagesActions.storeColors(data))
}

export function* fetchInitialData(api) {
  yield fetchColors(api)
  yield fetchMessages(api, {})
}

export function* postMessage(api, {content, color}) {
  const {data} = yield call(api.postMessage, content, color)
  yield put(MessagesActions.appendNewMessage(data))
}

function normaliseParams(params) {
  if (!params)
    return
  if (params.color && params.color.length > 0)
    return params

  /* eslint-disable no-param-reassign */
  delete params.color
  /* eslint-enable no-param-reassign */
  return params
}
