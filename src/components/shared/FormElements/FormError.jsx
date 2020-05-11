import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'formik'

function ErrorField(props) {
  const { name } = props

  return (
    <Field
      name={name}
      render={({ form: { touched, errors } }) => (
        (touched[name] && errors[name])
          ? <div className='c11hehzj' role='alert'>{errors[name]}</div>
          : null
      )}
    />
  )
}

ErrorField.propTypes = {
  name: PropTypes.string.isRequired
}

export default ErrorField
