import { useState, useEffect, React } from "react";
import datapage from "../../assets/videos/dataandai.mp4";
import dataai from "../../assets/images/aipage.png"
import "./style.scss";
import aili from "../../assets/images/ai-li.svg";
import aiOrnamentImage from "../../assets/images/image.png";
import brochure from "../broucher/data-ai-brochure.pdf"
import s1 from "../../assets/images/s1.svg";
import s4 from "../../assets/images/s4.svg";
import s2 from "../../assets/images/s2.svg";




import wat1 from "../../assets/images/wat_1.svg";
import wat2 from "../../assets/images/wat_2.svg";
import wat3 from "../../assets/images/wat_3.svg";
import wat4 from "../../assets/images/wat_4.svg";
import wat5 from "../../assets/images/wat_5.svg";

import Group from "../../assets/images/Group.svg";
import Certifications from "../common/certifications";
import Contactus from "../common/contact";
import Industriesweserve from "../common/industries";
import Watsons from "../common/watsons";
import LazyLoad from "react-lazyload";
import Sidecontent from "../sidecontact/side";


function Dataai(){

    const features = [
        "Easy to adopt",
        "Trusted, governed, secure and ethical",
        "Focused on augmenting human intelligence, not replace it",
        "Trained on your quality enterprise data",
        "Transformative",
        "By helping you gain a truly competitive edge over the market",
      ];
    
      
    
      const [activeIndex, setActiveIndex] = useState(null);
    
      // Function to toggle the active accordion item
      const toggleAccordion = (index) => {
        if (activeIndex === index) {
          setActiveIndex(null); // Collapse if the same item is clicked
        } else {
          setActiveIndex(index); // Set active if a different item is clicked
        }
      };
    
      const accordionData = [
        {
          title: "What is Generative AI?",
          content:
            "Generative AI is a type of artificial intelligence that can create new content, such as text, images, or audio, based on patterns in data. It is used for tasks like content generation, language modeling, and image synthesis.",
        },
        {
          title: "What is watson Assistant?",
          content:
            "Watson assistant is an AI-powered virtual agent that can engage in natural conversations to help users with a variety of tasks, such as answering questions, providing recommendations, and automating workflows.",
        },
        {
          title: "What is Conversational AI?",
          content:
            "Conversational AI refers to the use of artificial intelligence to enable human-like interactions between machines and humans through natural language processing and generation. It is used in chatbots, virtual assistants, and other interactive systems.",
        },
        {
          title: "What is the watsonX Platform?",
          content:
            "The watsonX Platform is an open-source, cloud-native platform that provides a comprehensive set of tools and services for building, deploying, and managing AI and data applications. It includes components for data management, machine learning, and model deployment.",
        },
        {
          title: "What is watsonX.ai?",
          content:
            "watsonX.ai is a set of AI services and tools within the WatsonX Platform that enables the development and deployment of AI applications. It includes capabilities for natural language processing, computer vision, and predictive analytics.",
        },
        {
          title: "What is watsonX.data?",
          content:
            "watsonX.data is a set of data management services within the WatsonX Platform that provides a unified view of data across multiple sources and enables secure data sharing and collaboration. It includes capabilities for data cataloging, data virtualization, and data governance.",
        },
        {
          title: "What is watsonX.governance?",
          content:
            "watsonX.governance is a set of governance and compliance services within the WatsonX Platform that ensures the responsible and ethical use of AI and data. It includes capabilities for model risk management, bias detection, and explainability.",
        },
        {
          title: "How can Generative AI be used in business?",
          content:
            "Generative AI can be used in business for tasks such as content creation, product design, and customer service. For example, it can be used to generate personalized marketing content, create product mockups, or provide automated customer support.",
        },
        {
          title: "What are the benefits of using watson assistant?",
          content:
            "The benefits of using watson assistant include improved customer satisfaction, reduced support costs, and increased efficiency. It can handle a large volume of customer inquiries, provide consistent and accurate responses, and free up human agents to focus on more complex tasks.",
        },
        {
          title: "How can Conversational AI improve customer experience?",
          content:
            "Conversational AI can improve customer experience by providing 24/7 support, personalized recommendations, and seamless interactions across multiple channels. It can also gather valuable customer insights and feedback to help businesses improve their products and services.",
        },
      ];
    
      
  

    return(
        <>

        <Sidecontent />

      {/* -------------------------------SECTION 1 START------------------------ */}
  <section className="relative w-full h-screen" id="topvideo">
  <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center">
    {/* Large heading */}
    <div className="text-white text-8xl  font-extrabold"  id="toptext">
      Empower Your Business With
    </div>

    {/* Centered red box with large text */}
    <div className="bg-red-600 text-white font-extrabold px-10 py-4 mt-6 text-6xl" id="bottomtext">
      Trusted AI Solutions
    </div>
  </div>

  {/* Background video */}
  <LazyLoad height={720} offset={100}>
    
  <video className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop>
    <source src={datapage} type="video/mp4" />
  </video>
  </LazyLoad>

  {/* Overlay to darken the video */}
  <div className="absolute inset-0 bg-black opacity-60"></div>
</section>


    
    
     {/* -------------------------------SECTION 1 END------------------------ */}

    
    {/* ----------------------SECTION 2 START-------------------------------*/}
    <section className="relative my-20">
  <div className="container mx-auto max-w-[1600px] px-6 md:px-16">
    <div className="flex flex-wrap">
      <div className="w-full md:w-8/12">
        <p className="text-[24px] md:text-[41px] font-light md:w-10/12 w-full">
          For data-driven enterprises looking to create exceptional
          customer and employee experience,
        </p>
        <p className="text-[24px] md:text-[41px] font-light mt-4 md:mt-20 md:w-9/12 w-full">
          SBA provides{" "}
          <span className="text-red-600 font-semibold">
            modular and sustainable AI solutions & ML Models
          </span>
        </p>
      </div>

      <div className="w-full md:w-4/12 flex justify-center">
        <div className='animation-border flex justify-center items-center' style={{ height: "auto", maxHeight: "410px", overflow: "hidden" }}>
          <img
            src={dataai}
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
    <img src={aiOrnamentImage} loading="lazy" alt="Ornament" />
  </div>
</section>


      
  <section className="custom-container ai-section">
  <div className="relative px-6 md:px-12 lg:px-24">
    <div className="flex flex-wrap justify-between mt-10">
      {
      features.map((text, index) => (
        <div
          key={index}
          className="w-full sm:w-6/12 md:w-4/12 mb-6 flex items-center gap-4"
        >
          <div className="flex-shrink-0">
            <img
              className="ai-m w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
              src={aili}
              loading="eager"
              alt="ornament"
            />
          </div>
          <div className="ai-li-text text-base md:text-2xl font-spartan">{text}</div>
        </div>
      ))}
    </div>
  </div>
</section>


    {/* -------------------------------SECTION 2 END-------------------------------*/}
      <br /><br />



    {/* -----------------------------------SECTION 3 START-------------------------------*/}
    <section>
  <div className="relative bg-white py-10 md:py-20">
    <div className="hidden md:block absolute top-0 left-0 w-1/2 h-full overflow-hidden">
      <img
        src={aiOrnamentImage}
        loading="eager"
        alt="ornament"
        className="h-full object-cover transform scale-x-[-1]"
      />
    </div>
    <div className="relative px-5 max-w-screen-xl mx-auto">
      <h1 className="text-center text-2xl md:text-4xl lg:text-5xl font-bold">
        Solutions & Services
      </h1>
    </div>
  </div>
</section>

<section id="solutions">
  {[
    {
      title: "Data Orchestration and Management",
      description: [
        "Database Consulting and Management",
        "Data Fabric Architecture for Self-Service",
        "Data Warehousing, Data Lakes, and Lakehouses",
        "Partner Ecosystem Services - Migration, Administration, Performance Tuning, Security, and Compliance Services"
      ],
      image: s1
    },
    {
      title: "Business Intelligence & Analytics",
      description: [
        "Cognos Analytics for enterprise BI, reporting, and augmented analytics with inbuilt AI",
        "Integration with SAP Analytics Cloud, other BI tools, data sources, and applications",
        "Custom report development and dashboard creation",
        "Data modeling and ETL/ELT services",
        "Training and enablement services"
      ],
      image: s2
    },
    // {
    //   title: "Intelligent IT Automation",
    //   description: [
    //     "Enterprise Observability for application performance and Infrastructure quality management",
    //     "AI powered Cloud and Finops",
    //     "Incident management & sustainable IT",
    //     "ML services and ChatOps for streamlined IT service management"
    //   ],
    //   image: s3
    // },
    {
      title: "Enterprise ML and Generative AI",
      description: [
        "Customer care and call center modernization",
        "Retrieval Augmented generation for knowledge self-service",
        "Conversational AI and virtual assistant development",
        "Development and deployment of ML models",
        "Responsible AI and model governance consulting",
        "Integration with enterprise systems and applications",
        "Data preparation and feature engineering services"
      ],
      image: s4
    }
  ].map((item, index) => (
    <div key={index} className="p-6 md:p-10 mb-5 bg-white rounded-lg shadow-md">
      <div className={`flex flex-col md:flex-row gap-6 md:gap-10 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
        <div className="w-full p-1 md:p-4">
          <div className="overflow-hidden rounded-lg">
            <img
              src={item.image}
              className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105 img-fluid"
              loading="eager"
              alt={item.title}
            />
          </div>
        </div>
        <div className="w-full md:pl-6 mt-6 md:mt-0">
          <h2 className="text-3xl font-bold mb-4 md:mb-16 text-left">
            {item.title}
          </h2>
          <ul className="text-base pl-10 list-disc space-y-3 text-left">
            {item.description.map((desc, idx) => (
              <li key={idx}>{desc}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  ))}
</section>



  {/* -----------------------------------SECTION 3 END-------------------------------*/}

  {/* industries */}
   <Industriesweserve />
   <br /><br />
      <Certifications />
      <br /><br />
      <section className="py-8">
        <div className="container mx-auto max-w-7xl px-4" id="products">
          <h1 className="text-5xl font-bold text-center mb-12">
            Powered by <span className="text-red-600">watsonX</span>
          </h1>

          {
            [
              {
                title:"watson Assistant",
                description:"IBM Watson Assistant is a conversation AI platform that helps you provide customers fast, straightforward, and accurate answers to their questions, across any application, device, or channel.",
                img:wat1,
                anim:"animation-border"
              },
              {
                title:"watson Discovery",
                description:"IIBM Watson Discovery is an award-winning enterprise search and AI search technology that breaks open data silos and retrieves specific answers to your questions while analyzing trends and relationships buried in enterprise data.",
                img:wat2,
                anim:"animation-border2"
              },
              {
                title:"Instana",
                description:"Instana Observability is a fully-automated application performance management solution designed for the challenges of managing microservice and cloud-native applications. It makes your applications visible and enables intelligent actions based on observed information.",
                img:wat3,
                anim:"animation-border"
              },
              {
                title:"Cognos",
                description:"Unleash the power of your data through AI-driven automation and insights in Cognos Analytics. Simply pose a question or hypothesis, and let AI provide the insights you require.",
                img:wat4,
                anim:"animation-border2"
              },
              {
                title:"Turbonomic",
                description:"Turbonomic is a software platform that helps organizations optimize the performance and cost of their IT infrastructure, including public, private, and hybrid cloud environments, by automating optimization actions in real-time.",
                img:wat5,
                anim:"animation-border"
              },
            ].map((val,id)=>(
              <> 
              
              <div key={id} className="p-6 md:p-10 mb-5 bg-white rounded-lg shadow-md">
                <div className={`flex flex-col md:flex-row gap-6 md:gap-10 ${id % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="md:w-1/2 w-full md:pr-10">
                  <h2 className="text-2xl  font-bold mb-4">{val.title}</h2>
                  <p className="text-lg md:text-2xl">
                    {val.description}
                    </p>
                </div>
                <div className="md:w-1/2 w-full flex justify-center">
                <img
                src={val.img}
                alt="Watson Assistant"
                className={`img-fluid rounded-lg h-auto w-full max-w-xs md:max-w-md object-cover ${val.anim}`}
                />
                </div>
                </div>
                </div>
              </>
            ))
          }

      </div>
      </section>

     <Watsons />


 
  <section className="my-5 py-5">
        <div className="relative pb-[37.25%]  overflow-hidden container" style={{width:"370px",height:"300px"}} id="youtubevideo2">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/2qhssWueRUI"
            allowFullScreen
            title="YouTube Video"
          ></iframe>
        </div>
  </section>

  
      <section className="my-5 py-5 bg-white">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
    {/* Left Content */}
    <div className="md:w-1/2 w-full text-center md:text-left">
      <p className="text-5xl font-bold text-gray-900 leading-tight">
        Ready To <span className="text-red-600">Unlock</span> The Power Of{" "}
        <span className="text-red-600">Data and AI?</span>
      </p>

      <p className="text-lg text-gray-700 mt-5">
        If you're interested in exploring our Data and AI solutions or need
        more information, our experts are ready to assist you.
      </p>

      <div className="flex gap-3 mt-5 justify-content-center md:justify-start flex-col md:flex-row items-center">
        {/* Brochure Download Button */}
        <a
          href={brochure} // Ensure this points to the correct PDF URL
          target="_blank"
          rel="noopener noreferrer"
          download // Just the 'download' attribute is enough, no need for value
        >
          <button className="border-2 border-red-600 text-red-600 py-2 px-5 rounded-full hover:bg-red-600 hover:text-white transition duration-300 btn btn-danger">
            Download Brochure
          </button>
        </a>
      </div>
    </div>

    {/* Right Image */}
    <div className="md:w-1/2 w-full mt-5 md:mt-0 flex justify-center md:justify-end">
      <img
        src={Group}
        className="w-full max-w-md"
        loading="lazy"
        alt="AI"
      />
    </div>
  </div>
</section>

      <br />
      <Contactus />
      {/* <section className="bg-[#F5F9FD] flex items-center justify-center min-h-screen">
        <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-8">
            Frequently Asked Questions
          </h1>
          <div className="space-y-4">
            {accordionData.map((item, index) => (
              <div key={index} className="border-b border-gray-200">
                <h2>
                  <button
                    className={`w-full text-left py-4 px-6 text-black font-semibold focus:outline-none flex justify-between items-center ${
                      activeIndex === index ? "border border-blue-200" : ""
                    }`}
                    onClick={() => toggleAccordion(index)}
                  >
                    {item.title}
                    <span className="text-blue-600">
                      {activeIndex === index ? (
                        <svg
                          className="w-4 h-4 transform rotate-180"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          ></path>
                        </svg>
                      ) : (
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          ></path>
                        </svg>
                      )}
                    </span>
                  </button>
                </h2>
                {activeIndex === index && (
                  <div className="px-6 py-4 text-gray-700">{item.content}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section> */}

        </>
    )
}

export default Dataai