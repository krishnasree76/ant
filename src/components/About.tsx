import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const highlights = [
  "AP Govt. Approved PM Surya Ghar Vendor",
  "Subsidy up to ₹78,000 under PM Surya Ghar Muft Bijli Yojana",
  "We Use Only A-Grade Solar Panels",
  "Residential & Commercial Rooftop Installations",
  "Up to 90% Bank Loan Facility Available",
  "Net Metering Facility for Maximum Savings",
  "EMI Options Available for Easy Installation",
  "Professional Engineering & Construction Experts",
  "Smart Battery & Energy Storage Solutions",
  "Complete End-to-End Solar Project Support",
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
          ANT 4CE Constructions, Consultants & Engineers is a trusted solar
          energy and construction company in Andhra Pradesh. We proudly promote
          the Government of India’s <span className="text-accent font-semibold">
            PM Surya Ghar Muft Bijli Yojana
          </span>{" "}
          scheme, helping households and businesses reduce electricity bills
          through rooftop solar systems.
        </p>

        <p className="mt-6 text-muted-foreground text-lg leading-relaxed text-center">
          Customers can receive up to{" "}
          <span className="text-accent font-bold">
            ₹78,000 Government Subsidy
          </span>{" "}
          and enjoy long-term savings with net metering benefits. We provide
          complete solar solutions including A-Grade solar panels, professional
          installation, bank loan assistance, EMI facilities, and after-sales
          support for both residential and commercial properties.
        </p>

        <div className="mt-12 grid sm:grid-cols-2 gap-5">
          {highlights.map((h) => (
            <div
              key={h}
              className="flex items-start gap-3 bg-background p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <CheckCircle
                className="text-accent shrink-0 mt-1"
                size={20}
              />
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
