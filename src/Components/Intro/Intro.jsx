import React from 'react'
import "./Intro.css"
const Intro = () => {
  return (
    <div className='bg-primarybg introWrapper'>
        <div className="introLeft">
        <img src="/arrow.png" className='arrow' alt="arrow" />
            <p>The Big Idea!</p>
            <img src="/bulb.png" alt="" />
      </div>
      <div className="introRight">
<div className='intoLeftContent'>
    <p>Introduction to getlinked</p>
<p>tech Hackathon1.0</p>
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
