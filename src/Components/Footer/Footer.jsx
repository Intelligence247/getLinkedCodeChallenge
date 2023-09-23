import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='footerWrapper'>
      <div className="footerWrapper2">
      <div className="footertop relative">
      <img src="starwhite.png" className='-left-[10%] top-[20%] absolute lg:w-max w-[10px]  ' alt="" />
        <div className='flex space-y-2 flex-col'>
      <div className="footerHeader">get<span className='lg:text-[2rem] text-[20px] '>linked</span></div>
      <p>Getlinked Tech Hackathon is a technology innovation program 
        established by a group of organisations with the aim of showcasing 
        young and talented individuals in the fielf of technology
      </p>
      </div>
      <div className="terms flex gap-2 items-center">
        <p>Terms of use</p>
        <p className='w-[2px] bg-primaryPurple h-5'></p>
        <p>Privacy Policy</p>
      </div>
      </div>
<div className="footercenter relative">
<img src="starpurple.png" className='lg:-left-[0%] -left-[7%] top-[100%] absolute lg:w-max w-[10px]  ' alt="" />

  <div className='footercenter2'> 
        <h1>Useful Links</h1>
       <a href="#overview"><p>Overview</p></a>
        <a href="#timeline"><p>Timeline</p></a>
       <a href="#faqs"><p>FAQs</p></a> 
     <Link to="/register"><p>Register</p></Link>
<div className="socio">
  <h1>Follow Us</h1>
  <a href="">
     <img src="/insta.png" alt="" />
  </a>
  <a href="">
     <img src="/x.png" alt="" />
  </a>
  <a href="">
     <img src="facebook.png" alt="" />
  </a>
  <a href="">
     <img src="linkedin.png" alt="" />
  </a>
  </div>      
  </div>
  </div>
      <div className="footerbottom relative">
<img src="starpurple.png" className='lg:right-full right-[10%] -top-[10%] absolute lg:w-max w-[10px]  ' alt="" />
<img src="stargray.png" className='left-full top-[100%] absolute lg:w-max w-[10px]  ' alt="" />


        <h1>Contact Us</h1>
        <div className="phone">
          <img src="/phone.png" alt="" />
       <p>+234 6707653444</p>
        </div>
        <div className="phone">
          <img src="/location.png" alt="" />
       <p>+234 6707653444</p>
        </div>
        </div>
      </div>
      <div className='flex justify-center items-center w-full text-[12px]'>All rights reserved. © getlinked Ltd.</div>
    </div>
  )
}

export default Footer