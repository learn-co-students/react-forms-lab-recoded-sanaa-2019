import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      maxChars :this.props.maxChars,
      msg:""
    }}
    handlechange=(event)=>{
      this.setState({
        msg:event.target.value,
        maxChars:this.props.maxChars-event.target.value.length
      })
    }
  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="msg" id="msg" onChange={this.handlechange} value={this.state.msg}/>
        <p> remaining characters ({this.state.maxChars})</p>
      </div>
    );
  }
}
export default TwitterMessage;