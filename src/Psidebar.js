import React from 'react'
import './Psidebar.css'
import { MdCameraEnhance } from "react-icons/md";
import {FiLogOut} from "react-icons/fi";
function Profilesidebar() {

  // const ProjectLogo = 'Project Logo PNG.png';//publicfolder-localImage

// const logo = {
//     backgroundImage: `url(${ProjectLogo})`,
    
//    width:"200px",
//    height:"200px",
  
//     // backgroundPosition: "center",
//     backgroundRepeat: "no-repeat",
//     backgroundSize: "contain",
// };
 
  return (
<div className='profileSidebar'>
 
<div className="logo"> <img src="Project Logo PNG.png" alt=""  /><b> Smart DMS</b></div>
   
    
    <div className="user">
  
    <div className="userphoto"><MdCameraEnhance style={{marginLeft:"40px",marginTop:"37px"}}/></div>
    
  <h4>Username</h4>
    <p>email@email.com</p>
    <button>Edit Profile</button>
    <button>change Password</button>
    <div className="logout"> <FiLogOut style={{color:"white"}}/>Logout</div>


    </div>
  
   
    



  
    </div>

  )
}

export default Profilesidebar;