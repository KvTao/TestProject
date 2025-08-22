import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    increment() {
    //     this.setState({                                 // setState lets React know when to render the component again
    //         count: this.state.count + 1
    //     }, () => {
    //         console.log('Callback value', this.state.count)
    //     }
    // )
        // this.state.count = this.state.count + 1      // Dont modify the state directly. React will not render component again.
        const step = this.props.set || 1;

        this.setState((prevState) => ({                 // Update state from previous state
            count: prevState.count + step
        }))
        console.log(this.state.count)                   
    }

    incrementFive() {
        for (let j = 0; j < 5; j++){
            this.increment();
        }
    }

    render() {
        return (
            <div>
                <div>count - {this.state.count}</div>
                <button onClick = {() => this.increment()}>Increment</button>
                <button onClick = {() => this.incrementFive()}>Increment Five</button>
            </div>
        )
    }
}

export default Counter