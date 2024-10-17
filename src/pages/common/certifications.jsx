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

function Certifications(){

    const slides = [
        [
          certification1,
          certification2,
          certification3,
          certification4,
          certification5,
          certification6,
        ],
        [
          certification7,
          certification8,
          certification9,
          certification10,
          certification11,
          certification12,
        ],
        [
          certification13,
          certification14,
          certification15,
          certification16,
          certification17,
          certification18,
        ],
        [
          certification19,
          certification20,
          certification21,
          certification22,
          certification23,
          certification24,
        ],
        [
          certification25,
          certification26,
          certification27,
          certification28,
          certification29,
        ],
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
        <section className="py-8">
        <div className="flex justify-between items-center mx-auto md:w-9/12">
          <button
            className="bg-transparent p-2 cursor-pointer focus:outline-none"
            onClick={() => moveSlide(-1)}
          >
            <img src={sliderleft} alt="Previous" />
          </button>
          <h1 className="text-center text-xl md:text-5xl font-bold">
            Our Proficiency and{" "}
            <span className="text-red-600">Certifications</span>
          </h1>
          <button
            className="bg-transparent p-2 cursor-pointer focus:outline-none"
            onClick={() => moveSlide(1)}
          >
            <img src={sliderright} alt="Next" />
          </button>
        </div>

        <div className="mx-auto overflow-hidden mt-6">
          {/* Slides */}
          {slides.map((slideImages, index) => (
            <div
              key={index}
              className={`${
                index === currentSlide ? "block" : "hidden"
              } w-full transition-transform duration-500 ease-in-out`}
            >
              <div className="flex flex-wrap">
                {slideImages.map((image, idx) => (
                  <div key={idx} className="w-1/6 px-1">
                    <img
                      src={image}
                      alt={`Certification ${idx + 1}`}
                      className="w-full"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Bullets */}
          <div className="flex justify-center mt-4">
            {slides.map((_, index) => (
              <span
                key={index}
                className={`h-4 w-4 rounded-full mx-1 cursor-pointer ${
                  index === currentSlide ? "bg-red-600" : "bg-gray-400"
                }`}
                onClick={() => currentSlideHandler(index)}
              ></span>
            ))}
          </div>
        </div>
      </section>
        </>
    )
}

export default Certifications