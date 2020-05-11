// main indicator for searching is separated and isolated so that very small component is re-rendered
// when there is a request to search for messages

import { connect } from 'react-redux'
import LoadingIndicator from '~shared/LoadingIndicator/'
import PropTypes from 'prop-types'
import React from 'react'

function MainIndicatorContainer(props) {
  const {searchingForMessages} = props

  return (
    <LoadingIndicator displayed={searchingForMessages} />
  )
}

MainIndicatorContainer.propTypes = {
  searchingForMessages: PropTypes.bool
}

const mapStateToProps = (state) => {
  return {
    searchingForMessages: state.messages.searching
  }
}

export default connect(mapStateToProps)(MainIndicatorContainer)
