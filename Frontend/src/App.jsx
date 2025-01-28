import { useState , useEffect } from 'react'
import './App.css'
import TaxInvoiceForm from './components/TaxForm'
import TaxInvoiceOutput from "./components/TaxInvoiceOutput";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from './Pages/Home';
import About from './Pages/About'
import LoginPage from './Pages/LoginPage';
import SignupPage from './Pages/SignupPage';

function App() {
  return (
    <>
    <BrowserRouter>
    
    <div className='dark:bg-zinc-900 dark:text-white transition-all'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/signup' element={<SignupPage/>}/>
   
 
    
      {/* <TaxInvoiceOutput  />   */}
   {/* <Qrcode/> */}
   </Routes>
  </div>
  </BrowserRouter>
    </>
  )
}

export default App
