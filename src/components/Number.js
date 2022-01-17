import React from 'react'
import { useParams } from 'react-router-dom';

const Number = () => {

    const {input} = useParams();

    return (
        <div>
            <h1>The number is: {input}</h1>
        </div>
    )
}

export default Number
