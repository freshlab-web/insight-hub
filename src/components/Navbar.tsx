import { motion } from "framer-motion";
import horusLogo from "@/assets/horus-logo.svg";

const Navbar = () => {
  return (
    <motion.nav 
      className="navbar-sticky"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <img src={horusLogo} alt="Horus Smart Detections" className="h-6 md:h-8" />
          </a>

          {/* CTA Button */}
          <a 
            href="#contato"
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
