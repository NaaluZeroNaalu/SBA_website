import certification1 from "./images/certifications/certification 1.png"
import certification2 from "./images/certifications/certification 2.png"
import certification3 from "./images/certifications/certification 3.png"
import certification4 from "./images/certifications/certification 4.png"
import certification5 from "./images/certifications/certification 5.png"
import certification6 from "./images/certifications/certification 6.png"
import certification7 from "./images/certifications/certification 7.png"
import certification8 from "./images/certifications/certification 8.png"
import certification9 from "./images/certifications/certification 9.png"
// import certification10 from "./images/certifications/certification 10.png"
import certification11 from "./images/certifications/certification 11.png"
import certification12 from "./images/certifications/certification 12.png"
import certification13 from "./images/certifications/certification 13.png"
import certification14 from "./images/certifications/certification 14.png"
// import certification15 from "./images/certifications/certification 15.png"
// import certification16 from "./images/certifications/certification 16.png"
// import certification17 from "./images/certifications/certification 17.png"
// import certification18 from "./images/certifications/certification 18.png"
// import certification19 from "./images/certifications/certification 19.png"
// import certification20 from "./images/certifications/certification 20.png"
// import certification21 from "./images/certifications/certification 21.png"
// import certification22 from "./images/certifications/certification 22.png"
// import certification23 from "./images/certifications/certification 23.png"
// import certification24 from "./images/certifications/certification 24.png"
// import certification25 from "./images/certifications/certification 25.png"
// import certification26 from "./images/certifications/certification 26.png"
import certification27 from "./images/certifications/certification 27.png"
import certification28 from "./images/certifications/certification 28.png"
import certification29 from "./images/certifications/certification 29.png"
import "slick-carousel/slick/slick.css"; 
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
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
        { title:certification1},
        { title:certification1},
        { title:certification1},
        { title:certification1},
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