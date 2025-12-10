"use client";

import Image from "next/image";
import Rama from "../../../public/Assets/rama.jpg";
import Danendra from "../../../public/Assets/danendra.jpg";

import gsap from "gsap";
import SplitText from "gsap/SplitText";
import { useEffect } from "react";

gsap.registerPlugin(SplitText);

export default function Team() {
  useEffect(() => {
    // split all elements with the class "split" into words and characters
    let splitLeft = SplitText.create(".team-heading-text-left", {
      type: "words, chars",
    });

    let splitRight = SplitText.create(".team-heading-text-right", {
      type: "words, chars",
    });

    // now animate the characters in a staggered fashion
    gsap.from(splitLeft.chars, {
      duration: 0.5,
      x: -40,
      y: 100,
      opacity: 0,
      rotation: 30,
      autoAlpha: 0, // fade in from opacity: 0 and visibility: hidden
      stagger: 0.05, // 0.05 seconds between each
      repeat: 0,
      scrollTrigger: {
        trigger: ".team-container",
        start: "top 30%",
        toggleActions: "play none none reverse",
      },
    });

    // now animate the characters in a staggered fashion
    gsap.from(splitRight.chars, {
      duration: 0.5,
      x: 40,
      y: 100,
      opacity: 0,
      rotation: -30,
      autoAlpha: 0, // fade in from opacity: 0 and visibility: hidden
      stagger: { each: 0.05, from: "end" }, // 0.05 seconds between each
      repeat: 0,
      scrollTrigger: {
        trigger: ".team-container",
        start: "top 30%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <div className="team-container w-full lg:min-h-screen md:h-full md:pb-32 lg:pb-0">
      <div className="title-wrapper flex justify-between text-black font-extrabold opacity-45 lg:px-12 lg:pt-12 pt-20">
        <h1 className="team-heading-text-left md:text-[7rem] text-[4rem]">
          OUR
        </h1>
        <h1 className="team-heading-text-right md:text-[7rem] text-[4rem]">
          TEAM
        </h1>
      </div>
      <div className="flex justify-center gap-8">
        <div className="card lg:w-64 lg:h-64 md:w-60 md:h-60 w-44 h-44 bg-black rounded-2xl">
          <Image
            src={Danendra}
            alt="Danendra Image"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
        <div className="card lg:w-64 lg:h-64 md:h-60 md:w-60 w-44 h-44 bg-black rounded-full">
          <Image
            src={Rama}
            alt="Rama Image"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>
      <div className="flex justify-between gap-8 lg:px-12 lg:mt-32 md:mt-10 mt-20 pb-32">
        <div className="team-identity lg:w-120">
          <h1 className="md:text-4xl text-2xl">DANENDRA</h1>
          <p className="md:text-2xl text-xs">
            Building Innovative and Strategic Digital Solutions with Trust,
            Creativity, and a Strong Commitment to Client Growth
          </p>
        </div>
        <div className="team-identity lg:w-120 text-end">
          <h1 className="md:text-4xl text-2xl">RAMA</h1>
          <p className="md:text-2xl text-xs">
            Building Innovative and Strategic Digital Solutions with Trust,
            Creativity, and a Strong Commitment to Client Growth
          </p>
        </div>
      </div>
    </div>
  );
}
