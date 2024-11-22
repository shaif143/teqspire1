"use client";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React, { useRef } from "react";

export default function Home() {
  return (
    <>
      <div className="">
        <div className="hero min-h-screen relative">
          {/* Background Video */}
          <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Overlay */}
          <div className="hero-overlay bg-opacity-60 bg-black"></div>

          {/* Content */}
          <div className="hero-content text-neutral-content text-center relative">
            <div className="max-w-[1000px]">
              <h1 className="mb-5 text-5xl font-bold text-[#FFFF] font-quan">TEQSPIRE</h1>
              <p className="mb-5 text-[#FFFF] md:text-2xl text-[20px] font-raleway font-semibold">
              We are dedicated to delivering tailored solutions that meet your unique requirements through our expertise. 
              Our core competencies include Web Development, Maintenance Support, AI Integration, client and partner identification, and meet and greet arrangements. 
              Partner with us to leverage cutting-edge technologies and drive innovation in your business.
              </p>
              <button className="btn btn-primary bg-[#1989CE] text-[#FFFF] hover:bg-[#183883] text-[18px]">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
