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
          <img
            src="/lizu.webp"
            alt="Elizabeth walking"
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover',
              borderRadius: '0 30% 30% 30%'
            }}
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
