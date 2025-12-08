"use client";

import Image from "next/image";
import Logo from "../../../public/Assets/Logo.png";
import gsap from "gsap";
import { useEffect } from "react";

export default function Hero() {
  useEffect(() => {
    let tl = gsap.timeline();

    tl.fromTo(
      ".hero-title",
      {
        x: -5000,
      },
      {
        x: 0,
        duration: 4,
        ease: "power3.out",
      }
    )
      .fromTo(
        ".hero-image",
        {
          y: 1000,
          rotate: 360,
          opacity: 0,
        },
        {
          y: 0,
          rotate: 0,
          duration: 2,
          opacity: 0.5,
          ease: "power1.out",
        }
      )
      .to(".hero-image", {
        rotate: "-=360",
        duration: 4,
        ease: "linear",
        repeat: -1,
      });
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center flex-col overflow-hidden whitespace-nowrap relative">
      <h1 className="hero-title lg:text-[45rem] text-[25rem] absolute -left-44 font-light">
        AETHER DIGITAL
      </h1>
      <Image
        src={Logo}
        alt="Logo"
        width={300}
        className="hero-image absolute -z-10 w-40 lg:w-[300px]"
      />
      <p className="absolute bottom-10 left-0 text-xs lg:text-2xl lg:ms-5 text-center lg:text-left">
        Aether Digital is a creative digital agency delivering innovative,
        <br />
        functional, and reliable web and graphic design solutions.
      </p>
    </div>
  );
}
