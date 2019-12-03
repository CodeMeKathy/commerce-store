import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Homepage from './containers/Homepage/Homepage'
import Shop from './containers/Shop/Shop'
import HatsPage from './containers/HatsPage/HatsPage'


function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={Shop} />
      </Switch>
    </div>
  )
}

export default App
