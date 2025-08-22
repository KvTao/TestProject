import React from 'react'

// Functional Component
export const Greet = (props)=> {               // Props, would be value for name
    console.log(props)
    return (
        <div>
            <h1>Hello {props.name} or {props.heroName}</h1>
            {props.children}   
        </div>
    )
}

export default Greet