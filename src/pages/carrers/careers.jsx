

import careers from "../../assets/videos/Careers.mp4"
import one from "../../assets/images/careers/1.png"
import two from "../../assets/images/careers/2.png"
import aiOrnamentImage from "../../assets/images/image.png";
import aili from "../../assets/images/ai-li.svg";
import Contactus from "../common/contact";
import ContactForm from "./contactuscareers";
import Sidecontent from "../sidecontact/side";

function Careers(){

  const features = [
    {
        title: "Collaborative Culture",
        content: "Work with smart, equally nice, and collaborative people passionate about making a difference. Our down-to-earth leadership team ensures that every voice is heard and valued."
    },
    {
        title: "Diverse Projects",
        content: "Engage in challenging and interesting solutions that push you to innovate and improve continuously. Our projects are designed to help you grow both professionally and personally."
    },
    {
        title: "Personal Growth",
        content: "Work on diverse projects that challenge you and help you grow along with the organization. Our ever-evolving nature means there are always new opportunities to explore."
    },
    {
        title: "Mentorship",
        content: "Work closely with experienced mentors who are dedicated to helping you grow. Our training programs are designed to help you learn, coach, and mentor others, ensuring a balanced work-life."
    },
    {
        title: "Innovation",
        content: "Innovate every day and have the freedom to contribute your ideas and evolve. We celebrate creativity and recognize the contributions of our team members."
    },
    {
        title: "Work-Life Balance",
        content: "Enjoy a balanced work-life that allows you to grow professionally without compromising your personal well-being. Our commitment to your happiness is paramount."
    },
];



    return(
        <>

<Sidecontent /> 

<section className="relative w-full h-screen" id="topvideo">
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center">
        {/* Large heading */}
        <div className="text-white text-8xl font-extrabold" id="toptext">
        Careers
        </div>

        {/* Centered red box with large text */}
        <div className="bg-red-600 text-white font-extrabold px-10 py-4 mt-6 text-6xl" id="bottomtext">
        Be Part of Something Exceptional
        </div>
      </div>

      {/* Background video */}
      <video className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop>
        <source src={careers} type="video/mp4" />
      </video>

      {/* Overlay to darken the video */}
      <div className="absolute inset-0 bg-black opacity-60"></div>
    </section>


    <section className="relative my-20 ">
        <div className="container  max-w-[1600px] px-16">
          <div className="flex flex-wrap">
            <div className="w-full md:w-8/12">
              <p className="text-[41px] font-light  w-full">
              
              {/* 
              SBA effectively automates repetitive tasks, enhance system efficiency, and facilitate smarter workflows.
              */}
              </p>
              <p className="text-[41px] mx-auto font-light mt-4 md:mt-20 md:w-9/12 w-full">
              Every day, {" "}
                <span className="text-red-600 mx-auto font-semibold">
                we innovate, adapt, and push boundaries
                </span>{" "}
                to make enterprises 
                <span className="text-red-600 mx-auto font-semibold">
                {" "} more agile and responsive.
                </span>
              </p>
            </div>
           = <div className="w-full md:w-4/12 flex justify-center">
        <div className='animation-border flex justify-center items-center' style={{ height: "auto", maxHeight: "410px", overflow: "hidden" }}>
          <img
            src={one}
            loading="eager"
            alt="AI"
            className="object-cover rounded-tl-[100px] rounded-br-[100px] rounded-tr-none rounded-bl-none border-8 border-gray-200 "
            style={{height:"370px"}}
          />
        </div>
      </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 hidden md:block z-[-1]">
          <img src={aiOrnamentImage} loading="lazy" alt="Ornament" />
        </div>
      </section>

<section className="custom-container ai-section" id="careerspoints">
    <div className="relative px-12 md:px-25">
        <div className="flex flex-wrap justify-start mt-10">
            {
            features.map((text, index) => (
                <div
                    key={index}
                    className="w-full mb-4 flex items-center gap-4" // Added gap for spacing
                >
                    <div className="flex-shrink-0"> {/* Ensures image maintains its size */}
                        <img
                            className="ai-m"
                            src={aili}
                            loading="eager"
                            alt="ornament"
                        />
                    </div>
                    <div className="ai-li-text flex-grow text-left" style={{fontFamily:"league spartan"}}> {/* Allow text to grow and fill available space */}
                    <strong>{text.title}:</strong> {text.content}
                    </div>
                </div>
            ))}
        </div>
    </div>
</section>


      <div className="p-6 md:p-10 mb-5 bg-white rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row gap-6 md:gap-10">
            <div className="md:w-1/2 w-full p-1  md:p-4">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={two}
                  className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
                  loading="eager"
                  alt="Data Orchestration"
                />
              </div>
            </div>
          <div className="md:w-1/2 w-full md:pl-6 mt-6 md:mt-6">
              <h2 className="text-4xl font-bold mb-4 md:mb-16 text-left" style={{fontFamily:"league spartan"}}>
              Be the Change - Partner With Us!
              </h2>
              <p className="ms-4 text-2xl" style={{fontFamily:"league spartan"}}>
              Join a team that's redefining the future of business. 
              Our culture is built on a foundation of innovation, collaboration,
               and mutual respect, where creativity thrives and growth is limitless.
               <br />
               As a values-driven organization, 
               we take pride in fostering a work environment that's
                both challenging and rewarding, where our team members 
                can make a real impact and have fun doing it. 
              </p>
            </div>
          </div>
        </div>

        <br /><br /><br />
      <section className="flex flex-col items-center justify-center py-16 bg-white">
        <h2 style={{fontFamily:"league spartan"}} className="text-2xl md:text-3xl font-semibold mb-4 text-center">
        If you're looking for a workplace that's <span style={{color:"red"}}>inspiring, inclusive, and empowering,</span> you're in the right place.
        </h2> 
      </section>
        
        <h1 style={{fontWeight:"bold",textAlign:"center",fontFamily:"league spartan"}}>Email Us</h1>
        <br />
     <ContactForm />
        <br /><br /><br />

        </>
    )
}

export default Careers