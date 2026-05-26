import Navbar from "@/components/salon/Navbar";
import Hero from "@/components/salon/Hero";
import About from "@/components/salon/About";
import Highlights from "@/components/salon/Highlights";
import Services from "@/components/salon/Services";
import GalleryTeaser from "@/components/salon/GalleryTeaser";
import Testimonials from "@/components/salon/Testimonials";
import Contact from "@/components/salon/Contact";
import Footer from "@/components/salon/Footer";
import StickyCallButton from "@/components/salon/StickyCallButton";

export default function SalonLanding() {
    return (
        <main data-testid="salon-landing" className="bg-[#f8f4ef] text-[#1a1a2e]">
            <Navbar />
            <Hero />
            <About />
            <Highlights />
            <Services />
            <GalleryTeaser />
            <Testimonials />
            <Contact />
            <Footer />
            <StickyCallButton />
        </main>
    );
}
