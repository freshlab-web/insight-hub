import { motion } from "framer-motion";
import { scrollToSection } from "@/lib/scroll";

const roiCtaImg = "https://cdn.jsdelivr.net/gh/freshlab-web/insight-hub@main/src/assets/roi-cta.jpg";

const stats = [
  { number: "50%", label: "Redução no OPEX", suffix: "até" },
  { number: "10x", label: "Mais rápido que métodos manuais", suffix: "" },
  { number: "0", label: "Acidentes em operações assistidas", suffix: "" }
];

const ROISection = () => {
  return (
    <section className="py-24 md:py-32 bg-secondary/30 relative overflow-hidden">
      <div className="absolute inset-0 hex-pattern opacity-20" />

      <div className="container relative mx-auto px-4 md:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Resultados <span className="text-gradient-success">Comprovados</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="glass-card p-8 md:p-10 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <div className="mb-4">
                {stat.suffix && (
                  <span className="text-muted-foreground text-lg">{stat.suffix} </span>
                )}
                <span className={index === 2 ? "data-number-success" : "data-number"}>
                  {stat.number}
                </span>
              </div>
              <p className="text-muted-foreground text-lg">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA banner with image space */}
        <motion.div
          className="glass-card overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative h-64 md:h-80 overflow-hidden">
              <img
                src={roiCtaImg}
                alt="Drone em operação"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/50 hidden md:block" />
            </div>

            <div className="p-8 md:p-12 flex flex-col justify-center text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Pronto para o <span className="text-gradient-primary">próximo nível?</span>
              </h3>
              <p className="text-muted-foreground text-lg mb-6">
                Agende uma demonstração guiada e veja como a Horus pode transformar sua operação.
              </p>
              <div>
                <motion.a
                  href="#rd-section-mlv5qm9d"
                  onClick={(e) => scrollToSection(e, "rd-section-mlv5qm9d")}
                  className="btn-primary-glow inline-block text-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Agendar Diagnóstico Operacional
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ROISection;
