import ind1 from "../../assets/images/ind_1.png";
import ind2 from "../../assets/images/ind_2.png";
import ind3 from "../../assets/images/healthcare.png";
import ind4 from "../../assets/images/ind_4.png";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useState, useEffect, React, useRef } from "react";
import Home1 from "../../assets/videos/wait1.webm";
import Home6 from "../../assets/videos/Home6.mp4";
import Home9 from "../../assets/videos/Home9.mp4";
import Home13 from "../../assets/videos/Home13.mp4";
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
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
import redhat from "../../assets/images/trustedpartners/redhat.png"
import ibm from "../../assets/images/trustedpartners/ibm.png"
import { FaCheck } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import emailjs from 'emailjs-com';
import Certifications from "../common/certifications";
import LazyLoad from 'react-lazyload';
import Sidecontent from "../sidecontact/side";



function Homepage(){


  const [isVisible, setIsVisible] = useState(false);

  // Check if the element is in the viewport
  const handleScroll = () => {
    const section = document.getElementById("fadeSection");
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop <= windowHeight * 0.8) {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Initial check on mount
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Check if formRef is correctly set
    if (formRef.current) {
      emailjs.sendForm('service_99sz48v', 'template_cvvyb9s', formRef.current, '_s33J6xuP7n0eqqjG')
        .then((result) => {
          console.log('Email sent successfully!', result.text);
          alert("Request submitted successfully");
          e.target.reset(); // Reset form after submission
        }, (error) => {
          console.error('Error sending email:', error.text);
        });
    } else {
      console.error('Form reference is not set.');
    }
  };

  

    const industries = [
        {
          title: "Manufacturing",
          img: ind1,
          description: "AI forecasts equipment failures, minimizing downtime by 43%, automates supply chains, and enhances quality control by identifying defects instantly.",
        },
        {
          title: "BFSI",
          img: ind2,
          description: "AI streamlines 90% of customer inquiries, enhancing efficiency and cutting costs while detecting fraud in real-time.",
        },
        {
          title: "Healthcare",
          img: ind3,
          description: "AI speeds up drug discovery and reduces research expenses, improves diagnostics through image analysis, and supports patient care with virtual assistants.",
        },
        {
          title: "IT/ITES",
          img: ind4,
          description: "AI decreases IT support tickets by 70%, automates monitoring and resolution, and generates 60% of code, accelerating development.",
        },
      ];

    const [hoveredIndex, setHoveredIndex] = useState(null);

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
    

    const [customerCount, setCustomerCount] = useState(0);
    const [yearsCount, setYearsCount] = useState(0);

    useEffect(() => {
        // Animate customer count
        const customerInterval = setInterval(() => {
            if (customerCount < 300) {
                setCustomerCount(prev => prev + 1);
            } else {
                clearInterval(customerInterval);
            }
        }, 10); // Adjust the speed of the counting

        // Animate years count
        const yearsInterval = setInterval(() => {
            if (yearsCount < 30) {
                setYearsCount(prev => prev + 1);
            } else {
                clearInterval(yearsInterval);
            }
        }, 10); // Adjust the speed of the counting

        return () => {
            clearInterval(customerInterval);
            clearInterval(yearsInterval);
        };
    }, [customerCount, yearsCount]);


    
    
    return(
        <>
{/* ----------------------------SECTION 1 VIDEO SECTION START---------------------- */}
<div style={{ paddingTop: '80px' }}> {/* Adjust according to your header height */}
        <section className="relative w-full h-screen overflow-visible" id="topvideo">
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center">
            {/* Large heading */}
            <div className="text-white text-8xl font-extrabold font-spartan" id="toptext">
              Automate the Mundane
            </div>

            {/* Centered red box with large text */}
            <div className="bg-red-600 font-spartan text-white font-extrabold px-6 py-3 mt-6 text-6xl" id="bottomtext">
              Elevate Human Potential
            </div>
          </div>

          {/* Background video */}
          <LazyLoad height={720} offset={100}>
            <video className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop playsInline>
              <source src={Home1} type="video/mp4" />
            </video>
          </LazyLoad>

          {/* Overlay to darken the video */}
          <div className="absolute inset-0 bg-black opacity-60"></div>

          
        </section>
    

      </div>

   <Sidecontent />
     

{/* ----------------------------SECTION 1 VIDEO SECTION END---------------------- */}

{/* ---------------------------SECTION 2 START----------------------------------- */}
<section className="responsive-video-section">
      <div className="relative w-full min-h-screen">
        <div
          id="fadeSection"
          className={`relative z-10 flex flex-col md:flex-row items-center justify-between w-full h-full px-4 py-8 sm:px-6 sm:py-12 md:px-10 md:py-16 transition-opacity duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{ paddingTop: "10%" }}
        >
          <div className="w-full md:w-[50%] mb-6 md:mb-0 text-center md:text-left">
            <p
              style={{
                fontWeight: "bold",
                textAlign: "left",
                color: "red",
                fontSize: "30px",
              }}
              className="font-spartan"
            >
              Vision
            </p>
            <h2
              className="text-black font-bold font-spartan mx-auto mb-6 md:mb-36 leading-snug md:leading-tight"
              style={{ fontSize: "30px", textAlign: "left" }}
            >
              To become a global leader in creating agile and secure work
              environments that boost productivity and promote sustainable growth,
              contributing to a more resilient and equitable global economy
            </h2>
          </div>
          <div className="w-full md:w-[40%] bg-white bg-opacity-80 p-4 sm:p-6 rounded-md shadow-md">
            <h3 className="text-black-600 font-semibold font-spartan text-lg sm:text-xl mb-4 border-animation p-10 rounded">
              <span
                style={{
                  fontWeight: "bold",
                  textAlign: "left",
                  color: "red",
                  fontSize: "30px",
                }}
                className="font-spartan"
              >
                Mission
              </span>
              <br />
              To be the transformative force that shapes an agile, purposeful
              future of work on a global scale
            </h3>
            <p
              style={{
                fontWeight: "bold",
                textAlign: "left",
                color: "red",
                fontSize: "30px",
              }}
              className="font-spartan"
            >
              Value
            </p>

            <ul className="list-none space-y-2 font-spartan">
              <li className="flex items-start">
                <span className="text-red-500 text-xl mr-2">
                  <FaCheck size="25px" color="red" />
                </span>
                <span>
                  <b>Relentless curiosity & agility</b>
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 text-xl mr-2">
                  <FaCheck size="25px" color="red" />
                </span>
                <span>
                  <b>Bold experimentation</b>
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 text-xl mr-2">
                  <FaCheck size="25px" color="red" />
                </span>
                <span>
                  <b>Multidisciplinary Innovation</b>
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 text-xl mr-2">
                  <FaCheck size="25px" color="red" />
                </span>
                <span>
                  <b>Wisdom in Action</b>
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 text-xl mr-2">
                  <FaCheck size="25px" color="red" />
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
      {/* ---------------------------SECTION 2 END--------------------------------- */}


      {/* ---------------------------SECTION 3 START--------------------------------- */}
      <section className="relative w-full h-screen bg-gradient-to-r from-blue-500 to-teal-400 overflow-hidden">
  <div className="relative z-10 flex items-center justify-center w-full h-full px-4 sm:px-8 md:px-16">
    <div className="bg-white bg-opacity-80 p-8 sm:p-12 md:p-16 rounded-xl shadow-lg max-w-4xl mx-auto">
      <p className="text-lg md:text-2xl font-spartan font-semibold text-gray-800 leading-relaxed mb-4">
        In the modern workplace,
        <span className="text-red-500 font-bold">
          repetitive tasks like data entry and information retrieval
        </span>
      </p>
      <p className="text-lg md:text-2xl font-spartan font-semibold text-gray-800 leading-relaxed">
        hinder employees from engaging in strategic and creative aspects of their roles.
      </p>
    </div>
  </div>
</section>


      {/* ---------------------------SECTION 3 END--------------------------------- */}


      {/* ---------------------------SECTION 4 START--------------------------------- */}

      <section className="relative w-full h-screen bg-gradient-to-r from-teal-500 to-blue-500">
  <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4 sm:px-8 md:px-16">
    {/* Large heading */}
    <div className="text-white text-3xl font-spartan font-semibold mb-6">
      The problem is not that computers will begin to think like men, it's that men will begin to think like computers.
    </div>

    {/* Centered red box with large text */}
    <div className="text-white px-10 py-6 mt-6 text-5xl md:text-6xl bg-opacity-70 rounded-lg shadow-lg">
      <h1 className="text-red-600 text-3xl md:text-4xl font-bold mb-4">
        Empower with Data, Accelerate with Agility
      </h1>
      <h3 className="text-lg md:text-2xl font-light">
        Data drives informed decisions and operational efficiency, while an agile workforce fosters flexibility and speed, together propelling business growth and success.
      </h3>
    </div>
  </div>

  {/* Overlay to darken the background */}
  <div className="absolute inset-0 bg-black opacity-60"></div>
</section>

      {/* ---------------------------SECTION 4 END--------------------------------- */}


      {/* ---------------------------SECTION 5 START--------------------------------- */}

  <section className="w-full bg-gray-50">
    <div className="py-10">
        <br /><br />
        <div className="mx-auto px-8 max-w-screen-xl">
            <h3 style={{ fontFamily: "league spartan" }} className="text-center text-3xl md:text-5xl font-bold">
                Trusted by talented leaders at:
            </h3>
            <br /><br />
            <Slider
                dots={false}
                infinite={true}
                speed={500}
                slidesToShow={5} // Default to 5 slides
                slidesToScroll={1}
                autoplay={true}
                autoplaySpeed={2000}
                nextArrow={
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                }
                prevArrow={
                    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 5l-7 7 7 7" />
                        </svg>
                    </div>
                }
                responsive={[
                    {
                        breakpoint: 1024, // for screens smaller than 1024px
                        settings: {
                            slidesToShow: 3, // Show 3 slides for medium screens
                            slidesToScroll: 1,
                        },
                    },
                    {
                        breakpoint: 768, // for screens smaller than 768px
                        settings: {
                            slidesToShow: 1, // Show 1 slide for mobile screens
                            slidesToScroll: 1,
                        },
                    },
                ]}
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

      {/* ---------------------------SECTION 5 END--------------------------------- */}
      
      <br /><br /><br />
      
      {/* ---------------------------SECTION 6 START--------------------------------- */}

<h1 className="text-center font-bold font-spartan">Why work with us?</h1>

<section className="work items-center mt-5">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-screen-lg mx-auto items-center justify-items-center">
        
        <div className="animb" style={{ height: "205px", width: "205px" }}>
            <div className="flex flex-col items-center w-48 h-48 justify-center" style={{ border: "9px solid #EEEEEE" }}>
                <h1 className="text-3xl font-bold font-spartan">{customerCount}+</h1>
                <p className="font-spartan">customers</p>
            </div>
        </div>

        <div className="animb" style={{ height: "205px", width: "205px" }}>
            <div className="flex flex-col items-center w-48 h-48 justify-center" style={{ border: "9px solid #EEEEEE" }}>
                <h1 className="text-3xl font-bold font-spartan">{yearsCount}+</h1>
                <p className="font-spartan">years in market</p>
            </div>
        </div>

        <div className="animb" style={{ height: "205px", width: "205px" }}>
            <div className="flex flex-col items-center w-48 h-48 justify-center" style={{ border: "9px solid #EEEEEE" }}>
                <h1 className="text-3xl font-bold font-spartan">Best</h1>
                <p className="font-spartan">predictive support</p>
            </div>
        </div>

        <div className="animb" style={{ height: "205px", width: "205px" }}>
            <div className="flex flex-col items-center w-48 h-48 justify-center" style={{ border: "9px solid #EEEEEE" }}>
                <h1 className="text-3xl font-bold">ISO</h1>
                <p style={{ textAlign: "center" }}>process rigor & certifications</p>
            </div>
        </div>
    </div>
</section>




      {/* ---------------------------SECTION 6 END--------------------------------- */}

<br /><br />

      {/* ---------------------------SECTION 7 START--------------------------------- */}

<section id="parternsecosystem" className="mx-4 bg-gray-100" style={{ height: "450px" }}>
  <div className="flex flex-col justify-center items-center text-center px-6 py-12">
    <h2 className="text-3xl md:text-5xl font-semibold text-gray-800 mb-6 font-spartan">
      Our Partner Ecosystem
    </h2>
    <div className="flex flex-col md:flex-row justify-center items-center gap-8">
      <div className="flex-shrink-0 w-full md:w-[400px]">
        <img
          src={redhat}
          alt="Red Hat"
          className="object-contain w-full h-auto"
        />
      </div>
      <div className="flex-shrink-0 w-full md:w-[300px]">
        <img
          src={ibm}
          alt="IBM"
          className="object-contain w-full h-auto"
        />
      </div>
    </div>
  </div>
</section>


      
      {/* ---------------------------SECTION 7 END--------------------------------- */}


      {/* ---------------------------SECTION 8 START--------------------------------- */}

      <section className="py-5 bg-light">
      <h1 className="display-4 text-center mb-4" style={{fontWeight:"bold"}} id="inds">Industries We Serve</h1>

      <div className="container">
  <div className="row justify-content-between">
    {industries.map((industry, index) => (
      <div
        key={index}
        className="col-12 col-md-3 mb-4 position-relative"
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
           
          </div>
          <div
            className={`card-body text-white opacity-${hoveredIndex === index ? '100' : '0'} position-absolute top-0 left-0 right-0 bottom-0 d-flex flex-column justify-content-center align-items-center transition-opacity duration-300`}
            style={{ backgroundColor: "#3f649a",fontFamily:"league spartan"}}
            >
            <h5 className="card-title">{industry.title}</h5>
            <p style={{ textAlign: "center",fontFamily:"league spartan"}}>{industry.description}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
    </section>

      {/* ---------------------------SECTION 8 END--------------------------------- */}


<Certifications />
      {/* ---------------------------SECTION 9 START--------------------------------- */}

     

{/* ---------------------------SECTION 9 END--------------------------------- */}

<br /><br />

{/* ---------------------------SECTION 10 START--------------------------------- */}

<div>
      <h1 style={{ fontWeight: "bold", textAlign: "center", fontFamily: "league spartan" }}>Contact Us</h1>
      <br /><br />
      <form className="space-y-8 container" ref={formRef}  onSubmit={sendEmail}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6" style={{fontFamily:"league spartan"}}>
          <div>
            <label htmlFor="fullName" className="block text-lg font-semibold text-gray-700">Full Name</label>
            <input required type="text" id="fullName" name="fullName" placeholder="Your Full Name" className="mt-2 w-full p-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300" />
          </div>
          <div>
            <label htmlFor="email" className="block text-lg font-semibold text-gray-700">Email Address</label>
            <input required  type="email" id="email" name="email" placeholder="Your Work Email Address" className="mt-2 w-full p-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phone" className="block text-lg font-semibold text-gray-700">Phone Number</label>
            <input required  type="text" id="phone" name="phone" placeholder="Your Phone Number" className="mt-2 w-full p-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300" />
          </div>
          <div>
            <label htmlFor="company" className="block text-lg font-semibold text-gray-700">Company Name</label>
            <input required  type="text" id="company" name="company" placeholder="Your Company Name" className="mt-2 w-full p-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300" />
          </div>
        </div>

        <div>
          <label htmlFor="support" className="block text-lg font-semibold text-gray-700">Support Required On</label>
          <select required  id="support" name="support" className="mt-2 w-full p-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300">
            <option value="" disabled>Choose a Solution/Service</option>
            <option value="Data and AI">Data and AI</option>
            <option value="IT and Business Automation">IT and Business Automation</option>
            <option value="Open Hybrid Cloud">Open Hybrid Cloud</option>
            <option value="Security and Sustainability">Security and Sustainability</option>
          </select>
        </div>

        <div>
          <label htmlFor="query" className="block text-lg font-semibold text-gray-700">Query</label>
          <textarea required  id="query" name="query" placeholder="Describe your Requirement in Detail" className="mt-2 w-full p-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300" rows="5"></textarea>
        </div>

        <div style={{ textAlign: "center" }}>
          <button type="submit" className="px-8 py-3 text-white font-bold rounded-lg hover:from-blue-700 hover:to-purple-700 transition duration-300 shadow-lg" style={{ backgroundColor: "#3f649a" }}>
            Submit Request
          </button>
        </div>
      </form>
    </div>
<br /><br /><br />

{/* ---------------------------SECTION 10 END--------------------------------- */}

</>

)
}

export default Homepage