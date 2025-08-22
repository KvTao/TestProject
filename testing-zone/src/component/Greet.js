import React from 'react'

// Functional Component
export const Greet = props => {               // Props, would be value for name
    const {name, heroName} = props
    return (
        <div>
            <h1>Hello {name} or {heroName}</h1>
        </div>
    )
}

export default Greet 