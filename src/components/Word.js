import React from 'react'
import { useParams } from 'react-router-dom'

const Word = () => {
    
    const {input, textColor, bgColor} = useParams();
    
    const style = {
        color: `${textColor}`,
        backgroundColor: `${bgColor}`
    }

    return (
        <div>
            <h1 style = {style}>The word is: {input} </h1>
        </div>
    )
}

export default Word
