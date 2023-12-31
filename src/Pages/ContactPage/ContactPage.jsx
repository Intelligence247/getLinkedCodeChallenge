import React, { useEffect, useState } from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import "./ContactPage.css"
import { Link } from 'react-router-dom'
import axios from 'axios'
import { data } from 'autoprefixer'
import { Audio } from 'react-loader-spinner'
const ContactPage = () => {
  const [email, setEmail] = useState('');
  const [first_name, setFirst_name] = useState('');
  const [message, setMessage] = useState(''); 
  const [success, setsuccess] = useState(false);
  const [load, setload] = useState(false);
  // useEffect(() => {
  //   const timeover= setTimeout(() => {
  //     setload(false)
  //   }, 200);
     

  //      return () => {
  //        clearTimeout(timeover)

  //      }
  //    }, [load])


  const baseUrl = "https://backend.getlinked.ai";
  const url = `${baseUrl}/hackathon/contact-form`;
  const rand= Math.random().toString(16).substr(2,6)
  const date = Date()
  const handleSubmit = async (e) => {
    e.preventDefault();
    const config = { "content-type": "application/json" };
    const obj = {
      email: email,
      first_name: first_name,
      message: message,
      date_created: date,
      last_updated: date,

    }
    try {
      const resp = await axios.post(url, obj);
      console.log(resp)
      console.log('my answoe')
      alert("Your message has been succesfully sent")
      setload(false)

    } catch (error) {
      alert("Make sure you enter all and check your network")
      setload(false)
    }finally{
      setload(!load)
      setEmail('')
      setMessage('')
      setFirst_name('')
    }
   
  }
  useEffect(() => {
  handleSubmit()
  }, []);
  return (
    <div className='contactWrapper'>
      <NavBar/>
      <div className="contactWrapper2">
        <div className="Cleft relative">
        <img src="starpurple.png" className='lg:left-[10%] left-[50%] top-[25%] absolute lg:w-max w-[10px]  ' alt="" />
        <img src="starblue.png" className='left-[90%] top-[90%] absolute lg:w-max w-[0px]  ' alt="" />
     

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

        <form className="Cright relative" onSubmit={handleSubmit}>
        <img src="stargray.png" className=' left-[85%] top-[5%] absolute lg:w-max w-[10px]  ' alt="" />
        <img src="starwhite.png" className=' left-[90%] top-[100%] absolute lg:w-max w-[10px]  ' alt="" />

          <Link to={"/"} className='border-[1px] border-primaryPurple w-8 h-8 rounded-full inline-block flex justify-center items-center lg:hidden'>
          <img src="/back.png" alt="" /></Link>

          <h1 className='lg:text-[1.5rem] lg:leading-[1.6rem] text-[20px] leading-[20px] text-primaryPurple '>Questions or need assistance?<br/>
          Let us know  about it!</h1>
          <p className='lg:hidden'>Email us below to any question related 
to our event</p>
          <input type="text" placeholder='First Name' required
          value={first_name}
          name='firstname'
          onChange={(e)=> setFirst_name(e.target.value)}
          />
          <input type="email" placeholder='Mail' required
          value={email}
          name='email'
          onChange={(e)=>setEmail(e.target.value)}
           />
          <textarea id="myTextarea" name="comments" rows="4" cols="30" required
          value={message}
          onInput={(e)=> setMessage(e.target.value)}
          >
        Messages
    </textarea>
    <div className={`load w-full flex justify-center items-center ${load?"block":'hidden'}`}>
    <Audio
    color='#D434FE'
    height={50}
    width={50}
    />
      </div>
    <button type='submit'
    onClick={()=> setload(true)}
    >Submit</button>
        </form>
      </div>
    </div>
  )
}

export default ContactPage
