import { useState , useEffect } from 'react'
import './App.css'
import TaxInvoiceForm from './components/TaxForm'
import TaxInvoiceOutput from "./components/TaxInvoiceOutput";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from './Pages/Home';
import About from './Pages/About'
import LoginSignup from './Pages/LoginSignup';

function App() {
  return (
    <>
    <BrowserRouter>
    <div className='dark:bg-zinc-900 dark:text-white transition-all'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
   
 
    
      {/* <TaxInvoiceOutput  />   */}
   {/* <Qrcode/> */}
   </Routes>
  </div>
  </BrowserRouter>
    </>
  )
}

export default App
