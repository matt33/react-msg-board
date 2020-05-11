import { hot } from 'react-hot-loader'
import { Provider } from 'react-redux'
import createdStore from '~redux/store'
import MessageBoard from '~components/MessageBoard/'
import React from 'react'

function App() {
  return (
    <Provider store={createdStore}>
      <MessageBoard />
    </Provider>
  )
}

export default hot(module)(App)
