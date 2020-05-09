import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import '../src/App.css'

import Homepage from './containers/Homepage/Homepage'
import ShopPage from './containers/ShopPage/ShopPage'
import HatsPage from './containers/HatsPage/HatsPage'
import SignInAndSignUp from './containers/SignInAndSignUp/SignInAndSignUp'
import Header from './components/Header/Header'

import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import { setCurrentUser } from './redux/user/user.actions'

class App extends React.Component {
  //* This constructor is no longer needed once Redux is added to the application and managing state
  // constructor() {
  //   super()

  //   this.state = {
  //     currentUser: null
  //   }
  // }

  // Firebase Auth Subscription
  unsubscribeFromAuth = null

  componentDidMount() {
    const { setCurrentUser } = this.props

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapShot => {
          //* This is no longer needed once Redux is added to the application and managing state. Replaced with lines 42-45 with setCurrentUser object
          // // Newly created object that has access to all the properties of the current user SnapShot as well as the ID.
          // this.setState({
          //   currentUser: {

          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
          console.log(this.state)
        })
      }
      setCurrentUser(userAuth)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUp} />
        </Switch>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

// Update to receive the current user value from the reducer. In the connect() pass thru null   bc we do not need any state to props from our reducer
export default connect(null, mapDispatchToProps)(App)
