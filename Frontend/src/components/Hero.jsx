import React from 'react'
import heroimg from '../assets/heroimg.png'
import { Link } from 'react-router'

function Hero() {
  return (
    <>
    <section className=" dark:bg-zinc-900 dark:text-white text-gray-600 body-font transition-all">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img className="object-cover object-center rounded" alt="hero" src={heroimg}/>
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 dark:text-white">Smart, Quick, and Reliable 
        <br className="hidden lg:inline-block"/>Tax Invoice
      </h1>
      <p className="mb-8 leading-relaxed">Say goodbye to manual invoicing. Our tool lets you create GST-compliant tax invoices in seconds—easy, efficient, and accurate.</p>
      <div className="flex justify-center">
      <Link to="/invoice/form" > <button className="inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg">Create Invoice</button></Link> 
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default Hero