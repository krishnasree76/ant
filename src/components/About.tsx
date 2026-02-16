import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const highlights = [
  "AP Govt. Approved PM Surya Ghar Vendor",
  "Roof Top Solar Installation Experts",
  "Licensed Construction & Engineering Firm",
  "Smart Battery Solutions Provider",
  "Building Material Contracts",
];

const About = () => (
  <section id="about" className="py-20 bg-secondary">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground text-center">
          About <span className="text-accent">ANT 4CE</span>
        </h2>
        <div className="w-20 h-1 bg-accent mx-auto mt-4 rounded-full" />

        <p className="mt-8 text-muted-foreground text-lg leading-relaxed text-center">
          ANT 4CE Constructions, Consultants & Engineers is a premier solar
          energy and construction firm based in Andhra Pradesh. As an approved
          vendor under the PM Surya Ghar scheme, we specialize in rooftop solar
          installations, engineering consultancy, building material contracts,
          and smart battery solutions — empowering homes and businesses with
          clean, affordable energy and world-class construction services.
        </p>

        <div className="mt-10 grid sm:grid-cols-2 gap-4">
          {highlights.map((h) => (
            <div key={h} className="flex items-center gap-3">
              <CheckCircle className="text-accent shrink-0" size={20} />
              <span className="text-foreground font-medium">{h}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default About;
