import React from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import Hero from '../../Components/HeroSection/Hero'
import "./HomePage.css"
import Intro from '../../Components/Intro/Intro'
import Judge from '../../Components/Judge/Judge'
import Faqs from '../../Components/Faqs/Faqs'
import Timeline from '../../Components/Timeline/Timeline'
import Prices from '../../Components/Prizes/Prices'
import Partner from '../../Components/Partner/Partner'
import Privacy from '../../Components/Privacy/Privacy'
import Footer from '../../Components/Footer/Footer'
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
        order="lg:w-[35rem] lg:h-[40rem]"
        />
        <Intro
        display=""
        txt1="Rules and"
        txt2="Guidlines"
        img1="wom.png"
        arrowDisplay="hidden"
        order='introLeft2 lg:order-2'
        intro2="introRight2"
        />
        <Judge/>
        <Faqs/>
        <Timeline/>
        <Prices/>
        <Partner/>
        <Privacy/>
        <Footer/>
        
    </div>
  )
}

export default HomePage
