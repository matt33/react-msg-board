// using duck pattern here which makes reducers a lot more structured

import {createReducer, createActions} from 'reduxsauce'
import Immutable from 'seamless-immutable'


const {Types, Creators} = createActions({
  fetchInitialDataRequest: null,
  fetchMessagesRequest:    ['params'],
  postMessageRequest:      ['content', 'color'],
  storeMessages:           ['list'],
  storeColors:             ['colors'],
  appendNewMessage:        ['message']
})

export const MessagesTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  list:           [],
  colors:         [],
  searching:      false,
  postingMessage: false
})

/* ------------- Reducers ------------- */

export const setSearching = (state, {params}) => {
  if (params && Object.keys(params).length > 0)
    return state.merge({searching: true})

  return state
}

export const storeMessages = (state, {list}) =>
  state.merge({list, searching: false})

export const storeColors = (state, {colors}) =>
  state.merge({colors})

export const setPostingMessage = (state) =>
  state.merge({postingMessage: true})

export const appendNewMessage = (state, {message}) => {
  const list = state.list.asMutable()
  return state.merge({list: [message, ...list], postingMessage: false})
}


export const reducer = createReducer(INITIAL_STATE, {
  [Types.FETCH_MESSAGES_REQUEST]: setSearching,
  [Types.STORE_MESSAGES]:         storeMessages,
  [Types.STORE_COLORS]:           storeColors,
  [Types.POST_MESSAGE_REQUEST]:   setPostingMessage,
  [Types.APPEND_NEW_MESSAGE]:     appendNewMessage
})
