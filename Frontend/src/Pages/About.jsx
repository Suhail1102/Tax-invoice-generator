import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import img3 from '../assets/img3.jpg'

function About() {
  return (
    <>
    <Header />
    <section className="text-gray-600 body-font dark:text-white dark:bg-black">
  <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
    <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src={img3}/>
    <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Simplifying Tax Invoicing for Your Business</h1>
      <p className="mb-8 leading-relaxed">At tax invoice, we provide a user-friendly tax invoice generator designed to help businesses create professional, GST-compliant invoices in seconds. Our goal is to streamline your billing process, ensuring accuracy, compliance, and efficiency. Whether you're a freelancer, small business owner, or enterprise, our tool makes invoicing effortless and hassle-free. 🚀

Let me know if you want any modifications! 😊</p>
      
    
  
    </div>
  </div>
</section>
<Footer/>
    </>
  )
}

export default About