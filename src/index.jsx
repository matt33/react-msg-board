import { render } from 'react-dom'
import App from 'components/app'
import React from 'react'
import './styles.css'

const ROOT_ELEMENT_ID = 'new-app'

render(<App />, document.getElementById(ROOT_ELEMENT_ID))
