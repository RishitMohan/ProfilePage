import React from 'react'
import { FaUserAlt} from 'react-icons/fa';
import ProfileDetails from './ProfileDetails.js'
import './UserBio.css'
import ProfileIcon from './ProfileIcon.js';
function UserBio() {
  return (
   
 <div className='userBio'> 
 <div className="profIcon"> <ProfileIcon/></div>
   <div className="bio-content">
    <h4><FaUserAlt  />   User Details</h4>

   <div className="contactInfo">
   <p>Contact Information</p>
    {/* send data  from backend or database to ProfileDetails 
    i.e 
    1.Email
    2.Phone
    3.Address
    as props- backend logic
    */}
<ProfileDetails/> 
<ProfileDetails/>
<ProfileDetails/>
   </div>
   <hr />
  
   <div className="personalInfo">
   <p>Personal Information</p>
   <ProfileDetails/> 
<ProfileDetails/>
<ProfileDetails/>
   </div>
 
   </div>
  
  
   </div>



 
  )
}

export default UserBio