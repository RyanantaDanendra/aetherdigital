import Hero from "../components/GraphicDesign/Hero";
import Portfolios from "../components/GraphicDesign/Portfolios";
import Packages from "../components/GraphicDesign/Packages";
import Testimonials from "../components/GraphicDesign/Testimonials";

export default function GraphicDesign() {
  return (
    <div className="w-screen h-full bg-[#2F2F2F] text-white">
      <Hero />
      <Portfolios />
      <Packages />
      <Testimonials />
    </div>
  );
}
