import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Clock, Send } from "lucide-react";

const contactInfo = [
  { icon: Phone, label: "Proprietor", value: "+91 85220 05508" },
  { icon: Phone, label: "Office", value: "+91 96663 69499" },
  { icon: Phone, label: "Manager", value: "+91 95051 55299" },
  { icon: Phone, label: "Manager – Sales", value: "+91 89854 43244" },
  { icon: Mail, label: "Email", value: "ant4ce@gmail.com" },
];

const hours = [
  { day: "Monday – Friday", time: "9:00 AM – 8:00 PM" },
  { day: "Saturday", time: "9:00 AM – 3:00 PM" },
  { day: "Sunday", time: "9:00 AM – 3:00 PM" },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Name: ${form.name}%0APhone: ${form.phone}%0AEmail: ${form.email}%0AMessage: ${form.message}`;
    window.open(`https://wa.me/918522005508?text=${msg}`, "_blank");
  };

  return (
    <section id="contact" className="py-20 bg-section-dark text-section-dark-foreground">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            Get In <span className="text-accent">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            {[
              { key: "name", placeholder: "Your Name", type: "text" },
              { key: "phone", placeholder: "Phone Number", type: "tel" },
              { key: "email", placeholder: "Email Address", type: "email" },
            ].map((f) => (
              <input
                key={f.key}
                type={f.type}
                placeholder={f.placeholder}
                required
                value={form[f.key as keyof typeof form]}
                onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                className="w-full bg-primary-foreground/10 border border-primary-foreground/20 rounded-md px-4 py-3 text-section-dark-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-accent transition-colors"
              />
            ))}
            <textarea
              placeholder="Your Message"
              rows={4}
              required
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-primary-foreground/10 border border-primary-foreground/20 rounded-md px-4 py-3 text-section-dark-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-accent transition-colors resize-none"
            />
            <button
              type="submit"
              className="bg-accent text-accent-foreground px-8 py-3 rounded-md font-bold text-lg hover:bg-accent/90 transition-colors flex items-center gap-2"
            >
              <Send size={18} /> Send Message
            </button>
          </motion.form>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-display text-xl font-bold mb-4">Contact Details</h3>
              <div className="space-y-3">
                {contactInfo.map((c) => (
                  <div key={c.value} className="flex items-center gap-3">
                    <c.icon className="text-accent shrink-0" size={18} />
                    <span className="text-primary-foreground/80 text-sm">
                      {c.label}: <span className="text-primary-foreground font-medium">{c.value}</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-display text-xl font-bold mb-4 flex items-center gap-2">
                <Clock className="text-accent" size={20} /> Business Hours
              </h3>
              <div className="space-y-2">
                {hours.map((h) => (
                  <div key={h.day} className="flex justify-between text-sm border-b border-primary-foreground/10 pb-2">
                    <span className="text-primary-foreground/80">{h.day}</span>
                    <span className="text-accent font-semibold">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social */}
            <div>
  <h3 className="font-display text-xl font-bold mb-4">Follow Us</h3>
  <div className="flex gap-4">
    
    {/* Facebook */}
    <a 
      href="https://www.facebook.com/profile.php?id=100063959025639" 
      target="_blank" 
      rel="noreferrer" 
      className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors"
    >
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
      </svg>
    </a>

    {/* Instagram */}
    <a 
      href="https://www.instagram.com/ant4ce_constructions_solar_ser?igsh=amM3YTIyNnV4N2h3" 
      target="_blank" 
      rel="noreferrer" 
      className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors"
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="2" y="2" width="20" height="20" rx="5"/>
        <circle cx="12" cy="12" r="5"/>
        <circle cx="17.5" cy="6.5" r="1.5"/>
      </svg>
    </a>

  </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
