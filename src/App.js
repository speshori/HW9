import React, { useState, useRef, useEffect } from 'react';
import TodoList from "./TodoList"

const LOCAL_STORAGE_KEY = 'messageList.messages'

function App() {
   const [message, newMessage] = useState([])
   const messageRef= useRef()
   

   useEffect(() => {
       const storedMessages = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
       if (storedMessages) newMessage(storedMessages)
   }, [])
  
   useEffect(() => {
       localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(message))
   }, [message])
   
   function makeMessage(e){
       const text = messageRef.current.value
       if(text === '') return 
       newMessage(prevMessage => {
           return [...prevMessage, {id: 1, text: text, complete: false}]
       })
       messageRef.current.value=null
   }
   
   function message_enter(e){
       if(e.key === "Enter"){
           makeMessage(e);
       }
   }
   
   return (
    <>
        <input ref={messageRef} type="text" onKeyDown={message_enter} />
        <button onClick={makeMessage}> New Message </button>
        <TodoList messageList={message}/>
        
        
    </>
    )
}

export default App;
