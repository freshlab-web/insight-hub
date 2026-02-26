import { motion } from "framer-motion";
import { useState } from "react";

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

const LeadCaptureSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    sector: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Obrigado! Entraremos em contato em breve.");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="py-20 md:py-28 relative overflow-hidden" id="rd-section-mlv5qm9d">
      <div className="absolute inset-0 hex-pattern opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
      
      <div className="container relative mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Sua operação está pronta para o{" "}
              <span className="text-gradient-primary">próximo nível?</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Agende uma demonstração guiada da plataforma Monitora.
            </p>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="glass-card p-8 md:p-10 space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div>
              <label className="block text-sm font-medium mb-2">Nome Completo</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Seu nome"
                className="input-dark"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">E-mail Corporativo</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="seu@empresa.com.br"
                className="input-dark"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Telefone / WhatsApp</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="(11) 99999-9999"
                className="input-dark"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Setor de Atuação</label>
              <select
                name="sector"
                value={formData.sector}
                onChange={handleChange}
                className="input-dark"
                required
              >
                <option value="">Selecione o setor</option>
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
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default LeadCaptureSection;
