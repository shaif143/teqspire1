// app/projects/page.js
"use client";

import dynamic from "next/dynamic";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React, { useRef } from "react";

const Navbar = dynamic(() => import("../../components/navbar"), {
  ssr: false,
});

export default function Projects() {
  const carouselRef = useRef();

  const responsive = {
    tablet: {
      breakpoint: { max: 4000, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <Navbar />
      <div className="relative py-6 gap-[40px] mb-12">
        <div className="px-6">
          <div className="py-2">
            <h1 className="font-inter font-semibold text-center text-[40px] text-[#183883]">
              Projects
            </h1>
          </div>
          <Carousel
            responsive={responsive}
            ref={carouselRef}
            swipeable={true}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            arrows={false}
            itemClass="carousel-item-padding-80-px"
            className="p-4"
          >
            {/* Your carousel items here */}
          </Carousel>
        </div>
      </div>
    </>
  );
}
