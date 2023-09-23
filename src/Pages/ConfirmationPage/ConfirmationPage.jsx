import React from 'react'
import "./ConfirmationPage.css"
import { Link } from 'react-router-dom'
const ConfirmationPage = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center p-4'>
      <div >
     <div className=" lg:w-[35rem] lg:h-[30rem] w-full border-2 border-primaryPurple flex  flex-col justify-center items-center relative p-6 space-y-6">
      <div className="topConrimation">
      <img src="/jubilate.png" alt="" />
      <img src="/markedSuc.png" className='absolute left-[22%] top-[14%]' alt="" />
     </div>
     <h1 className='lg:text-[2rem] lg:leading-[2rem] text-[20px] leading-[20px] font-bold text-center'>Congratulations<br/>
you have successfully
 Registered!</h1>
 <p className='lg:leading-[28px] leading-[20px]'>Yes, it was easy and you did it!<br/>
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
