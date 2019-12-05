import React from 'react'

import './SignInAndSignUp.styles.scss'

import SignIn from '../../components/SignIn/SignIn'
import SignUp from '../../components/SignUp/SignUp'

const SignInAndSignUp = () => (
  <div className='SignIn-and-SignUp'>
    <SignIn />
    <SignUp />
  </div>
)

export default SignInAndSignUp
