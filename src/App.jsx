import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Header from './pages/header/header'
import Securityandsus from './pages/securityandsutainability/securityandsus'
import Openhybridcloud from './pages/OpenHybridCloud/Cloud'
import Industries from './pages/industries/industries'
import Dataai from './pages/dataai/dataai'
import Homepage from './pages/home/Home'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Itautomation from './pages/itautomation/itautomation'
import Casestudies from './pages/casestudies/casestudies'
import Blogs from './pages/blogs/blogs'
import Solutions from './pages/solutions/solutions'
import Infrastructureandapplication from './pages/infrastuctureandapplication/infrastructure'
import Resources from './pages/resources/resources'
import Aboutus from './pages/aboutus/aboutus'
import Cyberresiliency from './pages/cyberresilency/cyberresilency'



function App() {
  
  return (
    <>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/Data-AI" element={<Dataai />} />
    <Route path="/Open-Hybrid-Cloud" element={<Openhybridcloud />} />
    <Route path="/Industries" element={<Industries />} />
    <Route path="/Security-and-sustainability" element={<Securityandsus />} />
    <Route path="/Itautomation" element={<Itautomation />} />
    <Route path="/Casestudies" element={<Casestudies />} />
    <Route path="/Blogs" element={<Blogs />} />
    <Route path="/Solutions" element={<Solutions />} />
    <Route path="/Infrastructure-and-application-modernization" element={<Infrastructureandapplication/>} />
    <Route path="/Resources" element={<Resources />} />
    <Route path="/Aboutus" element={<Aboutus />} />
    <Route path="/Cyber-Resiliency" element={<Cyberresiliency />} />
   </Routes>
   </BrowserRouter>
    </>
  )
}

export default App
