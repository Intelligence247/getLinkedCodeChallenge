import React from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import "./ContactPage.css"
import { Link } from 'react-router-dom'

const ContactPage = () => {
  return (
    <div className='contactWrapper'>
      <NavBar/>
      <div className="contactWrapper2">
        <div className="Cleft">
          <h1>Get in touch</h1>

          <div className="contactInfo">
            <p>Contact</p>
            <p>Information</p>
          </div>
          <p className="location">
          27,Alara Street
Yaba 100012
Lagos State
          </p>
          <p>Call Us : 07067981819</p>
          <p>we are open from Monday-Friday
08:00am - 05:00pm</p>
<div className="contactSocio">
<div className="Csocio">
  <h1>Share on</h1>
  <div className="socioImg flex space-x-4">
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
        </div>

        <div className="Cright">
          <Link className='border-[1px] border-primaryPurple w-8 h-8 rounded-full inline-block flex justify-center items-center lg:hidden'>
          <img src="/back.png" alt="" />
          </Link>

          <h1 className='lg:text-[1.5rem] lg:leading-[1.6rem] text-[20px] leading-[20px] text-primaryPurple '>Questions or need assistance?<br/>
          Let us know  about it!</h1>
          <p className='lg:hidden'>Email us below to any question related 
to our event</p>
          <input type="text" placeholder='First Name'/>
          <input type="email" placeholder='Mail' />
          <textarea id="myTextarea" name="comments" rows="4" cols="30">
        Messages
    </textarea>
    <button>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
