import React, { useState } from 'react';
import HyperClouds from "../../assets/videos/sands.mp4";
import "./style.scss";
import sands1 from "../../assets/images/security/sands1.png"
import sands2 from "../../assets/images/security/sands2.png"
import sands3 from "../../assets/images/security/sands3.png"
import Contactus from '../common/contact';
import Certifications from '../common/certifications';
import sands from "../../assets/images/1.png"
import Industriesweserve from '../common/industries';
import aili from "../../assets/images/ai-li.svg";
import aiOrnamentImage from "../../assets/images/image.png";
import aiSectionImage from "../../assets/images/ai-section.svg";
import ind1 from "../../assets/images/ind_1.png";
import ind2 from "../../assets/images/ind_2.png";
import ind3 from "../../assets/images/ind_3.png";
import ind4 from "../../assets/images/ind_4.png";
import tele from "../../assets/images/telecommunication.png"
import { FaLongArrowAltRight } from "react-icons/fa";
import l1 from "../../assets/images/security/linux1logo.png"
import wat5 from "../../assets/images/security/powerdby/1.png";
import wat2 from "../../assets/images/wat_2.svg";
import seven1 from "../../assets/images/sevone.png"
import Watsons from '../common/watsons';
import p1 from "../../assets/images/security/2.png"
import p2 from "../../assets/images/security/1.png"
import rt_arrow from "../../assets/images/rt_arrow_bl.svg";
import a from "../../assets/images/security/powerdby/1.png"
import b from "../../assets/images/security/powerdby/2.png"
import { FaArrowRightLong } from "react-icons/fa6";


