import { useState , useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TaxInvoiceForm from './components/TaxForm'
import TaxInvoiceOutput from "./components/TaxInvoiceOutput";
// import Qrcode from './components/Qrcode'
import Header from './components/Header'
import Hero from './components/Hero'

function App() {
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
    <div className='dark:bg-zinc-900 dark:text-white'>
   <Header toggleDarkMode={toggleDarkMode} />
   <Hero/>
    {!formData ? (
        <TaxInvoiceForm onSubmit={handleFormSubmit} />
      ) : (
        <TaxInvoiceOutput formData={formData} />
      )}
      {/* <TaxInvoiceOutput  />   */}
   {/* <Qrcode/> */}
  <br /><br /><br /><br /><br /><br />
  </div>
    </>
  )
}

export default App
