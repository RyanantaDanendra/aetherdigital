"use client";

import Image from "next/image";
import Testimonial1 from "../../../public/Assets/dummy-testimonials-1.jpg";
import Testimonial2 from "../../../public/Assets/dummy-testimonial-2.jpg";
import Testimonial3 from "../../../public/Assets/dummy-testimonial-3.jpg";

export default function Testimonials() {
  const datas = [
    {
      name: "Aiko Tanaka",
      comment:
        "“Aether Digital delivered exactly what I envisioned. The design feels modern and intuitive, and the entire process was smooth and professional. I truly felt supported from start to finish.”",
      image: Testimonial1,
    },
    {
      name: "Lucas Meyer",
      comment:
        "“Very professional team with excellent communication. The website performs fast, looks clean, and was delivered on schedule. Aether Digital truly understands digital branding.”",
      image: Testimonial2,
    },
    {
      name: "Oliver Bennett",
      comment:
        "“Impressive work quality and strong attention to detail. They translated our ideas into a functional and visually polished website. Reliable, skilled, and easy to work with.”",
      image: Testimonial3,
    },
  ];

  return (
    <div className="testimonials-container w-screen h-screen">
      <h1 className="mt-20 text-center md:text-6xl text-4xl font-bold">
        WHAT OTHER'S SAY?
      </h1>
      <div className="cards-container flex justify-center flex-wrap mt-20">
        {datas.map((data, index) => (
          <div className="card w-96 h-150 flex flex-col items-center">
            <div key={index} className="image-wrapper w-64 h-56 rounded-full ">
              <Image
                src={data.image}
                alt={data.name}
                className="w-full h-full object-cover rounded-full"
              />
              <h1 className="text-2xl font-bold mt-7 text-center">
                {data.name}
              </h1>
              <p className="mt-5">{data.comment}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
