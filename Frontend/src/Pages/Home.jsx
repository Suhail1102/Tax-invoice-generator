import React from 'react'
import{useState , useEffect } from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import TaxInvoiceForm from '../components/TaxForm'
import Footer from '../components/Footer'
export default function Home() {

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
    <Hero/>
    {!formData ? (
        <TaxInvoiceForm onSubmit={handleFormSubmit} />
      ) : (
        <TaxInvoiceOutput formData={formData} />
      )}
   <Footer/>
    </>
  )
}
