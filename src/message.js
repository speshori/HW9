import React from 'react'

export default function Message( {message} ){
    return (
        <div>
        <ul>
        <li>{message.text}</li>
        </ul>
        </div>
    )
}