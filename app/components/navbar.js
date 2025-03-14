import React from "react";

export default function NavBar() {
  return (
    <>
      <div className="navbar bg-[#FFFF]">
        {/* Before lg breakpoint: menu icon on the left and logo centered */}
        <div className="navbar-start lg:hidden">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-[#FFFF] rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              {/* <li>
                <a href="#projects">Projects</a>
              </li> */}
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#faq">Faq</a>
              </li>
              <li>
                <a href="#pricing">Pricing</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <li>
                <a className="min-[360px]:hidden btn bg-[#1989CE] text-[#FFFF] hover:bg-[#183883]">
                  Make an Appointment
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Logo at the center before lg and left after lg */}
        <div className="navbar-center lg:navbar-start lg:pl-[50px]">
          <div
            type="button"
            id="logo"
            className="w-[140px] md:w-[180px] btn btn-ghost mr-[50px]"
          >
            <img src="/logo.png" alt="Logo" />
          </div>
        </div>

        {/* Menu items for larger screens */}
        <div className="navbar-center hidden lg:flex ml-[-235px]">
          <ul className="menu menu-horizontal px-1 text-[#183883] font-bold">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#faq">Faq</a>
            </li>
            <li>
              <a href="#pricing">Pricing</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className=" navbar-end md:mr-4 lg:mr-6">
          <a className="hidden min-[360px]:flex btn bg-[#1989CE] text-[#FFFF] hover:bg-[#183883] text-[10px] md:text-[18px] sm:text-[14px] leading-5" href="https://docs.google.com/forms/d/e/1FAIpQLScs9BzhhVT-gANx_xQ79fUwaMQXRjm_N1LLK3eoUGoYpYiLNQ/viewform?usp=sf_link" 
              target="_blank" 
              rel="noopener noreferrer">
            Make an Appointment
          </a>
        </div>
      </div>
    </>
  );
}
