import logo from "@/assets/logo.png";
import { Heart } from "lucide-react";
const Footer = () => (
  <footer className="bg-background border-t border-border py-12">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <img src={logo} alt="ANT 4CE" className="h-14 mb-4" />
          <p className="text-muted-foreground text-sm">
            Powering the future with solar energy and engineering excellence
            across Andhra Pradesh.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-display text-lg font-bold text-foreground mb-4">Quick Links</h4>
          <div className="space-y-2">
            {["Home", "About", "Services", "Branches", "Contact"].map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="block text-muted-foreground hover:text-accent transition-colors text-sm"
              >
                {l}
              </a>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-display text-lg font-bold text-foreground mb-4">Services</h4>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>Roof Top Solar</p>
            <p>PM Surya Ghar</p>
            <p>Constructions</p>
            <p>Smart Batteries</p>
            <p>Material Contracts</p>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display text-lg font-bold text-foreground mb-4">Contact</h4>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>ant4ce@gmail.com</p>
            <p>+91 85220 05508</p>
            <p>+91 96663 69499</p>
            <p>Krishna District, AP</p>
          </div>
        </div>
      </div>

      <div className="border-t border-border mt-10 pt-6 text-center text-muted-foreground text-sm">
        © {new Date().getFullYear()} ANT 4CE Constructions. All rights reserved.
      </div>
      <div className="flex justify-center items-center gap-1">
            Made with <Heart className="inline h-4 w-4 text-red-500 mx-1" /> by
            <a
              href="https://staffarc.in"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-orange-600 hover:underline"
            >
              <img
                src="https://www.staffarc.in/images/Staffarc-logo.png"
                alt="StaffArc logo"
                className="h-5 w-5 object-contain"
              />
              StaffArc
            </a>
          </div>
    </div>
  </footer>
);

export default Footer;
