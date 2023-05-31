import React from 'react'
import './Filesgenerated.css'
import { IoMdImage } from "react-icons/io";
function Filesgenerated() {
  return (
    <div className='Filesgenerated'>
<div className="fileicon">
<IoMdImage  className='mdicon' />
<div className="filedetails">
    <p className="lastmodified">Last Modified</p>
    <p className="uploaddate">Uploaded on :</p>
</div>
</div>


</div>
  )
}

export default Filesgenerated