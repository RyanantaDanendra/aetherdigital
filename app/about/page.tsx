import Hero from "../components/About/Hero";
import BrandValues from "../components/About/BrandValues";
import VisionAndMission from "../components/About/VisionMission";
import Team from "../components/About/Team";

export default function About() {
  return (
    <div className="w-full h-full overflow-x-hidden">
      <Hero />
      <BrandValues />
      <Team />
      <VisionAndMission />
    </div>
  );
}
