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
    {
      text: 'Register',
      link: '',
  },
    
]
  return (
    <div className='navWraper'>
      <div className="navLeft">get<span>linked</span></div>
      <span className='flex-grow-[1]'></span>
      <div className="navRight">
        {
            navObj.map((n)=>(
            <a href={n.link}>{n.text}</a>
            ))
        }
      </div>
    </div>
  )
}

export default NavBar
