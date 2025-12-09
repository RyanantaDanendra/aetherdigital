"use client";

import gsap from "gsap";
import { useEffect } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Divider() {
  useEffect(() => {
    const texts = gsap.utils.toArray(".divider-text");

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".divider-wrapper",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    tl.fromTo(
      texts[0],
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.1,
      }
    )
      .fromTo(
        texts[1],
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 0.8 }
      )
      .fromTo(
        texts[2],
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 0.8 }
      )
      .fromTo(
        texts[3],
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
        }
      )
      .fromTo(
        texts[4],
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power4.out",
        }
      );
  }, []);

  return (
    <div className="divider-wrapper w-full h-full">
      <h1 className="divider-text lg:text-[4rem] md:text-[2.5rem] text-[1.2rem] lg:ms-3 lg:mt-32">
        A TRUSTED DIGITAL AGENCY
      </h1>
      <h1 className="divider-text lg:text-[4rem] md:text-[2.5rem] text-[1.2rem] lg:ms-20 md:ms-4 ms-2">
        DELIVERING INNOVATIVE, STRATEGIC,
      </h1>
      <h1 className="divider-text lg:text-[4rem] md:text-[2.5rem] text-[1.2rem] lg:ms-40 md:ms-32 ms-20">
        MEASURABLE WEBSITES, AND
      </h1>
      <h1 className="divider-text lg:text-[4rem] md:text-[2.5rem] text-[1.2rem] lg:ms-12 md:ms-4 ms-2">
        DESIGN SOLUTIONS FOR REAL{" "}
      </h1>
      <h1 className="divider-text lg:text-[4rem] md:text-[2.5rem] text-[1.2rem] lg:ms-3">
        BUSINESS GROWTH{" "}
      </h1>
    </div>
  );
}
