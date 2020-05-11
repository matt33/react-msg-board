import { Formik } from 'formik'
import PropTypes from 'prop-types'
import React from 'react'

function FormWrapper(props) {
  const {legend, explanation, onSubmit, initialValues, validator, WrappedComponent, ...otherProps} = props

  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize={false}
      validate={validator}
      onSubmit={onSubmit}

      render={({ handleSubmit, errors, values }) => (
        <form className='c1pr40a' onSubmit={handleSubmit}>
          <fieldset className='c6xliwt'>
            <legend className='c1rvp5fh'>{legend}</legend>
            <p className='c1ouhqwa'>{explanation}</p>
            <WrappedComponent errors={errors} values={values} {...otherProps} />
          </fieldset>
        </form>
      )}
    />
  )
}

FormWrapper.propTypes = {
  legend:           PropTypes.string.isRequired,
  explanation:      PropTypes.string.isRequired,
  onSubmit:         PropTypes.func.isRequired,
  initialValues:    PropTypes.object.isRequired,
  validator:        PropTypes.func.isRequired,
  WrappedComponent: PropTypes.func.isRequired
}

export default FormWrapper
