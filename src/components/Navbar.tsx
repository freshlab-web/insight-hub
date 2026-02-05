import { motion } from "framer-motion";

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
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-primary-foreground" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
              </svg>
            </div>
            <span className="text-xl font-bold tracking-tight">HORUS</span>
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
