import React from 'react'

import './SignUp.styles.scss'
import FormInput from '../FormInput/FormInput'
import CustomButton from '../CustomButton/CustomButton'

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

  handelSubmit = event => {
    event.preventDefault()
    this.setState({
      displayName: '',
      email: '',
      password: '',
      passwordConfirmation: ''
    })
  }

  handleChange = event => {
    const { value, name } = event.target
    this.setState({ [name]: value })
  }

  render() {
    return (
      <div className='sign-up'>
        <h2>I don't have an account</h2>
        <span>Sign-up with your email and password</span>

        <form onSubmit={this.handelSubmit}>
          <FormInput
            name='displayName'
            type='displayName'
            value={this.state.displayName}
            label='Display Name'
            handleChange={this.handleChange}
            required
          />
          <FormInput
            name='email'
            type='email'
            value={this.state.email}
            label='Email'
            handleChange={this.handleChange}
            required
          />
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            label='Password'
            handleChange={this.handleChange}
            required
          />
          <FormInput
            name='passwordConfirmation'
            type='passwordConfirmation'
            value={this.state.passwordConfirmation}
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
