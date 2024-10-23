import React, { useState } from 'react';
import "./style.scss";
import HyperClouds from "../../assets/videos/openhybridcloud2.mp4";
import cloud1 from "../../assets/images/cloud/cloud1.png"
import cloud2 from "../../assets/images/cloud/cloud2.png"
import cloud3 from "../../assets/images/cloud/cloud3.png"
import cloud4 from "../../assets/images/cloud/cloud4.png"
import cloud5 from "../../assets/images/cloud/cloud5.png"
import cloud6 from "../../assets/images/cloud/cloud6.png"
import Contactus from '../common/contact';
import Certifications from '../common/certifications';
import Industriesweserve from '../common/industries';
import aili from "../../assets/images/ai-li.svg";
import aiOrnamentImage from "../../assets/images/image.png";
import aiSectionImage from "../../assets/images/cloud/cloud6.png";
import ind1 from "../../assets/images/ind_1.png";
import ind2 from "../../assets/images/ind_2.png";
import ind3 from "../../assets/images/ind_3.png";
import ind4 from "../../assets/images/ind_4.png";
import ind5 from "../../assets/images/media.png"
import { FaLongArrowAltRight } from "react-icons/fa";
import rhel from "../../assets/images/cloud/redhat.png"
import ansi from "../../assets/images/cloud/ansible.png"
import open from "../../assets/images/cloud/openshift.png"
import Watsons from '../common/watsons';
import rt_arrow from "../../assets/images/rt_arrow_bl.svg";
import p1 from "../../assets/images/cloud/powerdby/1.png"
import p2 from "../../assets/images/cloud/powerdby/2.png"
import p3 from "../../assets/images/cloud/powerdby/3.png"

