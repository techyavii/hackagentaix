import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import HackathonCarousel from "@/components/HackathonCarousel";
import Advisory from "@/components/Advisory";
import Judges from "@/components/Judges";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      {/* <HackathonCarousel /> */}
      <Advisory />
      {/* <Judges /> */}
      <Footer />
    </div>
  );
};

export default Index;
