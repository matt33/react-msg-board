// indicator for searching by content is separated and isolated so that very small component is re-rendered
// when there is a request to search for messages

import { connect } from 'react-redux'
import LoadingIndicator from '~shared/LoadingIndicator/'
import PropTypes from 'prop-types'
import React from 'react'

function SearchLoadingIndicator(props) {
  const {searchingForMessages, searchByQuery} = props
  const displayed = searchingForMessages && searchByQuery

  return (
    <LoadingIndicator displayed={displayed} wrapperClassList='c1gyy91j c1sg2lsz' backgroundColor='' />
  )
}

SearchLoadingIndicator.propTypes = {
  searchingForMessages: PropTypes.bool,
  searchByQuery:        PropTypes.bool
}

const mapStateToProps = (state) => {
  return {
    searchingForMessages: state.messages.searching
  }
}

export default connect(mapStateToProps)(SearchLoadingIndicator)
