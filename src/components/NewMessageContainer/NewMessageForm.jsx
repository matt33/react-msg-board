import { createValidator, rules } from '~lib/validations'
import FormWrapper from '~shared/FormElements/FormWrapper'
import PropTypes from 'prop-types'
import React from 'react'
import NewMessageFormLayout from './NewMessageFormLayout'

function handleSubmit({content, color}, resetForm, postMessageRequest) {
  resetForm()
  postMessageRequest(content, color)
}

function NewMessageForm(props) {
  const {postMessageRequest} = props

  return (
    <FormWrapper
      legend='New message'
      explanation='Add a message and optionally pick a color.'
      onSubmit={({content, color}, {resetForm}) => handleSubmit({content, color}, resetForm, postMessageRequest)}
      initialValues={initialValues}
      validator={validator}
      WrappedComponent={NewMessageFormLayout}
      {...props}
    />
  )
}


NewMessageForm.propTypes = {
  postMessageRequest: PropTypes.func.isRequired,
  colorOptions:       PropTypes.arrayOf(PropTypes.shape({
    name:  PropTypes.string,
    value: PropTypes.string,
    id:    PropTypes.number
  })).isRequired,
  postingMessage: PropTypes.bool
}

const initialValues = {
  content: '',
  color:   ''
}

const validator = createValidator({
  content: rules.required
})

export default NewMessageForm
