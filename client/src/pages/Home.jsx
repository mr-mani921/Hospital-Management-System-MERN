import React from 'react'
import Hero from '../components/Hero.jsx'
import Biography from '../components/Biography.jsx'
import Departments from '../components/Departments.jsx'
import MessageForm from '../components/MessageForm.jsx'
import HeroImage from '../../public/hero.png'
import AboutImage from '../../public/about.png'

const Home = () => {
  return (
    <div>
      <Hero imageUrl={HeroImage} title={"Welcome to Mani Care Medical Institute | Your Trusted Health Care Provider"}/>
      <Biography imageUrl={AboutImage}/>
      <Departments/>
      <MessageForm/>
    </div>
  )
}

export default Home
