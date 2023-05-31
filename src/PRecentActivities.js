import React from 'react'
import './RecentActivities.css'
import {  BsFillLightningChargeFill} from "react-icons/bs";
import Filesgenerated from './Filesgenerated'
function PRecentActivities() {
  return (
    
    <div className='recentActivities'> 


    <h4 className='activityheading'><BsFillLightningChargeFill /> Recent Activity/Files
    </h4>

  <div className="files-container">
  <Filesgenerated/>
  <Filesgenerated/>
  <Filesgenerated/>
  </div>
 </div>
 
  )
}

export default PRecentActivities