import React from 'react'
import "./ConfirmationPage.css"
import { Link } from 'react-router-dom'
const ConfirmationPage = (props) => {
  return (
    <div className={`w-full ${props.height} flex justify-center items-center p-4 relative`}>
      <div >
     <div className=" lg:w-[35rem] lg:h-[30rem] w-full border-2 border-primaryPurple flex  flex-col justify-center items-center p-6 space-y-6 relative">
     <img src="starblue.png" className=' left-[100%] -top-[10%] absolute lg:w-max w-[10px]  ' alt="" />
     <img src="stargray.png" className=' left-[10%] top-[30%] absolute lg:w-max w-[10px]  ' alt="" />
     <img src="starblue.png" className=' left-[85%] top-[80%] absolute lg:w-max w-[10px]  ' alt="" />



      <div className="topConrimation">
      <img src="/jubilate.png" alt="" />
      <img src="/markedSuc.png" className='absolute lg:left-[22%] lg:top-[8%] top-[4%] -left-[5%]' alt="" />
     </div>
     <h1 className='lg:text-[2rem] lg:leading-[2rem] text-[20px] leading-[20px] font-bold text-center'>Congratulations<br/>
you have successfully
 Registered!</h1>
 <p className='lg:leading-[28px] leading-[20px]'>Yes, it was easy and you did it!<br/>
check your mail box for next step</p>
<Link to="/">
<button>Back</button>
</Link>
</div>
    </div>
    </div>
  )
}

export default ConfirmationPage
