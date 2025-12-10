"use client";

import Image from "next/image";
import Testimonial1 from "../../../public/Assets/dummy-testimonials-4.jpg";
import Testimonial2 from "../../../public/Assets/dummy-testimonials-5.jpg";
import Testimonial3 from "../../../public/Assets/dummy-testimonials-6.jpg";

export default function Testimonials() {
  const datas = [
    {
      name: "Hana Sato",
      comment:
        "“I absolutely loved the design results from Aether Digital! The team understood my vision perfectly and turned it into beautiful visuals. The process was smooth and revisions were handled quickly.”",
      image: Testimonial1,
    },
    {
      name: "Michael Carter",
      comment:
        "“Working with Aether Digital was an amazing experience. The designs were clean, modern, and perfectly matched my brand identity. Communication was fast and very professional.”",
      image: Testimonial2,
    },
    {
      name: "Daniel Hoffman",
      comment:
        "“Aether Digital delivered beyond my expectations. From logo to social media designs, everything was on point. Highly recommended for startups and growing businesses.”",
      image: Testimonial3,
    },
  ];

  return (
    <div className="testimonials-container w-screen h-full">
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
