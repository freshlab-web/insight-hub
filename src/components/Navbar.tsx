import { motion } from "framer-motion";
import { scrollToSection } from "@/lib/scroll";

const horusLogo = "https://cdn.jsdelivr.net/gh/freshlab-web/insight-hub@main/src/assets/horus-logo.svg";
const djiAuthorized = "https://cdn.jsdelivr.net/gh/freshlab-web/insight-hub@main/src/assets/dji-authorized.png";

const Navbar = () => {
  return (
    <motion.nav 
      className="absolute top-0 left-0 right-0 z-50 bg-transparent"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logos */}
          <div className="flex items-center gap-4 md:gap-8">
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center"
            >
              <img src={horusLogo} alt="Horus Smart Detections" className="h-5 md:h-7" />
            </a>
            <div className="hidden sm:block h-6 w-px bg-white/20" />
            <img src={djiAuthorized} alt="DJI Authorized Reseller" className="hidden sm:block h-4 md:h-5 brightness-0 invert opacity-80" />
          </div>

          {/* CTA Button */}
          <a 
            href="#rd-section-mlv5qm9d"
            onClick={(e) => scrollToSection(e, "rd-section-mlv5qm9d")}
            className="btn-primary-glow text-sm md:text-base px-4 md:px-6 py-2 md:py-3"
          >
            Falar com Especialista
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
