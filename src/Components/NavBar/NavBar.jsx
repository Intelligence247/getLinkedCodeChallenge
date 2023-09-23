import React, { useState } from 'react'
import "./NavBar.css"
import { Link } from 'react-router-dom';
const NavBar = () => {
  const [active, setactive] = useState(true);
    const navObj = [
        {
        text: 'Timeline',
        link: '',
    },
    {
        text: 'Overview',
        link: '',
    },
    {
        text: 'FAQs',
        link: '',
    },
    {
        text: 'Contact',
        link: '/contact',
    },
   
    
]
  return (
    <div className='navWraper'>
      <div className="navLeft">get<span>linked</span></div>
      <span className='flex-grow-[1]'></span>
      <div className={`navRight ${active?'navRightA':'navRight'}`}>
      <div
      onClick={()=>setactive(!active)}
       className="overlay">
      </div>
        {
            navObj.map((n,i)=>(
            <Link
            onClick={()=> setactive(!active)}
             to={n.link} key={i}>{n.text}</Link>
            ))
        }
        <button>Register</button>
      </div>
      <div className="harmBurger"
      onClick={()=>setactive(!active)}
      >
       <img src={`${active?"/burgera.png":"/burgerx.png"}`} alt="" />
      </div>
      
    </div>
  )
}

export default NavBar
