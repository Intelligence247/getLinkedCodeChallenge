import React from 'react'
import "./NavBar.css"
const NavBar = () => {
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
        link: '',
    },
   
    
]
  return (
    <div className='navWraper'>
      <div className="navLeft">get<span>linked</span></div>
      <span className='flex-grow-[1]'></span>
      <div className="navRight">
        {
            navObj.map((n,i)=>(
            <a href={n.link} key={i}>{n.text}</a>
            ))
        }
        <button>Register</button>
      </div>
      <div className="harmBurger">
        <p></p>
        <p></p>
        <p></p>
      </div>
    </div>
  )
}

export default NavBar
