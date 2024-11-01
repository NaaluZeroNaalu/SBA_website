import sliderleft from "../../assets/images/slider-left.svg";
import sliderright from "../../assets/images/slider-right.svg";
import certification1 from "../../assets/images/certification 1.png";
import certification2 from "../../assets/images/certification 2.png";
import certification3 from "../../assets/images/certification 3.png";
import certification4 from "../../assets/images/certification 4.png";
import certification5 from "../../assets/images/certification 5.png";
import certification6 from "../../assets/images/certification 6.png";
import certification7 from "../../assets/images/certification 7.png";
import certification8 from "../../assets/images/certification 8.png";
import certification9 from "../../assets/images/certification 9.png";
import certification10 from "../../assets/images/cetification 10.png";
import certification11 from "../../assets/images/certification 11.png";
import certification12 from "../../assets/images/certification 12.png";
import certification13 from "../../assets/images/certification 13.png";
import certification14 from "../../assets/images/certification 14.png";
import certification15 from "../../assets/images/certification 15.jpg";
import certification16 from "../../assets/images/certification 16.jpg";
import certification17 from "../../assets/images/certification 17.jpg";
import certification18 from "../../assets/images/certification 18.jpg";
import certification19 from "../../assets/images/certification 19.jpg";
import certification20 from "../../assets/images/certification 20.jpg";
import certification21 from "../../assets/images/certification 21.png";
import certification22 from "../../assets/images/certification 22.png";
import certification23 from "../../assets/images/certification 23.png";
import certification24 from "../../assets/images/certification 24.png";
import certification25 from "../../assets/images/certification 25.png";
import certification26 from "../../assets/images/certification 26.jpg";
import certification27 from "../../assets/images/certification 27.png";
import certification28 from "../../assets/images/certification 28.png";
import certification29 from "../../assets/images/certification 29.png";
import { useState, useEffect, React } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Certifications(){

  const slides = [
    [
      certification1,
      certification2,
      certification3,
      certification4,
      certification5,
      certification6,
      certification7,
      certification8,
      certification9,
      certification10,
      certification11,
      certification12,
      certification13,
      certification14,
      certification15,
      certification16,
      certification17,
      certification18,
      certification19,
      certification20,
      certification21,
      certification22,
      certification23,
      certification24, 
      certification25,
      certification26,
      certification27,
      certification28,
      certification29,
    ]
  ];

      const [currentSlide, setCurrentSlide] = useState(0);
    
      // Function to move the slide manually
      const moveSlide = (direction) => {
        const newSlide = (currentSlide + direction + slides.length) % slides.length;
        setCurrentSlide(newSlide);
      };
    
      // Handle bullet click for current slide
      const currentSlideHandler = (index) => {
        setCurrentSlide(index);
      };
    
      // Auto-scroll effect
      useEffect(() => {
        const interval = setInterval(() => {
          setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 10000); // Change slide every 10 seconds
    
        // Cleanup the interval on component unmount
        return () => clearInterval(interval);
      }, [slides.length]);
    
      const fetchUsers = () => {
        // Your logic here, e.g., API call, state update, etc.
        console.log("Fetching users...");
        // You can replace this with an actual API call or any other action.
      };

    return(
        <>

<section className="w-full bg-gray-50">
    <div className="py-10">
        <br /><br />
        <div className="mx-auto px-8 max-w-screen-xl">
            <h3 style={{ fontFamily: "league spartan" }} className="text-center text-3xl md:text-5xl font-bold">
            Our Proficiency and <span className="text-red-600">Certifications</span>
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
                            slidesToShow: 2, // Show 1 slide for mobile screens
                            slidesToScroll: 2,
                        },
                    },
                    {
                        breakpoint:425,
                        settings:{
                            slidesToShow:1,
                            slidesToScroll: 1,
                        }
                    }
                ]}
            >
                {slides[0].map((logo, index) => (
                    <div key={index} className="px-2">
                        <img
                            src={logo}
                            alt={`Certification logo ${index + 1}`}
                            style={{borderRadius:"10px",height:"300px",width:"300px"}}

                        />
                    </div>
                ))}
            </Slider>
        </div>
    </div>
</section>

        </>
    )
}

export default Certifications