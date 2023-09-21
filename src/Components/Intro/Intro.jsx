import React from 'react'
import "./Intro.css"
const Intro = (props) => {
  return (
    <div className='bg-primarybg introWrapper'>
        <div className={`introLeft ${props.order}`}>
        <img src="/arrow.png" className={`arrow ${props.arrowDisplay}` }  alt="arrow" />
            <p>{props.display}</p>
            <img src={props.img1} alt="" />
      </div>
      <div className="introRight">
<div className='intoLeftContent '>
    <p>{props.txt1}</p>
<p>{props.txt2}</p>
</div>
<div>Our tech hackathon is a melting divot of visionaries, and its purpose is as
clear as day: to shape the future. Whether you're a coding genius, a 
design maverick, or a concept wizard, you'll have the chance to transform 
your ideas into reality. Solving real-world problems, pushing the boundaries
of technology, and creating solutions that can change the world,
that's what we're all about!</div>
      </div>
    
    </div>
  )
}

export default Intro
