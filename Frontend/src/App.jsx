import { useState , useEffect } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router";
import Home from './Pages/Home';
import About from './Pages/About'
import LoginPage from './Pages/LoginPage';
import { useContext } from "react";
import SignupPage from './Pages/SignupPage';
import InvoicePage from './Pages/InvoicePage';
import { Navigate } from 'react-router-dom';
import PrivateRoute from './Authentication/PrivateRoute';
import { AuthContext } from './Authentication/AuthContext';
import Features from './Pages/Features';
import Pricing from './Pages/Pricing';
import Contact from './Pages/Contact';

function App() {
  const { user }= useContext(AuthContext);

  
  return (
    <>
    
    <BrowserRouter>
    
    <div className='dark:bg-zinc-900 dark:text-white transition-all'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/login' element={user ? <Navigate to="/"/> : <LoginPage />}/>
        <Route path='/signup' element={<SignupPage/>}/>
        <Route path='/invoice/form' element={ <PrivateRoute> <InvoicePage/></PrivateRoute>}/>
        <Route path='/features' element={<Features/>}/>
        <Route path='/pricing' element={<Pricing/>}/>
        <Route path='/contact' element={<Contact/>}/>
    
      {/* <TaxInvoiceOutput  />   */}
   </Routes>
  </div>
  </BrowserRouter>

    </>
  )
}

export default App
