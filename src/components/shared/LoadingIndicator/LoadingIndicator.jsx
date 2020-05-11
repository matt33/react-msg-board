import PropTypes from 'prop-types'
import React from 'react'

function LoadingIndicator(props) {
  const {displayed} = props
  if (!displayed)
    return null

  const {backgroundColor, animationDelayMS, wrapperClassList} = props
  return (
    <span role='progressbar' className={wrapperClassList}>
      <div className='c183ltat' style={{animationDelay: `${animationDelayMS * 2}ms`, background: backgroundColor}} />
      <div className='c183ltat' style={{animationDelay: `${animationDelayMS}ms`, background: backgroundColor}} />
      <div className='c183ltat' style={{background: backgroundColor}} />
    </span>
  )
}

LoadingIndicator.propTypes = {
  displayed:        PropTypes.bool,
  backgroundColor:  PropTypes.string,
  wrapperClassList: PropTypes.string,
  animationDelayMS: PropTypes.number
}

LoadingIndicator.defaultProps = {
  backgroundColor:  'black',
  animationDelayMS: -160,
  wrapperClassList: 'c1g8hd9e c1sg2lsz'
}

export default LoadingIndicator
