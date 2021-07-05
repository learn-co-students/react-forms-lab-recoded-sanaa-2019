import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message:""
    }}

    changeHandler=(event)=>{
      this.setState({
        message:event.target.value
      })
    }
  

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.changeHandler} value={this.state.message}/>
        <p> You still have ({this.props.maxChars - this.state.message.length}) charecters</p>
      </div>

    );
  }
}

export default TwitterMessage;
