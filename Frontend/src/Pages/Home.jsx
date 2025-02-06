import React from 'react'
import{useState , useEffect } from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import TaxInvoiceForm from '../components/TaxForm'
import Footer from '../components/Footer'
import payment from '../assets/payment.jpg'
import inventory from '../assets/inventory.jpg'
import order from '../assets/order.jpg'
import invoice from '../assets/invoice.jpg'
import img2 from '../assets/img2.jpg'
import { motion } from "framer-motion";
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import InventoryIcon from '@mui/icons-material/Inventory';
import CreditCardIcon from '@mui/icons-material/CreditCard'
import PercentIcon from '@mui/icons-material/Percent';
import DescriptionIcon from '@mui/icons-material/Description';
import SummarizeIcon from '@mui/icons-material/Summarize';

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
      {/* ribbon */}
      <section className='md:h-24 h-full bg-purple-100 box-border flex justify-center items-center my-5' > 
        <div className='flex items-center md:gap-10 gap-3 md:text-lg  text-sm flex-wrap py-4 justify-around'>
         <span className='cursor-pointer'><FeaturedPlayListIcon className='text-purple-700 '/> Primary Features</span>
         <span className='cursor-pointer'><CreditCardIcon className='text-purple-700 '/> Payment Tracking</span>
         <span className='cursor-pointer'><InventoryIcon className='text-purple-700 '/> Inventory Management</span>
         <span className='cursor-pointer'><PercentIcon className='text-purple-700 '/> Taxes & Discounts</span>
         <span className='cursor-pointer'><DescriptionIcon className='text-purple-700 '/> Order Management & Estimates</span>
        
         <span className='cursor-pointer'><SummarizeIcon className='text-purple-700 '/> Reports</span>
        </div>
      </section>
      <section className='container box-border ' >
        <div className='md:w-[95vw] h-full  flex  justify-evenly items-center my-10 flex-wrap '>
          <motion.img src={invoice} alt="" className='w-[18rem] h-[18rem]'  initial={{ opacity: 0, x:-50 }} // Start hidden & below
        whileInView={{ opacity: 1, x:0 }} // Animate when visible
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.2 }} />
        <div className='mx-5 md:mx-0'>
          <h3 className='md:text-xl text-lg text-purple-600'>Primary Features</h3>
          <h2 className='md:text-2xl text-xl '>Sale, Purchase</h2>
          <p className='md:w-[40rem] text-base md:text-left text-center'>Professionally Manage all your primary business functions like Sales/Invoicing, Purchases. Highly customizable business-owner friendly application that works seamlessly on mobile, web and cloud. All Ledgers are created automatically.</p>
        </div>
        </div>
        <div className='w-[95vw] h-full  flex  justify-evenly items-center my-10 flex-wrap'>
          
        <div>
          <h3 className='text-2xl text-purple-600 text-right'>Payment Tracking</h3>
         
          <p className='w-[40rem] text-base text-right'>Can record all sorts of complex payments such as partial payments, lumpsum payments, Advance payments, sales on Credit or Immediate payments. Track these invoice-wise or Customer wise. Keep your Cash/Bank balances up-to-date & Track Payables and receivables with ease.</p>
        </div>
        <motion.img src={payment} alt="" className='w-[18rem] h-[18rem]'  initial={{ opacity: 0, x:50 }} // Start hidden & below
        whileInView={{ opacity: 1, x:0 }} // Animate when visible
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.2 }} />
        </div>
        <div className='w-[95vw] h-full  flex  justify-evenly items-center my-5 flex-wrap '>
          <motion.img src={inventory} alt="" className='w-[18rem] h-[18rem]'  initial={{ opacity: 0, x:-50 }} // Start hidden & below
        whileInView={{ opacity: 1, x:0 }} // Animate when visible
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.2 }} />
        <div>
          <h3 className='text-2xl text-purple-600'>Inventory Management</h3>
          <p className='w-[40rem] text-base text-left'>Supports both FIFO and Average Cost Inventory methods. Reporting of product-wise Inventory Valuation and COGS(Cost of Goods Sold) values. Automatic inventory updates on Sale & Purchases Also features inventory reconciliation and Automatic Low Stock Alerts</p>
        </div>
        </div>
        <div className='w-[95vw] h-full  flex  justify-evenly items-center my-5 flex-wrap'>
        <div>
          <h3 className='text-xl text-purple-600 text-right'>Order Management & Estimates</h3>
          <p className='w-[40rem] text-base text-right'>Manage complete lifecycle of your Sales & Purchase processes. You can generate Estimates / Quotations and also keep track of Sales Orders received and Purchase Orders placed .Convert Orders and Estimates to invoices when they are confirmed. Keep track of fulfilled and pending orders.</p>
        </div>
          <motion.img src={order} alt="" className='w-[18rem] h-[18rem]'  initial={{ opacity: 0, x:50 }} // Start hidden & below
        whileInView={{ opacity: 1, x:0 }} // Animate when visible
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.2 }} />
        
        </div>
        <div className='w-[95vw] h-full  flex  justify-evenly items-center my-5 flex-wrap '>
          <motion.img src={img2} alt="" className='w-[18rem] h-[18rem]'  initial={{ opacity: 0, x:-50 }} // Start hidden & below
        whileInView={{ opacity: 1, x:0 }} // Animate when visible
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.2 }} />
        <div>
          <h3 className='text-2xl text-purple-600'>Taxes and Discounts</h3>
          <p className='w-[40rem] text-base text-left'>Standard / Customized taxes and discounts once set, as per company’s laws & benefits gets applied automatically.</p>
        </div>
        </div>
        {/* <div className='w-[95vw] h-full  flex  justify-evenly items-center my-5 flex-wrap '>
        <div>
          <h3 className='text-2xl text-purple-600 text-right'>Reports</h3>
          <p className='w-[40rem] text-base text-right'>Dynamic Reports to view your sales, purchase, profit, and loss. Simplified Charts and Account statements for customers and vendors. Client vs Product Reports.</p>
        </div>
          <motion.img src={img2} alt="" className='w-[18rem] h-[18rem]'  initial={{ opacity: 0, x:50 }} // Start hidden & below
        whileInView={{ opacity: 1, x:0 }} // Animate when visible
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.2 }} />
        
        </div> */}
      </section>


   <Footer/>
    </>
  )
}