function Securityandsus() {
    const securityAccordionData = [
        {
            title: "What security features does IBM Z offer to protect data?",
            content: "IBM Z provides advanced encryption and access controls, ensuring that sensitive data is protected from unauthorized access and breaches.",
        },
        {
            title: "How do compliance tools help meet regulatory requirements?",
            content: "Compliance tools offer comprehensive auditing and monitoring capabilities, helping organizations adhere to standards like PCI DSS and STIG by identifying vulnerabilities and compliance gaps.",
        },
        {
            title: "What is the benefit of high availability in mainframe solutions?",
            content: "High availability minimizes downtime by ensuring system resilience, allowing critical workloads to continue operating smoothly even during disruptions or maintenance.",
        },
        {
            title: "How does workload isolation protect data integrity?",
            content: "Workload isolation creates secure environments that prevent unauthorized access, maintaining data integrity and protecting sensitive information from potential threats.",
        },
        {
            title: "What is the benefit of consolidating workloads in terms of energy efficiency?",
            content: "Consolidating workloads reduces energy consumption and operational costs, leading to more efficient use of resources and a smaller environmental footprint.",
        },
        {
            title: "How does scalability support efficient workload scaling?",
            content: "Scalability allows systems to seamlessly adapt to changing demands, enabling businesses to expand or contract resources as needed without compromising performance.",
        },
        {
            title: "What is the benefit of integrating cloud services with legacy systems?",
            content: "Integrating cloud services with legacy systems enhances flexibility and agility, allowing businesses to modernize applications while leveraging existing investments.",
        },
        {
            title: "How does cost optimization prevent waste in resource allocation?",
            content: "Cost optimization ensures that resources are allocated efficiently based on actual needs, preventing waste and optimizing operational expenditures.",
        },
        {
            title: "What is the impact of innovation on operational efficiency?",
            content: "Innovation drives growth by leveraging advanced technologies like AI and automation to streamline processes, improve productivity, and enhance operational efficiency.",
        },
        {
            title: "How do energy-efficient practices contribute to sustainability goals?",
            content: "Energy-efficient practices lower emissions and reduce the carbon footprint, supporting sustainability goals while also reducing operational costs.",
        },
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


    const featuresforsands = [
      "Security Advanced encryption and secure partitioning protect data",
      "Performance Handles large workloads efficiently for demanding industries",
      "Scalability Easily expands resources without performance loss",
      "Reliability Ensures continuous availability with minimal downtime",
      "Cost Efficiency Reduces energy use and operational costs through consolidation",
      "Sustainability Lowers CO2 emissions with efficient resource use",
    ];


    const industriesforsands = [
      {
        title: "Manufacturing",
        img: ind1,
        description: "Real-time monitoring and quality control with scalable, efficient data processing.",
      },
      {
        title: "BFSI",
        img: ind2,
        description: "Scalable infrastructure for fraud detection and regulatory compliance.",
      },
      {
        title: "Healthcare",
        img: ind3,
        description: " Secure data management and high-performance computing for improved patient care and operational efficiency.",
      },
      {
        title: "IT/ITES",
        img: ind4,
        description: "Provides a secure cloud environment with high-performance computing for enhanced service management",
      },
      {
        title: "Telecommunications",
        img: tele,
        description: "Delivers scalable, secure infrastructure for handling high data volumes and ensuring compliance.",
      },
    ];

  const [hoveredIndex, setHoveredIndex] = useState(null);


    return (
        <>
       <section className="relative w-full h-screen" id="topvideo">
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center">
        {/* Large heading */}
        <div className="text-white text-8xl  font-extrabold" style={{fontFamily:"league spartan"}} id="toptext">
          Security and Sustainability
        </div>

        {/* Centered red box with large text */}
        <div className="bg-red-600 text-white font-extrabold px-10 py-4 mt-6 text-8xl" style={{fontFamily:"league spartan"}} id="bottomtext">
          Secure Enterprise Computing
        </div>
      </div>

      {/* Background video */}
      <video className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop>
        <source src={HyperClouds} type="video/mp4" />
      </video>

      {/* Overlay to darken the video */}
      <div className="absolute inset-0 bg-black opacity-60"></div>
    </section>

    <section className="relative my-20">
        <div className="container mx-auto max-w-[1600px] px-16">
          <div className="flex flex-wrap">
            <div className="w-full md:w-8/12">
              <p className="text-[28px] md:text-[41px] font-light mt-4 md:mt-20 md:w-9/12 w-full">
              Protect and Thrive with IBM LinuxONE Secure, Sustainable, and Efficient
              </p>
              <p className="text-[28px] md:text-[41px] font-light mt-4 md:mt-20 md:w-9/12 w-full">
              SBA empowers enterprises {" "}
                <span className="text-red-600 font-semibold">
                to Safeguard data, reduce environmental impact, and optimize operations 
                </span>{" "}with IBM LinuxONE.
           
              </p>
            </div>
            <div className="w-full md:w-4/12">
           <div className='animation-border' style={{height:"410px"}}>
           <img
                src={sands}
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

<section className="custom-container ai-section">
  <div className="relative px-6 md:px-12 lg:px-24">
    <div className="flex flex-wrap justify-between mt-10">
      {featuresforsands.map((text, index) => (
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
            <h1 className="text-center text-3xl md:text-5xl font-bold" >
              Solutions & Services
            </h1>
          </div>
        </div>
      </section>
<div className="solutions">

      {
        [
          
          {
                title: "Secure Mainframe Solutions",
                description: [
                  "Enhanced Security IBM Z offers encryption and access controls to protect data.",
                  "Compliance Tools for auditing and monitoring help meet regulatory requirements",
                  "High Availability Designed for resilience, minimizing downtime.",
                ],
                image: sands1
              },
              {
                title: "Efficient Linux Workloads",
                description: [
                  "Workload Isolation Secure environments protect data integrity.",
                  "Energy Efficiency Consolidation reduces energy consumption and costs.",
                  "Scalability High-performance capabilities support efficient workload scaling.",
                ],
                image: sands2
              },
              {
                title: "Sustainability Goals",
                description: [
                  "Reduced Carbon Footprint Energy-efficient practices lower emissions.",
                  "Cost Savings Reduces operational costs through efficiency.",
                  "Brand Reputation Enhances reputation and supports compliance with sustainability goals.",
                  
                ],
                image: sands3
              }
            ].map((val,id)=>(
              <>
              <div key={id} className="p-6 md:p-10 mb-5 bg-white rounded-lg shadow-md">
       <div className={`flex flex-col md:flex-row gap-6 md:gap-10 ${id % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
        <div className="w-full p-1 md:p-4">
          <div className="overflow-hidden rounded-lg">
            <img
              src={val.image}
              className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105 img-fluid"
              loading="lazy"
              alt={val.title}
              />
          </div>
        </div>
        <div className="w-full md:pl-6 mt-6 md:mt-0">
          <h2 className="text-3xl font-bold mb-4 md:mb-16 text-left">
            {val.title}
          </h2>
          <ul className="text-base pl-10 list-disc space-y-3 text-left">
            {val.description.map((desc, idx) => (
              <li key={idx}>{desc}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
              </>
            ))
          }
      </div>

     
      <section className="py-5 bg-light">
  <h1 className="display-4 text-center mb-4" style={{ fontFamily: "league spartan", fontWeight: "bold" }} id="inds">
    Industries We Serve
  </h1>

  <div className="container">
    <div className="flex flex-wrap -mx-2"> {/* Negative margin to offset padding */}
      {industriesforsands.map((industry, index) => (
        <div
          key={index}
          className="w-full md:w-1/5 px-2 mb-4 position-relative" // Added horizontal padding
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
              className={`card-body text-white opacity-${hoveredIndex === index ? '100' : '0'} position-absolute top-0 left-0 right-0 bottom-0 d-flex flex-column justify-content-center align-items-center transition-opacity duration-300`}
              style={{ backgroundColor: "#3f649a" }}
            >
              <h5 className="card-title">{industry.title}</h5>
              <p style={{ textAlign: "center" }}>{industry.description}</p>
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
        <div className="container mx-auto max-w-7xl px-4">
          <h1 className="text-5xl font-bold text-center mb-12" style={{fontFamily:"league spartan"}}>
            {/* Powered by <span className="text-red-600">watsonX</span> */}
            Powered By
          </h1>

          {
  [
    {
      title: "LinuxOne",
      description:
        "LinuxONE is a portfolio of hardware, software, and solutions designed for an enterprise-grade Linux environment. It is optimized for running more transactions faster and with more security and reliability, specifically for the open-source community.",
      img: p2,
      anim: "animation-border",
    },
    {
      title: "Mainframe",
      description:
        "Mainframe computing uses large, powerful computers for high-volume data processing and critical applications. These systems offer exceptional reliability, security, and processing power for industries like banking and healthcare. Despite their age, mainframes continue to evolve, integrating with modern technologies while maintaining their core strengths.",
      img: p1,
      anim: "animation-border2",
    },
  ].map((val, id) => (
    <div key={id} className="mb-10 flex flex-wrap md:flex-nowrap items-center justify-between">
      {id % 2 === 0 ? (
        <>
          <div className="md:w-1/2 w-full md:pr-10">
            <h2 className="text-3xl font-bold mb-4">{val.title}</h2>
            <p className="text-2xl pl-5">{val.description}</p>
          </div>
          <div className="md:w-1/2 w-full flex justify-center">
            <div className={val.anim} style={{ height: "410px" }}>
              <img
                src={val.img}
                alt={val.title}
                className="rounded-lg w-full object-cover"
                style={{
                  width: "500px",
                  height: "400px",
                  borderTopLeftRadius: id === 0 ? "100px" : "0px",
                  borderBottomRightRadius: id === 0 ? "100px" : "0px",
                  borderTopRightRadius: id === 0 ? "0px" : "100px",
                  borderBottomLeftRadius: id === 0 ? "0px" : "100px",
                  border: "12px solid #EEEEEE",
                }}
              />
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="md:w-1/2 w-full flex justify-center">
            <div className={val.anim} style={{ height: "410px" }}>
              <img
                src={val.img}
                alt={val.title}
                className="rounded-lg w-full object-cover"
                style={{
                  width: "500px",
                  height: "400px",
                  borderTopLeftRadius: "0px",
                  borderBottomRightRadius: "0px",
                  borderTopRightRadius: "100px",
                  borderBottomLeftRadius: "100px",
                  border: "12px solid #EEEEEE",
                }}
              />
            </div>
          </div>
          <div className="md:w-1/2 w-full md:pl-10">
            <h2 className="text-3xl font-bold mb-4">{val.title}</h2>
            <p className="text-2xl pl-4">{val.description}</p>
          </div>
        </>
      )}
    </div>
  ))
}

        </div>
      </section>
      <br /><br /><br />

<section className="pt-0 md:pt-5 w-full" id='poweredby'>
<div className="d-flex flex-wrap justify-content-center">

{
  [
    {
      link:"https://www.redhat.com/en/technologies/management/ansible",
      img:a,
      name:"Mainframe",
    },
    {
      link:"https://www.redhat.com/en/technologies/cloud-computing/openshift",
      img:b,
      name:"LinuxOne",
    },
    
  ].map((val,i)=>(
    <>
   <a href={val.link} className="no-underline text-black font-bold text-2xl relative p-2" target="_blank" key={i}>
        <div className="relative">
          <img src={val.img} alt={val.name} className="w-full h-auto rounded-lg" />
          <div className="absolute inset-0 flex items-center justify-center" style={{marginTop:"190px"}}>
            <p className="p-5  rounded text-center">{val.name}</p>
            <p className="text-center"><FaArrowRightLong /></p>
          </div>
        </div>
      </a>
    </>
  ))
}
</div>
</section>

      <br /><br /><br /><br /><br />

            {/* FAQ Accordion */}
            <section className=" flex items-center justify-center min-h-screen">
        <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-8">
            Frequently Asked Questions
          </h1>
          <div className="space-y-4">
            {securityAccordionData.map((item, index) => (
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
                  <div className="px-9 py-4" style={{fontSize:"18px",fontFamily:"league spartan"}}>{item.content}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <br /><br /><br />
       
        <Contactus />
        </>
    );
}

export default Securityandsus;
