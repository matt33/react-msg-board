import PropTypes from 'prop-types'
import React from 'react'
import MainIndicatorContainer from './LoadingIndicatorContainers/MainIndicatorContainer'

function MessagesListHeader(props) {
  const {messagesCount} = props

  return (
    <div className='c12q1r7z'>
      <h2 className='c17zq7b5'>Messages</h2>
      <p>
        <span className='ca2ougy'>There are </span>
        <span className='c1lerdlx'>{messagesCount}</span>
        <span className='ca2ougy'>messages showing</span>
      </p>
      <MainIndicatorContainer />
    </div>
  )
}

MessagesListHeader.propTypes = {
  messagesCount: PropTypes.number.isRequired
}

export default MessagesListHeader
