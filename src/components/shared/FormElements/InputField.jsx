import PropTypes from 'prop-types'
import React from 'react'
import FormError from './FormError'

function InputField(props) {
  const {label, field, field: {name}} = props

  return (
    <div className='error touched'>
      <label className='c1ug13ud' htmlFor={name}>{label}</label>
      <input id={name} className='cydik8e' {...field} />
      <FormError name={name} />
    </div>
  )
}

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  field: PropTypes.object
}

export default InputField
