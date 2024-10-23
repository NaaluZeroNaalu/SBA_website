import "./style.scss";
import aboutUs from "../../assets/videos/aboutUs.mp4";
import about1 from "../../assets/images/about1.svg";
import about2 from "../../assets/images/about2.svg";
import Contactus from "../common/contact";
import one from "../../assets/images/aboutus/1.png"
import two from "../../assets/images/aboutus/2.png"
import three from "../../assets/images/aboutus/3.png"
import four from "../../assets/images/aboutus/4.png"
import Certifications from "../common/certifications";

function Aboutus(){


    return(
        <>
         {/* <section>
        <div class="ai-green-v1">
          <div class="init-ai-section1">
            <div className="abspage" style={{marginLeft:"-400px",fontSize:"60px"}}>About Us</div>
            <div class="init-red-bg" style={{marginLeft:"300px",fontSize:"50px"}}>
              Intelligent Solutions, Limitless Potential
            </div>
          </div>
          <video autoPlay muted loop>
            <source src={aboutUs} type="video/mp4" />
          </video>
        </div>
      </section> */}
      <section className="relative w-full h-screen">
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center">
        {/* Large heading */}
        <div className="text-white text-6xl md:text-8xl font-extrabold" style={{fontFamily:"league spartan",fontSize:"100px"}}>
        About Us
        </div>

        {/* Centered red box with large text */}
        <div className="bg-red-600 text-white font-extrabold px-10 py-4 mt-6 text-5xl md:text-6xl" style={{fontFamily:"league spartan",fontSize:"80px"}}>
        Intelligent Solutions, Limitless Potential
        </div>
      </div>

      {/* Background video */}
      <video className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop>
        <source src={aboutUs} type="video/mp4" />
      </video>

      {/* Overlay to darken the video */}
      <div className="absolute inset-0 bg-black opacity-60"></div>
    </section>

      <section id="solutions">
      <div className="p-6 md:p-10 mb-5 bg-white rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row gap-6 md:gap-10">
            <div className="md:w-1/2 w-full md:pl-6 mt-6 md:mt-6">
              <h2 style={{fontFamily:"league spartan"}} className="text-3xl font-bold mb-4 md:mb-16 text-left">
                Why Choose Us?
              </h2>
              <p className="text-2xl  mb-4 md:mb-16 text-left" style={{fontWeight:"normal",fontFamily:"league spartan"}}>
              Founded in 1991, SBA Info Solutions 
              Private Limited is a Chennai-based automation company 
              with over 30 years of experience in delivering enterprise solutions. 
              We strive to empower professionals by advancing innovative solutions 
              that seamlessly integrate Data and AI,  Security & Sustainability, 
              and Open hybrid cloud technologies. 

              </p>
            </div>
            <div className="md:w-1/2 w-full p-1 md:p-4 d-flex justify-end">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={one}
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
                  src={two}
                  className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                  alt="Data Orchestration"
                />
              </div>
            </div>
            <div className="md:w-1/2 w-full md:pl-6 mt-6 md:mt-6">
              <p className="text-2xl  mb-4 md:mb-16 text-left" style={{fontWeight:"normal",fontFamily:"league spartan"}}>
              Our focus is on creating agile and secure work
               environments that boost productivity and promote sustainable growth, 
               contributing to a more resilient and equitable global economy.

               <br /><br />
              We thrive with our motto <span style={{color:"red"}}>“Automate the Mundane, Elevate Human Potential”</span>
 


              </p>
              
            </div>
          </div>
          </div>

          <div className="p-6 md:p-10 mb-5 bg-white rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row gap-6 md:gap-10">
            <div className="md:w-1/2 w-full p-1  md:p-4">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={three}
                  className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                  alt="Data Orchestration"
                />
              </div>
            </div>
            <div className="md:w-1/2 w-full md:pl-6 mt-6 md:mt-6">
              <h1 className="text-2xl  mb-4 md:mb-16 text-left" style={{fontWeight:"normal",fontFamily:"league spartan"}}>
              SBA has 60+ partnerships with top OEMs, 
              specializing in Next  Gen AI, ML, Cloud Services, and Security networks. 
              <br /><br />
              Our expertise spans BFSI, Manufacturing, IT/ITES,
               Healthcare, Media with solutions architecture 
               and consulting capabilities enhancing our AI Innovation Center 
               and Managed security services.
              </h1>
              
            </div>
          </div>
          </div>

          
          <div className="p-6 md:p-10 mb-5 bg-white rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row gap-6 md:gap-10">
            <div className="md:w-1/2 w-full p-1  md:p-4">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={four}
                  className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                  alt="Data Orchestration"
                />
              </div>
            </div>
            <div className="md:w-1/2 w-full md:pl-6 mt-6 md:mt-6">
            <h2 style={{fontFamily:"league spartan"}} className="text-4xl font-bold mb-4 md:mb-16 text-left">
            Commitment to Excellence
              </h2>
              <ul className="text-base pl-10 list-disc space-y-3 text-left" style={{fontFamily:"league spartan"}}>
                <li>
                <strong>Quality First:</strong> We deliver exceptional quality in everything we do.
                </li>
                <li>
                <strong>Innovate Always:</strong> We continuously innovate to improve our solutions and services.
                </li>
                <li>
                <strong>Customer Focus:</strong> We listen, understand, and deliver solutions that exceed expectations.
                </li>
                <li>
                <strong>Continuous Improvement:</strong> We continuously assess and improve our processes, products, and services.
                </li>
              </ul>
              
            </div>
          </div>
          </div>
      </section>
<br /><br />
      <Certifications />
<br /><br />
      <Contactus />
        </>
    )
}

export default Aboutus