import React from "react";
import "./style.scss";
import Indus from "../../assets/videos/Industries.mp4";
import Industries1 from "../../assets/images/Industries1.jpg";
import Industries2 from "../../assets/images/Industries2.jpg";
import Industries3 from "../../assets/images/Industries3.jpg";
import Industries4 from "../../assets/images/Industries4.jpg";
import Industries5 from "../../assets/images/Industries5.jpg";
import Industries6 from "../../assets/images/Industries6.jpg";
import Contactus from "../common/contact";
import Certifications from "../common/certifications";


function Industries(){


    return(
        <>
        <section>
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
      </section>

      <section>
        <div className="p-6 md:p-10 mb-5 bg-white rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center">
            <div className="md:w-1/2 w-full md:pl-6 mt-6 md:mt-0 text-left">
              <p className="text-xl md:text-2xl font-sans">
              At SBA, we specialize in delivering robust IT services 
              and security solutions to meet the unique needs of various industries, 
              including Banking, Financial Services, and Insurance (BFSI), 
              Manufacturing, Media, IT and IT-Enabled Services (IT & ITES), and Healthcare, ensuring the integrity and security of their data centers, 
              cloud infrastructure, and information security practices.
              </p>
            </div>
            <div className="md:w-1/2 w-full p-1 md:p-4 flex justify-end">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={Industries1} // Replace with actual image path
                  className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                  alt="Enterprise IT Solutions"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="p-6 md:p-10 mb-5 bg-white rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row gap-6 md:gap-10">
            <div className="md:w-1/2 w-full p-1 md:p-4 flex justify-end">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={Industries2}
                  className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                  alt="Enterprise ML and Generative AI"
                />
              </div>
            </div>
            <div className="md:w-1/2 w-full md:pl-6 mt-4 md:mt-6">
              <h2 className="text-3xl font-bold mb-6 md:mb-9 text-left text-gray-600">
                <b>BFSI</b>
              </h2>
              <ul className="text-2xl pl-5 list-disc space-y-5 text-left">
                <p>
                  SBA offers end-to-end services for the BFSI industry,
                  including digital transformation, IT consulting,
                  cybersecurity, data analytics, and regulatory compliance
                </p>
                <p>
                  These solutions enhance operational efficiency, ensure data
                  security, and support seamless integration of advanced
                  technologies, helping financial institutions stay competitive
                  and compliant
                </p>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="p-6 md:p-10 mb-5 bg-white rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row gap-6 md:gap-10">
            <div className="md:w-1/2 w-full md:pl-6 mt-4 md:mt-6">
              <h2 className="text-3xl font-bold mb-6 md:mb-9 text-left text-gray-600">
                <b>Manufacturing</b>
              </h2>
              <ul className="text-2xl pl-5 list-disc space-y-5 text-left">
                <p>
                We provide advanced solutions for manufacturing industries that include:
                </p>
              </ul>

              <ul className=" pl-10 list-disc text-3xl space-y-5 text-left">
                <li>Predictive Maintenance</li>
                <li>Supply Chain Optimization</li>
                <li>Cloudera Workload Optimization</li>
                <li>SAP Observability</li>
                <li>High Performance Analytics</li>
                <li>AI Assistants</li>
              </ul>
            </div>
            <div className="md:w-1/2 w-full p-1 md:p-4 flex justify-end">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={Industries3}
                  className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                  alt="Enterprise ML and Generative AI"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="p-6 md:p-10 mb-5 bg-white rounded-lg shadow-md">
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
        </div>
      </section>

      <section>
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
      </section>

      <section>
        <div className="p-6 md:p-10 mb-5 bg-white rounded-lg shadow-md">
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
        </div>
      </section>

      <section>
        <div className="p-6 md:p-10 mb-5 bg-white rounded-lg shadow-md">
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
        </div>
      </section>

      <Certifications />
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