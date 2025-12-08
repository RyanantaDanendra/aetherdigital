"use client";

export default function Packages() {
  const LogoServices = [
    {
      title: "Basic",
      price: "Rp. 400.000",
      offers: ["1 Logo Concept", "1 Revision"],
    },
    {
      title: "Standard",
      price: "Rp. 700.000",
      offers: ["2 Logo Concepts", "3 Revisions"],
    },
    {
      title: "Standard",
      price: "Rp 1.000.000",
      offers: [
        "3–5 Logo Concepts",
        "Up to 5 Revisions",
        "Complete Brand Identity Support",
      ],
    },
  ];

  const uiUxServices = [
    {
      title: "Landing Page",
      price: "Rp. 400.000",
      offers: ["1 Page Design", "1x Revision", "Fully Responsive"],
    },
    {
      title: "Company Profile Website",
      price: "Rp 500.000",
      offers: [
        "4–6 Pages",
        "2x Revisions",
        "Fully Responsive",
        "Brand Guideline Included",
      ],
    },
    {
      title: "E-Commerce Website",
      price: "Rp 600.000",
      offers: [
        "8–10 Pages",
        "3x Revisions",
        "Fully Responsive",
        "Brand Guideline Included",
        "Complete User Flow",
      ],
    },
    {
      title: "Dashboard UI/UX Design",
      price: "Rp 600.000",
      offers: [
        "8 Pages",
        "2 Design Concepts",
        "2x Revisions",
        "Fully Responsive",
        "Brand Guideline Included",
        "System User Flow",
      ],
    },
  ];

  const mockupPackages = [
    {
      title: "Basic",
      price: "Rp 400.000",
      offers: [
        "1 Product Mockup",
        "1 Display Concept",
        "1x Revision",
        "Standard Background",
      ],
    },
    {
      title: "Standard",
      price: "Rp 1.000.000",
      offers: [
        "3 Product Mockup",
        "2 Display Concept",
        "2x Revision",
        "Custom Background",
        "Realistic Lighting & Shadows",
      ],
    },
    {
      title: "Premium",
      price: "Rp 3.500.000",
      offers: [
        "6 Product Mockup",
        "3 Display Concept",
        "3x Revision",
        "Custom Background",
        "Realistic Lighting & Shadows",
        "Color & Material Adjustments",
      ],
    },
  ];

  const posterPackagtes = [
    {
      title: "Single",
      price: "Rp 400.000 – Rp 500.000 / desain",
      offers: [
        "1 Poster atau Banner Design",
        "Custom layout sesuai kebutuhan",
        "1x Revision",
      ],
    },
    {
      title: "Bundle",
      price: "Rp 1.750.000 – Rp 2.000.000",
      offers: [
        "5 Poster / Banner Designs",
        "Custom layout sesuai kebutuhan",
        "2x Revision / desain",
        "Consistent with Your Brand Visual Identity",
      ],
    },
  ];

  const threeDPackages = [
    {
      title: "3D Design",
      price: "*Price is based on the complexity of the 3D model",
      offers: [
        "Includes light 3D revisions",
        "Suitable for product visualization, architectural elements, and concept rendering",
      ],
    },
  ];

  return (
    <div className="packages-container w-screen min-h-screen pt-20 ps-5">
      <h1 className="text-6xl font-bold ms-5">Choose Your Package</h1>
      <h2 className="text-3xl ms-5 mt-20">
        <span className="text-5xl font-bold">1.</span> LOGO
      </h2>
      <div className="logos-packages flex justify-center gap-10 mt-7">
        {LogoServices.map((data, index) => (
          <div
            key={index}
            className="card w-80 h-120 bg-transparent border-4 border-[#D4AF37] rounded-2xl flex items-center flex-col"
          >
            <h1 className="text-center text-2xl mt-5">{data.title}</h1>
            <h1 className="text-4xl font-bold text-center mt-10">
              {data.price}
            </h1>
            <ul className="mt-8 ms-8">
              {data.offers.map((offer, i) => (
                <>
                  <li key={i} className="list-disc text-xl">
                    {offer}
                  </li>
                </>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <h2 className="text-3xl ms-5 mt-20">
        <span className="text-5xl font-bold">2.</span> COMPANY PROFILE
      </h2>
      <div className="UIUX-packages flex justify-center gap-10 mt-12 flex-wrap px-12">
        {uiUxServices.map((data, index) => (
          <div
            key={index}
            className="card w-80 h-120 bg-transparent border-4 border-[#D4AF37] rounded-2xl flex items-center flex-col"
          >
            <h1 className="text-center text-2xl mt-5">{data.title}</h1>
            <h1 className="text-4xl font-bold text-center mt-10">
              {data.price}
            </h1>
            <ul className="mt-8 ms-5">
              {data.offers.map((offer, i) => (
                <li key={i} className="list-disc text-xl">
                  {offer}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <h2 className="text-3xl ms-5 mt-20">
        <span className="text-5xl font-bold">3.</span>PRODUCT MOCK-UP
      </h2>
      <div className="landingpage-packages flex justify-center mt-12 gap-10">
        {mockupPackages.map((data, index) => (
          <div
            key={index}
            className="card w-80 h-120 bg-transparent border-4 border-[#D4AF37] rounded-2xl flex items-center flex-col"
          >
            <h1 className="text-center text-2xl mt-5">{data.title}</h1>
            <h1 className="text-4xl font-bold text-center mt-10">
              {data.price}
            </h1>
            <ul className="mt-8 ms-5">
              {data.offers.map((offer, i) => (
                <li key={i} className="list-disc text-xl">
                  {offer}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <h2 className="text-3xl ms-5 mt-20">
        <span className="text-5xl font-bold">4.</span> POSTER / BANNER
      </h2>
      <div className="landingpage-packages flex justify-center mt-12 gap-10">
        {posterPackagtes.map((data, index) => (
          <div
            key={index}
            className="card w-80 h-120 bg-transparent border-4 border-[#D4AF37] rounded-2xl flex items-center flex-col"
          >
            <h1 className="text-center text-2xl mt-5">{data.title}</h1>
            <h1 className="text-4xl font-bold text-center mt-10">
              {data.price}
            </h1>
            <ul className="mt-8 ms-5">
              {data.offers.map((offer, i) => (
                <li key={i} className="list-disc text-xl">
                  {offer}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <h2 className="text-3xl ms-5 mt-20">
        <span className="text-5xl font-bold">5.</span> 3D DESIGN
      </h2>
      <div className="landingpage-packages flex justify-center mt-12 gap-10">
        {threeDPackages.map((data, index) => (
          <div
            key={index}
            className="card w-80 h-120 bg-transparent border-4 border-[#D4AF37] rounded-2xl flex items-center flex-col"
          >
            <h1 className="text-center text-2xl mt-5">{data.title}</h1>
            <h1 className="text-4xl font-bold text-center mt-10">
              {data.price}
            </h1>
            <ul className="mt-8 ms-5">
              {data.offers.map((offer, i) => (
                <li key={i} className="list-disc text-xl">
                  {offer}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
