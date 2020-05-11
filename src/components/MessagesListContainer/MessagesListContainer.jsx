import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import React from 'react'
import FilteredMessages from './FilteredMessages'
import MessagesActions from '../../redux/messagesRedux'
import MessagesListHeader from './MessagesListHeader'
import MessagesSearch from './MessagesSearch'

function MessagesListContainer(props) {
  const {messages, fetchMessagesRequest, colorOptions} = props

  return (
    <section>
      <header className='c1pr40a'>
        <MessagesListHeader messagesCount={messages.length} />
        <MessagesSearch fetchMessagesRequest={fetchMessagesRequest} colorOptions={colorOptions} />
      </header>
      <FilteredMessages messages={messages} />
    </section>
  )
}

MessagesListContainer.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape({
    id:      PropTypes.number.isRequired,
    content: PropTypes.string,
    color:   PropTypes.string
  })),
  colorOptions: PropTypes.arrayOf(PropTypes.shape({
    name:  PropTypes.string,
    value: PropTypes.string,
    id:    PropTypes.number
  })),
  fetchMessagesRequest: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    messages:     state.messages.list,
    colorOptions: state.messages.colors
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMessagesRequest: (params) =>
      dispatch(MessagesActions.fetchMessagesRequest(params))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessagesListContainer)
