import React from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import { Link } from 'react-router-dom'
import "./RegisterPage.css"
const RegisterPage = () => {
  return (
    <div className='RegistrationWrapper1'>
     <NavBar/>
     <div className="registrationWrapper ">
      <h1 className='lg:hidden block text-[20px] text-primaryPurple px-4'>Register</h1>
      <div className="registerLeft">
        <img src="registerimg.png" alt="" />
      </div>
     <div className="registerRight pt-20 ">
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
        <label htmlFor="">Team’s Name</label>
        <input type="text" placeholder='Enter the name of your group'/>
        </div>
        {/*  */}
        <div className="firstInput">
        <label htmlFor="">Team’s Name</label>
        <input type="text" placeholder='Enter the name of your group'/>
        </div>
        {/*  */}
        <div className="firstInput">
        <label htmlFor="">Team’s Name</label>
        <input type="text" placeholder='Enter the name of your group'/>
        </div>
         {/*  */}
         <div className="firstInput">
        <label htmlFor="">Team’s Name</label>
        <input type="text" placeholder='Enter the name of your group'/>
        </div>
        {/*  */}
        <div className="firstInput">
        <label htmlFor="">Team’s Name</label>
        <input type="text" placeholder='Enter the name of your group'/>
        </div>
      </div>
      <div className="erroM">Please review your registration details before submitting</div>
      <div className="agreed">
      <input type="checkbox" name="" id="" />
      <p>I agreed with the event terms and conditions  and privacy policy</p>
      </div>
<Link to="/confirmation"> <button className='w-full'>Register Now</button></Link>
     </div>
     </div>
    </div>
  )
}

export default RegisterPage
