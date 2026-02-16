import { motion } from "framer-motion";
import {
  Sun,
  Building2,
  Users,
  BatteryCharging,
  PackageOpen,
  ShieldCheck,
} from "lucide-react";

import serviceSolar from "@/assets/service-solar.jpg";
import serviceSurya from "@/assets/service-surya.jpg";
import serviceConstruction from "@/assets/service-construction.jpg";
import serviceConsult from "@/assets/service-consult.jpg";
import serviceBattery from "@/assets/service-battery.jpg";
import serviceMaterials from "@/assets/service-materials.jpg";

const services = [
  {
    icon: Sun,
    title: "Roof Top Solar Installation",
    desc: "Premium solar panel installations for residential and commercial rooftops with end-to-end project management.",
    image: serviceSolar,
  },
  {
    icon: ShieldCheck,
    title: "PM Surya Ghar Vendor Services",
    desc: "Government-approved vendor for PM Surya Ghar scheme — subsidized solar solutions for Indian households.",
    image: serviceSurya,
  },
  {
    icon: Building2,
    title: "Constructions",
    desc: "Complete construction services from foundation to finish with modern engineering practices and quality materials.",
    image: serviceConstruction,
  },
  {
    icon: Users,
    title: "Consultants & Engineers",
    desc: "Expert engineering consultancy for solar, civil, and structural projects with licensed professionals.",
    image: serviceConsult,
  },
  {
    icon: BatteryCharging,
    title: "Smart Batteries",
    desc: "Advanced energy storage solutions to maximize your solar investment and ensure uninterrupted power supply.",
    image: serviceBattery,
  },
  {
    icon: PackageOpen,
    title: "Building Material Contracts",
    desc: "Bulk supply and contracting of premium building materials at competitive rates for large-scale projects.",
    image: serviceMaterials,
  },
];

const Services = () => (
  <section id="services" className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
          Our <span className="text-accent">Services</span>
        </h2>
        <div className="w-20 h-1 bg-accent mx-auto mt-4 rounded-full" />
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group bg-card border border-border rounded-lg overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={s.image}
                alt={s.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-primary/30 group-hover:bg-primary/10 transition-colors" />
            </div>
            <div className="p-6">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent transition-colors">
                <s.icon size={24} className="text-accent group-hover:text-accent-foreground transition-colors" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-2">
                {s.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {s.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
