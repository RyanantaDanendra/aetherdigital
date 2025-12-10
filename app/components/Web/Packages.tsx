export default function Packages() {
  return (
    <div className="packages-container w-screen min-h-screen pt-20">
      <h1 className="md:text-6xl text-2xl text-center md:text-center font-bold md:ms-5 ms-0">
        Choose Your Package
      </h1>
      <h2 className="md:text-3xl text-2xl md:ms-5 ms-2 mt-20">
        <span className="md:text-5xl text-3xl font-bold">1.</span> LANDING PAGE
      </h2>
      <div className="landingpage-packages flex justify-center md:mt-12 mt-5">
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

      <h2 className="md:text-3xl text-2xl ms-2 md:ms-5 mt-20">
        <span className="md:text-5xl text-3xl font-bold">2.</span> COMPANY
        PROFILE
      </h2>
      <div className="companyprofile-packages flex justify-center md:mt-12 mt-5">
        <div className="card w-80 h-120 bg-transparent border-4 border-[#D4AF37] rounded-2xl flex items-center flex-col">
          <h1 className="text-center text-2xl mt-5">Company Profile</h1>
          <h1 className="text-4xl font-bold text-center mt-10">
            Rp. 2.500.000 – Rp. 5.000.000
          </h1>
          <ul className="mt-8 ms-5">
            <li className="list-disc text-xl">3–6 Custom-Designed Pages</li>
            <li className="list-disc text-xl">
              Responsive Design (Mobile, Tablet & Desktop)
            </li>
            <li className="list-disc text-xl">Basic SEO Optimization</li>
            <li className="list-disc text-xl">
              Contact Form with Email Integration
            </li>
            <li className="list-disc text-xl">1 Month Free Maintenan</li>
          </ul>
        </div>
      </div>

      <h2 className="md:text-3xl md:ms-5 text-2xl ms-2 mt-20">
        <span className="md:text-5xl text-3xl font-bold">3.</span> E-COMMERCE
      </h2>
      <div className="ecommerce-packages flex justify-center md:mt-12 mt-5">
        <div className="card w-80 h-120 bg-transparent border-4 border-[#D4AF37] rounded-2xl flex items-center flex-col">
          <h1 className="text-center text-2xl mt-5">E - Commerce</h1>
          <h1 className="text-4xl font-bold text-center mt-10">
            Rp. 5.000.000 – Rp. 10.000.000
          </h1>
          <ul className="mt-8 ms-5">
            <li className="list-disc text-xl">
              Product, Cart & Order Features
            </li>
            <li className="list-disc text-xl">
              Direct Payment via Payment Gateway
            </li>
            <li className="list-disc text-xl">Admin Dashboard</li>
            <li className="list-disc text-xl">3 Months Free Maintenance</li>
          </ul>
        </div>
      </div>

      <h2 className="md:text-3xl text-2xl ms-2 md:ms-5 mt-20">
        <span className="md:text-5xl text-3xl font-bold">4.</span> DASHBOARD
      </h2>
      <div className="dashboard-packages flex justify-center md:mt-12 mt-5">
        <div className="card w-80 h-120 bg-transparent border-4 border-[#D4AF37] rounded-2xl flex items-center flex-col">
          <h1 className="text-center text-2xl mt-5">Dashboard</h1>
          <h1 className="text-4xl font-bold text-center mt-10">
            Rp 2.500.000 – Rp 4.000.000
          </h1>
          <ul className="mt-8 ms-5">
            <li className="list-disc text-xl">5–6 Responsive Pages</li>
            <li className="list-disc text-xl">Statistics Summary / Charts</li>
            <li className="list-disc text-xl">Data Management System</li>
            <li className="list-disc text-xl">2 Months Free Maintenance</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
