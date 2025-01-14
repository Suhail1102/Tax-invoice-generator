import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TaxInvoiceForm from './components/TaxForm'
import TaxInvoiceOutput from "./components/TaxInvoiceOutput";

function App() {
  const [formData, setFormData] = useState(null);

  const handleFormSubmit = (data) => {
    setFormData(data); 
  }// Pass data from form submission

  return (
    <>
    {!formData ? (
        <TaxInvoiceForm onSubmit={handleFormSubmit} />
      ) : (
        <TaxInvoiceOutput formData={formData} />
      )}
      {/* <TaxInvoiceOutput  />   */}
    </>
  )
}

export default App
