import {Component} from 'react'

import Cookies from 'js-cookie'

import {Redirect} from 'react-router-dom'

import {
  LoginContainer,
  LoginFormContainer,
  NxtWatchLogo,
  Label,
  InputField,
  LoginForm,
  LoginButton,
  CheckboxContainer,
  FieldContainer,
  PassCheckbox,
  ErrorMessage,
} from './styledComponents'

class Login extends Component {
  state = {
    isChecked: false,
    username: '',
    password: '',
    showErrorMessage: false,
    errorMessage: '',
  }

  showPassword = () => {
    this.setState(prevState => ({isChecked: !prevState.isChecked}))
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onSubmitFailure = e => {
    this.setState({errorMessage: e, showErrorMessage: true})
  }

  onSubmitForm = async event => {
    const {username, password} = this.state
    event.preventDefault()
    const userDetails = {username, password}
    // console.log(userDetails)
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const loginResponse = await fetch(url, options)
    const loginResponseData = await loginResponse.json()
    console.log(loginResponseData)

    if (loginResponse.ok === true) {
      this.onSubmitSuccess(loginResponseData.jwt_token)
    } else {
      this.onSubmitFailure(loginResponseData.error_msg)
    }
  }

  render() {
    const {
      isChecked,
      username,
      password,
      showErrorMessage,
      errorMessage,
    } = this.state

    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <LoginContainer>
        <LoginFormContainer>
          <NxtWatchLogo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website logo"
          />
          <LoginForm onSubmit={this.onSubmitForm}>
            <FieldContainer>
              <Label htmlFor="username">USERNAME</Label>
              <InputField
                type="text"
                placeholder="Username"
                value={username}
                id="username"
                onChange={this.onChangeUsername}
              />
            </FieldContainer>
            <FieldContainer>
              <Label htmlFor="password">PASSWORD</Label>
              {isChecked ? (
                <InputField
                  type="text"
                  placeholder="Password"
                  value={password}
                  id="password"
                  onChange={this.onChangePassword}
                />
              ) : (
                <InputField
                  type="password"
                  placeholder="Password"
                  id="password"
                  onChange={this.onChangePassword}
                  value={password}
                />
              )}
            </FieldContainer>
            <CheckboxContainer>
              <PassCheckbox
                type="checkbox"
                onClick={this.showPassword}
                id="check"
              />
              <Label htmlFor="check">Show Password</Label>
            </CheckboxContainer>
            <LoginButton type="submit">Login</LoginButton>
            {showErrorMessage ? (
              <ErrorMessage>{errorMessage}</ErrorMessage>
            ) : (
              ''
            )}
          </LoginForm>
        </LoginFormContainer>
      </LoginContainer>
    )
  }
}

export default Login
