import { useState, useEffect } from "react";
import { ArrowUp, MessageCircle, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FloatingButtons = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-12 h-12 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center hover:bg-accent transition-colors"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>

      <a
        href="tel:+918522005508"
        className="w-12 h-12 rounded-full bg-accent text-accent-foreground shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
      >
        <Phone size={20} />
      </a>

      <a
        href="https://wa.me/918522005508"
        target="_blank"
        rel="noreferrer"
        className="w-12 h-12 rounded-full bg-green-500 text-accent-foreground shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
      >
        <MessageCircle size={20} />
      </a>
    </div>
  );
};

export default FloatingButtons;
