/* eslint-disable import/first */
import { api } from '../apiFixtures'
import { mount } from 'enzyme'
import combineColorOptions from '~lib/combineColorOptions'
import React from 'react'

import FormWrapper from '~shared/FormElements/FormWrapper'
import LoadingIndicator from '~shared/LoadingIndicator/'
import NewMessageForm from '~components/NewMessageContainer/NewMessageForm'
import NewMessageFormLayout from '~components/NewMessageContainer/NewMessageFormLayout'
import SubmitButtonWithIndicator from '~shared/FormElements/SubmitButtonWithIndicator'
/* eslint-enable import/first */

describe('<NewMessageForm />', () => {
  const Child = () => <div />

  function mountComponent(props) {
    return mount(
      <NewMessageForm
        colorOptions={combineColorOptions(api.fetchColors().data, {value: '', name: 'Choose a color...'})}
        postMessageRequest={() => {}}
        {...props}
      >
        <Child />
      </NewMessageForm>
    )
  }

  it('renders correctly when is not posting any message', () => {
    const wrapper = mountComponent({ postingMessage: false })

    expect(wrapper.find(FormWrapper).length).toEqual(1)
    expect(wrapper.find(NewMessageFormLayout).length).toEqual(1)
    expect(wrapper.find(SubmitButtonWithIndicator).length).toEqual(1)

    expect(wrapper.find(LoadingIndicator).length).toEqual(1)
    expect(wrapper.find(LoadingIndicator).html()).toEqual(null)
    expect(wrapper.find(LoadingIndicator).prop('displayed')).toEqual(false)
    expect(wrapper.find('#submitButtonWithIndicator').prop('disabled')).toEqual(false)
    expect(wrapper.find('#submitButtonWithIndicator').text()).toEqual('Post message')
  })

  it('disables submit button when posting a message', () => {
    const wrapper = mountComponent({ postingMessage: true })

    expect(wrapper.find(FormWrapper).length).toEqual(1)
    expect(wrapper.find(NewMessageFormLayout).length).toEqual(1)
    expect(wrapper.find(SubmitButtonWithIndicator).length).toEqual(1)

    expect(wrapper.find(LoadingIndicator).length).toEqual(1)
    expect(wrapper.find(LoadingIndicator).prop('displayed')).toEqual(true)
    expect(wrapper.find('#submitButtonWithIndicator').prop('disabled')).toEqual(true)
  })
})
