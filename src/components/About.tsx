import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const highlights = [
  "Trusted Solar & Engineering Company in Andhra Pradesh",
  "Government Recognized PM Surya Ghar Vendor",
  "Complete Rooftop Solar Project Execution",
  "Experienced Technical Installation Team",
  "End-to-End Support from Survey to Commissioning",
  "Customer-Centric Service & Long-Term Maintenance",
];

const About = () => (
  <section id="about" className="py-20 bg-secondary scroll-mt-24">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto"
      >
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground text-center">
          About <span className="text-accent">ANT 4CE</span>
        </h2>

        <div className="w-20 h-1 bg-accent mx-auto mt-4 rounded-full" />

        <p className="mt-8 text-muted-foreground text-lg leading-relaxed text-center">
          ANT 4CE Constructions, Consultants & Engineers is a professional
          solar energy company dedicated to delivering high-quality rooftop
          solar installations across Andhra Pradesh. Our mission is to make
          clean and affordable energy accessible to every household and
          business.
        </p>

        <p className="mt-6 text-muted-foreground text-lg leading-relaxed text-center">
          As an approved vendor under the PM Surya Ghar initiative, we guide
          customers through every step — from site inspection and system
          design to installation, net metering process, and after-sales
          service. Our goal is to ensure maximum savings, safety, and long-term
          performance for every client.
        </p>

        <div className="mt-12 grid sm:grid-cols-2 gap-5">
          {highlights.map((h) => (
            <div
              key={h}
              className="flex items-start gap-3 bg-background p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <CheckCircle className="text-accent shrink-0 mt-1" size={20} />
              <span className="text-foreground font-medium leading-relaxed">
                {h}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default About;
