import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Branches", href: "#branches" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg"
          : "bg-background/90 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <a href="#home" className="flex items-center gap-3">
          <img src={logo} alt="ANT 4CE Logo" className="h-12 w-auto" />
          <div className="hidden sm:block">
            <span className="font-display text-lg font-bold text-foreground leading-tight block">
              ANT <span className="text-accent">4</span>CE
            </span>
            <span className="text-xs text-muted-foreground">
              Constructions & Engineers
            </span>
          </div>
        </a>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-foreground/80 hover:text-accent transition-colors text-sm font-medium uppercase tracking-wider"
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:+918522005508"
            className="flex items-center gap-2 bg-accent text-accent-foreground px-5 py-2.5 rounded-md font-semibold text-sm hover:bg-accent/90 transition-colors"
          >
            <Phone size={16} /> Call Now
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-background/95 backdrop-blur-md overflow-hidden border-t border-border"
          >
            <div className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-foreground/80 hover:text-accent transition-colors text-sm font-medium uppercase tracking-wider"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="tel:+918522005508"
                className="flex items-center gap-2 bg-accent text-accent-foreground px-5 py-2.5 rounded-md font-semibold text-sm w-fit"
              >
                <Phone size={16} /> Call Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
