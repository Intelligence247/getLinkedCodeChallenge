import React, { useState } from 'react'
import "./NavBar.css"
import { Link } from 'react-router-dom';
const NavBar = () => {
  const [active, setactive] = useState(true);
    const navObj = [
        {
        text: 'Timeline',
        link: '/#timeline',
    },
    {
        text: 'Overview',
        link: '/#overview',
    },
    {
        text: 'FAQs',
        link: '/#faqs',
    },
    {
        text: 'Contact',
        link: '/contact',
    },
   
    
]
  return (
    <div className='navWraper'>
     <Link to="/"><div className="navLeft">get<span>linked</span></div></Link>
      <span className='flex-grow-[1]'></span>
      <div className={`navRight ${active?'navRightA':'navRight'}`}>
      <div
      onClick={()=>setactive(!active)}
       className="overlay">
      </div>
        {
            navObj.map((n,i)=>(
           i==3?(
            <Link
            onClick={()=> setactive(!active)}
             to={n.link} key={i}>{n.text}</Link>
       
            ):(
              <a  href={n.link}>{n.text}</a>
            )
            ))
        }
      <Link to="/register"><button>Register</button></Link>  
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
