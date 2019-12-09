import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

// Redux
import { Provider } from 'react-redux'

import './index.css'
import App from './App'

ReactDOM.render(
  <Provider>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </Provider>
  ,document.getElementById('root')
)
