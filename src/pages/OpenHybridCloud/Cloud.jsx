import React, { useState } from 'react';
import "./style.scss";
import HyperClouds from "../../assets/videos/HybridCloud.mp4";
import hyper1 from "../../assets/images/hyper1.jpg";
import hyper2 from "../../assets/images/hyper2.jpg";
import hyper3 from "../../assets/images/hyper3.jpg";

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


    return(
        <>
<section>
        <div class="ai-green-v1">
          <div class="init-ai-section1">
            <div className="abspage16">Open Hybrid Cloud</div>
            <div class="init-red-bg16 ">
              Integrated Cloud Services
            </div>
          </div>
          <video autoPlay muted loop>
            <source src={HyperClouds} type="video/mp4" />
          </video>
        </div>
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


<section>
  <div className="p-4 space-y-6">
    {/* Red Hat OpenShift Section */}
    <div className="flex flex-col md:flex-row bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-6 md:w-2/3">
        <h2 className="text-5xl font-semibold text-gray-800 mb-4 text-left">Our Solutions:</h2>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-left">Infrastructure Management & security</h2>
        <ul className="list-disc list-inside space-y-2  text-left text-base font-normal">
          <li className='text-2xl'>Automates security practices and compliance checks to reduce risks.</li>
          <li className='text-2xl'>Enhances the efficiency of provisioning, configuration, and management of infrastructure through the implementation of Ansible.</li>
          <li className='text-2xl'>Operates without the need for agents on target systems, simplifying deployment and reducing overhead.</li>
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

    {/* Red Hat Ansible Section */}
    <div className="flex flex-col md:flex-row bg-white shadow-md rounded-lg overflow-hidden">
      <div className="flex md:w-1/2">
        <img
          src={hyper2}
          alt="Data center illustration"
          className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-6 md:w-2/3">
        <h2 className="text-4xl font-semibold text-gray-800 mb-4 text-left" style={{fontFamily:"league spartan"}}>Application Development and delivery:</h2>
        <ul className="list-disc list-inside space-y-2  text-left text-base font-normal" style={{fontFamily:"glacial indifference"}}>
          <li className='text-2xl'>Facilitates the development, deployment, and management of applications in a containerized environment.</li>
          <li className='text-2xl'>Facilitates the migration of outdated applications to contemporary architectures utilizing OpenShift</li>
          <li className='text-2xl'>Enables deployment and management of applications at the edge, closer to data sources.</li>
          <li className='text-2xl'>Provides capabilities for virtualizing resources and optimizing infrastructure usage.</li>
        </ul>
      </div>
    </div>

    {/* Red Hat Enterprise Linux (RHEL) Section */}
    <div className="flex flex-col md:flex-row bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-6 md:w-2/3">
        <h2 className="text-4xl font-semibold  mb-4 text-left" style={{fontFamily:"league spartan"}}>OS management & Security</h2>
        <ul className="list-disc list-inside space-y-2 text-left text-base font-normal" style={{fontFamily:"glacial indifference"}}>
          <li className='text-2xl'>Streamlines system administration and management tasks.</li>
          <li className='text-2xl'>RHEL Provides tools and features for enhancing security and ensuring compliance with standards.</li>
          <li className='text-2xl'>Delivers stable and reliable performance across various workloads.</li>
        </ul>
      </div>
      <div className="flex md:w-1/2">
        <img
          src={hyper3}
          alt="Security and technology illustration"
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
        <h2 className="text-4xl font-semibold text-gray-800 mb-4 text-left" style={{fontFamily:"league spartan"}}>Products:</h2>
        <ul style={{fontFamily:"glacial indifference"}}>
          <li className='text-2xl'><strong>RHEL:</strong>Red Hat Enterprise Linux (RHEL) is a stable and secure Linux distribution tailored for enterprise
          environments, offering robust performance and comprehensive support It includes features like SELinux
          for enhanced security, regular updates for vulnerability management, and extensive documentation to aid
          system administrators in maintaining their infrastructure 
          </li>
          <li className='text-2xl'><strong>Redhat Ansible automation platform :</strong>Ansible is an open-source automation tool that simplifies IT
               processes such as configuration management, application deployment, and orchestration by using
              human-readable YAML playbooks, eliminating the need for agents on target systems.
          </li>
          <li className='text-2xl'><strong>Redhat Openshift:</strong>: OpenShift is a Kubernetes-based container platform developed by Red Hat that
facilitates the deployment, scaling, and management of containerized applications. It provides a unified
development and operational experience, enabling teams to build, deploy, and manage applications
consistently across hybrid cloud environments
          </li>
        </ul>
      </div>
</div>

<div className="flex flex-col md:flex-row bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-6 md:w-2/3">
        <h2 className="text-4xl font-semibold text-gray-800 mb-4 text-left"  style={{fontFamily:"league spartan"}}>Redhat Ansible automation platform:</h2>
        <p className='text-2xl' style={{fontFamily:"glacial indifference"}}>
        Ansible is an open-source automation tool that simplifies
         IT processes such as configuration management, application deployment, and orchestration
         by using human-readable YAML playbooks, eliminating the need for agents on target systems.
        </p>
      </div>
      <div className="flex md:w-1/2">
        <img
          src={hyper3}
          alt="Security and technology illustration"
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
        <h2 className="text-4xl font-semibold text-gray-800 mb-4 text-left"  style={{fontFamily:"league spartan"}}>Redhat Openshift:</h2>
        <p className='text-2xl'   style={{fontFamily:"glacial indifference"}}>
        OpenShift is a Kubernetes-based container platform developed by Red Hat that 
        facilitates the deployment, scaling, and management of containerized applications.
         It provides a unified development and operational experience, enabling teams to build, deploy, 
        and manage applications consistently across hybrid cloud environments.
        </p>
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
<br /><br />

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
    )
}

export default Openhybridcloud;