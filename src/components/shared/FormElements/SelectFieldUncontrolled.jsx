import PropTypes from 'prop-types'
import React from 'react'

function SelectFieldUncontrolled(props) {
  const {name, options, onChange} = props

  return (
    <div>
      <label className='c1ug13ud' htmlFor={name}>{name}</label>
      <select id={name} className='cytasr3' onChange={onChange}>
        { options.map(({value, name: text}) => {
            return <option value={value} key={value}>{text}</option>
          })}
      </select>
    </div>
  )
}

SelectFieldUncontrolled.propTypes = {
  name:     PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options:  PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    name:  PropTypes.string
  })).isRequired
}

export default SelectFieldUncontrolled
