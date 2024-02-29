// "use client"

import Endline from "../component/Endline"
import Love from "../component/Love"
import Navbar from "../component/Navbar"


// import React, { useState, useEffect } from 'react'
// import io from 'socket.io-client'
// import Chat from "../component/Chat"
// const socket = io();

const page = () => {
  return (
    <>      
      <Navbar/>
      <Love/>
      <Endline/>

      {/* <h1>Real-time Chat</h1>
      <Chat socket={socket}/> */}
    </>
  )
}

export default page