import { motion } from "framer-motion";
import { Database, Clock, AlertTriangle } from "lucide-react";

const problems = [
  {
    icon: Database,
    title: "Excesso de Dados",
    description: "Terabytes de filmagens que ninguém analisa."
  },
  {
    icon: Clock,
    title: "Lentidão",
    description: "Dias perdidos entre o voo e o relatório final."
  },
  {
    icon: AlertTriangle,
    title: "Risco Humano",
    description: "Equipes expostas a riscos em rondas e inspeções manuais."
  }
];

const ProblemSection = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Sua operação tem dados ou tem{" "}
            <span className="text-gradient-primary">respostas?</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              className="glass-card p-8 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-destructive/10 flex items-center justify-center">
                <problem.icon className="w-8 h-8 text-destructive" />
              </div>
              <h3 className="text-xl font-bold mb-3">{problem.title}</h3>
              <p className="text-muted-foreground">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
