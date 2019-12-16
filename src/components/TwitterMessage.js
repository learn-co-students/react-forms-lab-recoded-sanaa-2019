import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();
    this.state = {
      maxChars: ""
    };
  }

  hundleChars = e => {
    this.setState({
      maxChars: e.target.value
    })
  }


  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={e => { this.hundleChars(e) }} value={this.state.maxChars} />
        <p>{this.props.maxChars - this.state.maxChars.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;
