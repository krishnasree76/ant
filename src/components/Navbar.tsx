import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Services", id: "services" },
  { label: "Branches", id: "branches" },
  { label: "Contact", id: "contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ✅ Fixed scroll for mobile (waits for menu to close before moving)
  const scrollToSection = (id) => {
    setMobileOpen(false);

    setTimeout(() => {
      const element = document.getElementById(id);
      if (!element) return;

      const navbarHeight = 70; 
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }, 350); 
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg py-2"
          : "bg-background/90 backdrop-blur-sm py-4"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        
        {/* Logo & Title Section */}
        <button
          onClick={() => scrollToSection("home")}
          className="flex items-center gap-2 sm:gap-3 outline-none text-left"
        >
          <img src={logo} alt="ANT 4CE Logo" className="h-10 w-auto sm:h-12" />
          {/* Removed 'hidden sm:block' so title shows on mobile */}
          <div className="flex flex-col">
            <span className="font-display text-base sm:text-lg font-bold text-foreground leading-none">
              ANT <span className="text-accent">4</span>CE
            </span>
            <span className="text-[10px] sm:text-xs text-muted-foreground mt-1 uppercase tracking-tighter sm:tracking-normal">
              Constructions & Solar Services
            </span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-foreground/80 hover:text-accent transition-colors text-sm font-medium uppercase tracking-wider"
            >
              {link.label}
            </button>
          ))}

          <a
            href="tel:+918522005508"
            className="flex items-center gap-2 bg-accent text-accent-foreground px-5 py-2.5 rounded-md font-semibold text-sm hover:bg-accent/90 transition-colors"
          >
            <Phone size={16} /> Call Now
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-foreground p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle Menu"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-background border-t border-border overflow-hidden"
          >
            <div className="flex flex-col px-6 py-8 gap-6">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-left text-foreground/90 hover:text-accent transition-colors text-lg font-semibold uppercase tracking-widest"
                >
                  {link.label}
                </button>
              ))}

              <a
                href="tel:+918522005508"
                className="flex items-center justify-center gap-3 bg-accent text-accent-foreground px-5 py-4 rounded-md font-bold text-base w-full shadow-md"
              >
                <Phone size={20} /> Call Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;