"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef } from "react";
import gsap from "gsap";
import { useIsMobile } from "../Hooks/useIsMobile";
import Logo from "../../public/Assets/Logo.png";

export default function Navbar() {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [OpenMenu, setOpenMenu] = useState(false);
  const dropdownRef = useRef(null);
  const isMobile = useIsMobile(1000);

  return (
    <nav className="navbar w-screen h-20 fixed top-0 z-50 flex justify-between items-center lg:px-6 px-3">
      {!isMobile ? (
        <>
          <Link href="/">
            <Image src={Logo} alt="Logo" className="lg:w-10 w-8" />
          </Link>
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
                  <Link href="/graphicdesign" className=" my-auto ms-2">
                    Graphic Design
                  </Link>
                </div>
              </div>
            </div>
            <Link href="/contact">Contact</Link>
          </div>
        </>
      ) : (
        <>
          <Link href="/">
            <Image src={Logo} alt="Logo" className="w-8" />
          </Link>
          <div className="hamburger-container">
            <svg
              onClick={() => {
                setIsOpen(!isOpen);
                if (!isOpen) {
                  setOpenMenu(false);
                }
              }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="w-5"
            >
              <path
                fill="#000000"
                d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"
              />
            </svg>
            <div
              className={`hamburger-menu absolute left-0 top-20 w-screen ${
                isOpen && !OpenMenu
                  ? `h-[134.4px] opacity-100`
                  : isOpen && OpenMenu
                  ? `h-56 opacity-100`
                  : `h-0 opacity-0`
              } bg-white transition-all duration-200 ease-out`}
            >
              <Link
                href="/about"
                className="w-screen h-[44.8px] flex items-center hover:bg-[#2F2F2F] hover:text-white"
              >
                About Us
              </Link>
              <div
                onClick={() => {
                  setOpenMenu(!OpenMenu);
                }}
                className="w-screen h-[44.8px] flex items-center gap-1 hover:bg-[#2F2F2F] hover:text-white"
              >
                <p>Services</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                  className="w-2"
                >
                  <path d="M32 288c-12.9 0-24.6 7.8-29.6 19.8S.2 333.5 9.4 342.6l160 160c12.5 12.5 32.8 12.5 45.3 0l160-160c9.2-9.2 11.9-22.9 6.9-34.9S364.9 288 352 288L32 288z" />
                </svg>
              </div>
              {OpenMenu ? (
                <div>
                  <Link
                    href="/web"
                    className="block h-[44.8px] hover:bg-[#2F2F2F] hover:text-white"
                  >
                    Web Development
                  </Link>
                  <Link
                    href="/graphicdesign"
                    className="h-[44.8px] hover:bg-[#2F2F2F] hover:text-white"
                  >
                    Graphic Design
                  </Link>
                </div>
              ) : null}
              <Link
                href="/contact"
                className={`w-screen h-[44.8px] flex items-center hover:bg-[#2F2F2F] hover:text-white`}
              >
                Contact
              </Link>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}
