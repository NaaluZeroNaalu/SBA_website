import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.js"
import "bootstrap/dist/js/bootstrap.bundle.js"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Header from './pages/header/header.jsx'
import Footer from './pages/footer/footer.jsx'
import Sidecontent from './pages/sidecontact/side.jsx'




createRoot(document.getElementById('root')).render(
  
    <>
    
    <Header />
    <App />
    <Sidecontent />
    <Footer />

    </>
  
)

