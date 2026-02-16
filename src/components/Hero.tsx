import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => (
  <section
    id="home"
    className="relative min-h-screen flex items-center justify-center overflow-hidden"
  >
    {/* Background */}
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    />
    <div className="absolute inset-0 bg-primary/75" />

    <div className="relative z-10 container mx-auto px-4 text-center py-32">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="inline-block bg-accent text-accent-foreground text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
          Andhra Pradesh Government Approved
        </span>
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight max-w-4xl mx-auto">
          Powering the Future with Solar &{" "}
          <span className="text-accent">Engineering Excellence</span>
        </h1>
        <p className="mt-6 text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto">
          PM Surya Ghar Approved Vendor — Roof Top Solar Installation,
          Construction & Engineering Consultancy across Andhra Pradesh.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="bg-accent text-accent-foreground px-8 py-4 rounded-md font-bold text-lg hover:bg-accent/90 transition-colors"
          >
            Get Free Consultation
          </a>
          <a
            href="#contact"
            className="border-2 border-primary-foreground/40 text-primary-foreground px-8 py-4 rounded-md font-bold text-lg hover:border-accent hover:text-accent transition-colors"
          >
            Contact Us
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Hero;
