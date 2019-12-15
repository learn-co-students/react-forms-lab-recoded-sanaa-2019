import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username:"",
      password:""
    };
  }
  handleSubmit = event =>{
    event.preventDefault()
    if(this.state.username.length > 0 && this.state.password.length > 0){
      this.props.handleLogin({username:this.state.username,password:this.state.password})
    }
  }
  handleInputChange = event =>{
    this.setState({
      [event.target.name]:event.target.value
    })
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={e => this.handleInputChange(e)} value={this.state.username} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={e => this.handleInputChange(e)} value={this.state.password} />
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
