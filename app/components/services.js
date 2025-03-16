"use client"

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React, { useRef } from "react";
import Particles from "./Particles";


export default function Services() {
  const carouselRef = useRef();

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 1280 }, items: 4 },
    desktop: { breakpoint: { max: 1280, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  return (
    <div className="relative w-full h-screen">
  {/* Particle Background */}
  <div className="absolute top-0 left-0 w-full h-full -z-10">
    <Particles
      particleColors={['#ffffff', '#ffffff']}
      particleCount={200}
      particleSpread={10}
      speed={0.1}
      particleBaseSize={100}
      moveParticlesOnHover={true}
      alphaParticles={false}
      disableRotation={false}
    />
  </div>

  {/* Services Section */}
  <div className="relative py-2 p-5 z-10"> {/* Add z-10 to bring it above particles */}
    <div className="py-6">
      <h1 className="font-inter font-semibold text-center text-[40px] text-[#183883]">
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
      className="px-10"
    >
      {[
        { img: "web.svg", title: "Web Development", desc: "Ensure cutting-edge technologies." },
        { img: "/maintainence.png", title: "Maintenance Support", desc: "Provide support as you require." },
        { img: "ai.svg", title: "AI Integration", desc: "Integrate latest AI technology." },
        { img: "/client.png", title: "Client Identification", desc: "Identify Clients Strategically." },
        { img: "/meet.png", title: "Meet & Greet Arrangements", desc: "Facilitate virtual/in-person meetings." },
      ].map((service, index) => (
        <div key={index} className="w-[330px] md:w-[306px] h-[350px] bg-[#e3eff4] flex flex-col items-center rounded-lg shadow-lg">
          <img src={service.img} alt="" className="w-[350px] h-[230px]" />
          <div className="w-[57px] h-0 border-t-4 border-[#BD1F17] mt-2"></div>
          <div className="flex flex-col items-center py-4">
            <h1 className="font-bebas text-[24px] leading-[36px] tracking-[1px] font-bold">
              {service.title}
            </h1>
            <h1 className="font-raleway font-medium text-[16px] leading-[32px] tracking-[-0.015rem]">
              {service.desc}
            </h1>
          </div>
        </div>
      ))}
    </Carousel>

    {/* Navigation Buttons */}
    <div className="flex items-center justify-center space-x-4 py-6">
      <button className="w-12 h-12 flex items-center justify-center bg-[#1989CE] rounded-full shadow-lg"
        onClick={() => carouselRef.current.previous()}
      >
        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      </button>

      <button className="w-12 h-12 flex items-center justify-center bg-[#1989CE] rounded-full shadow-lg"
        onClick={() => carouselRef.current.next()}
      >
        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
        </svg>
      </button>
    </div>
  </div>
</div>

  );
}
