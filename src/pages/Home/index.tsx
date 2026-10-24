import Hero from "./Hero";
import ComparisonSection from "./ComparisonSection";
import AboutSection from "./AboutSection";
import FleetSection from "./FleetSection";
import DestinationsSection from "./DestinationsSection";
import FaqSection from "./FaqSection";
import Footer from "./Footer";
import { homeMeta } from "../../pageMeta";
import { usePageMeta } from "../../utils/usePageMeta";

export default function Home() {
    usePageMeta(homeMeta);

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

