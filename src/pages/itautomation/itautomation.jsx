import React, { useState } from 'react';
import Indus from "../../assets/videos/itautomation.mp4";
import "./style.scss";
import HyperClouds from "../../assets/videos/HybridCloud.mp4";
import hyper1 from "../../assets/images/itautomation/it4.png";
import hyper2 from "../../assets/images/itautomation/it2.png";
import hyper3 from "../../assets/images/itautomation/it3.png";
import hyper4 from "../../assets/images/itautomation/it4.png";
import hyper5 from "../../assets/images/itautomation/it1.png";
import hyper6 from "../../assets/images/itautomation/cloud1.png";
import Contactus from '../common/contact';
import Certifications from '../common/certifications';
import aili from "../../assets/images/ai-li.svg";
import Industriesweserve from '../common/industries';
import aiSectionImage from "../../assets/images/ai-section.svg";
import aiOrnamentImage from "../../assets/images/image.png";
import ind1 from "../../assets/images/ind_1.png";
import ind2 from "../../assets/images/ind_2.png";
import ind3 from "../../assets/images/healthcare.png";
import ind4 from "../../assets/images/ind_4.png";
import { FaLongArrowAltRight } from "react-icons/fa";
import its from "../../assets/images/itautomation/its.png"
import wat3 from "../../assets/images/wat_3.svg";
import wat5 from "../../assets/images/wat_5.svg";
import wat2 from "../../assets/images/wat_2.svg";
import seven1 from "../../assets/images/itautomation/sev1.png"
import Watsons from '../common/watsons';
import p1 from "../../assets/images/itautomation/powerdby/1.png"
import p2 from "../../assets/images/itautomation/powerdby/2.png"
import p3 from "../../assets/images/itautomation/powerdby/3.png"
import p4 from "../../assets/images/itautomation/powerdby/4.png"
import rt_arrow from "../../assets/images/rt_arrow_bl.svg";
import { FaArrowRightLong } from "react-icons/fa6";


