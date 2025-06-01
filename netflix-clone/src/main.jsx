import React from 'react'
import ReactDom from 'react-dom/client'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Middle from './Middle.jsx'
import End from './End.jsx'
import Footer from './Footer.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  
    <>
    <App />
    <Middle />
    <End/>
    <Footer/>
    
    </>
  
)
