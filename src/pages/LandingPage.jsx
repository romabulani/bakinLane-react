import { Navigation, Footer, HeroSection } from "components";
import "styles/globalbakin.css";

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
