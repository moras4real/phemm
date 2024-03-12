import React, { useState, useEffect } from 'react'
import socketClient from 'socket.io-client'
import style from '../styles/Navbar.module.css'
import baseUrl from './BaseUrl'
const Chat = () => {
  const [message, setMessage] = useState('');
  const [allMessages, setAllMessages] = useState([]);

  const [socket, setsocket] = useState("")
  let endpoint = baseUrl
useEffect(() => {
    setsocket(socketClient(endpoint))   
  },[])  

    useEffect(() => {
        if (socket) {
            socket.on('broadcastMsg', (receivedMessage) => {
                setAllMessages([...allMessages, receivedMessage]);
            });
        }

        // Clean up the event listener
        return () => {
            if (socket) {
                socket.off('broadcastMsg');
            }
        };
    }, [socket, allMessages]);

    const sendMessage = () => {
        socket.emit('sendMsg',{ content: message, from: 'user1' });
        setMessage('');
        
    };


  return (
    <>
        <div>
            {allMessages.map((msg, index) => (
                <div key={index} className={msg.from === 'user1' ? style.admin : style.user}>
                {msg.content}
              </div>
            ))}
            <input className="border border-primary"
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <button className="btn btn-primary" onClick={sendMessage}>Send</button>
        </div>    
    </>
  )
}

export default Chat