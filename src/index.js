import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

// Redux
import { Provider } from 'react-redux'

import './index.css'
import App from './App'
import store from './redux/store'

ReactDOM.render(
  // The provider is the parent component of the entire application and has access to everythign in the store component. 
  <Provider store={store} >
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </Provider>
  ,document.getElementById('root')
)
