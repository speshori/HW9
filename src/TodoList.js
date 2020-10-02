import React from 'react'
import Message from'./message'

export default function TodoList({ messageList }){
    return (
        
        messageList.map(message => {
            return <Message key={message.id} message={message} />
        })
        
        
    )
}