import { motion } from "framer-motion";

const dataOverloadImg = "https://cdn.jsdelivr.net/gh/freshlab-web/insight-hub@main/src/assets/problem-data-overload.jpg";
const slowReportsImg = "https://cdn.jsdelivr.net/gh/freshlab-web/insight-hub@main/src/assets/problem-slow-reports.jpg";
const humanRiskImg = "https://cdn.jsdelivr.net/gh/freshlab-web/insight-hub@main/src/assets/problem-human-risk.jpg";

const problems = [
  {
    image: dataOverloadImg,
    title: "Excesso de Dados",
    description: "Terabytes de filmagens que ninguém analisa. Informação sem inteligência é custo, não ativo."
  },
  {
    image: slowReportsImg,
    title: "Lentidão Operacional",
    description: "Dias perdidos entre o voo e o relatório final. Sua concorrência já entregou enquanto você processa."
  },
  {
    image: humanRiskImg,
    title: "Risco Humano",
    description: "Equipes expostas a riscos em rondas e inspeções manuais em ambientes perigosos."
  }
];

const ProblemSection = () => {
  return (
    <section className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Sua operação tem dados ou tem{" "}
            <span className="text-gradient-primary">respostas?</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A maioria das empresas coleta dados, mas poucas transformam em decisões.
          </p>
        </motion.div>

        {/* Large image cards */}
        <div className="space-y-8">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              className={`grid md:grid-cols-2 gap-0 glass-card overflow-hidden ${
                index % 2 === 1 ? "md:direction-rtl" : ""
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className={`relative h-64 md:h-80 overflow-hidden ${index % 2 === 1 ? "md:order-2" : ""}`}>
                <img
                  src={problem.image}
                  alt={problem.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/50 hidden md:block" />
              </div>
              <div className={`p-8 md:p-12 flex flex-col justify-center ${index % 2 === 1 ? "md:order-1" : ""}`}>
                <span className="text-destructive text-sm font-semibold uppercase tracking-wider mb-3">Problema {String(index + 1).padStart(2, "0")}</span>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{problem.title}</h3>
                <p className="text-muted-foreground text-lg">{problem.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
