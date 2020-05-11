import PropTypes from 'prop-types'
import React from 'react'

function FilteredMessages(props) {
  const {messages} = props

  return (
    <ul className='ccqw98a' aria-live='polite' async='' id='results' role='region'>
      {
        messages.map(({color, content}) => {
          return <li className='cvvv1yb' style={{background: color}} key={color}>{content}</li>
        })
      }
    </ul>
  )
}

FilteredMessages.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape({
    id:      PropTypes.number.isRequired,
    content: PropTypes.string,
    color:   PropTypes.string
  }))
}

export default FilteredMessages
