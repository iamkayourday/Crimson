import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import OurWine from './Components/OurWine'
import FoodPairing from './Components/FoodPairing'
import Heritage from './Components/Heritage'
import Footer from './Components/Footer'
import Contact from './Components/Contact'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <OurWine />
      <FoodPairing />
      <Heritage />
      <Contact />
      <Footer />
    </div>
  )
}

export default App