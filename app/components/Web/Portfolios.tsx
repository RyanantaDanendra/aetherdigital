"use client";

import gsap from "gsap";
import SplitText from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";
import Image from "next/image";

// images data
import Ssamayaspa from "../../../public/Assets/web/ssamayaspa.png";
import Tour from "../../../public/Assets/web/tour.png";
import Together from "../../../public/Assets/web/together.png";
import DStore from "../../../public/Assets/web/dstore.png";
import WeGram from "../../../public/Assets/web/wegram.png";

gsap.registerPlugin(SplitText, ScrollTrigger);

export default function () {
  useEffect(() => {
    // split all elements with the class "split" into words and characters
    let split = SplitText.create(".portfolios-heading-text", {
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
        trigger: ".portfolios-container",
        start: "top 40%",
        once: true,
      },
    });

    return () => {
      split.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const datas = [
    {
      title: "Ssamaya Spa Bali",
      description:
        "Ssamaya Day Spa is a health and beauty spa, located in Berawa Canggu, Bali. Ssamaya is a premium offering from Marissa Spa which has been active in the world of spas in Bali for 7 years. ssamayaspabali.com is a company profile website designed to showcase the spa's services and help more customers discover relaxation, beauty, and wellness.",
      image: Ssamayaspa,
    },
    {
      title: "Together",
      description:
        "Together is a web-based attendance system designed for campus program events. It allows users to register, log in, book tickets, upload payment receipts, and download event photos shared by the admin. The system also includes email verification for security. An admin dashboard is provided to manage users, track registrations, bookings, and payments, update ticket data, and upload event photos.",
      image: Together,
    },
    {
      title: "Tour",
      description:
        "Tour is a website that is developed as a part of my laravel learning journey, this project demonstrate my ability to build a professional tour and travel website using modern frameworks.",
      image: Tour,
    },
    {
      title: "D'Store",
      description:
        "D'Store is a website that is developed as a part of my React learning journey, this project demonstrate my ability to build a professional e-commerce website using modern frameworks.",
      image: DStore,
    },
    {
      title: "We Gram",
      description:
        "we-gram is a website that is developed as a part of my mern stack learning journey, this project demonstrate my ability to build front-end and back-end using the mern stack. On this website, user can search and download images from the official pixabay website.",
      image: WeGram,
    },
  ];

  return (
    <div className="portfolios-container w-screen h-screen">
      <h1 className="portfolios-heading-text text-center text-6xl font-bold mt-10">
        OUR PREVIOUS WORK
      </h1>
      <div className="cards-container mt-12 overflow-hidden">
        <hr />
        {datas.map((data, index) => (
          <>
            <div className="portfolios-card grid grid-cols-12 h-56 gap-10 px-12 mb-2 mt-2">
              <div className="image-container col-span-4 h-56 w-96">
                <Image
                  src={data.image}
                  alt={data.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="col-span-8">
                <h1 className="text-3xl font-bold">{data.title}</h1>
                <p className="text-xl">{data.description}</p>
              </div>
            </div>
            <hr />
          </>
        ))}
      </div>
    </div>
  );
}
