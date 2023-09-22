import React from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import Hero from '../../Components/HeroSection/Hero'
import "./HomePage.css"
import Intro from '../../Components/Intro/Intro'
import Judge from '../../Components/Judge/Judge'
import Faqs from '../../Components/Faqs/Faqs'
import Timeline from '../../Components/Timeline/Timeline'
import Prices from '../../Components/Prizes/Prices'
const HomePage = () => {
  return (
    <div>
        <NavBar/>
        <Hero/>
        <Intro
        display="The Big Idea"
        txt1="Introduction to getlinked"
        txt2="tech Hackathon1.0"
        img1="/bulb.png"
        />
        <Intro
        display=""
        txt1="Rules"
        txt2="Guidlines"
        img1="wom.png"
        arrowDisplay="hidden"
        order='order-2'
        />
        <Judge/>
        <Faqs/>
        <Timeline/>
        <Prices/>
        
    </div>
  )
}

export default HomePage
