import PropTypes from 'prop-types'
import React from 'react'

function SelectField(props) {
  const {options, field, field: {name}} = props
  const capitalizedName = `${name.charAt(0).toUpperCase()}${name.slice(1)}`

  return (
    <div>
      <label className='c1ug13ud' htmlFor={name}>{capitalizedName}</label>
      <select className='cytasr3' {...field}>
        { options.map(({value, name: text}) => {
            return <option value={value} key={value}>{text}</option>
          })}
      </select>
    </div>
  )
}

SelectField.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    name:  PropTypes.string
  })).isRequired,
  field: PropTypes.object
}

export default SelectField
