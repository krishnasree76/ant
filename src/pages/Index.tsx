import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";

import Services from "@/components/Services";
import Branches from "@/components/Branches";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const Index = () => (
  <>
    <Navbar />
    <Hero />
    <About />
    <WhyChooseUs />

    <Services />
    <Branches />
    <Contact />
    <Footer />
    <FloatingButtons />
  </>
);

export default Index;
