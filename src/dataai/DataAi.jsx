import ai from "./images/home.gif"
import "./styles/dataai.css"
import pic from "./images/manufacturing.jpg"
import points from "./images/aipoints.svg"
import ai1 from "./images/ai1.svg"
import bi from "./images/bi.svg"
import datamanagement from "./images/datamanagement.svg"
import ita from "./images/itautomation.svg"
import gai from "./images/generativeai.svg"
import wa from "./images/watsonassistant.svg"
import wd from "./images/watsondiscovery.svg"
import instana from "./images/instana.svg"
import cognos from "./images/cognos.svg"
import turbonomic from "./images/turbonomic.svg"
import { FaLongArrowAltRight } from "react-icons/fa";



import CertificationsWatson from "./certifications"
import Displayvideo from "./video"
import Aboutwatson from "./aboutwatson"



function DataAi(){

   
    return(
        <>
        <Displayvideo />
        <br /><br />
        <div className="dataaisection1 row container">
            <div className="col-lg-6" >
            <p > For data driven enterprises looking to create exceptional customer and employee experience,</p>
           <br />
           <p >SBA provides <span style={{color:"red"}} className="font-semibold">modular and sustainable AI solutions</span> that are</p>
            </div>
            <div className="col-lg-6 " >
                <img src={ai1} alt=""  style={{ width:"300px",marginLeft:"400px" }} className="img-fluid" />
            </div>
        </div>

        <br /><br />

        <div className="container">
        <div className="dataaisection2 row">
    {[
        "Easy to adopt",
        "Trusted, governed, secure and ethical",
        "Transformative",
        "Focused on augmenting human intelligence, not replace it",
        "Trained on your quality enterprise data",
        "By helping you gain a truly competitive edge over the market"
    ].map((text, index) => (
        <div className="col-lg-4 col-md-6 mb-4" key={index}>
            <div className="mt-5 ms-4" style={{ display: 'flex', alignItems: 'center' }}>
                <img src={points} style={{ height: "50px", width: "50px", marginRight: "10px" }} alt="" />
                <span style={{ fontSize: "22px",fontWeight:"bold" }}>{text}</span>
            </div>
        </div>
    ))}
</div>
        </div>



        <br /><br />
        <h1 style={{textAlign:"center",fontFamily:"league spartan",fontWeight:"bold",fontSize:"60px"}} id="sands">Solutions & Services</h1>
        <br /><br />
        <div className="dataaisection3 row" >
            
            <div className="col-lg-6 d-flex justify-content-center align-items-center">
                <img src={datamanagement} alt="" className="img-fluid" style={{ width:"600px", height: 'auto' }} />
            </div>
            
            <br />
            <div className="col-lg-6">
                <h1 >Data Orchestration and Management</h1>
                <br />
                <ul style={{fontSize:"21px",fontFamily:"roboto"}}>
                    <li>Database Consulting and Management</li>
                    <li>Data Fabric Architecture for Self-Service</li>
                    <li>Data Warehousing, Data Lakes, and Lakehouses</li>
                    <li>Partner Ecosystem Services - Migration, Administration, <br /> Performance Tuning, Security, and Compliance Services</li>
                </ul>
            </div>
        </div>

        <div className="dataaisection4 row" >
            <div className="col-lg-6 container" id="content">
                <br />
                <h1 style={{marginLeft:"70px"}}>Business Intelligence & Analytics</h1>
                <ul style={{fontSize:"21px",marginLeft:"70px",fontFamily:"roboto"}}>
                    <li>Cognos Analytics for enterprise BI, reporting, and augmented analytics with inbuilt AI</li>
                    <li>Integration with SAP Analytics Cloud, other BI tools, data sources, and applications</li>
                    <li>Custom report development and dashboard creation</li>
                    <li>Data modeling and ETL/ELT services</li>
                    <li>Training and enablement services</li>
                </ul>
            </div>
            <div className="col-lg-6 d-flex justify-content-center align-items-center">
                <img src={bi} className="img-fluid" alt="" style={{ width:"600px", height: 'auto' }} />
            </div>
        </div>
<br />
        <div className="dataaisection5 row">
        <div className="col-lg-6 d-flex justify-content-center align-items-center container">
                <img src={ita} alt="" className="img-fluid" style={{ width:"600px", height: 'auto' }} />
            </div>
            <div className="col-lg-6">
                <br />
                <h1 >Intelligent IT Automation</h1>
                <ul style={{fontSize:"21px",fontFamily:"roboto"}}>
                    <li>Enterprise Observability for application performance and Infrastructure quality management</li>
                    <li>AI powered Cloud and Finops</li>
                    <li>Incident management & sustainable IT</li>
                    <li>ML services and ChatOps for streamlined IT service management</li>
                </ul>
            </div>
        </div>

        <br />
        <div className="dataaisection6 row" >
            <div className="col-lg-6">
                <h1  style={{marginLeft:"70px"}}>Enterprise ML and Generative AI</h1>
                <ul  style={{fontSize:"21px",fontFamily:"roboto",marginLeft:"70px"}}>
                    <li>Customer care and call center modernizationt</li>
                    <li>Retrieval Augmented generation for knowledge self-service</li>
                    <li>Conversational AI and virtual assistant development</li>
                    <li>Development and deployment of ML models</li>
                    <li>Responsible AI and model governance consulting</li>
                    <li>Integration with enterprise systems and applications</li>
                    <li>Data preparation and feature engineering services
                    </li>
                </ul>
            </div>
            <div className="col-lg-6 d-flex justify-content-center align-items-center">
                <img src={gai} className="img-fluid" alt="" style={{ width:"600px", height: 'auto' }} />
            </div>
        </div>
        <hr />
<br /><br />
<h3 style={{textAlign:"center",fontFamily:"league spartan",fontWeight:"bold",fontSize:"50px"}}>Industries we serve</h3>

<div className="dataaisection11 ms-3 me -3">
    <div className="" id="manufacturing">
        <p>
            <span>Manufacturing</span>
            <br /><br /><br />
           <span>
            AI forecasts equipment failures, minimizing 
            downtime by 43%, automates supply chains, and enhances
             quality control by identifying defects instantly.
           </span>
        </p>
    </div>
    <div className="" id="bfsi">
        <p >
            <span>BFSI</span>
            <br /><br /><br />
          
          
          AI streamlines 90% of customer inquiries, enhancing 
           efficiency and cutting costs while detecting fraud in real-time.
        
          
        </p>
    </div>
    <div className="" id="callcenter">
        <p>
            <span>Healthcare</span>
            <br /><br /><br />
            
            AI speeds up drug discovery and reduces research expenses, 
            improves diagnostics through image analysis, 
            and supports patient care with virtual assistants.
          
        </p>
    </div>
    <div className="" id="media">
        <p >
            <span>Media</span>
            <br /><br /><br />
           
            AI enhances content creation by auto-generating articles, 
            video summaries, and personalized recommendations. 
            It improves media workflows 
            by automating captioning and metadata tagging.
            
        </p>
    </div>
    <div className="" id="it">
        <p>
            <span>IT/ITES</span>
            <br /><br /><br />
            AI decreases IT support tickets by 70%, 
            automates monitoring and resolution,
             and generates 60% of code, accelerating development.
        </p>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <div className="title">
            <div style={{textAlign:"center"}}>
                <h3 style={{color:"white"}}>IT/ITES</h3>
            </div>
            <div style={{textAlign:"right"}}>
                  <span style={{fontWeight:"bold"}}><FaLongArrowAltRight /></span>
            </div>
        </div>
    </div>
</div>
<hr />
<br /><br />
<h1 style={{textAlign:"center",fontFamily:"league spartan",fontWeight:"bold",fontSize:"50px"}}>Our Proficiency and Certifications</h1>

<CertificationsWatson />
<br />
<hr />
<br /><br />
<h3 style={{textAlign:"center",fontFamily:"league spartan",fontWeight:"bold",fontSize:"50px"}}>Powered by watsonX</h3>
<br /><br />

      <Aboutwatson /> 

        <br /><br />
        <div className="dataaisection10 ms-3 me-3">
            <div className="">
            <div id="watsonxai">
                <br /><br /><br /><br /><br />
                <a href="#"><h2>watson<span style={{color:"#3f649a"}}>x</span>.ai</h2></a>
                </div>
            </div>
            <div className="">

            <div id="watsaonxdata">
                <br /><br /><br /><br /><br />
                <a href="#"><h2>watson<span style={{color:"#3f649a"}}>x</span>.data</h2></a>
                </div>
            </div>
            <div className="">

            <div id="watsaonxgovernance">
                <br /><br /><br /><br /><br />
                <a href="#"><h2>watson<span style={{color:"#3f649a"}}>x</span>.governance</h2></a>
            </div>
            </div>
            <div className="">

            <div id="redhat">
                <br /><br /><br /><br /><br />
                <h2>Redhat</h2>
                <a href="#"><h2>Redhat</h2></a>
            </div>
            </div>
        </div> 
        <br /><br />
        </>
    )
}

export default DataAi