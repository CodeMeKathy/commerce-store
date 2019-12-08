import React from 'react'
import { Switch, Route } from 'react-router-dom'

import '../src/App.css'

import Homepage from './containers/Homepage/Homepage'
import Shop from './containers/Shop/Shop'
import HatsPage from './containers/HatsPage/HatsPage'
import SignInAndSignUp from './containers/SignInAndSignUp/SignInAndSignUp'
import Header from './components/Header/Header'

import { auth, createUserProfileDocument } from './firebase/firebase.utils'

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

    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          })
          console.log(this.state);
        })
      }
      this.setState({ currentUser: userAuth})
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
