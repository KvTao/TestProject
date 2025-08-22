import React, {Component} from 'react'

class Welcome extends Component {
    render() {
        const {name, heroName} = this.props
        // const {state1, state2} = this.state              // When doing states
        return <h1>Welcome {name} or {heroName}</h1>      // We can access any dynamic content
    }                                                                           
}

export default Welcome