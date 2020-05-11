import { api } from '../apiFixtures'
import Actions, { reducer as messagesReducer, INITIAL_STATE } from '../../redux/messagesRedux'

describe('messages reducer', () => {
  it('tests storeMessages', () => {
    const messages = api.fetchMessages().data
    const state = messagesReducer(INITIAL_STATE, Actions.storeMessages(messages))
    expect(state.list).toEqual(messages)
  })

  it('tests storeMessages', () => {
    const messages = api.fetchMessages().data
    const state = messagesReducer(INITIAL_STATE, Actions.storeMessages(messages))
    expect(state).toEqual({...INITIAL_STATE, list: messages, searching: false})
  })

  it('tests storeColors', () => {
    const colors = api.fetchColors().data
    const state = messagesReducer(INITIAL_STATE, Actions.storeColors(colors))
    expect(state).toEqual({...INITIAL_STATE, colors})
  })

  it('tests setSearching without search params', () => {
    const params = {}
    const state = messagesReducer(INITIAL_STATE, Actions.fetchMessagesRequest(params))
    expect(state).toEqual({...INITIAL_STATE, searching: false})
  })

  it('tests setSearching with search params', () => {
    const params = {query: 'test'}
    const state = messagesReducer(INITIAL_STATE, Actions.fetchMessagesRequest(params))
    expect(state).toEqual({...INITIAL_STATE, searching: true})
  })

  it('tests appendNewMessage', () => {
    const existingMessages = api.fetchMessages().data
    const newMessage = api.postMessage('content', 'color').data
    const stateWithMessages = INITIAL_STATE.merge({list: existingMessages})
    const state = messagesReducer(stateWithMessages, Actions.appendNewMessage(newMessage))
    expect(state).toEqual({...INITIAL_STATE, list: [newMessage, ...existingMessages]})
  })
})
