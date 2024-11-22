"use client";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React, { useRef } from "react";
export default function Services() {
  const carouselRef = useRef();

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1280 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1280, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <div className="relative py-2 p-5">
        <Carousel
          responsive={responsive}
          ref={carouselRef}
          swipeable={true}
          infinite={true}
          autoPlay={true}
          focusOnSelect={true}
          autoPlaySpeed={3000}
          // customTransition="all .5"
          arrows={false}
          //   showDots={true}
          itemClass="carousel-item-padding-40-px"
          className="p-10 mt-8 "
        >
          <div className="w-[330px] md:w-[306px] h-[300px] bg-[#FFFFFF] flex flex-col items-center mt-8 p-[32px] z-10">
            <div className="flex flex-col items-center w-[186px] h-[124px] top-[-2px] left-[-33px]">
              <img src="web.svg" alt="" />
            </div>
            <div className="w-[57PX] h-0 border-t-4 border-[#BD1F17] mt-4"></div>
            <div className="flex flex-col items-center py-4">
              <h1 className="font-bebas text-[24px] leading-[36px] font-bold">
                Web Development
              </h1>
              <h1 className="font-inter font-normal text-[16px] leading-[32px] tracking-[-0.015rem]">
                Ensure cutting edge technologies. 
              </h1>
            </div>
          </div>
          <div className="w-[330px] md:w-[306px] h-[300px] bg-[#FFFFFF] flex flex-col items-center mt-8 p-[32px] z-10">
            <div className="flex flex-col items-center w-[186px] h-[124px] top-[-2px] left-[-33px]">
              <img src="/maintainence.svg" alt="" />
            </div>
            <div className="w-[57PX] h-0 border-t-4 border-[#BD1F17] mt-4"></div>
            <div className="flex flex-col items-center py-4">
              <h1 className="font-bebas text-[24px] leading-[36px] font-bold">
              Maintenance Support
              </h1>
              <h1 className="font-inter font-normal text-[16px] leading-[32px] tracking-[-0.015rem]">
               Provide support as you require. 
              </h1>
            </div>
          </div>
          <div className="w-[330px] md:w-[306px] h-[300px] bg-[#FFFFFF] flex flex-col items-center mt-8 p-[32px] z-10">
            <div className="flex flex-col items-center w-[186px] h-[124px] top =[-2px] left-[-33px]">
              <img src="/ai.svg" alt="" />
            </div>
            <div className="w-[57PX] h-0 border-t-4 border-[#BD1F17] mt-4"></div>
            <div className="flex flex-col items-center py-4">
              <h1 className="font-bebas text-[24px] leading-[36px] font-bold">
              AI Integration
              </h1>
              <h1 className="font-inter font-normal text-[16px] leading-[32px] tracking-[-0.015rem]">
              Integrate latest AI technology. 
              </h1>
            </div>
          </div>
          <div className="w-[330px] md:w-[306px] h-[300px] bg-[#FFFFFF] flex flex-col items-center mt-8 p-[32px] z-10">
            <div className="flex flex-col items-center w-[186px] h-[124px] top-[-2px] left-[-33px]">
              <img src="/identify.svg" alt="" />
            </div>
            <div className="w-[57PX] h-0 border-t-4 border-[#BD1F17] mt-4"></div>
            <div className="flex flex-col items-center py-4">
              <h1 className="font-bebas text-[24px] leading-[36px] font-bold">
              Client Identification
              </h1>
              <h1 className="font-inter font-normal text-[16px] leading-[32px] tracking-[-0.015rem]">
              Identify Clients Strategically. 
              </h1>
            </div>
          </div>
          <div className="w-[330px] md:w-[306px] h-[300px] bg-[#FFFFFF] flex flex-col items-center mt-8 p-[32px] z-10">
            <div className="flex flex-col items-center w-[186px] h-[124px] top-[-2px] left-[-33px]">
              <img src="/meet.png" alt="" />
            </div>
            <div className="w-[57PX] h-0 border-t-4 border-[#BD1F17] mt-4"></div>
            <div className="flex flex-col items-center py-4">
              <h1 className="font-bebas text-[24px] leading-[36px] font-bold">
              Meet & Greet Arrangements
              </h1>
              <h1 className="font-inter font-normal text-[16px] leading-[32px] tracking-[-0.015rem]">
              Facilitate virtual/in-person meetings.
              </h1>
            </div>
          </div>
        </Carousel>
        <div className="flex items-center justify-center space-x-4 z-10 sm:flex ">
          <button
            className="w-12 h-12 flex items-center justify-center bg-[#1989CE] rounded-full shadow-lg "
            onClick={() => carouselRef.current.previous()}
          >
            <svg
              className="w-6 h-6 text-[#FFFF]"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
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
            <svg
              className="w-6 h-6 text-[#FFFF]"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
