import certification1 from "./images/certifications/c1.png"
import certification2 from "./images/certifications/c2.png"
import certification3 from "./images/certifications/c3.png"
import certification4 from "./images/certifications/c4.png"
import certification5 from "./images/certifications/c5.png"
import certification6 from "./images/certifications/c6.png"
import certification7 from "./images/certifications/c7.png"
import certification8 from "./images/certifications/c8.png"
import certification9 from "./images/certifications/c9.png"
import certification10 from "./images/certifications/c10.png"
import certification11 from "./images/certifications/c11.png"
import certification12 from "./images/certifications/c12.png"
import certification13 from "./images/certifications/c13.png"
import certification14 from "./images/certifications/c14.png"
import certification15 from "./images/certifications/c15.jpg"
import certification16 from "./images/certifications/c16.jpg"
import certification17 from "./images/certifications/c17.jpg"
import certification18 from "./images/certifications/c18.jpg"
import certification19 from "./images/certifications/c19.jpg"
import certification20 from "./images/certifications/certification 20.jpg"
import certification21 from "./images/certifications/certification 21.png"
import certification22 from "./images/certifications/certification 22.png"
import certification23 from "./images/certifications/certification 23.png"
import certification24 from "./images/certifications/certification 24.png"
import certification25 from "./images/certifications/certification 25.png"
import certification26 from "./images/certifications/certification 26.jpg"
import certification27 from "./images/certifications/certification 27.png"
import certification28 from "./images/certifications/certification 28.png"
import certification29 from "./images/certifications/certification 29.png"
import "slick-carousel/slick/slick.css"; 
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "./styles/dataai.css"
// import certification29 from "./images/certifications/certification 1.png"


function CertificationsWatson(){


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    const certifications = [
        { title:certification1},
        { title:certification2},
        { title:certification3},
        { title:certification4},
        { title:certification6},
        { title:certification7},
        { title:certification8},
        { title:certification9},
        { title:certification10},
        { title:certification11},
        { title:certification12},
        { title:certification13},
        { title:certification14},
        { title:certification15},
        { title:certification16},
        { title:certification17},
        { title:certification18},
        { title:certification19},
        { title:certification20},
        { title:certification21},
        { title:certification22},
        { title:certification23},
        { title:certification24},
        { title:certification25},
        { title:certification26},
        { title:certification27},
        { title:certification28},
        { title:certification29},
    ];
    return(
        <>
        <div>
           
           <Slider {...settings}>
                           {certifications.map((cert, index) => (
                               <div
                                   key={index}
                                   className="card text-center"
                                   style={{
                                    
                                   }}
                               >
                                   <img src={cert.title} alt="" />
                               </div>
                           ))}
                       </Slider>
                   </div>
        </>
    )
}

export default CertificationsWatson