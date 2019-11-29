import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      inputMsg: '', //intially an empty string
      maxChars: props.maxChars,// pass prop from App page
      numChars: ''
    };
  }

  handleInputMessage = (event) =>{
    this.setState({
      inputMsg:event.target.value,
      numChars:event.target.value.length
    })
    console.log(event.target.value);
    let num = event.target.value.length
    console.log(num);
    console.log("char",this.state.numChars);
    console.log(this.state.inputMsg); // updates on every change ..Good! :)
  }

  render() {
    return (
      <div>
      <strong>Your message:</strong>
      <input type="text" name="message" id="message" value={this.state.inputMsg}
          onChange={event => {this.handleInputMessage(event)} } />
      <i> Remaining Characters: {(this.state.maxChars)-(this.state.numChars)} </i>
  </div>
    );
  }
}

export default TwitterMessage;