function Openhybridcloud(){

  const accordionData = [
    {
        title: "What is Red Hat Enterprise Linux (RHEL) and what makes it a preferred choice?",
        content: "RHEL is a stable and reliable operating system that offers robust security features, making it a preferred choice for enterprise environments",
    },
    {
        title: "How does RHEL uphold security measures and ensure compliance?",
        content: "RHEL upholds security measures and ensures compliance through automated patch management and compliance tools like OpenSCAP.",
    },
    {
        title: "What strategies can I use to manage updates and patches in RHEL?",
        content: "You can manage updates and patches in RHEL by using tools like Red Hat Satellite and Red Hat Insights to automate the process.",
    },
    {
        title: "What is the significance of Red Hat Insights in the RHEL framework?",
        content: "Red Hat Insights provides proactive monitoring and predictive analytics to identify potential issues before they become critical, enhancing system reliability.",
    },
    {
        title: "Why is having support from Red Hat essential for users of RHEL?",
        content: "Having support from Red Hat is essential because it provides access to security updates, bug fixes, and expert technical assistance, ensuring system security and stability.",
    },
    {
        title: "What are the advantages of deploying RHEL in cloud settings?",
        content: "Deploying RHEL in cloud settings offers scalability, flexibility, and cost-effectiveness, allowing businesses to quickly adapt to changing needs.",
    },
    {
        title: "What is Ansible and why is it vital for automation processes?",
        content: "Ansible is an open-source automation tool that simplifies IT tasks by automating configuration management, application deployment, and continuous delivery, making it vital for efficient automation processes.",
    },
    {
        title: "How does Ansible function in practice?",
        content: "Ansible functions by using playbooks, which are YAML files that define tasks and configurations, to automate IT processes across multiple systems.",
    },
    {
        title: "What are the roles in Ansible and how do they contribute to better organization?",
        content: "Roles in Ansible are pre-defined configurations that can be reused across different playbooks, contributing to better organization and consistency in automation tasks.",
    },
    {
        title: "How can I incorporate Ansible into CI/CD pipelines?",
        content: "You can incorporate Ansible into CI/CD pipelines by integrating it with tools like Jenkins or GitLab CI/CD, allowing for automated deployment and configuration management.",
    },
];

const featuresforcloud = [
  "Flexibility to select the optimal environment for each workload",
  "Scalability to adjust applications and infrastructure according to demand",
  "Simplified management across different environments",
  "Enhanced security to protect applications and data through best practices",
  "Innovation by leveraging optimal technologies for every workload",
  "Increased efficiency through streamlined automated deployments",
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


      const industriesforcloud = [
        {
          title: "Finance",
          img: ind1,
          description: " Automation streamlines IT automation through agentless management, allowing system configuration without installing software on target devices and facilitating the shift from monolithic to microservices architecture.",
        },
        {
          title: "BFSI",
          img: ind2,
          description: "Streamlines configuration management and deploying applications across regions, ensuring business continuity and disaster recovery.",
        },
        {
          title: "Healthcare",
          img: ind3,
          description: "Streamline application deployment with Container orchestration ensuring a uniform user experience across environments, which accelerates workflows and enhances security through improved default configurations.",
        },
        {
          title: "IT/ITES",
          img: ind4,
          description: "Automating and boost performance, allowing organizations to take a proactive stance in managing their IT infrastructure and enhancing uptime. ",
        },
        {
          title: "Media",
          img: ind5,
          description: "Develop adaptable infrastructures that support various digital content platforms and automation tools, simplifying the management of hybrid cloud environments for seamless task automation across public, private, and on-premise systems.",
        },
      ];

    const [hoveredIndex, setHoveredIndex] = useState(null);

    return(
        <>

<section className="relative w-full h-screen">
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center">
        {/* Large heading */}
        <div className="text-white text-6xl md:text-8xl font-extrabold mt-5">
          Open Hybrid Cloud
        </div>

        {/* Centered red box with large text */}
        <div className="bg-red-600 text-white font-extrabold px-10 py-4 mt-6 text-5xl md:text-6xl">
          Integrated Cloud Services
        </div>
      </div>

      {/* Background video */}
      <video className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop>
        <source src={HyperClouds} type="video/mp4" />
      </video>

      {/* Overlay to darken the video */}
      <div className="absolute inset-0 bg-black opacity-60"></div>
    </section>

{/* <div className="flex flex-col md:flex-row bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-6 md:w-2/3">
        <h2 className="text-5xl font-semibold text-gray-800 mb-4 text-left">Open Hybrid Cloud
        </h2>
        <ul className=" list-inside space-y-2  text-left text-base font-normal">
          <p>
          SBA improves IT operations through an open hybrid cloud framework, facilitating effortless application
          deployment and automation
          </p>
        </ul>
      </div>
    
  </div>

<div className="flex flex-col md:flex-row bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-6 md:w-2/3">
        <h2 className="text-5xl font-semibold text-gray-800 mb-4 text-left">Benefits 

        </h2>
        <ul className=" list-inside space-y-2  text-left text-base font-normal">
          <p>
          Flexibility to select the optimal environment for each workload.
          Scalability to adjust applications and infrastructure according to demand.
          Simplified management across different environments.
          Enhanced security to protect applications and data through best practices.
          Innovation by leveraging optimal technologies for every workload.
          Increased efficiency through streamlined automated deployments
          </p>
        </ul>
      </div>
    


  </div> */}

  <br /><br />

  <section className="relative my-20">
        <div className="container mx-auto max-w-[1600px] px-16">
          <div className="flex flex-wrap">
            <div className="w-full md:w-8/12">
              <p className="text-[41px] font-light md:w-10/12 w-full">
              Accelerate Innovation with Agile, Scalable, and Secure
              </p>
              <p className="text-[41px] font-light mt-4 md:mt-20 md:w-9/12 w-full">
              SBA automates  {" "}
                <span className="text-red-600 font-semibold">
                IT tasks, optimize system performance, and enable seamless workflows
                </span>{" "} through Open Hybrid Cloud
                
              </p>
            </div>
            <div className="w-full md:w-4/12">
           <div className='animation-border' style={{height:"410px"}}>
           <img
                src={aiSectionImage}
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
            {featuresforcloud.map((text, index) => (
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
                  src={cloud1}
                  className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                  alt="Data Orchestration"
                />
              </div>
            </div>
            <div className="md:w-1/2 w-full md:pl-6 mt-6 md:mt-6">
              <h2 className="text-3xl font-bold mb-4 md:mb-16 text-left">
              Infrastructure Management & security
              </h2>
              <ul className="text-2xl pl-10 list-disc space-y-3 text-left">
                <li>Automates security practices and compliance checks to reduce risks.</li>
                <li>
                Enhances the efficiency of provisioning, configuration, and management of infrastructure through
                the implementation of Ansible.
                </li>
                <li>
                Operates without the need for agents on target systems, simplifying deployment and reducing
                overhead.
                </li>
              </ul>
            </div>
          </div>
    </div>


        <div className="p-6 md:p-10 mb-5 bg-white rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row gap-6 md:gap-10">
            <div className="md:w-1/2 w-full md:pl-6 mt-6 md:mt-6">
              <h2 className="text-3xl font-bold mb-4 md:mb-16 text-left">
              Application Development and delivery
              </h2>
              <ul className="text-2xl pl-10 list-disc space-y-3 text-left">
                <li>
                Facilitates the development, deployment, and management of applications in a containerized
                environment.
                </li>
                <li>
                Facilitates the migration of outdated applications to contemporary architectures utilizing OpenShift
                </li>
                <li>
                Enables deployment and management of applications at the edge, closer to data sources.
                </li>
                <li>
                Provides capabilities for virtualizing resources and optimizing infrastructure usage.
                </li>
              </ul>
            </div>
            <div className="md:w-1/2 w-full p-1 md:p-4 d-flex justify-end">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={cloud2}
                  className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                  alt="Business Intelligence & Analytics"
                />
              </div>
            </div>
          </div>
        </div>


        <div className="p-6 md:p-10 mb-5 bg-white rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row gap-6 md:gap-10">
            <div className="md:w-1/2 w-full p-1  md:p-4">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={cloud3}
                  className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                  alt="Data Orchestration"
                />
              </div>
            </div>
            <div className="md:w-1/2 w-full md:pl-6 mt-6 md:mt-6">
              <h2 className="text-3xl font-bold mb-4 md:mb-16 text-left">
              OS management & Security
              </h2>
              <ul className="text-2xl pl-10 list-disc space-y-3 text-left">
                <li>Streamlines system administration and management tasks.
                </li>
                <li>
                RHEL Provides tools and features for enhancing security and ensuring compliance with standards.
                </li>
                <li>
                Delivers stable and reliable performance across various workloads
                </li>
              </ul>
            </div>
          </div>
    </div>

</section>

{/* <section className="mt-10">
                <h3 className="text-xl font-bold">Frequently Asked Questions</h3>
                {accordionData.map((item, index) => (
                    <div key={index} className="border border-gray-300 rounded-md mb-2">
                        <button
                            onClick={() => toggleAccordion(index)}
                            className="flex justify-between items-center w-full p-4 text-left bg-gray-100 hover:bg-gray-200 focus:outline-none"
                        >
                            <span className="font-semibold">{item.title}</span>
                            <span className="ml-2">{openIndex === index ? '-' : '+'}</span>
                        </button>
                        {openIndex === index && (
                            <div className="p-4 bg-white border-t border-gray-300">
                                <p>{item.content}</p>
                            </div>
                        )}
                    </div>
                ))}

</section> */}

<section className="py-5 bg-light">
  <h1 className="display-4 text-center mb-4" style={{ fontFamily: "league spartan", fontWeight: "bold" }} id="inds">
    Industries we serve
  </h1>

  <div className="container">
    <div className="flex flex-wrap -mx-2"> {/* Negative margin to offset padding */}
      {industriesforcloud.map((industry, index) => (
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
<br /><br />
<section className="py-8">
        <div className="container mx-auto max-w-7xl px-4" id='products'>
          <h1 className="text-5xl font-bold text-center mb-12">
            {/* Powered by <span className="text-red-600">watsonX</span> */}
            Powered by
          </h1>

          {/* Watson Assistant */}
          <div className="mb-10 flex flex-wrap md:flex-nowrap items-center justify-between">
            <div className="md:w-1/2 w-full md:pr-10">
              <h2 className="text-3xl font-bold mb-4">RHEL</h2>
              <p className="text-lg">
              Red Hat Enterprise Linux (RHEL) is a stable and secure Linux distribution tailored for enterprise
              environments, offering robust performance and comprehensive support It includes features like SELinux
              for enhanced security, regular updates for vulnerability management, and extensive documentation to aid
              system administrators in maintaining their infrastructure 
              </p>
            </div>
            <div className="md:w-1/2 w-full flex justify-center ">
              <div className="animation-border">
              <div style={{height:"390px",borderTopLeftRadius:"100px",borderBottomRightRadius:"100px",borderTopRightRadius:"0px",borderBottomLeftRadius:"0px",border:"12px solid #EEEEEE"}}>
                <br /><br />
              <img
                src={rhel}
                alt="Watson Assistant"
                className="rounded-lg object-cover "
                // style={{width:"800px",height:"386px",borderTopLeftRadius:"100px",borderBottomRightRadius:"100px",borderTopRightRadius:"0px",borderBottomLeftRadius:"0px",border:"12px solid #EEEEEE"}}
              />
              </div>
              </div>
            </div>
          </div>

          {/* Watson Discovery */}
          <div className="mb-10 flex flex-wrap md:flex-nowrap items-center justify-between">
            <div className="md:w-1/2 w-full flex justify-center ">
              <div className="animation-border2">
                <div style={{height:"390px",borderTopRightRadius:"100px",borderBottomLeftRadius:"100px",borderTopLeftRadius:"0px",borderBottomRightRadius:"0px",border:"12px solid #EEEEEE"}}>
                  <br /><br />
              <img
                src={ansi}
                alt="Watson Discovery"
                className="rounded-lg  object-cover "
              />
                </div>
              </div>
            </div>
            <div className="md:w-1/2 w-full md:pl-10">
              <h2 className="text-1xl font-bold mb-4">Redhat Ansible Automation Platform</h2>
              <br />
              <p className="text-lg">
              Ansible is an open-source automation tool that simplifies IT
processes such as configuration management, application deployment, and orchestration by using
human-readable YAML playbooks, eliminating the need for agents on target systems
              </p>
            </div>
          </div>

          {/* Instana */}
          <div className="mb-10 flex flex-wrap md:flex-nowrap items-center justify-between">
            <div className="md:w-1/2 w-full md:pr-10">
              <h2 className="text-3xl font-bold mb-4">Redhat Openshift</h2>
              <p className="text-lg">
              OpenShift is a Kubernetes-based container platform developed by Red Hat that
facilitates the deployment, scaling, and management of containerized applications. It provides a unified
development and operational experience, enabling teams to build, deploy, and manage applications
consistently across hybrid cloud environments
              </p>
            </div>
            <div className="md:w-1/2 w-full flex justify-center ">
             <div className="animation-border">
              <div style={{height:"390px",borderTopLeftRadius:"100px",borderBottomRightRadius:"100px",borderTopRightRadius:"0px",borderBottomLeftRadius:"0px",border:"12px solid #EEEEEE"}}>
             <br /><br />
             <img
                src={open}
                alt="Instana"
                className="rounded-lg object-cover"
                
              />

              </div>
             </div>
            </div>
          </div>

      </div>
      </section>
<br /><br /><br />


<section className="pt-0 md:pt-5 w-full">
        <div className="w-full mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4" >
            <a href="https://www.ibm.com/products/z16" target="_blank" style={{textDecoration:"none",fontWeight:"bold"}}>
              <div
                className="h-60 bg-no-repeat bg-cover"
                style={{ backgroundImage: `url(${p1})`,border:"1px solid black",borderRadius:"10px"}}
              >
                <p className="flex items-end justify-center h-3/5 text-2xl text-black">
                  <span className="text-blue-600"></span>
                </p>
                <div className="flex justify-end px-3 mt-5">
                  {/* <a href="#">Readmore</a> */}
                  <img src={rt_arrow} loading="lazy" alt="arrow" />
                </div>
              </div>
            </a>

            <a href="https://mediacenter.ibm.com/media/What+is+LinuxONEF/1_ev1upbfx" target="_blank" style={{textDecoration:"none",fontWeight:"bold"}}>
              <div
                className="h-60 bg-no-repeat bg-cover"
                style={{ backgroundImage: `url(${p2})`,border:"1px solid black",borderRadius:"10px"}} 
              >
                <p className="flex items-end justify-center h-3/5 text-2xl text-black">
                <span className="text-blue-600"></span>
                </p>
                <div className="flex justify-end px-3 mt-5">
                  {/* <a href="#">Readmore</a> */}
                  <img src={rt_arrow} loading="lazy" alt="arrow" />
                </div>
              </div>
            </a> 
            <a href="https://mediacenter.ibm.com/media/What+is+LinuxONEF/1_ev1upbfx" target="_blank" style={{textDecoration:"none",fontWeight:"bold"}}>
              <div
                className="h-60 bg-no-repeat bg-cover"
                style={{ backgroundImage: `url(${p3})`,border:"1px solid black",borderRadius:"10px"}} 
              >
                <p className="flex items-end justify-center h-3/5 text-2xl text-black">
                <span className="text-blue-600"></span>
                </p>
                <div className="flex justify-end px-3 mt-5">
                  {/* <a href="#">Readmore</a> */}
                  <img src={rt_arrow} loading="lazy" alt="arrow" />
                </div>
              </div>
            </a> 
          </div>
        </div>
      </section>

<br /><br /><br /><br />
<section className=" flex items-center justify-center min-h-screen">
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
    )
}

export default Openhybridcloud;