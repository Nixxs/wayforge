import Hero from "./Hero";
import ComparisonSection from "./ComparisonSection";
import AboutSection from "./AboutSection";
import FleetSection from "./FleetSection";
import DestinationsSection from "./DestinationsSection";
import FaqSection from "./FaqSection";
import Footer from "./Footer";

export default function Home() {
    return (
        <>
            <Hero />
            <ComparisonSection />
            <AboutSection />
            <FleetSection />
            <DestinationsSection />
            <FaqSection />
            <Footer />
        </>
    );
}

