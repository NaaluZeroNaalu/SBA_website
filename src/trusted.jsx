import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Trusted(){

    const settings = {
        dots: true, // Enables the dots navigation
        infinite: true, // Infinite looping
        speed: 500, // Transition speed
        slidesToShow: 3, // Number of slides visible
        slidesToScroll: 1, // Number of slides to scroll at once
        autoplay: true, // Enable autoplay
        autoplaySpeed: 2000, // Autoplay speed in ms
        responsive: [
          {
            breakpoint: 1024, // Screen width for tablet and large screens
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 600, // Screen width for mobile devices
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 480, // Small mobile screens
            settings: {
              slidesToShow: 1,
            }
          }
        ]
      };

   
      const pics = [
        { path:"./images/trustedby/accesshealth.png" },
        { path: "./images/trustedby/bakes.png" },
        { path: "./images/trustedby/checkmarx.png" }, 
        { path: "./images/trustedby/cholams.png" }, 
        { path: "./images/trustedby/csbbank.png" }, 
        { path: "./images/trustedby/csscorp.png" },
        { path: "./images/trustedby/cub.png" },
        { path: "./images/trustedby/delphi.jpg" },
        { path: "./images/trustedby/dhanalaxmibank.jpg" },
        { path: "./images/trustedby/dvara.png" },
        { path: "./images/trustedby/equitas.jpg" },
        { path: "./images/trustedby/fis.png" },
        { path: "./images/trustedby/govs.jpg" },
        { path: "./images/trustedby/hyundai.png" },
        { path: "./images/trustedby/hyundaimobs.png" },
        { path: "./images/trustedby/indianbank.jpg" },
        { path: "./images/trustedby/iob.jpg" },
        { path: "./images/trustedby/karurbank.png" },
        { path: "./images/trustedby/i&t.png" },
        { path: "./images/trustedby/latentview.png" },
        { path: "./images/trustedby/it.jpg" },
        { path: "./images/trustedby/repco.jpg" },
        { path: "./images/trustedby/royal.png" },
        { path: "./images/trustedby/shriram_housing.png" },
        { path: "./images/trustedby/shriram.png" },
        { path: "./images/trustedby/star.png" },
        { path: "./images/trustedby/taab.png" },
        { path: "./images/trustedby/tafe.png" },
        { path: "./images/trustedby/tvs.png" },
        { path: "./images/trustedby/wheelsindia.png" },
        // Continue adding more image paths up to 30
      ];


    return(
        <>
         <div className="carousel-container">
      <Slider {...settings}>
        {pics.map((pic, index) => (
          <div key={index} className="carousel-image">
            <img src={pic.path} alt={`carousel-img-${index}`} style={{ width: "100%", height: "auto" }} />
          </div>
        ))}
      </Slider>
    </div>
        </>
    )
}


export default Trusted