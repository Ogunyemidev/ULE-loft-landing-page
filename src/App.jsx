import { useState } from 'react'
import './App.css'
import Navbar from './assets/Components/Navbar'
import HeroSection from './assets/Components/Heroe-one'
import AboutUsSection from './assets/Components/AboutUsSection'
import RecommendedApartments from './assets/Components/RecommendedApartmnt'
import Testimonials from './assets/Components/Testimonials'
import FAQAccordion from './assets/Components/FaqsAccordion'
import Footer from './assets/Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <HeroSection/>
    <AboutUsSection/>
    <RecommendedApartments/>
    <Testimonials />
    <FAQAccordion />
    <Footer />
    
    </>
  )
}

export default App
