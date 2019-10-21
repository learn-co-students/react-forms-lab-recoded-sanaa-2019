import React from "react";

class TwitterMessage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            message: '',
            remainingCharacters: this.props.maxChars

        };
    }
    handleMessage = (e) => {
        this.setState({
            message: e.target.value,
            remainingCharacters: this.props.maxChars - e.target.value.length
        })
    }

    render() {
        return (
            <div>
                <strong>Your message:</strong>
                <input type="text" name="message" id="message"

                    value={this.state.message}
                    onChange={e => {this.handleMessage(e)} } />
                <strong>Your message:{this.state.remainingCharacters} </strong>
            </div>
        );
    }
}

export default TwitterMessage;
