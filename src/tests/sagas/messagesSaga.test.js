import { expectSaga } from 'redux-saga-test-plan'
import { fetchMessages, fetchColors, fetchInitialData, postMessage } from '~sagas/messagesSagas'
import { api } from '../apiFixtures'
import {reducer as messagesReducer, INITIAL_STATE} from '../../redux/messagesRedux'

test('fetch messages saga', () => {
  return expectSaga(fetchMessages, api, {})
    .put({
      type: 'STORE_MESSAGES',
      list: api.fetchMessages().data
    })
    .run()
})

test('fetch messages saga changes state', () => {
  return expectSaga(fetchMessages, api, {})
    .withReducer(messagesReducer)
    .hasFinalState({
      ...INITIAL_STATE,
      list: api.fetchMessages().data
    })
    .run()
})

test('fetch colors saga', () => {
  return expectSaga(fetchColors, api)
    .put({
      type:   'STORE_COLORS',
      colors: api.fetchColors().data
    })
    .run()
})

test('fetch colors saga changes state', () => {
  return expectSaga(fetchColors, api, {})
    .withReducer(messagesReducer)
    .hasFinalState({
      ...INITIAL_STATE,
      colors: api.fetchColors().data
    })
    .run()
})

test('fetch initial data saga', () => {
  return expectSaga(fetchInitialData, api, {})
    .put({
      type: 'STORE_MESSAGES',
      list: api.fetchMessages().data
    })
    .put({
      type:   'STORE_COLORS',
      colors: api.fetchColors().data
    })
    .run()
})

test('post message saga', () => {
  const content = 'new message'
  const color = '#672d93'

  return expectSaga(postMessage, api, {color, content})
    .put({
      type:    'APPEND_NEW_MESSAGE',
      message: api.postMessage(content, color).data
    })
    .run()
})

test('post message saga changes state', () => {
  const content = 'new message'
  const color = '#672d93'

  return expectSaga(postMessage, api, {color, content})
    .withReducer(messagesReducer)
    .hasFinalState({
      ...INITIAL_STATE,
      list: [api.postMessage(content, color).data]
    })
    .run()
})
