import React, { Component } from 'react'

export class EventBind extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       message: "Hello"
    }

    this.clickHandler = this.clickHandler.bind(this)
  }
  
  // Method works with the first 3 methods in the render.
  // clickHandler() {
  //   this.setState({
  //     message: "GoodBye"
  //   })
  //   console.log(this)
  // }        
  
  clickHandler = () => {
    this.setState({
      message: "Goodbye"
    })
  }

  render() {
    return (
      <div>
        <div>
          {this.state.message}
        </div>
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}   {/* First method of Binding event handlers*/}
        {/* <button onClick={() => this.clickHandler()}>Click</button>*/}      {/* Second method of Binding Event Handlers: Using Arrorw functions in the render method */}
        <button onClick={this.clickHandler}>Click</button>                    {/* Third method of Binding in the constructor instead of binding in the render.*/} 

      </div>
    )
  }
}

export default EventBind