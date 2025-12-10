"use client";

import Gd1 from "../../../public/Assets/graphicdesign/gd1.png";
import Gd2 from "../../../public/Assets/graphicdesign/gd2.png";
import Gd3 from "../../../public/Assets/graphicdesign/gd3.png";
import Gd4 from "../../../public/Assets/graphicdesign/gd4.png";
import Gd5 from "../../../public/Assets/graphicdesign/gd5.png";
import Gd6 from "../../../public/Assets/graphicdesign/gd6.png";
import Gd7 from "../../../public/Assets/graphicdesign/gd7.png";
import Gd8 from "../../../public/Assets/graphicdesign/gd8.png";
import Gd9 from "../../../public/Assets/graphicdesign/gd9.png";
import Gd10 from "../../../public/Assets/graphicdesign/gd10.png";
import Gd11 from "../../../public/Assets/graphicdesign/gd11.png";
import Gd12 from "../../../public/Assets/graphicdesign/gd12.png";
import Gd13 from "../../../public/Assets/graphicdesign/gd13.png";
import Image from "next/image";
import { useEffect } from "react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(SplitText);

export default function Portfolios() {
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

    gsap.from(".data-image", {
      opacity: 0,
      scrollTrigger: {
        trigger: ".portfolios-container",
        start: "top 40%",
        once: true,
      },
    });
  }, []);

  const datas = [
    {
      span: "lg:col-span-3",
      image: Gd1,
    },
    {
      span: "lg:col-span-5",
      image: Gd2,
    },
    {
      span: "lg:col-span-5",
      image: Gd3,
    },
    {
      span: "lg:col-span-3",
      image: Gd4,
    },
    {
      span: "lg:col-span-3",
      image: Gd5,
    },
    {
      span: "lg:col-span-5",
      image: Gd6,
    },
    {
      span: "lg:col-span-5",
      image: Gd7,
    },
    {
      span: "lg:col-span-3",
      image: Gd8,
    },
    {
      span: "lg:col-span-3",
      image: Gd9,
    },
    {
      span: "lg:col-span-5",
      image: Gd10,
    },
    {
      span: "lg:col-span-5",
      image: Gd11,
    },
    {
      span: "lg:col-span-3",
      image: Gd12,
    },
    {
      span: "lg:col-span-8",
      image: Gd13,
    },
  ];

  return (
    <div className="portfolios-container w-screen min-h-screen">
      <h1 className="portfolios-heading-text text-center md:text-6xl text-4xl font-bold mt-10">
        OUR PREVIOUS WORK
      </h1>
      <div className="datas-container lg:grid lg:grid-cols-8 flex flex-wrap justify-center gap-7 px-12 mt-12">
        {datas.map((data, index) => (
          <div
            className={`data-image lg:w-full w-56 h-64 bg-white ${data.span} `}
          >
            <Image
              src={data.image}
              alt="Image 1"
              className=" w-full h-full lg:object-fit md:object-cover object-center"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
