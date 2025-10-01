import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import About from '../Components/About'
import Features from '../Components/Features'
import Story from '../Components/Story'
import Contact from '../Components/Contact'
import Footer from '../Components/Footer'

const App = () => {
  return (
    <div className='w-full h-full overflow-x-hidden'>
      <Navbar />
      <Hero/>
      <About/>
      <Features/>
      <Story/>
      <Contact/>
      <Footer/>
      </div>
  )
}

export default App