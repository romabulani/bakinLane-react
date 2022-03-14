import { Footer } from "../components/Footer";
import { HeroSection } from "../components/HeroSection";
import { Navigation } from "../components/Navigation";
import "../styles/globalbakin.css";

function LandingPage() {
  return (
    <div className="pagewrapper">
      <Navigation />
      <div className="middle-content">
        <HeroSection />
      </div>
      <Footer />
    </div>
  );
}

export { LandingPage };
