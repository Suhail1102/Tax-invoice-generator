import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from "react-router";
import { AuthProvider } from './Authentication/AuthContext';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <AuthProvider>
    <App />
    </AuthProvider>
  // </StrictMode>,
)
