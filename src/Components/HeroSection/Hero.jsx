import React, { useEffect, useState } from 'react'
import "./Hero.css"
import { Link } from 'react-router-dom';
const Hero = () => {
  
    // Set the deadline date for the countdown (change this to your desired deadline)
    const deadline = new Date("2023-09-30T24:00:00").getTime();
    const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());
  
    function calculateTimeRemaining() {
      const now = new Date().getTime();
      return Math.max(0, deadline - now); // Ensure the countdown doesn't go negative
    }
  
    useEffect(() => {
      const countdown = setInterval(() => {
        const remainingTime = calculateTimeRemaining();
        setTimeRemaining(remainingTime);
  
        if (remainingTime <= 0) {
          clearInterval(countdown);
        }
      }, 1000);
      // Clean up the interval on unmount
      return () => clearInterval(countdown);
    }, []);
  
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
    const hours2 = hours >9? hours : '0'+hours
    const minutes2 = minutes >9? minutes : '0'+minutes
    const seconds2 = seconds >9? seconds : '0'+seconds
  return (
    <div className='heroWrapper relative'>
      <img src="/starwhite.png" className='absolute lg:w-max w-[10px] top-[30%] ' alt="" />
      <img src="/stargray.png" className='absolute lg:w-max w-[10px] left-[40%] top-[20%] ' alt="" />
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
    <Link to="/register"><button>Register</button></Link>
    <div className="time">
    <p>{hours2}<sub>H</sub></p>
    <p>{minutes2}<sub>M</sub></p>
    <p>{seconds2}<sub>S</sub></p>
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
