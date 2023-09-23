import React from 'react'
import "./Hero.css"
const Hero = () => {
  return (
    <div className='heroWrapper relative'>
      <img src="/starwhite.png" className='absolute lg:w-max w-[10px] top-[30%] ' alt="" />
      <img src="/stargray.png" className='absolute lg:w-max w-[10px] left-[50%] top-[20%] ' alt="" />
        <div className="ignite">
            <p>Igniting a Revolution in HR Innovation</p>
            <img src="Vector4.png" alt="" />
        </div>
        <div className="heroWrapper2">
      <div className="heroLeft">
        
<p className='relative flex flex-col justify-center items-end'>
  <img src="Creativebulb.png" className='' alt="" />
  getlinked Tech</p>
{/* <img src="/purple.png" className='absolute -top-40 lg:-right-20 z-0 ' alt="" /> */}


<div className="hack relative">
    <p>Hackathon<span className=''>1.0</span></p>
    <img src="/chain.png" alt="chain logo" />
    <img src="fire.png" alt="fire logo" />
    </div>

    <p className='lg:text-xl text-sm lg:text-start text-center lg:w-max w-[90%] lg:m-0 m-auto'>Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize</p>
    <button>Register</button>
    <div className="time">
    <p>00<sub>H</sub></p>
    <p>00<sub>M</sub></p>
    <p>00<sub>S</sub></p>
    </div>
      </div>
      <div className="heroRight lg:mt-0 mt-10">
      <img src="starwhite.png" className='absolute lg:w-max w-[10px] left-[20%] top-[0%]  ' alt="" />

        <img src="/glass.png" alt="" />
        <img src="/universe.png" alt="" />
      </div>
      </div>
    </div>
  )
}

export default Hero
