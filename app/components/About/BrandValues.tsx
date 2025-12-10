"use client";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function BrandValues() {
  useEffect(() => {
    gsap.to(".brandvalues-container", {
      duration: 1.2,
      backgroundColor: "#2F2F2F",
      color: "white",
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".brandvalues-container",
        start: "top 30%",
        toggleActions: "play none none reverse",
      },
    });

    // split all elements with the class "split" into words and characters
    let split = SplitText.create(".brandvalues-heading-text", {
      type: "words, chars",
    });

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
      scrollTrigger: {
        trigger: ".brandvalues-container",
        start: "top 30%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  const datas = [
    {
      title: "Innovation",
      description:
        "We embrace new ideas, technologies, and creative approaches to deliver digital solutions that are modern, effective, and built for long-term impact. Every project is driven by thoughtful innovation that turns ideas into meaningful digital experiences.",
    },
    {
      title: "Professionalism",
      description:
        "We work with clear communication, structured processes, and strong attention to detail. Every project is handled responsibly and delivered on time with high standards of quality and integrity.",
    },
    {
      title: "Trust & Reliability",
      description:
        "We build trust through honesty, consistency, and dependable results. Our clients rely on us not just for delivery, but for long-term digital partnership.",
    },
  ];

  return (
    <div className="brandvalues-container w-full lg:h-screen md:w-full md:pb-32 lg:pb-0 pb-19 bg-white text-black pt-6">
      <h1 className="brandvalues-heading-text lg:text-6xl md:text-4xl text-3xl text-center md:text-start font-bold lg:ms-3 lg:mt-10">
        OUR CORE VALUES
      </h1>
      <div className="cards-container grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 lg:mt-32 md:mt-12 mt-12 lg:px-5">
        {datas.map((data, index) => (
          <div key={index} className="card">
            <h2 className="text-3xl">
              <span className="text-5xl font-bold">{index + 1}. </span>
              {data.title}
            </h2>
            <p className="md:text-2xl text-lg mt-5">{data.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
