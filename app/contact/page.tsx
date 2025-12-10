import Map from "../components/Map";

export default function Contact() {
  return (
    <div className="contact-container bg-[#2F2F2F] text-white w-screen min-h-screen lg:grid lg:grid-cols-2 px-20 pb-8">
      <div className="col-span-1 flex lg:flex-col flex-row justify-between pt-38">
        <div className="contact-information-container">
          <h1 className="lg:text-6xl md:text-4xl">GET IN TOUCH</h1>
          <div className="flex items-center gap-5 mt-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              className="md:w-6"
            >
              <path
                fill="#FFFFFF"
                d="M0 188.6C0 84.4 86 0 192 0S384 84.4 384 188.6c0 119.3-120.2 262.3-170.4 316.8-11.8 12.8-31.5 12.8-43.3 0-50.2-54.5-170.4-197.5-170.4-316.8zM192 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128z"
              />
            </svg>
            <p className="lg:text-xl ">Denpasar, Bali</p>
          </div>
          <div className="flex items-center gap-5 mt-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="md:w-6"
            >
              <path
                fill="#ffffff"
                d="M48 64c-26.5 0-48 21.5-48 48 0 15.1 7.1 29.3 19.2 38.4l208 156c17.1 12.8 40.5 12.8 57.6 0l208-156c12.1-9.1 19.2-23.3 19.2-38.4 0-26.5-21.5-48-48-48L48 64zM0 196L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-188-198.4 148.8c-34.1 25.6-81.1 25.6-115.2 0L0 196z"
              />
            </svg>
            <p className="lg:text-xl">aetherdigital@gmail.com</p>
          </div>
          <div className="flex items-center gap-5 mt-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="md:w-6"
            >
              <path
                fill="#ffffff"
                d="M160.2 25C152.3 6.1 131.7-3.9 112.1 1.4l-5.5 1.5c-64.6 17.6-119.8 80.2-103.7 156.4 37.1 175 174.8 312.7 349.8 349.8 76.3 16.2 138.8-39.1 156.4-103.7l1.5-5.5c5.4-19.7-4.7-40.3-23.5-48.1l-97.3-40.5c-16.5-6.9-35.6-2.1-47 11.8l-38.6 47.2C233.9 335.4 177.3 277 144.8 205.3L189 169.3c13.9-11.3 18.6-30.4 11.8-47L160.2 25z"
              />
            </svg>
            <p className="lg:text-xl">+62 1234567890</p>
          </div>
        </div>
        <div className="md:flex md:flex-col md:justify-end lg:block">
          <div className="flex items-center mb-5 gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
              className="md:w-6"
            >
              <path
                fill="#ffffff"
                d="M80 299.3l0 212.7 116 0 0-212.7 86.5 0 18-97.8-104.5 0 0-34.6c0-51.7 20.3-71.5 72.7-71.5 16.3 0 29.4 .4 37 1.2l0-88.7C291.4 4 256.4 0 236.2 0 129.3 0 80 50.5 80 159.4l0 42.1-66 0 0 97.8 66 0z"
              />
            </svg>
            <p className="lg:text-xl">@aetherdigital</p>
          </div>
          <div className="flex items-center mb-5 gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="md:w-6"
            >
              <path
                fill="#ffffff"
                d="M224.3 141a115 115 0 1 0 -.6 230 115 115 0 1 0 .6-230zm-.6 40.4a74.6 74.6 0 1 1 .6 149.2 74.6 74.6 0 1 1 -.6-149.2zm93.4-45.1a26.8 26.8 0 1 1 53.6 0 26.8 26.8 0 1 1 -53.6 0zm129.7 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM399 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
              />
            </svg>
            <p className="lg:text-xl">@aetherdigital</p>
          </div>
          <h1 className="lg:text-6xl md:text-4xl">SOCIALS</h1>
        </div>
      </div>
      <div className="col-span-1 lg:place-self-end place-self-center md:mt-0 mt-10">
        <div className="map-container lg:w-120 w-120 h-120 lg:h-120 mt-10">
          <Map />
        </div>
      </div>
    </div>
  );
}
