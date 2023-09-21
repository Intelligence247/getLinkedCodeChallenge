import React from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import Hero from '../../Components/HeroSection/Hero'
import "./HomePage.css"
import Intro from '../../Components/Intro/Intro'
const HomePage = () => {
  return (
    <div>
        <NavBar/>
        <Hero/>
        <Intro/>
    </div>
  )
}

export default HomePage
