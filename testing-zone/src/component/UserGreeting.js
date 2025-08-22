import React, { Component } from 'react'

// Conditional Rendering.

class UserGreeting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }

    render() {
        // Short Circuit Operator: 
        // return this.state.isLoggedIn && <div>Welcome User</div>        // If logged in, then it will display Welcome User. If false, then nothing will happen

        // Conditional Rendering : Use because it is simple \\ 
        return this.state.isLoggedIn ? (        // Either True or false: If operator is true, than the 2nd operator returns. If Operator is false, than the 3rd operator returns.
            <div>Welcome User</div>
        ): (
            <div>Welcome Guest</div>
        )
        
        // Element variables \\ 
        
        // let message
        // if (this.state.isLoggedIn) {
        //     message = <div>Welcome User</div>
        // }else {
        //     message = <div>Welcome Guest</div>
        // }

        // return <div>{message}</div>
        
        //     return <div>Welcome User</div>
        // } else {
        //     return <div>Welcome Guest</div>
        // }
    // return (
    //     <div>
    //         <div>Welcome User</div>
    //         <div>Welcome Guest</div>
    //     </div>
    // ) 
  }
}

export default UserGreeting