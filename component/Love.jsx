import style from '../styles/Navbar.module.css'
import Link from "next/link"

const Love = () => {
  return (
    <>
    <div className={style.lovfixed}>
    <div class="container  d-flex">
      <div className="col-6 pe-1  ps-2">
      <h1 class="text-success">Find your best partner!</h1>
      <h4>Match with anyone around the world.</h4>
      <h4>Get your dream couple right now.</h4>

      <button className="btn btn-warning mb-3"><h3>Find your parner now</h3></button>

      <h4>Available on:</h4>

      <div className="d-flex gap-3 mb-4">
        <img src="logo1.PNG" alt="Logo" width="70" height="20" class="d-inline-block align-text-top"/>
        <img src="logo2.PNG" alt="Logo" width="70" height="20" class="d-inline-block align-text-top"/>
      </div>

      <div className="bg-dark col-11 ps-2 pt-2 pb-2">
        <h2 className="text-white ">Our Members</h2>  
          <div className=" d-flex gap-4 mb-1"> 
            <img src="user2.PNG" class="rounded-circle" alt="Logo" width="50" height="50"></img>
            <img src="user1.PNG" class="rounded-circle" alt="Logo" width="50" height="50"></img>       
          </div>       
        <h6  className="text-white ">The Users that registered with honest mind</h6>
      </div>

     <Link className=" text-decoration-none" href="/signup"><button className="btn btn-primary mt-3 mb-3 text-dark" ><h5>Create Account Now</h5></button></Link>
            
      {/* <form id="registrationForm">
          <div>
          <label for="username">Username:</label>
          <input type="text" id="username" name="username" required/>
          </div>

          <div>            
          <label for="tribe">Tribe:</label>
          <input type="text" id="tribe" name="tribe" required/>
          </div>

          <div>            
          <label for="interests">Interests:</label>
          <input type="text" id="interests" name="interests"/>
          </div>

          <div>            
          <label for="location">Location:</label>
          <input type="text" id="location" name="location"/>
          </div>

          <button type="button" onclick="registerUser()">Register</button>
      </form> */}
    </div>

        <div className="col-6 ps-3 border-start border-secondary ">
              <h1>How Does it Work?</h1>
          <div className="d-flex gap-2">
              <img src="chat1.PNG" alt="Logo" width="40" height="40" class="rounded-circle d-inline-block align-text-top"/>
              <h3>Create your profile.</h3>
          </div>
              <p>Complete your profile</p>
              <p>start from name until gender</p>
          

            
          <div className="d-flex gap-2">
              <img src="chat2.PNG" alt="Logo" width="40" height="40" class="rounded-circle d-inline-block align-text-top"/>
              <h3>Find your match!</h3>
          </div>
            <p>Explore and find your</p>
            <p>match that you think have</p>
            <p>a lot of common</p>

            
            <div className="d-flex gap-2">
              <img src="together2.PNG" alt="Logo" width="40" height="40" class="rounded-circle d-inline-block align-text-top"/>
              <h3>Schedule your date</h3>
          </div>
            <p>If you got a new match, then text</p>
            <p>him/her. Prepare your schedule</p>
            <p>to date with him/her.</p>
          
        </div>

    </div>
    
    </div>
    </>
  )
}

export default Love