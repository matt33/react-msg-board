import { connect } from 'react-redux'
import Header from '~components/Header/'
import MessagesListContainer from '~components/MessagesListContainer/'
import NewMessageContainer from '~components/NewMessageContainer/'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import MessagesActions from '../../redux/messagesRedux'

class MessageBoard extends Component {
  componentDidMount() {
    // fire off inital data load
    const {fetchInitialDataRequest} = this.props

    fetchInitialDataRequest()
  }

  render() {
    return (
      <main className='cc0img9'>
        <div className='cgmxdsh'>
          <Header />
          <NewMessageContainer />
          <MessagesListContainer />
        </div>
      </main>
    )
  }
}

MessageBoard.propTypes = {
  fetchInitialDataRequest: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchInitialDataRequest: () =>
      dispatch(MessagesActions.fetchInitialDataRequest())
  }
}

export default connect(null, mapDispatchToProps)(MessageBoard)
