import Image from "next/image";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ResponsiveCircles from "../components/ResponsiveCircles";
import AccentGlow from "../components/AccentGlow";
import "../styles/styles.css";

export default function Home() {
  return (
    <div className="page-root">
      <AccentGlow />
      <ResponsiveCircles />
      <div className="landing-container">
        <div className="landing-image">
          <Image
            src="/lizu.webp" // Replace with your image path
            alt="Elizabeth walking"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
        <div className="landing-content">
          <span className="landing-subtitle text-xs sm:text-sm md:text-2xl" style={{ fontFamily: 'Playfair Display, serif' }}>[not your traditional portfolio]</span>
          <Hero />
          <Navbar />
        </div>
      </div>
    </div>
  );
}
