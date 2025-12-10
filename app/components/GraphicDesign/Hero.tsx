"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";

export default function Hero() {
  const textRightRef = useRef<HTMLDivElement | null>(null);
  const textLeftRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const rightElement = textRightRef.current;
    if (!rightElement) return;
    const rightWidth = rightElement.scrollWidth / 2;

    const leftElement = textLeftRef.current;
    if (!leftElement) return;
    const textLeft =
      leftElement.querySelector<HTMLElement>(".heading-text-left") || null;

    if (!textLeft) return;

    const leftWidth = textLeft.offsetWidth;

    gsap.set(rightElement, { x: -rightWidth });
    gsap.set(leftElement, { x: 0 });

    gsap.to(rightElement, {
      x: 0,
      duration: 20,
      ease: "none",
      repeat: -1,
    });

    gsap.to(leftElement, {
      x: -leftWidth,
      duration: 25,
      ease: "none",
      repeat: -1,
    });
  }, []);

  return (
    <div className="max-w-screen h-screen flex flex-col justify-between overflow-x-hidden">
      <div ref={textRightRef} className="flex">
        <h1 className="heading-text-right text-[10rem] whitespace-nowrap">
          GRAPHIC - GRAPHIC - GRAPHIC - GRAPHIC - GRAPHIC - GRAPHIC -
        </h1>
        <h1 className="heading-text-right text-[10rem] whitespace-nowrap">
          GRAPHIC - GRAPHIC - GRAPHIC - GRAPHIC - GRAPHIC - GRAPHIC -
        </h1>
      </div>
      <p className="lg:text-[2rem] md:text-[2rem] text-[0.8rem] text-center lg:px-96 md:px-12 px-8">
        We provide logo creation, UI/UX design, product mockups, posters,
        banners, and 3D design services.
      </p>
      <div ref={textLeftRef} className="flex">
        <h1 className="heading-text-left text-[10rem] whitespace-nowrap">
          {" "}
          DESIGN - DESIGN - DESIGN - DESIGN - DESIGN - DESIGN -
        </h1>
        <h1 className="heading-text-left text-[10rem] whitespace-nowrap">
          {" "}
          DESIGN - DESIGN - DESIGN - DESIGN - DESIGN - DESIGN
        </h1>
      </div>
    </div>
  );
}
