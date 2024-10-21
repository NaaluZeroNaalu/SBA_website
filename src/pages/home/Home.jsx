import React, { useState, useEffect } from "react";
import Home1 from "../../assets/videos/Home1.mp4";
import Home4 from "../../assets/videos/Home4.mp4";
import Home5 from "../../assets/videos/Home5.mp4";
import Home6 from "../../assets/videos/Home6.mp4";
import Home7 from "../../assets/images/Home7.jpg";
import Home9 from "../../assets/videos/Home9.mp4";
import Home11 from "../../assets/videos/Home11.mp4";
import Home13 from "../../assets/videos/Home13.mp4";
import Homeg3 from "../../assets/images/Homeg3.png";
import Homeg4 from "../../assets/images/Homeg4.png";
import Homeg5 from "../../assets/images/Homeg5.png";
import Homeg6 from "../../assets/images/Homeg6.png";
import Homeg7 from "../../assets/images/Homeg7.png";
import Homeg8 from "../../assets/images/Homeg8.png";
import Homeg9 from "../../assets/images/Homeg9.png";
import Homeg11 from "../../assets/images/Homeg11.png";
import Home15 from "../../assets/videos/Home15.mp4";
import com1 from "../../assets/images/partners/company1.png";
import com2 from "../../assets/images/partners/company2.png";
import com3 from "../../assets/images/partners/company3.png";
import com4 from "../../assets/images/partners/company4.png";
import com5 from "../../assets/images/partners/company5.png";
import com6 from "../../assets/images/partners/company6.png";
import com7 from "../../assets/images/partners/company7.png";
import com8 from "../../assets/images/partners/company8.png";
import com9 from "../../assets/images/partners/company9.png";
import com10 from "../../assets/images/company10.jpeg";
import com11 from "../../assets/images/partners/company11.png";
import com12 from "../../assets/images/partners/company12.png";
import com13 from "../../assets/images/partners/company13.png";
import com14 from "../../assets/images/partners/company14.png";
import com15 from "../../assets/images/partners/company15.png";
import com16 from "../../assets/images/partners/company16.png";
import com17 from "../../assets/images/partners/company17.png";
import com18 from "../../assets/images/partners/company18.png";
import com19 from "../../assets/images/partners/company19.png";
import com20 from "../../assets/images/partners/company20.jpeg";
import com21 from "../../assets/images/partners/company21.png";
import com22 from "../../assets/images/partners/company22.png";
import com23 from "../../assets/images/partners/company23.png";
import com24 from "../../assets/images/partners/company24.png";
import com25 from "../../assets/images/partners/company25.png";
import com26 from "../../assets/images/partners/company26.png";
import com27 from "../../assets/images/partners/company27.png";
import com28 from "../../assets/images/partners/company28.jpg";
import com29 from "../../assets/images/partners/company29.jpg";
import com30 from "../../assets/images/partners/company30.jpeg";
import com31 from "../../assets/images/partners/company31.jpeg";
import com32 from "../../assets/images/partners/company32.png";
import com33 from "../../assets/images/partners/company33.png";
import com34 from "../../assets/images/partners/company34.png";
import com35 from "../../assets/images/partners/company35.png";
import com36 from "../../assets/images/partners/company36.png";
import com37 from "../../assets/images/partners/company37.jpg";
import com38 from "../../assets/images/partners/company38.png";
import com39 from "../../assets/images/partners/company39.png";
import com40 from "../../assets/images/partners/company40.jpg";
import com41 from "../../assets/images/partners/company41.png";
import com42 from "../../assets/images/partners/company42.png";
import homev from "../../assets/videos/homev.mp4"
import trusted from "../../assets/videos/trusted.mp4"
import redhat from "../../assets/images/trustedpartners/redhat.png"
import ibm from "../../assets/images/trustedpartners/ibm.png"
import "./style.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Counter from "./Counter";
import { Checkmark } from "react-checkmark";
import Certifications from "../common/certifications";
import Industriesweserve from "../common/industries";
import Sidecontent from "../sidecontact/side";
import Contactus from "../common/contact";

