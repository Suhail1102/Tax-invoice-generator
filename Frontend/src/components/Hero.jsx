import {React, useEffect, useState} from 'react'
import { NavLink} from 'react-router-dom'
import img1 from '../assets/img1.jpg'
import { motion } from "framer-motion";
import { useContext } from "react";
import { AuthContext } from "../Authentication/AuthContext";
import { Snackbar } from '@mui/material';

function Hero() {
  const { user} = useContext(AuthContext);
  const [alert, setAlert]= useState(false);

  const handleNavigation = (e) => {
    if (!user) {
      e.preventDefault(); // Stop immediate navigation
      handleAlert();
    }
  };

  const handleAlert=()=>{
    setAlert(true);
  
    console.log("alert is true")
     setTimeout(() => {
      setAlert(false);
      console.log("alert is false")
      window.location.href = "/invoice/form";
     }, 2000);
  }
  return (
    <>
   <Snackbar
  anchorOrigin={{ vertical: "top", horizontal: "center" }}
  open={alert}
  message="!You have to login"
  sx={{
    "& .MuiSnackbarContent-root": {
      backgroundColor: "white",
      border:"none", // Change background color
      color: "red", // Change text color
      fontSize: "16px", // Adjust font size if needed
    },
  }}
/>
    <section className=" dark:bg-zinc-900 dark:text-white text-gray-600 body-font transition-all">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <motion.img className="object-cover object-center rounded z-[-1]" alt="hero" src={img1}  animate={{
        y: [0, -20, 0], // Moves up (-20px) and back to original position
      }}
      transition={{
        duration: 2, 
        repeat: Infinity, 
        repeatType: "mirror", 
        ease: "easeInOut", 
      }}/>
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 dark:text-white">Smart, Quick, and Reliable 
        <br className="hidden lg:inline-block"/>Tax Invoice
      </h1>
      <p className="mb-8 leading-relaxed">Invoice Manager is a complete solution for managing Invoice and Billing operations. The invoice manager helps you right from raising an invoice to recording payment for the invoice and then finally providing a receipt all from one app.</p>
      <div className="flex justify-center">
      <NavLink to="/invoice/form" > <button className="inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg" onClick={handleNavigation}>Create Invoice</button></NavLink> 
      </div>
    </div>
  </div>
  <div className='container flex mx-auto  justify-around box-border flex-wrap '>
        {/* left column */}
      <div className=' flex-1 '>
      <h2 className='text-4xl my-4 px-7'>Get Paid Faster & Create Free Tax Invoices Online</h2>
      <div className='text-xl px-10 pl-7 font-light '>
      As a seller (or vendor) trading taxable goods & services, locally and internationally getting paid on time & managing your taxes goes hand in hand. At FreeInvoiceBuilder, we have specifically contrived templates that match the tax requirements on sales and services of a wide range of countries. Use our tax invoice generator to create and send invoices with perfect tax details, formatting, and impressive design. <br/><br/>

Our free online tax generator is a ready-to-use software to conveniently generate tax invoices on mobile and desktop. All invoices and details are automatically saved in your account for easy reference, repeat invoicing, and accounting. So you can save your time processing tax invoices and invest more in servicing, and selling.
      </div>

      </div>

      {/* right column */}
      <div className='flex-1' style={{fontFamily:"Roboto"}}>
      <h2 className='text-4xl my-4 px-7 text-center'>Tax Invoice Requirements</h2>
      <ul className='text-xl home-list '>
        <li className='list-disc list'> 
         Seller/Company’s logo</li>
        <li className='list-disc list '>Seller/Supplier/Vendor’s information</li>
        <li className='list-disc list'> Seller’s address, contact, & tax/GST registration no.</li>
        <li className='list-disc list'>Client’s/Buyer’s/Receiver’s Information</li>
        <li className='list-disc list'>Buyer’s name, address, & contact details</li>
        <li className='list-disc list'> Issue date & Due date of Tax invoice</li>
        <li className='list-disc list'>Tax invoice number</li>
        <li className='list-disc list'>Details of the products & services</li>
      </ul>
      </div>
      </div>
</section>
    </>
  )
}

export default Hero