import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./styles/trusted.css"
// Importing images
import accesshealth from "./images/trustedby/accesshealth.png";
import bakes from "./images/trustedby/bakes.png";
import check from "./images/trustedby/checkmarx.png";
import cholams from "./images/trustedby/cholams.png";
import csbbank from "./images/trustedby/csbbank.png";
import csscorp from "./images/trustedby/csscorp.png";
import cub from "./images/trustedby/cub.png";
import delphi from "./images/trustedby/delphi.jpg";
import dhanbank from "./images/trustedby/dhanalaxmibank.jpg";
import dvara from "./images/trustedby/dvara.png";
import equitas from "./images/trustedby/equitas.jpg";
import fis from "./images/trustedby/fis.png";
import govs from "./images/trustedby/govs.jpg";
import hyundai from "./images/trustedby/hyundai.png";
import hyundaimobs from "./images/trustedby/hyundaimobs.png";
import indianbank from "./images/trustedby/indianbank.jpg";
import iob from "./images/trustedby/iob.jpg";
import karurbank from "./images/trustedby/karurbank.png";
import iandt from "./images/trustedby/L&t.png";
import latentview from "./images/trustedby/latentview.png";
import it from "./images/trustedby/it.jpg";
import repco from "./images/trustedby/repco.jpg";
import royal from "./images/trustedby/royal.png";
import shriramhousing from "./images/trustedby/shriram_housing.png";
import shriram from "./images/trustedby/shriram.png";
import star from "./images/trustedby/star.png";
import taab from "./images/trustedby/taab.png";
import tafe from "./images/trustedby/tafe.png";
import tvs from "./images/trustedby/tvs.png";
import wheelsindia from "./images/trustedby/wheelsindia.jpg";

function Trusted() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    const pics = [
        { path: accesshealth },
        { path: bakes },
        { path: check },
        { path: cholams },
        { path: csbbank },
        { path: csscorp },
        { path: cub },
        { path: delphi },
        { path: dhanbank },
        { path: dvara },
        { path: equitas },
        { path: fis },
        { path: govs },
        { path: hyundai },
        { path: hyundaimobs },
        { path: indianbank },
        { path: iob },
        { path: karurbank },
        { path: iandt },
        { path: latentview },
        { path: it },
        { path: repco },
        { path: royal },
        { path: shriramhousing },
        { path: shriram },
        { path: star },
        { path: taab },
        { path: tafe },
        { path: tvs },
        { path: wheelsindia },
    ];

    return (
        <div className="carousel-container">
            <Slider {...settings}>
                {pics.map((pic, index) => (
                    <div key={index} className="carousel-image">
                        <img src={pic.path} alt={`carousel-img-${index}`}  />
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default Trusted;
