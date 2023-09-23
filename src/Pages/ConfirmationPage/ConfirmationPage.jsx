import React from 'react'
import "./ConfirmationPage.css"
import { Link } from 'react-router-dom'
const ConfirmationPage = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <div >
     <div className=" lg:w-[50vw] h-[60%] border-2 border-primaryPurple flex  flex-col justify-center items-center relative">
      <div className="topConrimation">
      <img src="/jubilate.png" alt="" />
      <img src="/markedSuc.png" className='absolute top-0 left-20' alt="" />
     </div>
     <h1>Congratulations
you have successfully
 Registered!</h1>
 <p>Yes, it was easy and you did it!<br/>
check your mail box for next step</p>
<Link to="/register">
<button>Back</button>
</Link>
</div>
    </div>
    </div>
  )
}

export default ConfirmationPage
