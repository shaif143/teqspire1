"use client";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React, { useRef } from "react";
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
            // customTransition="all .5"
            arrows={false}
            itemClass="carousel-item-padding-80-px"
            className="p-4"
          >
            <div className="px-4">
              <div className="card lg:card-side bg-base-100 shadow-xl ">
                <figure className="lg:w-3/5">
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
                    alt="Album"
                  />
                </figure>
                <div className="card-body lg:w-2/5">
                  <h2 className="card-title">New album 1 is released!</h2>
                  <p>Click the button to listen on Spotiwhy app.</p>
                  <div className="card-actions justify-end">
                    <button className="btn bg-[#1989CE] w-[90px] text-[#FFFF] hover:bg-[#183883]">
                      Visit
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-4">
              <div className="card lg:card-side bg-base-100 shadow-xl ">
                <figure className="lg:w-3/5">
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
                    alt="Album"
                  />
                </figure>
                <div className="card-body lg:w-2/5">
                  <h2 className="card-title">New album 2 is released!</h2>
                  <p>Click the button to listen on Spotiwhy app.</p>
                  <div className="card-actions justify-end">
                    <button className="btn bg-[#1989CE] w-[90px] text-[#FFFF] hover:bg-[#183883]">
                      Visit
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-4">
              <div className="card lg:card-side bg-base-100 shadow-xl ">
                <figure className="lg:w-3/5">
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
                    alt="Album"
                  />
                </figure>
                <div className="card-body lg:w-2/5">
                  <h2 className="card-title">New album 3 is released!</h2>
                  <p>Click the button to listen on Spotiwhy app.</p>
                  <div className="card-actions justify-end">
                    <button className="btn bg-[#1989CE] w-[90px] text-[#FFFF] hover:bg-[#183883]">
                      Visit
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-4">
              <div className="card lg:card-side bg-base-100 shadow-xl ">
                <figure className="lg:w-3/5">
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
                    alt="Album"
                  />
                </figure>
                <div className="card-body lg:w-2/5">
                  <h2 className="card-title">New album 4 is released!</h2>
                  <p>Click the button to listen on Spotiwhy app.</p>
                  <div className="card-actions justify-end">
                    <button className="btn bg-[#1989CE] w-[90px] text-[#FFFF] hover:bg-[#183883]">
                      Visit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </>
  );
}
