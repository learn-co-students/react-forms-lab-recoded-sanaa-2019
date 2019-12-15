import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super()
    this.state = {
      username: "",
      pass: ""
    };
  }

  username = e => {
    this.setState({
      username: e.target.value
    })
  }
  password = e => {
    this.setState({
      pass: e.target.value
    })
  }
  submit = e => {
    e.preventDefault()
    if (this.state.username.length > 0 && this.state.pass.length > 0)
      this.props.handleLogin({ username: this.state.username, password: this.state.pass })
  }


  render() {
    return (
      <form onSubmit={e => this.submit(e)}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={e => { this.username(e) }} value={this.state.username}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={e => { this.password(e) }} value={this.state.pass} />
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
