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
<p>getlinked Tech</p>
<div className="hack">
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
