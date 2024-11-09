"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React, { useState } from "react";
import Image from "next/image";

const logos = [
  "anka.png",
  "aramex.png",
  "dhl.png",
  "fedex.png",
  "red-star-express.png",
  "ups.png",
];

export default function LogoSlider() {
  const [settings] = useState({
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3500,
    cssEase: "ease",
    centerMode: true, // Enable center mode
    centerPadding: "20px", // Adjust padding to control spacing between slides
    responsive: [
      {
        breakpoint: 1200, // Adjust for large screens
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992, // Adjust for medium screens
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Adjust for tablet screens
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576, // Adjust for mobile screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  // console.log(logos);

  return (
    <Slider {...settings}>
      {logos.map((logo, index) => (
        <Image
          className="h-24 object-contain"
          width={100}
          height={100}
          src={`/assets/images/${logo}`}
          alt="logo"
        />
        // <div>
        // </div>
      ))}
      {/* <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div> */}
    </Slider>
  );
}
