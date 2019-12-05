import React from 'react'

import './SignIn.styles.scss'

import FormInput from '../FormInput/FormInput'
import CustomButton from '../CustomButton/CustomButton'

class SignIn extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  // Custom Methods

  // Form Submit Prevents Reload
  handleSubmit = event => {
    event.preventDefault()

    this.setState({ email: '', password: '' })
  }

  // Submission Value Handler
  handleChange = event => {
    const { value, name } = event.target

    this.setState({ [name]: value }) // Makes property dynamic
  }

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            value={this.state.email}
            handleChange={this.handleChange}
            label='email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='password'
            required
          />
          <CustomButton type='submit'>SIGN IN</CustomButton>
        </form>
      </div>
    )
  }
}

export default SignIn
