import { Field } from 'formik'
import InputField from '~shared/FormElements/InputField'
import PropTypes from 'prop-types'
import React from 'react'
import SelectField from '~shared/FormElements/SelectField'
import SubmitButtonWithIndicator from '~shared/FormElements/SubmitButtonWithIndicator'


function NewMessageFormLayout(props) {
  const {colorOptions, postingMessage, errors, values} = props
  const disabledSubmitButton = Object.keys(errors).length > 0 || postingMessage || !values.content
  const submitButtonOpacity = postingMessage ? 0 : 1

  return (
    <div className='c1u3f0g5'>
      <div className='cz1obge'>
        <Field
          component={InputField}
          label='Message'
          name='content'
        />
        <Field
          component={SelectField}
          name='color'
          options={colorOptions}
        />
      </div>
      <div className='c7vrlqv'>
        <SubmitButtonWithIndicator
          label='Post message'
          opacity={submitButtonOpacity}
          disabled={disabledSubmitButton}
          indicatorDisplayed={postingMessage}
        />
      </div>
    </div>
  )
}

NewMessageFormLayout.propTypes = {
  colorOptions: PropTypes.arrayOf(PropTypes.shape({
    name:  PropTypes.string,
    value: PropTypes.string,
    id:    PropTypes.number
  })).isRequired,
  values:         PropTypes.object,
  errors:         PropTypes.object,
  postingMessage: PropTypes.bool
}

export default NewMessageFormLayout
