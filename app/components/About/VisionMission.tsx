"use client";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";
import { useEffect } from "react";
import VisionAndMissionImage from "../../../public/Assets/visionandmission-image.jpg";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function VisionAndMission() {
  useEffect(() => {
    gsap.to(".visionandmission-container", {
      duration: 1.2,
      backgroundColor: "#2F2F2F",
      color: "white",
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".visionandmission-container",
        start: "top 30%",
        once: true,
      },
    });

    // split all elements with the class "split" into words and characters
    let split = SplitText.create(".visionandmission-heading-text", {
      type: "words, chars",
    });

    // now animate the characters in a staggered fashion
    gsap.from(split.chars, {
      duration: 0.5,
      y: 100,
      opacity: 0,
      autoAlpha: 0, // fade in from opacity: 0 and visibility: hidden
      stagger: 0.05, // 0.05 seconds between each
      scrollTrigger: {
        trigger: ".visionandmission-container",
        start: "top 30%",
        once: true,
      },
    });
  }, []);

  return (
    <div className="visionandmission-container w-full h-screen bg-white text-black lg:pt-14">
      <h1 className="visionandmission-heading-text text-6xl lg:text-center font-bold">
        VISION AND MISSION
      </h1>
      <div className="flex justify-center h-96 gap-12 lg:mt-32">
        <div className="flex flex-col justify-between lg:w-72 lg:h-120">
          <h1 className="text-5xl font-bold">VISION</h1>
          <p className="text-[1.3rem]">
            Becoming a trusted digital agency company that always delivers
            maximum results.
          </p>
          <div className="w-72 h-44">
            <Image
              src={VisionAndMissionImage}
              alt="Vision And Mission Image"
              width={200}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col justify-between lg:w-72 lg:h-120">
          <ul className="text-[1.3rem] list-disc">
            <li>
              Providing innovative and results-oriented digital services with
              measurable and effective strategies.
            </li>
            <li className="mt-2">
              Prioritizing integrity and professionalism in every process to
              maintain client trust and satisfaction.
            </li>
            <li className="mt-2">
              Driving client business growth with targeted digital strategies
              that are relevant to market needs.
            </li>
          </ul>
          <h1 className="text-5xl">MISSION</h1>
        </div>
      </div>
    </div>
  );
}
