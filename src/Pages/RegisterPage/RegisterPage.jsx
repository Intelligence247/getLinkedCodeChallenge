import React, { useEffect, useState } from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import { Link } from 'react-router-dom'
import "./RegisterPage.css"
import { Audio } from 'react-loader-spinner'
const RegisterPage = () => {
  const [load, setload] = useState(false);
  const [go, setgo] = useState(true);
  useEffect(() => {
    const timeover= setTimeout(() => {
      setload(false)
    }, 2000);
     

       return () => {
         clearTimeout(timeover)
         setgo(false)

       }
     }, [load])
  return (
    <div className='RegistrationWrapper1'>
         <NavBar/>
     <div className="registrationWrapper ">
      <h1 className='lg:hidden block text-[20px] text-primaryPurple px-4'>Register</h1>
      <div className="registerLeft relative">
<img src="stargray.png" className='left-[10%] top-[100%] absolute lg:w-max w-[10px]  ' alt="" />
<img src="starpurple.png" className='left-[10%] top-[10%] absolute lg:w-max w-[10px]  ' alt="" />
<img src="starblue.png" className='left-[85%] top-[85%] absolute lg:w-max w-[10px]  ' alt="" />



        <img src="registerimg.png" alt="" />
      </div>
     <div className="registerRight pt-20 pb-4 relative">
    
<img src="starwhite.png" className='left-[85%] top-[100%] absolute w-[10px]  ' alt="" />
<img src="stargray.png" className='left-[80%] bottom-[70%] absolute lg:w-max w-[10px]  ' alt="" />

      <h1>Register</h1>
      <div className="trek flex items-baseline space-x-2">
        <p>Be part of this movement!</p>
        <div className="trekking flex flex-col justify-center items-center">
          <div className="bothImg flex">
          <img src="trek2.png" alt="" />
          <img src="trek1.png" alt="" />
          </div>
          <img src="/dots.png" alt="" />
        </div>
      </div>
      <h1>CREATE YOUR ACCOUNT</h1>
      <div className="inputs">
        <div className="firstInput">
        <label htmlFor="">Team’s Name</label>
        <input type="text" placeholder='Enter the name of your group'/>
        </div>
        {/*  */}
        <div className="firstInput">
        <label htmlFor="">Phone</label>
        <input required type="text" placeholder='Enter your phone number'/>
        </div>
        {/*  */}
        <div className="firstInput">
        <label htmlFor="">Email</label>
        <input required type="text" placeholder='Enter your email address'/>
        </div>
        {/*  */}
        <div className="firstInput">
        <label htmlFor="">Project Topic</label>
        <input required type="text" placeholder='What is your group project topic'/>
        </div>
         {/*  */}
         <div className="firstInput">
        <label htmlFor="">Category</label>
        <select name="" id="">
          <option value="">Select your category </option>
          <option value="">First Category</option>
          <option value="">Second Category</option>
          <option value="">Third Category</option>
        </select>
        </div>
        {/*  */}
        <div className="firstInput">
        <label htmlFor="">Group Size</label>
        <select name="" id="">
          <option value="">Select</option>
          <option value="">10</option>
          <option value="">50</option>
          <option value="">100</option>
        </select>
        </div>
      </div>
      <div className="erroM">Please review your registration details before submitting</div>
      <div className="agreed">
      <input type="checkbox" name="" id="" />
      <p>I agreed with the event terms and conditions  and privacy policy</p>
      </div>
      <div className={`load w-full flex justify-center items-center ${load?"block":'hidden'}`}>
    <Audio
    color='#D434FE'
    height={50}
    width={50}
    />
      </div>
<Link to={"/confirmation"}
onClick={()=>setload(!load)}
> <button className='w-full'>Register Now</button></Link>
     </div>
     </div>
    </div>
  )
}

export default RegisterPage
