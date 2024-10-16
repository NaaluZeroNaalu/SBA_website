import React, { useState } from 'react';
import HyperClouds from "../../assets/videos/HybridCloud.mp4";
import "./style.scss";
import hyper3 from "../../assets/images/hyper3.jpg";

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

    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
            <section>
                <div className="ai-green-ss">
                    <div className="init-ai-section1">
                        <div className="abspage16">Security and Sustainability</div>
                        <div className="init-red-bg16 ">
                            Secure Enterprise Computing
                        </div>
                    </div>
                    <video autoPlay muted loop>
                        <source src={HyperClouds} type="video/mp4" />
                    </video>
                </div>
            </section>

            <section>
                <div className="flex flex-col md:flex-row bg-white shadow-md rounded-lg overflow-hidden">
                    <div className="p-6 md:w-2/3">
                        <h2 className="text-5xl font-bold mb-4 text-left">Secure Mainframe Solutions</h2>
                        <ul className="list-disc list-inside space-y-2 text-left text-base font-normal">
                            <li className='text-3xl'>Enhanced Security: IBM Z offers encryption and access controls to protect data.</li>
                            <li className='text-3xl'>Compliance Tools for auditing and monitoring help meet regulatory requirements.</li>
                            <li className='text-3xl'>High Availability: Designed for resilience, minimizing downtime.</li>
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
                            src={hyper3}
                            alt="Data center illustration"
                            className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
                        />
                    </div>
                    <div className="p-6 md:w-2/3">
                        <h2 className="text-5xl font-bold text-gray-800 mb-4 text-left">Efficient Linux Workloads</h2>
                        <ul className="list-disc list-inside space-y-2 text-left text-base font-normal">
                            <li>Workload Isolation: Secure environments protect data integrity.</li>
                            <li>Energy Efficiency: Consolidation reduces energy consumption and costs.</li>
                            <li>Scalability: High-performance capabilities support efficient workload scaling.</li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row bg-white shadow-md rounded-lg overflow-hidden">
                    <div className="p-6 md:w-2/3">
                        <h2 className="text-5xl font-bold mb-4 text-left">Sustainability Goals</h2>
                        <ul className="list-disc list-inside space-y-2 text-left text-base font-normal">
                            <li className='text-2xl'>Reduced Carbon Footprint: Energy-efficient practices lower emissions.</li>
                            <li className='text-2xl'>Cost Savings: Reduces operational costs through efficiency.</li>
                            <li className='text-2xl'>Brand Reputation: Enhances reputation and supports compliance with sustainability goals.</li>
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
            </section>

            <div className="flex flex-col md:flex-row bg-white shadow-md rounded-lg overflow-hidden">
                    <div className="flex md:w-1/2">
                        <img
                            src={hyper3}
                            alt="Data center illustration"
                            className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
                        />
                    </div>
                    <div className="p-6 md:w-2/3">
                        <h2 className="text-5xl font-bold text-gray-800 mb-4 text-left">Industries use case</h2>
                        <ul className="list-disc list-inside space-y-2 text-left text-base font-normal">
                            <li>
                            <strong>Banking & Financial Services:</strong> 
                            Scalable infrastructure for fraud detection 
                            and regulatory
                            compliance.

                            </li>
                            <li>
                            <strong>Healthcare:</strong> 
                            Secure data management and high-performance 
                            computing for improved patient care
                            and operational efficiency.
                            </li>
                            <li>
                            <strong>Manufacturing:</strong> 
                            Rreal-time monitoring and quality 
                            control with scalable, efficient data processing.
                            </li>
                            <li>
                            <strong>IT/ITES:</strong> 
                            Provides a secure cloud environment 
                            with high-performance computing for enhanced
                            service management.
                            </li>
                            
                            <li>
                            <strong>Telecommunications:</strong> 
                            Delivers scalable, secure infrastructure 
                            for handling high data volumes and
                            ensuring compliance
                            </li>
                            
                        </ul>
                    </div>
                </div>

            {/* FAQ Accordion */}
            <section className="mt-10">
                <h3 className="text-xl font-bold">Frequently Asked Questions</h3>
                {securityAccordionData.map((item, index) => (
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
            </section>

            
        
        </>
    );
}

export default Securityandsus;
