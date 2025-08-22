import React, {Component} from 'react'

class Message extends Component {
    constructor() {
        super()
        this.state = {      // State is a reserve keyword.
            message: "Welcome Visitor"
        }
    }

    changeMessage() {
        this.setState({
            message: "Thank you for subscribing"
        })
    }
    
    render() {
        return (
        <div>
        
            <h1>{this.state.message}</h1>
            <button onClick={() => this.changeMessage()}>Subscribe</button>
        </div>      
        )                                                        
    }
}

// State: An object that is privately maintained in a component. State can be changed within component.


export default Message