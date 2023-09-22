import React from 'react'
import "./Footer.css"
const Footer = () => {
  return (
    <div className='footerWrapper'>
      <div className="footerWrapper2">
      <div className="footertop">
        <div className='flex space-y-2 flex-col'>
      <div className="footerHeader">get<span>linked</span></div>
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
<div className="footercenter">
  <div className='footercenter2'> 
        <h1>Useful Links</h1>
        <p>Overview</p>
        <p>Timeline</p>
        <p>FAQs</p>
        <p>Register</p>
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
      <div className="footertop"></div>
    </div>
    </div>
  )
}

export default Footer
