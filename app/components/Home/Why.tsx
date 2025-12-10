import Image from "next/image";
import WhyImage from "../../../public/Assets/why-image.png";

export default function Why() {
  return (
    <div className="why-container w-full hscreen overflow-hidden mt-32 lg:mt-0 pb-32 md:pb-0">
      <h1 className="text-center lg:text-6xl md:text-4xl text-2xl font-bold">
        WHY CHOOSE US?
      </h1>
      <div className="why-content-container grid grid-cols-3 mt-12">
        <div className="flex flex-col items-center gap-5">
          <div className="card lg:w-80 lg:h-60 w-40 h-40 bg-transparent border-4 border-[#D4AF37] rounded-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="lg:w-10 w-5 mx-auto mt-3"
            >
              <path d="M256 0c4.6 0 9.2 1 13.4 2.9L457.8 82.8c22 9.3 38.4 31 38.3 57.2-.5 99.2-41.3 280.7-213.6 363.2-16.7 8-36.1 8-52.8 0-172.4-82.5-213.1-264-213.6-363.2-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.9 1 251.4 0 256 0zm0 66.8l0 378.1c138-66.8 175.1-214.8 176-303.4l-176-74.6 0 0z" />
            </svg>
            <h1 className="lg:mt-6 mt-2 text-center font-bold text-[0.6rem] lg:text-xl">
              TRUSTED
            </h1>
            <p className="lg:text-lg text-xs mt-6 ms-2">
              We build trust through transparency, consistency, and real
              results.
            </p>
          </div>
          <div className="card lg:w-80 lg:h-60 w-40 h-40 bg-transparent border-4 border-[#D4AF37] rounded-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              className="lg:w-10 w-5 mx-auto mt-3"
            >
              <path d="M292.9 384c7.3-22.3 21.9-42.5 38.4-59.9 32.7-34.4 52.7-80.9 52.7-132.1 0-106-86-192-192-192S0 86 0 192c0 51.2 20 97.7 52.7 132.1 16.5 17.4 31.2 37.6 38.4 59.9l201.7 0zM288 432l-192 0 0 16c0 44.2 35.8 80 80 80l32 0c44.2 0 80-35.8 80-80l0-16zM184 112c-39.8 0-72 32.2-72 72 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-66.3 53.7-120 120-120 13.3 0 24 10.7 24 24s-10.7 24-24 24z" />
            </svg>
            <h1 className="lg:mt-6 mt-2 text-center font-bold lg:text-xl text-[0.6rem]">
              Creative & Innovative Solutions
            </h1>
            <p className="lg:text-lg text-xs mt-6 ms-2">
              We deliver fresh ideas and smart solutions that keep your brand
              ahead of the curve.
            </p>
          </div>
        </div>
        <div>
          <Image
            src={WhyImage}
            alt="Why?"
            className="lg:w-[40rem] w-56 mt-28 md:w-72 lg:mt-0 md:mt-0"
          />
        </div>
        <div className="flex flex-col items-center gap-5">
          <div className="card lg:w-80 lg:h-60 w-40 h-40 bg-transparent border-4 border-[#D4AF37] rounded-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              className="lg:w-10 w-5 mx-auto mt-3"
            >
              <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
            </svg>
            <h1 className="lg:mt-6 mt-2 text-center font-bold lg:text-xl text-[0.6rem]">
              HIGH QUALITY RESULTS
            </h1>
            <p className="lg:text-lg text-xs lg:mt-6 mt-3 ms-2">
              We focus on precision, performance, and premium-quality outcomes
              in every project.
            </p>
          </div>
          <div className="card lg:w-80 lg:h-60 w-40 h-40 bg-transparent border-4 border-[#D4AF37] rounded-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              className="lg:w-10 w-5 mx-auto mt-3"
            >
              <path d="M401.2 39.1L549.4 189.4c27.7 28.1 27.7 73.1 0 101.2L393 448.9c-9.3 9.4-24.5 9.5-33.9 .2s-9.5-24.5-.2-33.9L515.3 256.8c9.2-9.3 9.2-24.4 0-33.7L367 72.9c-9.3-9.4-9.2-24.6 .2-33.9s24.6-9.2 33.9 .2zM32.1 229.5L32.1 96c0-35.3 28.7-64 64-64l133.5 0c17 0 33.3 6.7 45.3 18.7l144 144c25 25 25 65.5 0 90.5L285.4 418.7c-25 25-65.5 25-90.5 0l-144-144c-12-12-18.7-28.3-18.7-45.3zm144-85.5a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
            </svg>
            <h1 className="lg:mt-6 mt-2 text-center font-bold lg:text-xl text-[0.6rem]">
              AFFORDABLE
            </h1>
            <p className="lg:text-lg text-xs mt-6 ms-2">
              Premium quality and creative solutions at a cost that makes sense.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
