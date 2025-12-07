export default function Packages() {
  return (
    <div className="packages-container w-screen min-h-screen pt-20">
      <h1 className="text-6xl font-bold ms-5">Choose Your Package</h1>
      <h2 className="text-3xl ms-5 mt-20">
        <span className="text-5xl font-bold">1.</span> LANDING PAGE
      </h2>
      <div className="landingpage-packages flex justify-center">
        <div className="card w-80 h-120 bg-transparent border-4 border-[#D4AF37] rounded-2xl flex items-center flex-col">
          <h1 className="text-center text-2xl mt-5">Landing Page</h1>
          <h1 className="text-4xl font-bold text-center mt-10">
            Rp. 1.000.000 - Rp. 2.500.000
          </h1>
          <ul className="mt-8 ms-5">
            <li className="list-disc text-xl">
              Single-Page Website (Design, Mobile-Friendly, Basic SEO)
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
