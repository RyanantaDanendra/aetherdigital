import Image from "next/image";
import Logo from "../../public/Assets/Logo.png";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="footer-container w-screen h-96 bg-white lg:px-8 lg:py-4 flex flex-col items-center">
      <h1 className="lg:text-[4rem] text-[3rem] text-center">AETHER DIGITAL</h1>
      <div className="flex gap-8">
        <div className="">
          <h2 className="text-xl font-bold">Navigation</h2>
          <Link href="" className="block">
            Home
          </Link>
          <Link href="" className="block">
            About Us
          </Link>
          <Link href="" className="block">
            Web Development
          </Link>
          <Link href="" className="block">
            Graphic Design
          </Link>
          <Link href="">Contact</Link>
        </div>
        <div>
          <h2 className="text-xl font-bold">Socials</h2>
          <div className="flex items-center gap-2">
            <Link href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="md:w-4"
              >
                <path
                  fill="#000000"
                  d="M80 299.3l0 212.7 116 0 0-212.7 86.5 0 18-97.8-104.5 0 0-34.6c0-51.7 20.3-71.5 72.7-71.5 16.3 0 29.4 .4 37 1.2l0-88.7C291.4 4 256.4 0 236.2 0 129.3 0 80 50.5 80 159.4l0 42.1-66 0 0 97.8 66 0z"
                />
              </svg>
            </Link>
            <p className="">@aetherdigital</p>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <Link href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="md:w-6"
              >
                <path
                  fill="#000000"
                  d="M224.3 141a115 115 0 1 0 -.6 230 115 115 0 1 0 .6-230zm-.6 40.4a74.6 74.6 0 1 1 .6 149.2 74.6 74.6 0 1 1 -.6-149.2zm93.4-45.1a26.8 26.8 0 1 1 53.6 0 26.8 26.8 0 1 1 -53.6 0zm129.7 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM399 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                />
              </svg>
            </Link>
            <p>@aetherdigital</p>
          </div>
        </div>
      </div>
    </div>
  );
}
