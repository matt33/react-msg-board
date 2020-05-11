import { connect } from 'react-redux'
import combineColorOptions from '~lib/combineColorOptions'
import PropTypes from 'prop-types'
import React from 'react'
import NewMessageForm from './NewMessageForm'
import MessagesActions from '../../redux/messagesRedux'


function NewMessageContainer(props) {
  const {postMessageRequest, postingMessage} = props
  const colorOptions = combineColorOptions(props.colorOptions, {value: '', name: 'Choose a color...'})

  return (
    <NewMessageForm
      colorOptions={colorOptions}
      postMessageRequest={postMessageRequest}
      postingMessage={postingMessage}
    />
  )
}

NewMessageContainer.propTypes = {
  postMessageRequest: PropTypes.func.isRequired,
  colorOptions:       PropTypes.arrayOf(PropTypes.shape({
    name:  PropTypes.string,
    value: PropTypes.string,
    id:    PropTypes.number
  })).isRequired,
  postingMessage: PropTypes.bool
}

const mapStateToProps = (state) => {
  return {
    colorOptions:   state.messages.colors,
    postingMessage: state.messages.postingMessage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    postMessageRequest: (message, color) =>
      dispatch(MessagesActions.postMessageRequest(message, color))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewMessageContainer)
