import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message:""
    };
  }
  handleChange = event =>{
    event.target.value.length <= this.props.maxChars
    ? this.setState({
      message:event.target.value
    })
    : null
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={event=> this.handleChange(event)} value={this.state.message} />
        <span>{this.props.maxChars - this.state.message.length}</span>
      </div>
    );
  }
}

export default TwitterMessage;
