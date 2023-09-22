import React from 'react'
import "./Hero.css"
const Hero = () => {
  return (
    <div className='heroWrapper'>
        <div className="ignite">
            <p>Igniting a Revolution in HR Innovation</p>
            <img src="Vector4.png" alt="" />
        </div>
        <div className="heroWrapper2">
      <div className="heroLeft">
        
<p className='relative z-10 flex flex-col justify-center items-end'>
  <img src="Creativebulb.png" className='' alt="" />
  getlinked Tech</p>
<img src="/purple.png" className='absolute -top-40 -right-20 z-0 ' alt="" />

<div className="hack relative z-10">
    <p>Hackathon<span>1.0</span></p>
    <img src="/chain.png" alt="chain logo" />
    <img src="fire.png" alt="fire logo" />
    </div>

    <p className='text-xl'>Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize</p>
    <button>Register</button>
    <div className="time">
    <p>00<sub>H</sub></p>
    <p>00<sub>M</sub></p>
    <p>00<sub>S</sub></p>
    </div>
      </div>
      <div className="heroRight">
        <img src="/glass.png" alt="" />
        <img src="/universe.png" alt="" />
      </div>
      </div>
    </div>
  )
}

export default Hero
