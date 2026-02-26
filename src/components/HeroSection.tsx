import { motion } from "framer-motion";
import { useState } from "react";

const heroImage = "https://cdn.jsdelivr.net/gh/freshlab-web/insight-hub@main/src/assets/hero-dashboard.jpg";

const sectors = [
  "Energia Solar",
  "Energia Eólica",
  "Óleo & Gás",
  "Mineração",
  "Construção Civil",
  "Segurança Patrimonial",
  "Agronegócio",
  "Outro"
];

const HeroSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    sector: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Obrigado! Entraremos em contato em breve.");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="rd-section-mlv5qm9d" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Full background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Horus - Inteligência para Drones"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/80" />
      </div>

      <div className="container relative mx-auto px-4 md:px-6 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="badge-success mb-6 inline-flex"
            >
              <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
              Plataforma Monitora Ativa
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
              Transforme Imagens de Drones em{" "}
              <span className="text-gradient-primary">Decisões de Negócio.</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
              Hardware é apenas o começo. A Horus entrega a inteligência que processa dados,
              identifica anomalias com IA e automatiza sua segurança e manutenção.
            </p>

            {/* Stats inline */}
            <div className="flex flex-wrap gap-8 justify-center lg:justify-start">
              <div>
                <p className="text-2xl md:text-3xl font-black text-gradient-primary">98.7%</p>
                <p className="text-xs text-muted-foreground">Precisão IA</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-black text-gradient-primary">10x</p>
                <p className="text-xs text-muted-foreground">Mais rápido</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-black text-gradient-success">0</p>
                <p className="text-xs text-muted-foreground">Acidentes</p>
              </div>
            </div>
          </motion.div>

          {/* Lead Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form
              onSubmit={handleSubmit}
              className="glass-card p-8 md:p-10 space-y-5"
            >
              <div className="text-center mb-2">
                <h2 className="text-xl font-bold mb-1">Agende uma Demonstração</h2>
                <p className="text-sm text-muted-foreground">Consultoria gratuita com especialista</p>
              </div>

              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Nome Completo"
                  className="input-dark"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="E-mail Corporativo"
                  className="input-dark"
                  required
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Telefone / WhatsApp"
                  className="input-dark"
                  required
                />
              </div>
              <div>
                <select
                  name="sector"
                  value={formData.sector}
                  onChange={handleChange}
                  className="input-dark"
                  required
                >
                  <option value="">Setor de Atuação</option>
                  {sectors.map((sector) => (
                    <option key={sector} value={sector}>{sector}</option>
                  ))}
                </select>
              </div>

              <motion.button
                type="submit"
                className="btn-primary-glow w-full text-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Solicitar Consultoria Gratuita
              </motion.button>

              <p className="text-xs text-muted-foreground text-center">
                Ao enviar, você concorda com nossa política de privacidade.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
