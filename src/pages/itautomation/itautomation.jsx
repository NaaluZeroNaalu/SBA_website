import React, { useState } from 'react';
import Indus from "../../assets/videos/Industries.mp4";
import "./style.scss";
import HyperClouds from "../../assets/videos/HybridCloud.mp4";
import hyper1 from "../../assets/images/hyper1.jpg";
import hyper2 from "../../assets/images/hyper2.jpg";
import hyper3 from "../../assets/images/hyper3.jpg";


function Itautomation() {
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

    

    return (
        <>
            <section>
                <div className="ai-green-Ins1">
                    <div className="init-ai-sectionIns1">
                        <div className="Ins1">IT Automation</div>
                        <div className="init-red-bg px-5" style={{marginLeft:"-400px"}}>
                            Empower Your Operations
                        </div>
                    </div>
                    <video autoPlay muted loop>
                        <source src={Indus} type="video/mp4" />
                    </video>
                </div>
            </section>

            <section>
                
               
    <div className="flex flex-col md:flex-row bg-white shadow-md rounded-lg overflow-hidden">
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
     
    </div>
            </section>

            <section>
 <div className="flex flex-col md:flex-row bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-6 md:w-2/3">
        <h2 className="text-5xl font-semibold text-gray-800 mb-4 text-left" style={{fontFamily:"league spartans"}}>Our Solutions:</h2>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-left" style={{fontFamily:"league spartans"}}>Automated IT Service Management (ITSM)</h2>
        <ul className="list-disc list-inside space-y-2  text-left text-base font-normal" style={{fontFamily:"glacial indifference"}}>
          <li className='text-3xl'>Automates incident, problem, and change management.</li>
          <li className='text-3xl'>Centralized platform for handling service requests and issues.</li>
          <li className='text-3xl'>Ensures faster resolution and higher service availability.</li>
        </ul>
      </div>
      <div className="flex md:w-1/2">
        <img
          src={hyper1}
          alt="Cloud illustration"
          className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
        />
      </div>
    </div>

    <div className="flex flex-col md:flex-row bg-white shadow-md rounded-lg overflow-hidden">
      <div className="flex md:w-1/2">
        <img
          src={hyper2}
          alt="Data center illustration"
          className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-6 md:w-2/3">
        <h2 className="text-4xl font-semibold text-gray-800 mb-4 text-left" style={{fontFamily:"league spartans",fontWeight:"bold"}}>Configuration Management Automation</h2>
        <ul className="list-disc list-inside space-y-2  text-left text-base font-normal" style={{fontFamily:"glacial indifference"}}>
          <li className='text-3xl'>Automates configuration management across hybrid and multi-cloud environm</li>
          <li className='text-3xl'>Enforces configuration policies and automatically detects unauthorized changes.</li>
          <li className='text-3xl'>Helps IT teams maintain compliance effectively.</li>
        </ul>
      </div>
    </div>

    <div className="flex flex-col md:flex-row bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-6 md:w-2/3">
        <h2 className="text-5xl font-semibold text-gray-800 mb-4 text-left" style={{fontFamily:"league spartans",fontWeight:"bold"}}> Automated Backup and Recovery</h2>
        {/* <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-left">Automated IT Service Management (ITSM)</h2> */}
        <ul className="list-disc list-inside space-y-2  text-left text-base font-normal" style={{fontFamily:"glacial indifference"}}>
          <li className='text-3xl'>Automates data backup and recovery.</li>
          <li className='text-3xl'>Simplifies backup management for both on-premises and cloud environments.</li>
          <li className='text-3xl'>Automatically protects data, ensuring it is recoverable during system failures.</li>
        </ul>
      </div>
      <div className="flex md:w-1/2">
        <img
          src={hyper1}
          alt="Cloud illustration"
          className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
        />
      </div>
    </div>
    
    <div className="flex flex-col md:flex-row bg-white shadow-md rounded-lg overflow-hidden">
      <div className="flex md:w-1/2">
        <img
          src={hyper2}
          alt="Data center illustration"
          className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-6 md:w-2/3">
        <h2 className="text-4xl font-semibold text-gray-800 mb-4 text-left" style={{fontFamily:"league spartans",fontWeight:"bold"}}>Cloud Resource Orchestration</h2>
        <ul className="list-disc list-inside space-y-2  text-left text-base font-normal" style={{fontFamily:"glacial indifference"}}>
          <li className='text-3xl'>Optimizes cloud resource provisioning, scaling, and monitoring.</li>
          <li className='text-3xl'>Continuously analyzes application performance.</li>
          <li className='text-3xl'>Automatically adjusts resources for optimal performance and cost control.</li>
        </ul>
      </div>
    </div>

    <div className="flex flex-col md:flex-row bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-6 md:w-2/3">
        <h2 className="text-5xl font-semibold text-gray-800 mb-4 text-left" style={{fontFamily:"league spartans",fontWeight:"bold"}}>Predictive Maintenance Automation</h2>
        {/* <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-left">Automated IT Service Management (ITSM)</h2> */}
        <ul className="list-disc list-inside space-y-2  text-left text-base font-normal" style={{fontFamily:"glacial indifference"}}>
          <li className='text-3xl'>Automates asset management and predictive maintenance.</li>
          <li className='text-3xl'>Uses AI-driven insights to analyze real-time equipment data.</li>
          <li className='text-3xl'>Predicts maintenance needs, reducing downtime and repair costs.</li>
        </ul>
      </div>
      <div className="flex md:w-1/2">
        <img
          src={hyper1}
          alt="Cloud illustration"
          className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
        />
      </div>
    </div>

<br /><br />
</section>

            {/* FAQ Accordion */}
            <section className="bg-[#F5F9FD] flex items-center justify-center min-h-screen">
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
      </section>
        </>
    );
}

export default Itautomation;
