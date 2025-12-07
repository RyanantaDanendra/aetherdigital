import Hero from "../components/Web/Hero";
import Portfolios from "../components/Web/Portfolios";
import Testimonials from "../components/Web/Testimonials";
import Packages from "../components/Web/Packages";

export default function Web() {
  return (
    <div className="w-screen h-full">
      <Hero />
      <Portfolios />
      <Packages />
      <Testimonials />
    </div>
  );
}