function Itautomation() {

  const benifits = [
    "Increased Efficiency Streamlines tasks, boosting productivity",
    "Cost Reduction Cuts labor costs and errors, saving money",
    "Improved Accuracy Reduces errors, improving data integrity",
    "Faster Response Quick issue resolution, improving service",
    "Enhanced Compliance Ensures policy consistency and regulatory adherence",
    "Proactive Resolution Detects and fixes problems early"
  ];

    const accordionData = [
        {
            title: "What is IT Automation?",
            content: "IT automation uses software to automate repeatable processes, reducing manual intervention and errors.",
        },
        {
            title: "How Does IT Automation Work?",
            content: "It leverages AI and ML to optimize IT processes, enabling automatic task execution with minimal human input.",
        },
        {
            title: "What Types of IT Tasks Can Be Automated?",
            content: "Tasks like infrastructure management, cloud resource handling, and IT operations monitoring can be automated.",
        },
        {
            title: "What Are the Benefits of IT Automation?",
            content: "It boosts efficiency, cuts costs, enhances accuracy, speeds up responses, and improves scalability and compliance.",
        },
        {
            title: "Can IT Automation Be Used for Self-Service Software Provisioning?",
            content: "Yes, it allows users to request and install software autonomously, reducing IT team workload.",
        },
        {
            title: "How Can IT Automation Enhance IT Operations?",
            content: "By automating monitoring and incident management, it reduces downtime and improves service quality.",
        },
        {
            title: "Can IT Automation Be Integrated with Chatbots?",
            content: "Yes, integrating with chatbots facilitates self-service by generating responses for service requests.",
        },
        {
            title: "How Does IT Automation Help in Managing Licensing Counts?",
            content: "Automation ensures provisioning stays within license limits through built-in checks.",
        },
        {
            title: "Can IT Automation Be Used for Server Update Cycles and Upgrades?",
            content: "Yes, it automates patching tasks, enhancing flexibility and reliability in updates.",
        },
        {
            title: "What Tools Are Available for IT Automation?",
            content: "Tools include batch process automation, digital process automation, and infrastructure automation solutions.",
        },
    ];

    // const [openIndex, setOpenIndex] = useState(null);

    // const toggleAccordion = (index) => {
    //     setOpenIndex(openIndex === index ? null : index);
    // };
    const [activeIndex, setActiveIndex] = useState(null);
    
    // Function to toggle the active accordion item
    const toggleAccordion = (index) => {
      if (activeIndex === index) {
        setActiveIndex(null); // Collapse if the same item is clicked
      } else {
        setActiveIndex(index); // Set active if a different item is clicked
      }
    };

    const industriesforitautomation = [
      {
        title: "Manufacturing",
        img: ind1,
        description: "Implement automated quality control and monitoring using sensors and IoT devices to detect defects in real-time, minimize waste, and ensure high-quality products.",
      },
      {
        title: "BFSI",
        img: ind2,
        description: "Utilize automated fraud detection systems to analyze transaction patterns, flag anomalies, and trigger alerts and preventive measures, reducing financial losses and boosting customer trust.",
      },
      {
        title: "Healthcare",
        img: ind3,
        description: "Implement automated patient management systems to streamline appointment scheduling, reduce wait times, and improve patient communication, leading to enhanced operational efficiency and patient satisfaction. ",
      },
      {
        title: "IT/ITES",
        img: ind4,
        description: "Streamline IT service management by automating ticket categorization, prioritization, and responses to enhance resolution times and improve customer satisfaction.",
      },
    ];

  const [hoveredIndex, setHoveredIndex] = useState(null);


    

    return (
        <>
        <section className="relative w-full h-screen" id="topvideo">
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center">
        {/* Large heading */}
        <div className="text-white text-8xl  font-extrabold" id="toptext" style={{marginTop:"150px",fontFamily:"league spartan"}}>
          IT Automation
        </div>

        {/* Centered red box with large text */}
        <div className="bg-red-600 text-white font-extrabold px-10 py-4 mt-6 text-8xl " id="bottomtext" style={{fontFamily:"league spartan"}}>
          Empower Your Operations
        </div>
      </div>

      {/* Background video */}
      <video className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop>
        <source src={Indus} type="video/mp4" />
      </video>

      {/* Overlay to darken the video */}
      <div className="absolute inset-0 bg-black opacity-60"></div>
    </section>

            <section>

    <section className="relative my-20 ">
        <div className="container mx-auto max-w-[1600px] px-16">
          <div className="flex flex-wrap">
            <div className="w-full md:w-8/12">
              <p className="text-[28px] md:text-[41px] font-light md:w-10/12 w-full">
              Leverage the power of IT Automation with advanced, state-of-the-art solutions.
              {/* 
              SBA effectively automates repetitive tasks, enhance system efficiency, and facilitate smarter workflows.
              */}
              </p>
              <p className="text-[28px] md:text-[41px] font-light mt-4 md:mt-20 md:w-9/12 w-full">
              SBA effectively automates{" "}
                <span className="text-red-600 font-semibold">
                repetitive tasks, enhance system efficiency, and facilitate
                </span>{" "}
                smarter workflows
              </p>
            </div>
            <div className="w-full md:w-4/12">
           <div className='animation-border' style={{height:"410px"}}>
           <img
                src={its}
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
       
               
    {/* <div className="flex flex-col md:flex-row bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-6 md:w-2/3">
      <h3>Benefits of IT automation:</h3>
      <ul className="text-2xl pl-5 list-disc space-y-5 text-left">
        <li>Increased Efficiency Streamlines tasks, boosting productivity.</li>
        <li>Cost Reduction Cuts labor costs and errors, saving money.</li>
        <li>Improved Accuracy Reduces errors, improving data integrity.</li>
        <li>Faster Response Quick issue resolution, improving service.</li>
        <li>Scalability Easily scales operations without manual effort.</li>
        <li>Enhanced Compliance Ensures policy consistency and regulatory adherence.</li>
        <li>Proactive Resolution Detects and fixes problems early.</li>
      </ul>
    </div>
     
    </div> */}
    <br /><br />

    <section className="custom-container ai-section">
  <div className="relative px-6 md:px-12 lg:px-24">
    <div className="flex flex-wrap justify-between mt-10">
      {benifits.map((text, index) => (
        <div
          key={index}
          className="w-full sm:w-6/12 md:w-4/12 mb-6 flex items-center gap-4"
        >
          <div className="flex-shrink-0">
            <img
              className="ai-m w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
              src={aili}
              loading="lazy"
              alt="ornament"
            />
          </div>
          <div className="ai-li-text text-base md:text-2xl font-spartan">{text}</div>
        </div>
      ))}
    </div>
  </div>
</section>
            </section>


      <section>
        <div className="relative bg-white py-20">
          <div className="hidden md:block absolute top-0 left-0 w-1/2 h-full overflow-hidden">
            <img
              src={aiOrnamentImage}
              loading="lazy"
              alt="ornament"
              className="h-full object-cover transform scale-x-[-1]"
            />
          </div>
          <div className="relative px-5 max-w-screen-xl mx-auto">
            <h1 className="text-center text-3xl md:text-5xl font-bold">
              Solutions & Services
            </h1>
          </div>
        </div>
      </section>

<section id="solutions">
  {[
    {
      title: "Automated IT Service Management (ITSM)",
      description: [
        "Automates incident, problem, and change management.",
        "Centralized platform for handling service requests and issues",
        "Ensures faster resolution and higher service availability",
      ],
      image: hyper1
    },
    {
      title: "Configuration Management Automation",
      description: [
        "Automates configuration management across hybrid and multi-cloud environments",
        "Enforces configuration policies and automatically detects unauthorized changes",
        "Helps IT teams maintain compliance effectively.",
      ],
      image: hyper6
    },
    {
      title: "Automated Backup and Recovery",
      description: [
        "Automates data backup and recovery.",
        "Simplifies backup management for both on-premises and cloud environments.",
        "Automatically protects data, ensuring it is recoverable during system failures",
      ],
      image: hyper3
    },
    {
      title: "Cloud Resource Orchestration",
      description: [
        "Optimizes cloud resource provisioning, scaling, and monitoring.",
        "Continuously analyzes application performance",
        "Automatically adjusts resources for optimal performance and cost control",
      ],
      image: hyper5
    },
    {
      title: "Predictive Maintenance Automation",
      description: [
        "Automates asset management and predictive maintenance.",
        "Uses AI-driven insights to analyze real-time equipment data.",
        "Predicts maintenance needs, reducing downtime and repair costs.",
      ],
      image: hyper2
    },
  ].map((item, index) => (
    <div key={index} className="p-6 md:p-10 mb-5 bg-white rounded-lg shadow-md">
      <div className={`flex flex-col md:flex-row gap-6 md:gap-10 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
        <div className="w-full p-1 md:p-4">
          <div className="overflow-hidden rounded-lg">
            <img
              src={item.image}
              className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105 img-fluid"
              loading="lazy"
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

  
  <section>
              
          
            <section className="py-5 bg-light">
      <h1 className="display-4 text-center mb-4" style={{fontFamily:"league spartan",fontWeight:"bold"}} id="inds">Industries We Serve</h1>

      <div className="container">
        <div className="row justify-content-between">
          {industriesforitautomation.map((industry, index) => (
            <div
              key={index}
              className="col-12 col-md-3 mb-4 position-relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => {
                window.location.href = "/industries"; // Redirect on card click
              }}
            >
              <div className="card overflow-hidden">
                <img src={industry.img} className="card-img-top" alt={industry.title} />
                <div className="card-img-overlay d-flex flex-column justify-content-end">
                  <h5 className="card-title text-white">{industry.title}</h5>
                  <FaLongArrowAltRight className="text-white" />
                </div>
                <div
                  className={`card-body  text-white opacity-${hoveredIndex === index ? '100' : '0'} position-absolute top-0 left-0 right-0 bottom-0 d-flex flex-column justify-content-center align-items-center transition-opacity duration-300`}
                style={{backgroundColor:"#3f649a"}}
                >
                  <h5 className="card-title">{industry.title}</h5>
                  <p style={{textAlign:"center"}}>{industry.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <br /><br />

    <Certifications />
   

<br /><br />

<section className="py-8">
        <div className="container mx-auto max-w-7xl px-4" id='products'>
          <h1 className="text-5xl font-bold text-center mb-12">
            {/* Powered by <span className="text-red-600">watsonX</span> */}
            Powered By
          </h1>

          {
            [
              {
                title:"Instana",
                description:"provides real-time, full-stack observability for applications, enabling automatic discovery and continuous monitoring of performance metrics across various environments",
                img:wat3,
                anim:"animation-border",
                w:""
              },
              {
                title:"Turbonomic",
                description:"offers visibility into application performance and resource utilization, allowing organizations to optimize their infrastructure based on real-time data.",
                img:wat5,
                anim:"animation-border",
                w:""
              },
              {
                title:"watson AIOps",
                description:"leverages AI to analyze operational data, providing insights that help teams understand system performance and proactively resolve issues.",
                img:wat2,
                anim:"animation-border2",
                w:""
              },
              {
                title:"SevOne",
                description:"delivers automated network observability, enabling deep insights into network performance across multivendor environments, ensuring continuous monitoring and proactive management.",
                img:seven1,
                anim:"animation-border2",
                w:"330px"
              },
            ].map((val,id)=>(
              <>
              
              <div key={id} className="p-6 md:p-10 mb-5 bg-white rounded-lg shadow-md">
                <div className={`flex flex-col md:flex-row gap-6 md:gap-10 ${id % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="md:w-1/2 w-full md:pr-10">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">{val.title}</h2>
                  <p className="text-lg md:text-2xl">
                    {val.description} 
                    </p>
                </div>
                <div className="md:w-1/2 w-full flex justify-center">
                <img
                src={val.img}
                alt="Watson Assistant"
                className={`img-fluid rounded-lg h-auto w-full max-w-xs md:max-w-md object-cover ${val.anim}`}
                style={{width:val.w}}
                />
                </div>
                </div>
                </div>
              </>
            ))
          }
        
        </div>
      </section>

      <br /><br /><br />

</section>
   

<div className="d-flex flex-wrap justify-content-center">
  {
    [
      {
        link: "https://instana-demo.c8f8f055.public.multi-containers.ibm.com/component1",
        img: p1,
        name: "Instana",
      },
      {
        link: "https://turbonomic-demo.17f48735.public.multi-containers.ibm.com/",
        img: p2,
        name: "Turbonomic",
      },
      {
        link: "https://www.ibm.com/products/cloud-pak-for-aiops",
        img: p4,
        name: "Watson AIOps",
      },
      {
        link: "https://demos.ibm.com/player/?demoId=d48700a1-09ae-45c5-ab06-0dc0f57967b7&showGuide=true&showGuidesToolbar=true&showHotspots=true&source=ap",
        img: p3,
        name: "SevOne",
      },
    ].map((val, i) => (
      <a href={val.link} className="no-underline text-black font-bold text-2xl relative p-2" key={i}>
        <div className="relative">
          <img src={val.img} alt={val.name} className="w-full h-auto rounded-lg" />
          <div className="absolute inset-0 flex items-center justify-center" style={{marginTop:"190px"}}>
            <p className="p-5  rounded text-center">{val.name}</p>
            <p className="text-center"><FaArrowRightLong /></p>
          </div>
        </div>
      </a>
    ))
  }
</div>


<br /><br /><br /><br /><br />

            {/* FAQ Accordion */}
            <section className=" flex items-center justify-center min-h-screen">
        <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-8" style={{fontFamily:"league spartan"}}>
            Frequently Asked Questions
          </h1>
          <div className="space-y-4">
            {accordionData.map((item, index) => (
              <div key={index} className="">
                <h2>
                  <button
                    className={`w-full text-left py-4 px-6 text-black font-semibold focus:outline-none flex justify-between items-center ${
                      activeIndex === index ? "" : ""
                    }`}
                    onClick={() => toggleAccordion(index)}
                    style={{fontSize:"20px",fontFamily:"league spartan"}}
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
                  <div className="px-6 py-4 ms-3" style={{fontSize:"20px",fontFamily:"league spartan"}}>{item.content}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <br /><br /><br /><br />
      <Contactus />
        </>
    );
}

export default Itautomation;
