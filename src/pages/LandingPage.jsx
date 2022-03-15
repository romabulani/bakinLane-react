import { Footer } from "../components/shared/Footer";
import { HeroSection } from "../components/landingpage/HeroSection";
import { Navigation } from "../components/shared/Navigation";
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
