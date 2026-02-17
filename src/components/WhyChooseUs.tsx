import { motion } from "framer-motion";
import { Sun, ShieldCheck, Banknote, Home, Building2, Zap } from "lucide-react";

// ✅ Import Brand Logos
import waaree from "@/assets/waaree.png";
import emmvee from "@/assets/emmvee.png";
import vikram from "@/assets/vikram.png";
import aps from "@/assets/aps.png";
import tata from "@/assets/tata.png";
import adani from "@/assets/adani.png";

const features = [
  {
    icon: <Sun size={28} />,
    title: "90% Focus on Solar Projects",
    desc: "Our company majorly concentrates on solar energy solutions with complete expertise in rooftop solar systems.",
  },
  {
    icon: <ShieldCheck size={28} />,
    title: "A-Grade Solar Panels Only",
    desc: "We use only premium quality A-Grade panels ensuring maximum efficiency and long-term durability.",
  },
  {
    icon: <Home size={28} />,
    title: "Residential Installations",
    desc: "Complete rooftop solar systems for homes under PM Surya Ghar Scheme.",
  },
  {
    icon: <Building2 size={28} />,
    title: "Commercial Installations",
    desc: "High-capacity solar solutions for commercial buildings and businesses.",
  },
  {
    icon: <Banknote size={28} />,
    title: "₹78,000 Government Subsidy",
    desc: "Eligible customers can receive subsidy under PM Surya Ghar Muft Bijli Yojana.",
  },
  {
    icon: <Zap size={28} />,
    title: "Net Metering & EMI Facility",
    desc: "Save electricity bills with net metering and flexible EMI tenure from 3 to 10 years.",
  },
];

// ✅ Brand Logo Array
const brands = [
  { name: "Waaree", logo: waaree },
  { name: "Emmvee", logo: emmvee },
  { name: "Vikram Solar", logo: vikram },
  { name: "APS", logo: aps },
  { name: "TATA", logo: tata },
  { name: "Adani", logo: adani },
];

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="py-20 bg-background scroll-mt-24">
      <div className="container mx-auto px-4">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-center text-foreground">
            Why Choose <span className="text-accent">ANT 4CE</span> Solar Services
          </h2>

          <div className="w-20 h-1 bg-accent mx-auto mt-4 rounded-full" />

          {/* Feature Cards */}
          <div className="mt-14 grid md:grid-cols-3 sm:grid-cols-2 gap-8">
            {features.map((item, index) => (
              <div
                key={index}
                className="bg-secondary p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="text-accent mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Warranty Section */}
          <div className="mt-16 bg-accent/10 border border-accent/20 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-foreground">
              Solar Warranty & Support
            </h3>

            <div className="mt-6 grid sm:grid-cols-3 gap-6">
              <div>
                <p className="text-xl font-bold text-accent">25 Years</p>
                <p className="text-muted-foreground">Solar Panel Warranty</p>
              </div>
              <div>
                <p className="text-xl font-bold text-accent">5 Years</p>
                <p className="text-muted-foreground">Inverter Warranty</p>
              </div>
              <div>
                <p className="text-xl font-bold text-accent">3–10 Years</p>
                <p className="text-muted-foreground">Flexible EMI Tenure</p>
              </div>
            </div>
          </div>

          {/* Brands Section */}
          <div className="mt-20">
            <h3 className="text-2xl font-bold text-center text-foreground">
              Installation Brands We Work With
            </h3>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
  {brands.map((brand, index) => (
    <div
      key={index}
      className="bg-secondary border border-border rounded-xl p-6 flex items-center justify-center shadow-sm hover:shadow-lg transition-all duration-300"
    >
      <img
        src={brand.logo}
        alt={brand.name}
        className="h-12 md:h-14 object-contain transition-transform duration-300 hover:scale-110"
      />
    </div>
  ))}
</div>

          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
