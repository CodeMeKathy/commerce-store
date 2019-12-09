import React from 'react'

import './SignUp.styles.scss'
import FormInput from '../FormInput/FormInput'
import CustomButton from '../CustomButton/CustomButton'


import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'

class SignUp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      displayName: '',
      email: '',
      password: '',
      passwordConfirmation: ''
    }
  }

  // Custom Methods

  handleSubmit = async event => {
    event.preventDefault()
    const { displayName, email, password, passwordConfirmation } = this.state

    if (password !== passwordConfirmation) {
      alert('Your passwords do not match!')
      return
    }
    // TODO: Add alert for weak password

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      )

      await createUserProfileDocument(user, { displayName })

      this.setState = {
        displayName: '',
        email: '',
        password: '',
        passwordConfirmation: ''
      }
    } catch (error) {
      console.error(error)
    }
  }

  handleChange = event => {
    const { value, name } = event.target
    this.setState({ [name]: value })
  }

  render() {
    const { displayName, email, password, passwordConfirmation } = this.state
    return (
      <div className='sign-up'>
        <h2>I don't have an account</h2>
        <span>Sign-up with your email and password</span>

        <form className='sign-up-form' onSubmit={this.handleSubmit}>
          <FormInput
            name='displayName'
            type='text'
            value={displayName}
            label='Display Name'
            handleChange={this.handleChange}
            required
          />
          <FormInput
            name='email'
            type='email'
            value={email}
            label='Email'
            handleChange={this.handleChange}
            required
          />
          <FormInput
            name='password'
            type='password'
            value={password}
            label='Password'
            handleChange={this.handleChange}
            required
          />
          <FormInput
            name='passwordConfirmation'
            type='password'
            value={passwordConfirmation}
            label='Confirm Password'
            handleChange={this.handleChange}
            required
          />
          <CustomButton type='submit'>SIGN UP</CustomButton>
        </form>
      </div>
    )
  }
}

export default SignUp
