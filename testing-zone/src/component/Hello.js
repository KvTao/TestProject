import React from 'react'

const Hello = () => {
    // With JSX, We need to import the React library for JSX. JSX Translates React elements. Using the React element.
    return (
        <div>
            <h1>Hello Users</h1>
        </div>
    )

    // return React.createElement(
    //     'div', 
    //     {id: 'hello', className: 'dummyClass'},
    //     React.createElement('h1', null, "Hello User")
    // )
}

export default Hello