import React from "react";
import "./style.scss";
import Indus from "../../assets/videos/Industries.mp4";
import Industriess from "../../assets/images/industries/5.png";
import Industries1 from "../../assets/images/industries/bfsi.png";
import Industries2 from "../../assets/images/industries/manufacturing.png";
import Industries3 from "../../assets/images/industries/media.png";
import Industries4 from "../../assets/images/industries/itites.png";
import Industries5 from "../../assets/images/industries/telecom.png";
import Industries6 from "../../assets/images/industries/healthcare.png";
import Contactus from "../common/contact";
import Certifications from "../common/certifications";

import aiOrnamentImage from "../../assets/images/image.png";


function Industries(){



    return(
        <>
        {/* <section>
        <div class="ai-green-Ins1">
          <div class="init-ai-sectionIns1">
            <div className="Ins1">Industries</div>
            <div class="init-red-bg px-5">
              Explore Industry-Specific Solutions
            </div>
          </div>
          <video autoPlay muted loop>
            <source src={Indus} type="video/mp4" />
          </video>
        </div>
      </section> */}
    <section className="relative w-full h-screen">
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center">
        {/* Large heading */}
        <div className="text-white text-6xl md:text-8xl font-extrabold">
        Industries
        </div>

        {/* Centered red box with large text */}
        <div className="bg-red-600 text-white font-extrabold px-10 py-4 mt-6 text-5xl md:text-6xl">
        Explore Industry-Specific Solutions
        </div>
      </div>

      {/* Background video */}
      <video className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop>
        <source src={Indus} type="video/mp4" />
      </video>

      {/* Overlay to darken the video */}
      <div className="absolute inset-0 bg-black opacity-60"></div>
    </section>

    <section className="relative my-20">
        <div className="container mx-auto max-w-[1600px] px-16">
          <div className="flex flex-wrap">
            <div className="w-full md:w-8/12">
              <p className="text-[41px] font-light md:w-10/12 w-full">
              SBA has 60+ partnerships with top OEMs, specializing in Next-Gen Information Security, Cloud Services, and Data Center Modernization.
              </p>
              <p className="text-[41px] font-light mt-4 md:mt-20 md:w-9/12 w-full">
              Our expertise spans{" "}
                <span className="text-red-600 font-semibold">
                BFSI, manufacturing, IT/ITES, 
                </span>{" "}
                with solutions architecture and 
                consulting capabilities enhancing our AI Innovation Center 
                and Managed security services.
              </p>
            </div>
            <div className="w-full md:w-4/12">
           <div className='animation-border' style={{height:"410px"}}>
           <img
                src={Industriess}
                loading="lazy"
                alt="AI"
                className="object-cover rounded-tl-[100px] rounded-br-[100px] rounded-tr-none rounded-bl-none border-8 border-gray-200"
                style={{ width: '360px', height: '400px' }}
              />
           </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 hidden md:block z-[-1]">
          <img src={aiOrnamentImage} loading="lazy" alt="Ornament" />
        </div>
      </section>

    
<br /><br /><br />

      <section>
      <div className="p-6 md:p-10 mb-5 bg-white rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row gap-6 md:gap-10">
            <div className="md:w-1/2 w-full p-1  md:p-4">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={Industries1}
                  className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                  alt="Data Orchestration"
                />
              </div>
            </div>
            <div className="md:w-1/2 w-full md:pl-6 mt-6 md:mt-6">
              <h2 className="text-3xl font-bold mb-4 md:mb-16 text-left">
              BFSI
              </h2>
              <p className=" text-2xl pl-4 space-y-3 text-left" style={{fontFamily:"league spartans"}}>
              SBA offers end-to-end services for the BFSI industry,
               including digital transformation, IT consulting, cybersecurity, 
               data analytics, and regulatory compliance. 
              These solutions enhance operational efficiency, 
              ensure data security, and support seamless 
              integration of advanced technologies, helping financial 
              institutions stay competitive and compliant.
              </p>
            </div>
          </div>
        </div>

        <div className="p-6 md:p-10 mb-5 bg-white rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row gap-6 md:gap-10">
            <div className="md:w-1/2 w-full md:pl-6 mt-6 md:mt-6">
              <h2 className="text-4xl font-bold mb-4 md:mb-16 text-left">
              Manufacturing
              </h2>
              <p className="ms-4 text-2xl" style={{fontFamily:"league spartans"}}>We provide advanced solutions for manufacturing industries that include:</p>
              <ul className="text-2xl pl-10 list-disc space-y-3 text-left" style={{fontFamily:"league spartans"}}>
                <li>
                Predictive Maintenance
                </li>
                <li>
                Supply Chain Optimization
                </li>
                <li>
                Cloudera Workload Optimization
                </li>
                <li>
                SAP Observability
                </li>
                <li>
                High Performance Analytics
                </li>
                <li>
                AI Assistants
                </li>
                
              </ul>
            </div>
            <div className="md:w-1/2 w-full p-1 md:p-4 d-flex justify-end">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={Industries2}
                  className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                  alt="Business Intelligence & Analytics"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        {/* <div className="p-6 md:p-10 mb-5 bg-white rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row gap-6 md:gap-10">
            <div className="md:w-1/2 w-full p-1 md:p-4 flex justify-end">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={Industries4}
                  className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                  alt="Enterprise ML and Generative AI"
                />
              </div>
            </div>
            <div className="md:w-1/2 w-full md:pl-6 mt-4 md:mt-6">
              <h2 className="text-3xl font-bold mb-6 md:mb-9 text-left text-gray-600">
                <b>Media</b>
              </h2>
              <ul className="text-2xl pl-5 list-disc space-y-5 text-left">
                <p>We offer AI-driven services for the media industry:</p>

                <ul className="list-disc">
                We offer AI-driven services for the media industry:
                  <li>Content Creation: AI-generated content.</li>
                  <li>Summarization: Condensing complex information.</li>
                  <li>Entity Extraction: Identifying key entities.</li>
                  <li>Classification: Organizing data for better insights.</li>
                  <li>Efficiency Gains: Boosting productivity, reducing costs.</li>
                </ul>
                <p>
                Our solutions help media organizations achieve more with less.
                </p>
              </ul>
            </div>
          </div>
        </div> */}

        <div className="p-6 md:p-10 mb-5 bg-white rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row gap-6 md:gap-10">
            <div className="md:w-1/2 w-full p-1  md:p-4">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={Industries3}
                  className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                  alt="Data Orchestration"
                />
              </div>
            </div>
            <div className="md:w-1/2 w-full md:pl-6 mt-6 md:mt-6">
              <h2 className="text-4xl font-bold mb-4 md:mb-16 text-left">
              Media
              </h2>
              <p style={{fontFamily:"league spartans"}} className="ms-4 text-2xl">We offer AI-driven services for the media industry:</p>
              <ul style={{fontFamily:"league spartans",}} className="text-2xl pl-10 list-disc space-y-3 text-left">
                 <li>Content Creation: AI-generated content.</li>
                  <li>Summarization: Condensing complex information.</li>
                  <li>Entity Extraction: Identifying key entities.</li>
                  <li>Classification: Organizing data for better insights.</li>
                  <li>Efficiency Gains: Boosting productivity, reducing costs.</li>
              </ul>
              <p className="ms-4 text-2xl">
              Our solutions help media organizations achieve more with less.</p>
            </div>
          </div>
        </div>

        

      </section>

      {/* <section>
        <div className="p-6 md:p-10 mb-5 bg-white rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row gap-6 md:gap-10">
            <div className="md:w-1/2 w-full md:pl-6 mt-4 md:mt-6">
              <h2 className="text-3xl font-bold mb-6 md:mb-9 text-left text-gray-600">
                <b>IT/ITES</b>
              </h2>
              <ul className="text-2xl pl-5 list-disc space-y-5 text-left">
                <p>
                  To optimize IT operations, enhance productivity, and ensure
                  robust security measures tailored to business needs, we
                  provide a comprehensive suite of IT services for the IT/ITES
                  sector, including cloud solutions, managed security services,
                  data center infrastructure, disaster recovery, and remote
                  infrastructure management
                </p>
              </ul>
            </div>
            <div className="md:w-1/2 w-full p-1 md:p-4 flex justify-end">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={Industries5}
                  className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                  alt="Enterprise ML and Generative AI"
                />
              </div>
            </div>
          </div>
        </div>
      </section> */}
       <div className="p-6 md:p-10 mb-5 bg-white rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row gap-6 md:gap-10">
            <div className="md:w-1/2 w-full md:pl-6 mt-6 md:mt-6">
              <h2 className="text-4xl font-bold mb-4 md:mb-16 text-left">
              IT/ITES
              </h2>
              <ul style={{fontFamily:"league spartans"}} className="text-base pl-4 list-disc space-y-3 text-left">
              <p className="text-2xl" style={{fontFamily:"league spartans"}}>
                  To optimize IT operations, enhance productivity, and ensure
                  robust security measures tailored to business needs, we
                  provide a comprehensive suite of IT services for the IT/ITES
                  sector, including cloud solutions, managed security services,
                  data center infrastructure, disaster recovery, and remote
                  infrastructure management
                </p>
                
              </ul>
            </div>
            <div className="md:w-1/2 w-full p-1 md:p-4 d-flex justify-end">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={Industries4}
                  className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                  alt="Business Intelligence & Analytics"
                />
              </div>
            </div>
          </div>
        </div>

      <section>
        {/* <div className="p-6 md:p-10 mb-5 bg-white rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row gap-6 md:gap-10">
            <div className="md:w-1/2 w-full p-1 md:p-4 flex justify-end">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={Industries6}
                  className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                  alt="Enterprise ML and Generative AI"
                />
              </div>
            </div>
            <div className="md:w-1/2 w-full md:pl-6 mt-4 md:mt-6">
              <h2 className="text-3xl font-bold mb-6 md:mb-9 text-left text-gray-600">
                <b>Telecom/BPO KPO</b>
              </h2>
              <ul className="text-2xl pl-5 list-disc space-y-5 text-left">
                <p>
                Enhancing Call Center Efficiency
                </p>
               <ul className="list-disc">
                <li><strong>Speech Transcription:</strong> Accurate voice-to-text transcription</li>
                <li><strong>Voice Agent - Speech Synthesis:</strong> AI-powered voice synthesis.</li>
                <li><strong>Agent Assist:</strong> Real-time assistance for boosted productivity and morale.</li>
                <li><strong>Sentiment and Call Center Analytics:</strong> Insights for continuous improvement.</li>
               </ul>
              </ul>
            </div>
          </div>
        </div> */}
        <div className="p-6 md:p-10 mb-5 bg-white rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row gap-6 md:gap-10">
            <div className="md:w-1/2 w-full p-1  md:p-4">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={Industries3}
                  className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                  alt="Data Orchestration"
                />
              </div>
            </div>
            <div className="md:w-1/2 w-full md:pl-6 mt-6 md:mt-6">
              <h2 className="text-4xl font-bold mb-4 md:mb-16 text-left">
              Telecom/BPO KPO
              </h2>
              <p style={{fontFamily:"league spartans"}} className="ms-4 text-2xl">
                Enhancing Call Center Efficiency
                </p>
              <ul style={{fontFamily:"league spartans"}} className="text-2xl pl-10 list-disc space-y-3 text-left">
              <li><strong>Speech Transcription:</strong> Accurate voice-to-text transcription</li>
                <li><strong>Voice Agent - Speech Synthesis:</strong> AI-powered voice synthesis.</li>
                <li><strong>Agent Assist:</strong> Real-time assistance for boosted productivity and morale.</li>
                <li><strong>Sentiment and Call Center Analytics:</strong> Insights for continuous improvement.</li>
              </ul>
              <p className="pl-5 text-2xl" style={{fontFamily:"league spartans"}}>
              Our solutions help media organizations achieve more with less.</p>
            </div>
          </div>
        </div>

      </section>

      <section>
        {/* <div className="p-6 md:p-10 mb-5 bg-white rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row gap-6 md:gap-10">
            <div className="md:w-1/2 w-full md:pl-6 mt-4 md:mt-6">
              <h2 className="text-3xl font-bold mb-6 md:mb-9 text-left text-gray-600">
                <b>Healthcare</b>
              </h2>
              <ul className="text-2xl pl-5 list-disc space-y-5 text-left">
                <p>
                SBA Info Solutions provides comprehensive IT services
                 to the healthcare industry, including:
                </p>
                <ul className="list-disc">
                  <li>Hybrid Cloud Infrastructure</li>
                  <li>Intelligent Data-as-a-Service (iDaaS)</li>
                  <li>AI-Enhanced Data Analysis</li>
                  <li>Data Protection</li>
                  <li>Automated Security</li>
                </ul>
              </ul>
            </div>
            <div className="md:w-1/2 w-full p-1 md:p-4 flex justify-end">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={Industries5}
                  className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                  alt="Enterprise ML and Generative AI"
                />
              </div>
            </div>
          </div>
        </div> */}
        <div className="p-6 md:p-10 mb-5 bg-white rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row gap-6 md:gap-10">
            <div className="md:w-1/2 w-full md:pl-6 mt-6 md:mt-6">
              <h2 className="text-4xl font-bold mb-4 md:mb-16 text-left">
              Healthcare
              </h2>
              <p className="ms-4 text-2xl" style={{fontFamily:"league spartans"}}>
                SBA Info Solutions provides comprehensive IT services
                 to the healthcare industry, including:
                </p>
              <ul style={{fontFamily:"league spartans",fontSize:"25px"}} className="text-2xl pl-10 list-disc space-y-3 text-left">
              <li>Hybrid Cloud Infrastructure</li>
                  <li>Intelligent Data-as-a-Service (iDaaS)</li>
                  <li>AI-Enhanced Data Analysis</li>
                  <li>Data Protection</li>
                  <li>Automated Security</li>
                
              </ul>
            </div>
            <div className="md:w-1/2 w-full p-1 md:p-4 d-flex justify-end">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={Industries6}
                  className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                  alt="Business Intelligence & Analytics"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <br /><br /><br />
      <Certifications />
      <br /><br /><br />
      <Contactus />

      <section className="flex flex-col items-center justify-center py-16 bg-white">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-center">
          Ready To Explore Industry-Specific Solutions?
        </h2>
        <p className="text-lg md:text-xl mb-6 text-center">
          If you're interested in exploring our solutions or need more
          information, our experts are ready to assist you
        </p>
        <a className="text-lg md:text-xl font-semibold text-black underline hover:text-gray-700 transition duration-300" href="/ContactUs">
          Get a Call Back
        </a>
      </section>
      
        </>
    )
}

export default Industries