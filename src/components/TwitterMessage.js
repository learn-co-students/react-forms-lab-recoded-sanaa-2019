import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      inputMsg:'',
      maxChars:props.maxChars,
      numChars:''
        };
  }
  handleInputMessage=(event)=>{
    this.setState({
      inputMsg:event.target.value,
      numChars:event.target.value.length
    })
    // console.log(event.target.value);
    // let num = event.target.value.length
    // console.log(num);
    // console.log("char",this.state.numChars);
    // console.log(this.state.inputMsg); // updates on every change ..Good! :)
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.inputMsg} onChange={event=>{this.handleInputMessage(event)}}/>
       <li> Remaining Characters:{(this.state.maxChars)-(this.state.numChars)}</li>
      </div>
    );
  }
}

export default TwitterMessage;


