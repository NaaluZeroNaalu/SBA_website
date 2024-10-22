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
import Careers from './pages/carrers/careers'
import Blogone from './pages/blogs/blogone'
import Blogtwo from './pages/blogs/blogtwo'
import Blogthree from './pages/blogs/blogthree'
import Blogfour from './pages/blogs/blogfour'
import Blogfive from './pages/blogs/blogfive'
import Blogsix from './pages/blogs/blogsix'
import Casestudiestwo from './pages/casestudies/casestudeistwo'
import Casestudiesthree from './pages/casestudies/casestudiesthree'
import Casestudiesfour from './pages/casestudies/casestudeisfour'
import Casestudiesfive from './pages/casestudies/casestudiesfive'
import Casestudiessix from './pages/casestudies/casestudiessix'
import Casestudiesone from './pages/casestudies/casestudiesone'



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
    <Route path="/Careers" element={<Careers />} />
    <Route path="/Blogs/Here's-why-A-Generative-Model-Alone-Is-Never-Good-Enough" element={<Blogone />} />
    <Route path="/Blogs/How-to-pick-the-right-Generative-AI-Studio-for-your-Enterprise?" element={<Blogtwo />} />
    <Route path="/Blogs/How-can-Large-Language-Models-grow-your-productivity-by-5X" element={<Blogthree />} />
    <Route path="/Blogs/Truths-About-Generative-AI-Every-IT-Leader-Must-Know" element={<Blogfour />} />
    <Route path="/Blogs/Software-defined-approach–Defining-the-Future" element={<Blogfive />} />
    <Route path="/Blogs/Cyber-Security-Drivers-of-the-BFSI-Sector-in-India" element={<Blogsix />} />
    <Route path="/Casestudies/Leading-Healthcare-Services-Provider-Trusts-SBA-Info-for-their-Security-and-Compliance-Requirements" element={<Casestudiesone />} />
    <Route path="/Casestudies/A-Leading-Non-Banking-Financial-Company-Trusts-SBA-Info-to-Protect-and Manage-their-End-Point" element={<Casestudiestwo />} />
    <Route path="/Casestudies/Leading-Multinational-Infrastructure-Organization-Trusts-SBA-Info-for-Fast-and-Reliable-Data-Recovery&Backup" element={<Casestudiesthree />} />
    <Route path="/Casestudies/Securing-Medical-Data-and-Improving-Incident-Response:-SBA-Helps-Leading-Health-tech-company-implement-IBM-Qradar" element={<Casestudiesfour />} />
    <Route path="/Casestudies/Efficient-Data-Management-and-Enhanced-Security:Leading-TN-Bank's-Success-with-SBA&IBM-FS7300" element={<Casestudiesfive />} />
    <Route path="/Casestudies/Boosting-Performance-and-Security:Chennai-based-Bank's-Successful-Migration-to-AIX-with-IBM-Power-9" element={<Casestudiessix />} />
   </Routes>
   </BrowserRouter>
    </>
  )
}

export default App
