import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      maxChars :this.props.maxChars,
      message:""
    }}
    handlechange=(event)=>{
      this.setState({
        message:event.target.value,
        maxChars:this.props.maxChars-event.target.value.length
      })
    }
  

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.handlechange} value={this.state.message}/>
        <p> remaining characters ar: {this.state.maxChars}</p>
      </div>

    );
  }
}

export default TwitterMessage;
