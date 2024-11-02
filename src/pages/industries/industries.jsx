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
import Watsons from "../common/watsons";
import Sidecontent from "../sidecontact/side";


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
<Sidecontent />
      <section />
    <section className="relative w-full h-screen" id="topvideo">
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center">
        {/* Large heading */}
        <div className="text-white text-6xl  font-extrabold" id="toptext">
        Industries
        </div>

        {/* Centered red box with large text */}
        <div className="bg-red-600 text-white font-extrabold px-10 py-4 mt-6 text-5xl md:text-6xl" id="bottomtext">
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
              <p className="text-[28px] md:text-[41px] font-light md:w-10/12 w-full">
              SBA has 60+ partnerships with top OEMs, specializing in Next-Gen Information Security, Cloud Services, and Data Center Modernization.
              </p>
              <p className="text-[28px] md:text-[41px] font-light md:w-10/12 w-full">
              Our expertise spans{" "}
                <span className="text-red-600 font-semibold">
                BFSI, manufacturing, IT/ITES, 
                </span>{" "}
                with solutions architecture and 
                consulting capabilities enhancing our AI Innovation Center 
                and Managed security services.
              </p>
            </div>
            <div className="w-full md:w-4/12 flex justify-center">
        <div className='animation-border flex justify-center items-center' style={{ height: "auto", maxHeight: "410px", overflow: "hidden" }}>
          <img
            src={Industriess}
            loading="eager"
            alt="AI"
            className="object-cover rounded-tl-[100px] rounded-br-[100px] rounded-tr-none rounded-bl-none border-8 border-gray-200 "
            style={{height:"370px"}}
          />
        </div>
      </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 hidden md:block z-[-1]">
          <img src={aiOrnamentImage} loading="eager" alt="Ornament" />
        </div>
      </section>

    
<br /><br /><br />

<section id="solutions">
  {[
    {
      title: "BFSI",
      description: [
        "SBA offers end-to-end services for the BFSI industry, including digital transformation, IT consulting, cybersecurity, data analytics, and regulatory compliance. These solutions enhance operational efficiency, ensure data security, and support seamless integration of advanced technologies, helping financial institutions stay competitive and compliant.",
      ],
      image: Industries1,
      list:"none",
      gap:"-10px"
    },
    {
      title: "Manufacturing",
      description: [
        "Predictive Maintenance",
        "Supply Chain Optimization",
        "Cloudera Workload Optimization",
        "SAP Observability",
        "High Performance Analytics",
        "AI Assistants"
      ],
      image: Industries2,
      list:"",
      gap:""
    },
    {
      title: "Media",
      description: [
        "<strong>Content Creation:</strong> AI-generated content.",
        "<strong>Summarization:</strong> Condensing complex information.",
        "<strong>Entity Extraction:</strong> Identifying key entities.",
        "<strong>Classification:</strong> Organizing data for better insights.",
        "<strong>Efficiency Gains:</strong> Boosting productivity, reducing costs."
      ],
      image: Industries3,
      list:"",
      gap:""
    },
    {
      title: "IT/ITES",
      description: [
        "To optimize IT operations, enhance productivity, and ensure robust security measures tailored to business needs, we provide a comprehensive suite of IT services for the IT/ITES sector, including cloud solutions, managed security services, data center infrastructure, disaster recovery, and remote infrastructure management."
      ],
      image: Industries4,
      list:"none",
      gap:"-10px"
    },
    {
      title: "Telecom/BPO KPO",
      description: [
        "<strong>Speech Transcription:</strong> Accurate voice-to-text transcription.",
        "<strong>Voice Agent - Speech Synthesis:</strong> AI-powered voice synthesis.",
        "<strong>Agent Assist:</strong> Real-time assistance for boosted productivity and morale.",
        "<strong>Sentiment and Call Center Analytics:</strong> Insights for continuous improvement."
      ],
      image: Industries5,
      list:"",
      gap:""
    },
    {
      title: "Healthcare",
      description: [
        "Hybrid Cloud Infrastructure",
        "Intelligent Data-as-a-Service (iDaaS)",
        "AI-Enhanced Data Analysis",
        "Data Protection",
        "Automated Security"
      ],
      image: Industries6,
      list:"",
      gap:""
    },
  ].map((item, index) => (
    <div key={index} className="p-6 md:p-10 mb-5 bg-white rounded-lg shadow-md">
      <div className={`flex flex-col md:flex-row gap-6 md:gap-10 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
        <div className="w-full p-1 md:p-4">
          <div className="overflow-hidden rounded-lg">
            <img
              src={item.image}
              className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
              loading="eager"
              alt={item.title}
            />
          </div>
        </div>
        <div className="w-full md:pl-6 mt-6 md:mt-0">
          <h2 className="text-4xl font-bold mb-4 md:mb-16 text-left">
            {item.title}
          </h2>
          <ul className="text-2xl pl-10 list-disc  space-y-3 text-left" style={{ fontFamily: "league spartan",listStyleType:item.list,marginLeft:item.gap}}>
            {item.description.map((desc, idx) => (
              <li key={idx} dangerouslySetInnerHTML={{ __html: desc }} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  ))}
</section>


<br /><br /><br />
      <Certifications />
      <br /><br /><br /><br /><br />
      {/* <Watsons />
      <br /><br /><br /><br /><br /> */}
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