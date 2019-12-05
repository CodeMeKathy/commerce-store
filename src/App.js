import React from 'react'
import { Switch, Route } from 'react-router-dom'

import '../src/App.css'

import Homepage from './containers/Homepage/Homepage'
import Shop from './containers/Shop/Shop'
import HatsPage from './containers/HatsPage/HatsPage'
import SignInAndSignUp from './containers/SignInAndSignUp/SignInAndSignUp' 
import Header from './components/Header/Header'

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={Shop} />
        <Route path='/signin' component={SignInAndSignUp} /> 
      </Switch>
    </div>
  )
}

export default App