function Homepage(){

    const Discover = [
        com13,
        com14,
        com15,
        com16,
        com17,
        com18,
        com19,
        com20,
        com21,
        com22,
        com23,
        com24,
        com25,
        com26,
        com27,
        com28,
        com29,
        com30,
        com31,
        com32,
        com33,
        com34,
        com35,
        com36,
        com37,
        com38,
        com39,
        com40,
        com41,
        com42,
      ];
    
      const Ecosys = [
        com1,
        com2,
        com3,
        com4,
        com5,
        com6,
        com7,
        com8,
        com9,
        com10,
        com11,
        com12,
      ];

    return(
        <>
      <section className="relative w-full h-screen">
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center">
        {/* Large heading */}
        <div className="text-white text-6xl md:text-8xl font-extrabold">
           Automate the mundane
        </div>

        {/* Centered red box with large text */}
        <div className="bg-red-600 text-white font-extrabold px-10 py-4 mt-6 text-5xl md:text-6xl">
          Elevate Human potential
        </div>
      </div>

      {/* Background video */}
      <video className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop>
        <source src={Home1} type="video/mp4" />
      </video>

      {/* Overlay to darken the video */}
      <div className="absolute inset-0 bg-black opacity-60"></div>
    </section>


      <section className="responsive-video-section">
        <div className="relative w-full min-h-screen">
          <video className="absolute " autoPlay muted loop playsInline>
            <source src={Home13} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div
            className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full h-full px-4 py-8 sm:px-6 sm:py-12 md:px-10 md:py-16"
            style={{ paddingTop: "10%" }}
          >
            <div className="w-full md:w-[50%] mb-6 md:mb-0 text-center md:text-left">
              <p style={{fontWeight:"bold",textAlign:"left",color:"red",fontSize:"30px"}}>Vision</p>
              <h2 className="text-black font-bold  sm:text-4xl md:text-5xl mb-6 md:mb-36 leading-snug md:leading-tight" style={{fontSize:"30px",fontFamily:"league spartan",textAlign:"left"}}>
              
              To become a global leader in creating agile and
               secure work environments that boost productivity and 
               promote sustainable growth, contributing to a more resilient and 
               equitable global economy 
              </h2>
            </div>
            <div className="w-full md:w-[40%] bg-white bg-opacity-80 p-4 sm:p-6 rounded-md shadow-md">
              <h3 className="text-black-600 font-semibold text-lg sm:text-xl mb-4 border-animation p-10 rounded" id="ani" >
              <span style={{fontWeight:"bold",textAlign:"left",color:"red",fontSize:"30px"}}>Mission</span>
              <br />
              To be the transformative force that shapes an agile, purposeful future of work on a global scale 
              </h3>
              <p style={{fontWeight:"bold",textAlign:"left",color:"red",fontSize:"30px"}}>
                Value
              </p>

              <ul className="list-none space-y-2 ms-2">
                <li className="flex items-start">
                  <span className="text-red-500 text-xl mr-2">
                    <Checkmark size="25px" color="red" />
                  </span>
                  <span><b>Relentless curiosity & agility</b> </span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 text-xl mr-2">
                    <Checkmark size="25px" color="red" />
                  </span>
                  <span><b>Bold experimentation</b></span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 text-xl mr-2">
                    <Checkmark size="25px" color="red" />
                  </span>
                  <span>
                  <b>Multidisciplinary Innovation</b>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 text-xl mr-2">
                    <Checkmark size="25px" color="red" />
                  </span>
                  <span><b>Wisdom in Action</b></span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 text-xl mr-2">
                    <Checkmark size="25px" color="red" />
                  </span>
                  <span>
                  <b>Data and Future Obsessed</b>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* <section>
        <div className="relative w-full h-screen">
          <video
            className="absolute inset-0 object-cover w-full h-full"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={Home15} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="relative z-10 flex flex-col items-center justify-center h-full bg-black bg-opacity-50">
            <h2  style={{fontFamily:"league spartan"}} className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 text-center px-4">
              Intelligent Solutions
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6 md:px-10 w-full max-w-screen-xl">
            
            <div className="bg-white p-4 md:p-6 rounded-md shadow-md flex flex-col items-center hover:shadow-lg transition-shadow duration-300 relative">
    <img
      src={Homeg9}
      alt="Data, Automation & AI"
      className="h-12 md:h-16 mb-4"
    />
    <h3 className="text-center text-black font-semibold text-base md:text-lg">
      Data & AI
    </h3>
    <div className="absolute bottom-0 left-0 w-full h-4 bg-red-600"></div>
  </div>
            <div className="bg-white p-4 md:p-6 rounded-md shadow-md flex flex-col items-center hover:shadow-lg transition-shadow duration-300 relative">
              <img
                 src={Homeg7}
                           alt="Infrastructure & Application Modernization"
                           className="h-12 md:h-16 mb-4"
                           />
            <h3  className="text-center text-black font-semibold text-base md:text-lg">
      IT & Buisness Automation
                  </h3>
                 <div className="absolute bottom-0 left-0 w-full h-4 bg-red-600"></div>
            </div>

      
            <div className="bg-white p-4 md:p-6 rounded-md shadow-md flex flex-col items-center hover:shadow-lg transition-shadow duration-300 relative">
    <img
      src={Homeg11}
      alt="Managed Services"
      className="h-12 md:h-16 mb-4"
    />
    <h3 className="text-center text-black font-semibold text-base md:text-lg">
    Security and Sustainability
    </h3>
    <div className="absolute bottom-0 left-0 w-full h-4 bg-red-600"></div>
  </div>
      <div className="bg-white p-4 md:p-6 rounded-md shadow-md flex flex-col items-center hover:shadow-lg transition-shadow duration-300 relative">
    <img
      src={Homeg8}
      alt="Cyber Resiliency"
      className="h-12 md:h-16 mb-4"
    />
    <h3 className="text-center text-black font-semibold text-base md:text-lg">
    Open Hybrid Cloud
    </h3>
    <div className="absolute bottom-0 left-0 w-full h-4 bg-red-600"></div>
  </div>

              
  

  
            </div>
          </div>
        </div>
      </section> */}

      <section>

      </section>

      <section>
        <div className="relative w-full h-screen overflow-hidden">
          <video autoPlay muted loop className="absolute ">
            <source src={Home9} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="relative z-10 flex items-center justify-between w-full h-full px-1">
            <div className=" bg-white bg-opacity-70 p-8 rounded-lg shadow-lg">
              <p style={{fontFamily:"league spartan"}} className="text-lg md:text-2xl font-bold text-black leading-relaxed">
                In the modern workplace,{" "}
                <span className="text-red-500">
                  repetitive tasks like data entry and information retrieval
                </span>{" "}
              </p>
              <p style={{fontFamily:"league spartan"}} className="text-lg md:text-2xl font-bold text-black leading-relaxed">
                hinder employees from engaging in strategic and creative aspects
                of their roles
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative h-60 ms-2 me-2">
        <div className="absolute inset-0 flex justify-center items-center z-10 text-center container">
          <div className="text-white px-4">
            <h1 style={{fontFamily:"league spartan"}} className="text-white text-3xl md:text-5xl font-bold">
             
            </h1>
            <p style={{fontFamily:"league spartan "}} className="mt-4 text-xl md:text-4xl init-red-bg1">
            The problem is not that computers will begin to think like men, It’s that men will begin to think like computers
            </p>
           
          </div>
        </div>
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src={Home5} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black opacity-50 z-5"></div>
      </section>
<br /><br />
      <section className="relative  h-60  ms-3 me-3">
        <div className="absolute inset-0 flex justify-center items-center z-10 text-center px-4">
          <p style={{fontFamily:"league spartan "}} className="text-base sm:text-lg md:text-5xl lg:text-3xl xl:text-3xl ">
            <span className="text-red-600">
            Empower with Data, Accelerate with Agility
            </span>
            <br />
            <span className="" style={{color:"white",fontFamily:"league spartan ",fontSize:"30px"}}>
              {" "}
              Data drives informed decisions and operational efficiency, while an agile workforce fosters flexibility and speed, together propelling business growth and success.
            </span>
          </p>
        </div>

        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover z-0 hidden md:block"
        >
          <source src={homev} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>


<br /><br /><br /><br /><br />
      <section className="w-full bg-gray-50">
        <div className="py-10">
          <div className="mx-auto px-4 mb-10 max-w-screen-xl">
            <div className="flex justify-between items-start">
              <div className="w-full md:w-1/2">
                <h2 style={{fontFamily:"league spartan "}} className="text-3xl font-bold mb-4">
                  Discover how businesses become more intelligent with SBA
                </h2>
              </div>
              <div className="w-full md:w-1/2 text-right">
                <p style={{fontFamily:"league spartan "}} className="text-lg text-gray-600 mb-6">
                 
                </p>
                <a style={{fontFamily:"league spartan "}} className="text-lg">View client stories →</a>
              </div>
            </div>
          </div>

          <br /><br /><br />
          <div className="mx-auto px-8 max-w-screen-xl" style={{height:"250px"}}>
            <h3 style={{fontFamily:"league spartan "}} className="text-center text-3xl md:text-5xl font-bold">
              Trusted by talented leaders at:
            </h3>
            <br /><br />
            <Slider
              dots={false}
              infinite={true}
              speed={500}
              slidesToShow={5}
              slidesToScroll={1}
              autoplay={true}
              autoplaySpeed={2000}
              nextArrow={
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              }
              prevArrow={
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 5l-7 7 7 7"
                    />
                  </svg>
                </div>
              }
            >
              {Discover.map((logo, index) => (
                <div key={index} className="px-2">
                  <img
                    src={logo}
                    alt={`Company logo ${index + 1}`}
                    className="mx-auto h-20"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
<br />
      <section>
        <Counter />
      </section>

      <section className="w-full bg-gray-50">
        <div className="py-10">
          

  <section className="relative h-60 mx-3">
    <div className="absolute inset-0 flex flex-col justify-center items-center z-10 text-center px-4">
        <br /><br /><br /><br /><br /><br /><br /><br />
        <h2 className="text-6xl font-bold mb-4" style={{fontFamily:"league spartan",fontWeight:"bold"}}>Our Partner Ecosystem</h2>

        <div className="flex justify-center">
            <div className="mx-5"> {/* Adjust spacing between images */}
                <img src={redhat} alt="Red Hat" className=" object-contain" style={{width:"300px"}} />
            </div>
            <div className="mx-5"> {/* Adjust spacing between images */}
                <img src={ibm} alt="IBM" className=" object-contain" style={{width:"300px"}} />
            </div>
        </div>
    </div>

    <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full  object-cover z-0 hidden md:block"
        style={{height:"400px"}}
    >
        <source src={trusted} type="video/mp4" />
        Your browser does not support the video tag.
    </video>
</section>
        </div>
      </section>

      
      <br /><br /><br /><br /><br /><br /><br /><br /><br />
      <Industriesweserve />
      <br /><br /><br /><br />
      <Certifications />
      <br /><br /><br /><br />

      <Contactus />

        </>
    )
}

export default Homepage