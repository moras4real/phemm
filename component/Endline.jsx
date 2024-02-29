"use client"
import { useState, useEffect } from 'react'
import style from '../styles/Navbar.module.css'
import Link from "next/link"

const Endline = () => {

  const [currentColor, setCurrentColor] = useState(0);
  const colors = ['#ff0000','#0000ff', '#a52a2a', '#008000', '#ffd700']; 

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentColor((currentColor + 1) % colors.length);
    }, 5000); 

    return () => clearInterval(intervalId); 
  }, [currentColor]); 


  return (
    <>    
        <div className=" d-flex justify-content-center gap-4 bg-dark ps-2 pe-1 pt-5 pb-5">       
            <div><a className="text-white" href="#" >About</a></div>     
            <div><a className="text-white" href="#" >Terms of Service</a></div>         
            <div><a className="text-white"href="#" >Privacy Policy</a></div>  
            <div><a className="text-white" href="#" >Advertising</a></div>              
      `</div>

      <div class="d-flex justify-content-center gap-1 bg-dark pt-2 pb-5">
        <a class="text-primary" >Settings</a>
        <a class="text-primary text-decoration text-decoration-none pb-3">© 2024 Phem Love</a>
      </div>

      <Link className=" text-decoration-none" href="/chat"><button className={style.staticButton} style={{ backgroundColor: colors[currentColor] }}>Chat Us</button></Link>
  </>    
  ) 
}

export default Endline