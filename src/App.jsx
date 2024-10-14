import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './header'
import Home from './Home/Home'
import Blog from './blog/blog'
import DataAi from './dataai/DataAi'
import Contactus from './contact-us/contactus'
import Casestudies from './case-studies/casestudies'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Industries from './industries/industries'
import Resources from './resources/resources'
import Openhybridcloud from './openhybridcloud/openhybridcloud'
import Aboutus from './aboutus/aboutus'
import Ourindustry from './ourindustry/ourindustry'
import SecurityandSus from './securityandsutainability/securityandsustainavility'

function App() {
  
  return (
    <>
     <BrowserRouter>
     <Routes>

      <Route path='/' element={<Home />} />
      <Route path='/Blog' element={<Blog />} />
      <Route path='/Contact-us' element={<Contactus />} />
      <Route path='/Casestudies' element={<Casestudies />} />
      <Route path='/Data-AI' element={<DataAi />} />
      <Route path='/Industries' element={<Industries />} />
      <Route path='/Resources' element={<Resources />} />
      <Route path='/Open-Hybrid-Cloud' element={<Openhybridcloud />} />
      <Route path='/About-us' element={<Aboutus />} />
      <Route path='/Our-industry' element={<Ourindustry />} />
      <Route path='/Secure-and-sustainability' element={<SecurityandSus />} />
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
