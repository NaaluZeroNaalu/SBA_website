import ai from "./videos/dataai.mp4"
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
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function DataAi(){

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    const certifications = [
        { title: "watsonx Assistant", level: "Practitioner Advanced", category: "IBM Data and AI" },
        { title: "watsonx.ai", level: "Technical Sales Advanced", category: "IBM Data and AI" },
        { title: "watsonx.governance", level: "Technical Sales Intermediate", category: "IBM Data and AI" },
        { title: "Generative AI for Code with watsonx Code Assistant", level: "Technical Sales Intermediate", category: "IBM Data and AI" },
        { title: "OEM Databases", level: "Sales Foundation", category: "IBM Data and AI" }
    ];
    return(
        <>
        <div className="video-container">
            <video  autoPlay loop muted>
                <source src={ai} type='video/mp4' />
            </video>

            <div className="overlbuisnessay-text">
                <h1>hello</h1>
            </div>
        </div>
        <br /><br />
        <div className="dataaisection1 row">
            <div className="col-lg-6" >
            <p > For data driven enterprises looking to create exceptional customer and employee experience,</p>
           <br />
           <p >SBA provides <span style={{color:"red"}} className="font-semibold">modular and sustainable AI solutions</span> that are</p>
            </div>
            <div className="col-lg-6 d-flex justify-content-center align-items-center">
                <img src={ai1} alt="" style={{ maxWidth: '100%', height: 'auto' }} className="img-fluid" />
            </div>
        </div>

        <br /><br />

        <div className="container">
        <div className="dataaisection2 row">
    {[
        "Easy to adopt",
        "Trusted, governed, secure and ethical",
        "Focused on augmenting human intelligence, not replace it",
        "Trained on your quality enterprise data",
        "Transformative",
        "By helping you gain a truly competitive edge over the market"
    ].map((text, index) => (
        <div className="col-lg-4 col-md-6 mb-4" key={index}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={points} style={{ height: "50px", width: "50px", marginRight: "10px" }} alt="" />
                <span style={{ fontSize: "20px",fontWeight:"bold" }}>{text}</span>
            </div>
        </div>
    ))}
</div>
        </div>



        <br /><br />
        <h1 style={{textAlign:"center"}}>Solutions & Services</h1>
        <br /><br />
        <div className="dataaisection3 row" >
            
            <div className="col-lg-6 d-flex justify-content-center align-items-center">
                <img src={datamanagement} alt="" className="img-fluid" style={{ width:"600px", height: 'auto' }} />
            </div>
            
            <br />
            <div className="col-lg-6">
                <h1>Data Orchestration and Management</h1>
                <br />
                <ul>
                    <li>Database Consulting and Management</li>
                    <li>Data Fabric Architecture for Self-Service</li>
                    <li>Data Warehousing, Data Lakes, and Lakehouses</li>
                    <li>Partner Ecosystem Services - Migration, Administration, Performance Tuning, Security, and Compliance Services</li>
                </ul>
            </div>
        </div>

        <div className="dataaisection4 row" >
            <div className="col-lg-6" id="content">
                <br />
                <h1 style={{marginLeft:"70px"}}>Business Intelligence & Analytics</h1>
                <ul style={{marginLeft:"70px"}}>
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
        <div className="col-lg-6 d-flex justify-content-center align-items-center">
                <img src={ita} alt="" className="img-fluid" style={{ width:"600px", height: 'auto' }} />
            </div>
            <div className="col-lg-6">
                <br />
                <h1>Intelligent IT Automation</h1>
                <ul>
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
                <h1>Enterprise ML and Generative AI</h1>
                <ul>
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

<h3 style={{textAlign:"center"}}>Industries</h3>

<div className="dataaisection11">
    <div className="" id="manufacturing">
        
        <p>
            <span>Manufacturing</span>
            <br />
            Predictive maintenance
            Supply chain optimization
            Cloudera workload optimization
            SAP observability
            High performance Analytics
            AI assistants</p>
    </div>
    <div className="" id="bfsi">
    <p>
            <span>BFSI</span>
            <br />
            

Customer Care
Virtual Agent, conversational search
App Modernisation
Code, AIops, Finops
Digital Labor
Fraud, Risk, Wealth management</p>
    </div>
    <div className="" id="callcenter">
    <p>
            <span>Call Center Upgrade</span>
            <br />
            

CSpeech transcription
Voice agent - speech synthesis
Agent assist - productivity
Sentiment analytics</p>
    </div>
    <div className="" id="media">

    <p>
            <span>Media</span>
            <br />
            Generative AI language tasks
Content creation
Summarization
Entity Extraction
Productivity & Efficiency gains</p>
    </div>
    <div className="" id="it">
        
    <p>
            <span>IT/ITES</span>
            <br />
            Managed Security services
Data center and Cloud Solutions
Vendor Management
</p>
    </div>
</div>
<br /><br />
<h1 style={{textAlign:"center"}}>Our Proficiency and Certifications</h1>

<div>
           
<Slider {...settings}>
                {certifications.map((cert, index) => (
                    <div
                        key={index}
                        className="card text-center"
                        style={{
                         backgroundColor:"red"
                        }}
                    >
                        <h3 style={{ marginBottom: "10px" }}>{cert.title}</h3>
                        <p>{cert.category}</p>
                        <p>{cert.level}</p>
                    </div>
                ))}
            </Slider>
        </div>

<br /><br />
<h3 style={{textAlign:"center"}}>Powered by watsonX</h3>
<br /><br />

       <div className="about_watson">
       <div className="dataaisection7 row">
            <div className="col-lg-6">
                <h3>watson Assistant</h3>
               <p>IBM Watson Assistant is a conversation AI platform that helps you provide customers fast, straightforward, and accurate answers to their questions, across any application, device, or channel.</p>
            </div>
            <div className="col-lg-6 d-flex justify-content-center align-items-center">
                <img src={wa} className="img-fluid" alt="" style={{ width:"300px", height: 'auto' }} />
            </div>
        </div> 
        <br />
        <div className="dataaisection8 row">
        <div className="col-lg-6 d-flex justify-content-center align-items-center">
                <img src={wd} className="img-fluid" alt="" style={{ width:"300px", height: 'auto' }} />
            </div>
            <div className="col-lg-6">
                <h3>watson Discovery</h3>
               <p>IBM Watson Discovery is an award-winning enterprise search and AI search technology that breaks open data silos and retrieves specific answers to your questions while analyzing trends and relationships buried in enterprise data.</p>
            </div>
        </div> 
        <br />
        <div className="dataaisection9 row">
            <div className="col-lg-6">
                <h3>Instana</h3>
               <p>Instana Observability is a fully-automated application performance management solution designed for the challenges of managing microservice and cloud-native applications. It makes your applications visible and enables intelligent actions based on observed information.</p>
            </div>
            <div className="col-lg-6 d-flex justify-content-center align-items-center">
                <img src={instana} className="img-fluid" alt="" style={{ width:"300px", height: 'auto' }} />
            </div>
        </div> 
        <br />
        <div className="dataaisection9 row">
        <div className="col-lg-6 d-flex justify-content-center align-items-center">
                <img src={cognos} className="img-fluid" alt="" style={{ width:"300px", height: 'auto' }} />
            </div>
            <div className="col-lg-6">
                <h3>Cognos</h3>
               <p >Unleash the power of your data through AI-driven automation and insights in Cognos Analytics. Simply pose a question or hypothesis, and let AI provide the insights you require.</p>
            </div>
        </div> 
        <br />
        <div className="dataaisection9 row">
            <div className="col-lg-6">
                <h3>Turbonomic</h3>
               <p>Turbonomic is a software platform that helps organizations optimize the performance and cost of their IT infrastructure, including public, private, and hybrid cloud environments, by automating optimization actions in real-time</p>
            </div>
            <div className="col-lg-6 d-flex justify-content-center align-items-center">
                <img src={turbonomic} className="img-fluid" alt="" style={{ width:"300px", height: 'auto' }} />
            </div>
        </div>
        </div> 

        <br />
        <div className="dataaisection10 ">
            <div className="">
            <div id="watsonxai">
                <br /><br /><br /><br /><br />
                <a href="#"><h2>watsonx.ai</h2></a>
                </div>
            </div>
            <div className="">

            <div id="watsaonxdata">
                <br /><br /><br /><br /><br />
                <a href="#"><h2>watsonx.data</h2></a>
                </div>
            </div>
            <div className="">

            <div id="watsaonxgovernance">
                <br /><br /><br /><br /><br />
                <a href="#"><h2>watsonx.governance</h2></a>
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
        </>
    )
}

export default DataAi