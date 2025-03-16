"use client";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React, { useRef } from "react";
import Particles from "./Particles"; // Make sure this is correctly imported

export default function Services() {
  const carouselRef = useRef();

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 1280 }, items: 4 },
    desktop: { breakpoint: { max: 1280, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  return (
    <div className="relative w-full min-h-screen overflow-visible bg-[#E3EFF4]">
      
      {/* Background Particles - Ensures it's behind everything */}
      <div className="absolute inset-0 -z-10 bg-blue-900">
        <Particles
          particleColors={["#ffffff", "#cbd5e1"]}
          particleCount={100}
          particleSpread={15}
          speed={0.2}
          particleBaseSize={50}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Services Section */}
      <div className="relative py-10 px-5">
        <div className="text-center">
          <h1 className="font-inter font-semibold text-[40px] text-[#183883]">
            Services
          </h1>
        </div>

        <Carousel
          responsive={responsive}
          ref={carouselRef}
          swipeable={true}
          infinite={true}
          autoPlay={false}
          focusOnSelect={true}
          autoPlaySpeed={3000}
          arrows={false}
          itemClass="carousel-item-padding-40-px"
          className="px-10 mt-6"
        >
          {[
            { img: "web.svg", title: "Web Development", desc: "Ensure cutting-edge technologies." },
            { img: "/maintainence.png", title: "Maintenance Support", desc: "Provide support as you require." },
            { img: "ai.svg", title: "AI Integration", desc: "Integrate latest AI technology." },
            { img: "/client.png", title: "Client Identification", desc: "Identify Clients Strategically." },
            { img: "/meet.png", title: "Meet & Greet Arrangements", desc: "Facilitate virtual/in-person meetings." },
          ].map((service, index) => (
            <div
              key={index}
              className="w-[330px] md:w-[306px] h-[350px] bg-white shadow-lg flex flex-col items-center z-10 rounded-lg"
            >
              <img src={service.img} alt={service.title} className="w-[280px] h-[180px] mt-4" />
              <div className="w-[57px] h-0 border-t-4 border-[#BD1F17] mt-2"></div>
              <div className="flex flex-col items-center py-4">
                <h1 className="font-bebas text-[24px] font-bold">{service.title}</h1>
                <p className="font-raleway font-medium text-[16px]">{service.desc}</p>
              </div>
            </div>
          ))}
        </Carousel>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-center space-x-4 py-6">
          <button
            className="w-12 h-12 flex items-center justify-center bg-[#1989CE] rounded-full shadow-lg"
            onClick={() => carouselRef.current.previous()}
          >
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          <button
            className="w-12 h-12 flex items-center justify-center bg-[#1989CE] rounded-full shadow-lg"
            onClick={() => carouselRef.current.next()}
          >
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
