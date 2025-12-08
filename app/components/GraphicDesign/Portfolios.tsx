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
      span: 3,
      image: Gd1,
    },
    {
      span: 5,
      image: Gd2,
    },
    {
      span: 5,
      image: Gd3,
    },
    {
      span: 3,
      image: Gd4,
    },
    {
      span: 3,
      image: Gd5,
    },
    {
      span: 5,
      image: Gd6,
    },
    {
      span: 5,
      image: Gd7,
    },
    {
      span: 3,
      image: Gd8,
    },
    {
      span: 3,
      image: Gd9,
    },
    {
      span: 5,
      image: Gd10,
    },
    {
      span: 5,
      image: Gd11,
    },
    {
      span: 3,
      image: Gd12,
    },
    {
      span: 8,
      image: Gd13,
    },
  ];

  return (
    <div className="portfolios-container w-screen min-h-screen">
      <h1 className="portfolios-heading-text text-center text-6xl font-bold mt-10">
        OUR PREVIOUS WORK
      </h1>
      <div className="datas-container grid grid-cols-8 gap-7 px-12 mt-12">
        {datas.map((data, index) => (
          <div
            className={`data-image w-full h-64 bg-white col-span-${data.span} `}
          >
            <Image
              src={data.image}
              alt="Image 1"
              className=" w-full h-full object-fit object-center"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
