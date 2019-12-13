import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super();

    this.state = {
      username:'Mustafa',
      password:'mustafa',
      handleLogin: props.handleLogin

    };
  }
  handleUser=(event)=>{
    this.setState({
      username:event.target.value
    })
  }
  handlePass=(event)=>{
    this.setState({
      password:event.target.value
    })
  }

  handleSubmit=(event)=>{
    event.preventDefault()
    let formDate={
      username:this.state.username,
      password:this.state.password
    }
    this.state.handleLogin(formDate)
  }
  render() {
    return (
      <form onSubmit={event=>{
        if(this.state.username && this.state.password){this.handleSubmit(event)}}}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text"value={this.state.username} onChange={(event)=> this.handleUser(event)}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={event=>{this.handlePass(event)}} />
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
