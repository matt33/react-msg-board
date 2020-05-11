// network activity indicator is separated and isolated so that very small component is re-rendered
// when there are pending requests

import { connect } from 'react-redux'
import LoadingIndicator from '~shared/LoadingIndicator/'
import PropTypes from 'prop-types'
import React from 'react'

function NetworkActivityIndicatorContainer(props) {
  const {pendingRequests} = props
  const anyPendingRequests = Object.keys(pendingRequests).length > 0

  return (
    <LoadingIndicator displayed={anyPendingRequests} />
  )
}

NetworkActivityIndicatorContainer.propTypes = {
  pendingRequests: PropTypes.object
}

const mapStateToProps = (state) => {
  return {
    pendingRequests: state.networkRequests.pending
  }
}

export default connect(mapStateToProps)(NetworkActivityIndicatorContainer)
