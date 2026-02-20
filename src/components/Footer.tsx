const horusLogo = "https://cdn.jsdelivr.net/gh/freshlab-web/insight-hub@main/src/assets/horus-logo.svg";
const djiAuthorized = "https://cdn.jsdelivr.net/gh/freshlab-web/insight-hub@main/src/assets/dji-authorized.png";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col gap-8">
          {/* Logos */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
            <img src={horusLogo} alt="Horus Smart Detections" className="h-8" />
            <img src={djiAuthorized} alt="DJI Authorized Reseller" className="h-6 brightness-0 invert opacity-70" />
          </div>
          
          {/* Links & Copyright */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-6 border-t border-white/5">
            <span className="text-muted-foreground text-sm">
              © 2025 Horus Smart Detections. Todos os direitos reservados.
            </span>
          
            {/* Links */}
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">
                Loja Hardware
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Blog Técnico
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Login Monitora
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
