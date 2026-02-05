import { motion } from "framer-motion";

const stats = [
  {
    number: "50%",
    label: "Redução no OPEX",
    suffix: "até"
  },
  {
    number: "10x",
    label: "Mais rápido que métodos manuais",
    suffix: ""
  },
  {
    number: "0",
    label: "Acidentes em operações assistidas",
    suffix: ""
  }
];

const ROISection = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
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

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
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
      </div>
    </section>
  );
};

export default ROISection;
