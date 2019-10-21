import React from "react";

class LoginForm extends React.Component {
    constructor() {
        super();

        this.state = {
            username: null,
            password: null
        };
    }
    handleUsernameChange = e => {
        this.setState({
            username: e.target.value
        })
    }
    handelPasswordChange = e => {
        this.setState({
            password: e.target.value
        })
    }
    checkSubmit = e => {
        e.preventDefault()
      
        if (this.state.password !=''  && this.state.username.length !='') {
            let formData = this.state
          
        } else {
            
           
        }
    }

    render() {
        return (
            <form onSubmit={(e) => { e.preventDefault(); 
                if (this.state.password !=''  && this.state.username !='') {
                    let formData = this.state
                    this.props.handleLogin(this.state) 
                } }}>
                <div>
                    <label>
                        Username
            <input id="username" name="username" type="text"
                            value={this.state.username}
                            onChange={e => { this.handleUsernameChange(e) }} />
                    </label>
                </div>
                <div>
                    <label>
                        Password
            <input id="password" name="password" type="password" value={this.state.password}
                            onChange={e => { this.handelPasswordChange(e) }} />
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
