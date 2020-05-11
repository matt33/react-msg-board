// using duck pattern here which makes reducers a lot more structured
// this reducer stores pendingRequests for loading indicator, requests do not get
// overwritten as we are using takeLatest in root Saga so they come in one by one

import {createReducer, createActions} from 'reduxsauce'
import Immutable from 'seamless-immutable'


const {Types, Creators} = createActions({
  requestStarted:  ['requestName'],
  requestFinished: ['requestName']
})

export const NetworkRequestTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  pending: {}
})

/* ------------- Reducers ------------- */

export const addPendingRequest = (state, {requestName}) =>
  state.setIn(['pending'], {[requestName]: true})

export const removePendingRequest = (state, {requestName}) =>
  state.update('pending', (pendingRequests) => pendingRequests.without(requestName))

export const reducer = createReducer(INITIAL_STATE, {
  [Types.REQUEST_STARTED]:  addPendingRequest,
  [Types.REQUEST_FINISHED]: removePendingRequest
})
