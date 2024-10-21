import React, { useState } from 'react';
import HyperClouds from "../../assets/videos/HybridCloud.mp4";
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
import wat5 from "../../assets/images/wat_5.svg";
import wat2 from "../../assets/images/wat_2.svg";
import seven1 from "../../assets/images/sevone.png"

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
       <section className="relative w-full h-screen">
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center">
        {/* Large heading */}
        <div className="text-white text-6xl md:text-8xl font-extrabold">
          Security and Sustainability
        </div>

        {/* Centered red box with large text */}
        <div className="bg-red-600 text-white font-extrabold px-10 py-4 mt-6 text-5xl md:text-6xl">
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
              <p className="text-[41px] font-light md:w-10/12 w-full">
              Protect and Thrive with IBM LinuxONE Secure, Sustainable, and Efficient
              </p>
              <p className="text-[41px] font-light mt-4 md:mt-20 md:w-9/12 w-full">
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
        <div className="relative px-12 md:px-25">
          <div className="flex flex-wrap justify-between mt-10">
            {featuresforsands.map((text, index) => (
              <div
                key={index}
                className="w-full md:w-4/12 mb-4 flex items-center gap-6"
              >
                <div>
                  <img
                    className="ai-m"
                    src={aili}
                    loading="lazy"
                    alt="ornament"
                  />
                </div>
                <div className="ai-li-text">{text}</div>
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
            <h1 className="text-center text-3xl md:text-5xl font-bold">
              Solutions & Services
            </h1>
          </div>
        </div>
      </section>

      <section id="solutions">

      <div className="p-6 md:p-10 mb-5 bg-white rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row gap-6 md:gap-10">
            <div className="md:w-1/2 w-full p-1  md:p-4">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={sands1}
                  className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                  alt="Data Orchestration"
                />
              </div>
            </div>
            <div className="md:w-1/2 w-full md:pl-6 mt-6 md:mt-6">
              <h2 className="text-3xl font-bold mb-4 md:mb-16 text-left">
              Secure Mainframe Solutions
              </h2>
              <ul className="text-base pl-10 list-disc space-y-3 text-left">
                <li>Enhanced Security IBM Z offers encryption and access controls to protect data.</li>
                <li>Compliance Tools for auditing and monitoring help meet regulatory requirements</li>
                <li>High Availability Designed for resilience, minimizing downtime.
                </li>

              </ul>
            </div>
          </div>
        </div>

        <div className="p-6 md:p-10 mb-5 bg-white rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row gap-6 md:gap-10">
            <div className="md:w-1/2 w-full md:pl-6 mt-6 md:mt-6">
              <h2 className="text-3xl font-bold mb-4 md:mb-16 text-left">
              Efficient Linux Workloads
              </h2>
              <ul className="text-base pl-10 list-disc space-y-3 text-left">
                <li>
                Workload Isolation Secure environments protect data integrity.
                </li>
                <li>
                Energy Efficiency Consolidation reduces energy consumption and costs.
                </li>
                <li>Scalability High-performance capabilities support efficient workload scaling.
                </li>
                
              </ul>
            </div>
            <div className="md:w-1/2 w-full p-1 md:p-4 d-flex justify-end">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={sands2}
                  className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                  alt="Business Intelligence & Analytics"
                />
              </div>
            </div>
          </div>
        </div>


        {/* <div className="p-6 md:p-10 mb-5 bg-white rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row gap-6 md:gap-10">
            <div className="md:w-1/2 w-full p-1  md:p-4">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={sands3}
                  className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                  alt="Data Orchestration"
                />
              </div>
            </div>
            <div className="md:w-1/2 w-full md:pl-6 mt-6 md:mt-6">
              <h2 className="text-3xl font-bold mb-6 md:mb-16 text-left">
              Application Modernization
              </h2>
              <ul className="text-base pl-5 list-disc space-y-3 text-left">
                <li>Flexibility Integrates cloud services with legacy systems for agility.</li>
                <li>Cost Optimization Allocates resources based on needs, preventing waste</li>
                <li>Innovation Drives growth and operational efficiency.
                </li>

              </ul>
            </div>
          </div>
        </div> */}

        <div className="p-6 md:p-10 mb-5 bg-white rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row gap-6 md:gap-10">
            <div className="md:w-1/2 w-full md:pl-6 mt-6 md:mt-6">
              <h2 className="text-3xl font-bold mb-4 md:mb-16 text-left">
              Sustainability Goals
              </h2>
              <ul className="text-base pl-10 list-disc space-y-3 text-left">
                <li>
                Reduced Carbon Footprint Energy-efficient practices lower emissions.
                </li>
                <li>
                Cost Savings Reduces operational costs through efficiency.
                </li>
                <li>Brand Reputation Enhances reputation and supports compliance with sustainability goals.
                </li>
                
              </ul>
            </div>
            <div className="md:w-1/2 w-full p-1 md:p-4 d-flex justify-end">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={sands3}
                  className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                  alt="Business Intelligence & Analytics"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-light">
  <h1 className="display-4 text-center mb-4" style={{ fontFamily: "league spartan", fontWeight: "bold" }} id="inds">
    Industries we serve
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


                <Certifications />

                <section className="py-8">
        <div className="container mx-auto max-w-7xl px-4">
          <h1 className="text-5xl font-bold text-center mb-12">
            {/* Powered by <span className="text-red-600">watsonX</span> */}
            Products
          </h1>

          {/* Watson Assistant */}
          <div className="mb-10 flex flex-wrap md:flex-nowrap items-center justify-between">
            <div className="md:w-1/2 w-full md:pr-10">
              <h2 className="text-3xl font-bold mb-4">LinuxOne</h2>
              <p className="text-lg">
              LinuxONE is a portfolio of hardware, software, and solutions designed for an enterprise-grade Linux
environment. It is optimized for running more transactions faster and with more security and reliability,
specifically for the open-source community
              </p>
            </div>
            <div className="md:w-1/2 w-full flex justify-center ">
              <div className="animation-border">
              <img
                src={l1}
                alt="Watson Assistant"
                className="rounded-lg  w-full  object-cover"
                // style={{width:"400px",height:"400px"}}
                style={{width:"600px",height:"390px",borderTopLeftRadius:"100px",borderBottomRightRadius:"100px",borderTopRightRadius:"0px",borderBottomLeftRadius:"0px",border:"12px solid #EEEEEE"}}
              />
              </div>
            </div>
          </div>

          {/* Watson Discovery */}
          <div className="mb-10 flex flex-wrap md:flex-nowrap items-center justify-between">
            <div className="md:w-1/2 w-full flex justify-center ">
              <img
                src={wat5}
                alt="Watson Discovery"
                className="rounded-lg h-auto w-full max-w-xs object-cover animation-border"
              />
            </div>
            <div className="md:w-1/2 w-full md:pl-10">
              <h2 className="text-3xl font-bold mb-4">Turbonomic</h2>
              <p className="text-lg">
              offers visibility into application performance and resource utilization, allowing
organizations to optimize their infrastructure based on real-time data.

              </p>
            </div>
          </div>

          {/* Instana */}
          <div className="mb-10 flex flex-wrap md:flex-nowrap items-center justify-between">
            <div className="md:w-1/2 w-full md:pr-10">
              <h2 className="text-3xl font-bold mb-4">Watson AIOps</h2>
              <p className="text-lg">
              leverages AI to analyze operational data, providing insights that help teams
understand system performance and proactively resolve issues.

              </p>
            </div>
            <div className="md:w-1/2 w-full flex justify-center ">
              <img
                src={wat2}
                alt="Instana"
                className="rounded-lg h-auto w-full max-w-xs object-cover animation-border2"
              />
            </div>
          </div>

          {/* Cognos */}
          <div className="mb-10 flex flex-wrap md:flex-nowrap items-center justify-between">
            <div className="md:w-1/2 w-full flex justify-center ">
            <div className='animation-border'>
                 <br /><br />
                <img src={seven1} alt="" style={{
                  width:"330px"
                  
                }}
                className='mt-4'
                />
              </div>
            </div>
            <div className="md:w-1/2 w-full md:pl-10">
              <h2 className="text-3xl font-bold mb-4">SevOne</h2>
              <p className="text-lg">
              delivers automated network observability, enabling deep insights into network performance
              across multivendor environments, ensuring continuous monitoring and proactive management.
              </p>
            </div>
          </div>

        
        </div>
      </section>

            {/* FAQ Accordion */}
            <section className=" flex items-center justify-center min-h-screen">
        <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-8">
            Frequently Asked Questions
          </h1>
          <div className="space-y-4">
            {securityAccordionData.map((item, index) => (
              <div key={index} className="border-b">
                <h2>
                  <button
                    className={`w-full text-left py-4 px-6 text-black  focus:outline-none flex justify-between items-center ${
                      activeIndex === index ? "" : ""
                    }`}
                    onClick={() => toggleAccordion(index)}
                    style={{fontSize:"20px"}}
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
                  <div className="px-6 py-4" style={{fontSize:"20px"}}>{item.content}</div>
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
