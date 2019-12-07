import React from 'react'
import { Switch, Route } from 'react-router-dom'

import '../src/App.css'

import Homepage from './containers/Homepage/Homepage'
import Shop from './containers/Shop/Shop'
import HatsPage from './containers/HatsPage/HatsPage'
import SignInAndSignUp from './containers/SignInAndSignUp/SignInAndSignUp'
import Header from './components/Header/Header'

import { auth } from './firebase/firebase.utils'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      currentUser: null
    }
  }

  // Firebase Auth Subscription 
  unsubscribeFromAuth = null

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      this.setState({ currenUser: user })
      console.log(user);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={Shop} />
          <Route path='/signin' component={SignInAndSignUp} />
        </Switch>
      </div>
      )
    }
  }

export default App
