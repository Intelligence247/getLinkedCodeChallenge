import React from 'react'
import "./Intro.css"
const Intro = (props) => {
  return (
    <div className='bg-primarybg introWrapper'>
        <div className={`introLeft1 ${props.order}`}>

      <img src="starpurple.png" className='absolute lg:w-max w-[10px] left-[0%] top-[0%]  ' alt="" />

            <p className='idea'>{props.display}</p>
            <img src={props.img1} alt="" />
        <img src="/arrow.png" className={`arrow lg:w-max w-[20px] lg:absolute  bottom-0 right-0 ${props.arrowDisplay}` }  alt="arrow" />

      </div>
      <div className={`introRight1 ${props.intro2} relative`}>
      <img src="starpurple.png" className='absolute lg:w-max w-[10px] right-[70%] top-[0%]  ' alt="" />

<div className='intoLeftContent '>
    <p>{props.txt1}</p>
<p>{props.txt2}</p>
</div>
<div className='lg:text-base text-sm lg:text-start text-center leading-[1.5rem] '>Our tech hackathon is a melting divot of visionaries, and its purpose is as
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
