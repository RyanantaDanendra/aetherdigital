"use client";

import Image from "next/image";
import Image1 from "../../../public/Assets/services-image1.jpg";
import Image2 from "../../../public/Assets/services-image2.jpg";
import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

export default function Services() {
  const [isHovered, setIsHovered] = useState(false);
  const overlayRef = useRef(null);
  const designOverlay = useRef(null);

  useEffect(() => {
    // split all elements with the class "split" into words and characters
    let split = SplitText.create(".heading-text", { type: "words, chars" });

    // now animate the characters in a staggered fashion
    gsap.from(split.chars, {
      duration: 0.5,
      x: -30,
      y: 100,
      opacity: 0,
      rotation: 30,
      autoAlpha: 0, // fade in from opacity: 0 and visibility: hidden
      stagger: 0.05, // 0.05 seconds between each
      scrollTrigger: {
        trigger: ".services-container",
        start: "top 30%",
        once: true,
      },
    });

    gsap.fromTo(
      ".text-overlay",
      {
        opacity: 0,
      },
      {
        opacity: 0.2,
        duration: 1,
        ease: "bounce.in",
        scrollTrigger: {
          trigger: ".services-container",
          start: "top 30%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div className="services-container w-full lg:h-screen h-full relative">
      <h1 className="heading-text lg:text-6xl md:text-4xl text-2xl text-center font-bold mt-32">
        WHAT WE DO
      </h1>
      <div className="flex justify-center gap-3 lg:mt-20 px-1 lg:px-0 mt-6">
        <div
          className={`service-card lg:w-100 lg:h-100 w-60 h-60 relative`}
          onMouseEnter={() => {
            setIsHovered(true);
            gsap.to(overlayRef.current, {
              opacity: 0.7,
              duration: 0.3,
              ease: "power1.in",
            });
          }}
          onMouseLeave={() => {
            setIsHovered(false);
            gsap.to(overlayRef.current, {
              opacity: 0,
              duration: 0.4,
              ease: "power2.out",
            });
          }}
        >
          <Image
            src={Image1}
            alt="Web Development"
            className={`w-full h-full object-cover`}
          />
          <div
            ref={overlayRef}
            className="bg-black w-full h-full absolute top-0 z-20 opacity-0 flex justify-center items-center"
          >
            <p className="text-white lg:text-2xl">WEB DEVELOPMENT</p>
          </div>
        </div>
        <div
          className="service-card lg:w-100 lg:h-100 w-60 h-60 relative"
          onMouseEnter={() => {
            setIsHovered(true);
            gsap.to(designOverlay.current, {
              opacity: 0.7,
              duration: 0.3,
              ease: "power1.in",
            });
          }}
          onMouseLeave={() => {
            setIsHovered(false);
            gsap.to(designOverlay.current, {
              opacity: 0,
              duration: 0.4,
              ease: "power2.out",
            });
          }}
        >
          <Image
            src={Image2}
            alt="Graphic Designer"
            className="w-full h-full object-cover"
          />
          <div
            ref={designOverlay}
            className="bg-black w-full h-full absolute top-0 z-20 opacity-0 flex justify-center items-center"
          >
            <p className="text-white lg:text-2xl">GRAPHIC DESIGN</p>
          </div>
        </div>
      </div>
      <h2 className="text-overlay lg:text-[18rem] md:text-[8rem] text-[5rem] md:top-24 top-32 -left-12 -z-12 opacity-30 font-bold lg:-left-56 lg:top-36 absolute whitespace-nowrap">
        WHAT WE DO
      </h2>
      <div className="descriotion w-screen flex mt-10">
        <div className="text lg:w-1/2 lg:pe-0 lg:ps-6 ps-2">
          {" "}
          <p className="text-xs md:text-[1rem] lg:text-2xl">
            We create responsive, powerful, and scalable websites using modern
            technologies to deliver smooth performance across all devices.
          </p>
        </div>
        <div className="text lg:w-1/2 text-end lg:ps-0 lg:text-xl lg:pe-6">
          {" "}
          <p className="text-xs md:text-[1rem] lg:text-2xl">
            We create impactful and visually engaging designs that strengthen
            your brand identity and communicate your message clearly across all
            digital platforms.”
          </p>
        </div>
      </div>
    </div>
  );
}
