import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message:"",
      charNum:null
    };
  }
handleChagne=(event)=>{
  if(this.state.charNum===null){
    this.setState({[event.target.name]:event.target.value,charNum:this.props.maxChars})
  }
  else
  this.setState({[event.target.name]:event.target.value,charNum:this.state.charNum-1})
}
messageLength=()=>{
return [<p>{this.state.message.slice(0,this.props.maxChars)}</p>,<p>{this.state.charNum}</p>]
}
  render() {
    return (  
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={this.handleChagne}/>
        {this.messageLength()}
      </div>
    );
  }
}

export default TwitterMessage;
