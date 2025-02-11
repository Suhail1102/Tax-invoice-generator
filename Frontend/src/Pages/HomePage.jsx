import React from 'react'
import{useState , useEffect } from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Stepper from '../components/Stepper'
import About from './About'
import Features from './Features'
import Pricing from './Pricing'
import Contact from './Contact'
import { Element } from 'react-scroll'

export default function HomePage() {

    const [formData, setFormData] = useState(null);

  const handleFormSubmit = (data) => {
    setFormData(data); 
  }// Pass data from form submission


  const [darkMode, setDarkMode] = useState( () => localStorage.getItem("darkMode") === "true");

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <>
    
    <Header toggleDarkMode={toggleDarkMode} />
    <Element name='home' id='home'>
    <Hero/>
     </Element>

 {/* <Stepper/> */}

      <Element name='about' id='about' >
        <About/>
      </Element>

      <Element  name='features' id='features' >
        <Features/>
      </Element>
      <Element name='pricing' id='pricing'>
        <Pricing/>
      </Element>
      <Element name='contact' id='contact'>
        <Contact/>
      </Element>
     

   <Footer/>
    </>
  )
}
