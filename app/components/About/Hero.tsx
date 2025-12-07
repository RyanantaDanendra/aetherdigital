"use client";

import Image from "next/image";
import AboutHeroImage from "../../../public/Assets/about-hero-image.png";

import gsap from "gsap";
import SplitText from "gsap/SplitText";
import { useEffect } from "react";

gsap.registerPlugin(SplitText);

export default function Hero() {
  useEffect(() => {
    // split all elements with the class "split" into words and characters
    let split = SplitText.create(".heading-text", { type: "words, chars" });

    // now animate the characters in a staggered fashion
    gsap.from(split.chars, {
      duration: 0.5,
      x: -40,
      y: 100,
      opacity: 0,
      rotation: 30,
      autoAlpha: 0, // fade in from opacity: 0 and visibility: hidden
      stagger: 0.05, // 0.05 seconds between each
      repeat: 0,
    });
  });

  return (
    <div className="about-hero-container w-full h-screen">
      <h1 className="heading-text lg:text-[16rem] lg:absolute lg:-top-10">
        ABOUT US
      </h1>
      <h2 className="lg:absolute lg:top-72 lg:text-xl lg:ms-3">
        Building Innovative and Strategic Digital Solutions with Trust, <br />
        Creativity, and a Strong Commitment to Client Growth
      </h2>
      <div className="h-full flex justify-between items-end pb-12">
        <div className="lg:w-1/4 relative">
          <Image
            src={AboutHeroImage}
            alt="About Image"
            className="object-cover w-56 lg:absolute lg:-top-44"
          />
        </div>
        <div className="lg:w-3/4 pe-4">
          <p className="text-end text-2xl">
            Aether Digital is a creative digital agency specializing in the
            creation of digital products, particularly websites and graphic
            design. Aether Digital's mission is to bridge the gap between
            clients' ideas and needs and innovative, functional digital
            solutions.
          </p>
        </div>
      </div>
    </div>
  );
}
