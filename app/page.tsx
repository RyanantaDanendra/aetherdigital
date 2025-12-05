import Hero from "./components/Home/Hero";
import Divider from "./components/Home/Divider";
import Services from "./components/Home/Services";
import { History } from "./components/Home/History";
import Why from "./components/Home/Why";

export default function Home() {
  return (
    <div className="w-full h-full">
      <Hero />
      <Divider />
      <Services />
      <History />
      <Why />
    </div>
  );
}
