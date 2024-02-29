"use client"
import React, { useState, useEffect } from 'react'
import io from 'socket.io-client'
import Chat from "../../component/Chat"
import Navbar from '../../component/Navbar';
import style from '../../styles/Navbar.module.css'
import Link from "next/link"
import Endline from '../../component/Endline';

const socket = io();




const Chart = () => {
  return (
    <>
    <Navbar/>
    <div className={style.lovfixed}>
        <div className="col-lg-5 col-md-12 col-sm-12  mt-5  text-center mx-auto pe-3 ps-3">
            <h1>Real-time Chat</h1>
                <Chat socket={socket}/> <hr />

                <h3 ><Link className="text-primary text-decoration-none" href="/home">Go Back Home</Link></h3> 
        </div>
    </div>
    <div className={style.lovchat}>
    <Endline/>
    </div>
    </>
  )
}

export default Chart