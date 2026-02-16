import { motion } from "framer-motion";
import { MapPin, Phone } from "lucide-react";

const branches = [
  {
    name: "Main Branch",
    address: "NH 216, Pendurru, Bantumilli Mandal, Krishna District – 521324",
    contacts: [
      { label: "Phone", number: "+91 85220 05508" },
      { label: "Phone", number: "+91 96663 69499" },
    ],
  },
  {
    name: "Branch – East Godavari",
    address: "Srinagar 5th Street, Mandapeta, East Godavari District – 533308",
    contacts: [
      { label: "Prathi Suryateja", number: "+91 73069 28024" },
      { label: "M. Aparna Devi", number: "+91 96663 69499" },
    ],
  },
  {
    name: "Branch – Srikakulam",
    address: "Tammadapeta Junction, Narasannapeta, Srikakulam District",
    contacts: [{ label: "Anil", number: "+91 93914 47460" }],
  },
];

const Branches = () => (
  <section id="branches" className="py-20 bg-secondary">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
          Our <span className="text-accent">Branches</span>
        </h2>
        <div className="w-20 h-1 bg-accent mx-auto mt-4 rounded-full" />
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {branches.map((b, i) => (
          <motion.div
            key={b.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow"
          >
            <h3 className="font-display text-xl font-bold text-foreground mb-3 flex items-center gap-2">
              <MapPin className="text-accent" size={20} />
              {b.name}
            </h3>
            <p className="text-muted-foreground text-sm mb-4">{b.address}</p>
            <div className="space-y-2">
              {b.contacts.map((c) => (
                <a
                  key={c.number}
                  href={`tel:${c.number.replace(/\s/g, "")}`}
                  className="flex items-center gap-2 text-sm text-foreground hover:text-accent transition-colors"
                >
                  <Phone size={14} className="text-accent" />
                  <span>{c.label}: {c.number}</span>
                </a>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Branches;
