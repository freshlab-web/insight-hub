import { motion } from "framer-motion";
import { Check, Brain, Shield, FileCheck, HeadphonesIcon } from "lucide-react";

const whyHorusImg = "https://cdn.jsdelivr.net/gh/freshlab-web/insight-hub@main/src/assets/why-horus.jpg";

const differentiators = [
  {
    icon: Brain,
    text: "IA Proprietária treinada com milhões de imagens de ativos reais."
  },
  {
    icon: Shield,
    text: "Revenda Oficial DJI Enterprise (Hardware + Software integrados)."
  },
  {
    icon: FileCheck,
    text: "Metodologia auditável (Normas IEC) e Laudos Técnicos."
  },
  {
    icon: HeadphonesIcon,
    text: "Suporte Consultivo: Desenhamos o projeto, não apenas vendemos a licença."
  }
];

const DifferentiatorsSection = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-50" />

      <div className="container relative mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Por que <span className="text-gradient-primary">Horus?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Não somos apenas uma plataforma de software. Somos seu parceiro estratégico
              em inteligência operacional.
            </p>

            <div className="space-y-6">
              {differentiators.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-foreground pt-3">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* DJI Certification visual */}
          <motion.div
            className="glass-card overflow-hidden"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative h-48 md:h-64 overflow-hidden">
              <img
                src={whyHorusImg}
                alt="Horus - Por que nos escolher"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
            </div>

            <div className="p-8 md:p-10">
              <div className="text-center mb-6">
                <div className="text-2xl font-bold text-gradient-primary mb-1">DJI Enterprise</div>
                <p className="text-sm text-muted-foreground">Revenda Autorizada Brasil</p>
              </div>

              <div className="space-y-4">
                {["Suporte técnico especializado", "Garantia oficial de fábrica", "Treinamento certificado", "Peças e acessórios originais"].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 text-sm">
                    <Check className="w-5 h-5 text-success flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DifferentiatorsSection;
