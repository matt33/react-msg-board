import LoadingIndicator from '~shared/LoadingIndicator/'
import PropTypes from 'prop-types'
import React from 'react'

function SubmitButtonWithIndicator(props) {
  const {indicatorDisplayed, disabled, opacity, label} = props

  return (
    <button className='c13ogcrc' disabled={disabled} type='submit' id='submitButtonWithIndicator'>
      <LoadingIndicator backgroundColor='' displayed={indicatorDisplayed} wrapperClassList='c161wjul c1sg2lsz' />
      <span style={{opacity}}>{label}</span>
    </button>
  )
}

SubmitButtonWithIndicator.propTypes = {
  label:              PropTypes.string.isRequired,
  indicatorDisplayed: PropTypes.bool,
  disabled:           PropTypes.bool,
  opacity:            PropTypes.number
}

SubmitButtonWithIndicator.defaultProps = {
  opacity: 1
}

export default SubmitButtonWithIndicator
