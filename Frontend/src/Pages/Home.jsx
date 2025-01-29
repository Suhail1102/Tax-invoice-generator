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
    {/* {!formData ? (
        <TaxInvoiceForm onSubmit={handleFormSubmit} />
      ) : (
        <TaxInvoiceOutput formData={formData} />
      )} */}

      <div className='container flex mx-auto  justify-around box-border '>
        {/* right column */}
      <div className=' flex-1 '>
      <h2 className='text-4xl my-4 px-7'>Get Paid Faster & Create Free Tax Invoices Online</h2>
      <div className='text-xl px-10 pl-7 font-extralight '>
      As a seller (or vendor) trading taxable goods & services, locally and internationally getting paid on time & managing your taxes goes hand in hand. At FreeInvoiceBuilder, we have specifically contrived templates that match the tax requirements on sales and services of a wide range of countries. Use our tax invoice generator to create and send invoices with perfect tax details, formatting, and impressive design. <br/><br/>

Our free online tax generator is a ready-to-use software to conveniently generate tax invoices on mobile and desktop. All invoices and details are automatically saved in your account for easy reference, repeat invoicing, and accounting. So you can save your time processing tax invoices and invest more in servicing, and selling.
      </div>

      </div>

      {/* left column */}
      <div className='flex-1'>
      <h2 className='text-4xl my-4 px-7 text-center'>Tax Invoice Requirements</h2>
      <ul className='text-xl'>
        <li className='list-disc'> 
         Seller/Company’s logo</li>
        <li>Seller/Supplier/Vendor’s information</li>
        <li> Seller’s address, contact, & tax/GST registration no.</li>
        <li>Client’s/Buyer’s/Receiver’s Information</li>
        <li>Buyer’s name, address, & contact details</li>
        <li> Issue date & Due date of Tax invoice</li>
        <li>Tax invoice number</li>
        <li>Details of the products & services</li>
      </ul>
      </div>
      </div>
   <Footer/>
    </>
  )
}
