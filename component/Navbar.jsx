import style from '../styles/Navbar.module.css'
import Link from "next/link"

const Navbar = () => {
  return (
    <>
    <div className={style.navfixed}>
      <nav  class="navbar bg-dark">
        <div  class="container-fluid">      
              <a class="navbar-brand d-flex gap-3" href="#">
                <img src="together2.PNG" alt="Logo" width="50" height="50" class="rounded-circle d-inline-block align-text-top"/>              
              <h1 className="text-white">Dating Site</h1>                          
              </a> 
             
              <h3 ><Link className="text-primary text-decoration-none" href="/home">Home</Link></h3> 

            <div className="d-flex gap-5">                  
                    <h3 className="text-white text-decoration-none" href="/about">About</h3>
               
               
                    <h3 className="text-white text-decoration-none" href="/blog">Blog</h3>
               
                
                    <Link className="text-white text-decoration-none" href="/signin"><button className="btn btn-primary">Sign In</button></Link>               
            </div>    
        </div>
      </nav>
    </div>
    </>
  )
}

export default Navbar