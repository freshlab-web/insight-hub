import { motion } from "framer-motion";

const TrustBar = () => {
  const companies = [
    "PETROBRÁS", "VALE", "ENGIE", "ENEL", "VOTORANTIM"
  ];

  return (
    <section className="py-12 border-y border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <motion.p 
          className="text-center text-sm text-muted-foreground mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Tecnologia que protege os maiores ativos do Brasil:
        </motion.p>
        
        <motion.div 
          className="flex flex-wrap justify-center items-center gap-8 md:gap-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {companies.map((company, index) => (
            <div
              key={company}
              className="trust-logo text-lg md:text-xl font-bold tracking-wider"
            >
              {company}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustBar;
