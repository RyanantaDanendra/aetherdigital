"use client";

import Link from "next/link";
import { useState, useRef } from "react";
import gsap from "gsap";

export default function Navbar() {
  const [isHovered, setIsHovered] = useState(false);
  const dropdownRef = useRef(null);

  return (
    <nav className="navbar w-screen h-20 fixed top-0 z-50 flex justify-between items-center">
      <h1 className="">Hello World</h1>
      <div className="links flex items-center gap-3 pe-6 h-20">
        <Link href="/about">About Us</Link>
        <div
          className="flex gap-1 relative h-20 items-center"
          onMouseEnter={() => {
            setIsHovered(true);
            gsap.to(dropdownRef.current, {
              opacity: 1,
              height: "88.4px",
              duration: 0.3,
            });
          }}
          onMouseLeave={() => {
            gsap.to(dropdownRef.current, {
              opacity: 0,
              height: 0,
              duration: 0.4,
            });
          }}
        >
          <Link href="">Services</Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
            className="w-3"
          >
            <path d="M140.3 376.8c12.6 10.2 31.1 9.5 42.8-2.2l128-128c9.2-9.2 11.9-22.9 6.9-34.9S301.4 192 288.5 192l-256 0c-12.9 0-24.6 7.8-29.6 19.8S.7 237.5 9.9 246.6l128 128 2.4 2.2z" />
          </svg>
          <div
            ref={dropdownRef}
            className="w-44 h-0 bg-[#2F2F2F] absolute top-14 -right-12 opacity-0 rounded-2xl"
          >
            <div className="h-[44.8px] flex items-center text-white hover:bg-white transition-all duration-200 ease-out hover:text-black">
              <Link href="/web" className="block ms-2">
                Web Development
              </Link>
            </div>
            <div className="h-[44.8px] flex items-center text-white hover:bg-white hover:text-black">
              <Link href="" className=" my-auto ms-2">
                Graphic Design
              </Link>
            </div>
          </div>
        </div>
        <Link href="">Contact</Link>
      </div>
    </nav>
  );
}
