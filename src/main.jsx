import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ToastContainer } from 'react-toastify'
// import 'react-toastify/dist/React-Toastify.css'

createRoot(document.getElementById('root')).render(
  
   <div>
     <App />
     <ToastContainer/>
   </div>
  
)
