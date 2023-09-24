import React, { useEffect, useState } from 'react'
import "./NavBar.css"
import { Link } from 'react-router-dom';
const NavBar = () => {
  const [active, setactive] = useState(true);
  const [Visible, setVisible] = useState(false);
  useEffect(() => {
    let prevS = window.pageYOffset;
    window.addEventListener('scroll', ()=>{
  let currenSc = pageYOffset;
  prevS > currenSc ? setVisible(false) : setVisible(true)
  prevS = currenSc;
    })
  }, [])
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
    <div className={`navWraper ${!Visible?"top-0": 'top-[-5rem]'}`}  >
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
            key={i}
            onClick={()=> setactive(!active)}
             to={n.link}>{n.text}</Link>
       
            ):(
              <a
              key={i} 
            onClick={()=> setactive(!active)}
               href={n.link}>{n.text}</a>
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
