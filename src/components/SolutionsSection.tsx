import { motion } from "framer-motion";

const solarImage = "https://cdn.jsdelivr.net/gh/freshlab-web/insight-hub@main/src/assets/solar-thermal.jpg";
const securityImage = "https://cdn.jsdelivr.net/gh/freshlab-web/insight-hub@main/src/assets/security-thermal.jpg";
const constructionImage = "https://cdn.jsdelivr.net/gh/freshlab-web/insight-hub@main/src/assets/point-cloud.jpg";

const solutions = [
  {
    title: "Termografia Aérea com IA",
    subtitle: "Energia & Solar",
    description: "Identifique hotspots, diodos queimados e soiling automaticamente. Reduza o OPEX em até 40%.",
    image: solarImage,
    badge: "Mais Popular"
  },
  {
    title: "Segurança Perimetral Autônoma",
    subtitle: "Segurança Patrimonial",
    description: "Rondas 100% automáticas com DJI Dock. Proteção 24/7 sem expor vigilantes ao risco.",
    image: securityImage,
    badge: null
  },
  {
    title: "Gêmeo Digital e Acompanhamento",
    subtitle: "Engenharia & Obras",
    description: "Volumetria, Ortomosaicos e Integração BIM. Controle o cronograma físico-financeiro remotamente.",
    image: constructionImage,
    badge: null
  }
];

const SolutionsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary/30" id="demo">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Soluções por <span className="text-gradient-primary">Vertical</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tecnologia especializada para cada setor industrial
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              className="glass-card-hover overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={solution.image} 
                  alt={solution.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                
                {solution.badge && (
                  <div className="absolute top-4 right-4 badge-success">
                    {solution.badge}
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <p className="text-primary text-sm font-semibold mb-2">{solution.subtitle}</p>
                <h3 className="text-xl font-bold mb-3">{solution.title}</h3>
                <p className="text-muted-foreground">{solution.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
