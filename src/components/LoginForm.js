import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super()
    this.state = {
      username: "",
      pass: ""
    };
  }

  usern = event => {
    this.setState({
      username: event.target.value
    })
  }

  passc = event => {
    this.setState({
      passcode: event.target.value
    })
  }

  submit = event => {
    event.preventDefault()
    if (this.state.username.length > 0 && this.state.passcode.length > 0)
      this.props.handleLogin({ username: this.state.username, password: this.state.password })
  }


  render() {
    return (
      <form onSubmit={event => this.submit(event)} >
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={event => { this.usern(event) }} value={this.state.username} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input onChange={event => { this.passc(event) }} value={this.state.passcode} id="password" name="password" type="password" />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
