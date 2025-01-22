import { useState } from 'react'
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

  return (
    <>
    
   <Header/>
   <Hero/>
    {!formData ? (
        <TaxInvoiceForm onSubmit={handleFormSubmit} />
      ) : (
        <TaxInvoiceOutput formData={formData} />
      )}
      {/* <TaxInvoiceOutput  />   */}
   {/* <Qrcode/> */}
  <br /><br /><br /><br /><br /><br />b
    </>
  )
}

export default App
