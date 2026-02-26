import { motion } from "framer-motion";

const solarImage = "https://cdn.jsdelivr.net/gh/freshlab-web/insight-hub@main/src/assets/solar-thermal.jpg";
const securityImage = "https://cdn.jsdelivr.net/gh/freshlab-web/insight-hub@main/src/assets/seguranca.png";
const constructionImage = "https://cdn.jsdelivr.net/gh/freshlab-web/insight-hub@main/src/assets/point-cloud.jpg";
const gallerySolar = "https://cdn.jsdelivr.net/gh/freshlab-web/insight-hub@main/src/assets/gallery-solar-inspection.jpg";
const gallerySecurity = "https://cdn.jsdelivr.net/gh/freshlab-web/insight-hub@main/src/assets/seguranca-thermal.png";
const galleryTwin = "https://cdn.jsdelivr.net/gh/freshlab-web/insight-hub@main/src/assets/gallery-digital-twin.jpg";

const solutions = [
  {
    title: "Termografia Aérea com IA",
    subtitle: "Energia & Solar",
    description: "Identifique hotspots, diodos queimados e soiling automaticamente. Reduza o OPEX em até 40%.",
    image: solarImage,
    gallery: gallerySolar,
    badge: "Mais Popular"
  },
  {
    title: "Segurança Patrimonial Autônoma",
    subtitle: "Segurança Patrimonial",
    description: "Rondas 100% automáticas com DJI Dock. Proteção 24/7 sem expor vigilantes ao risco.",
    image: securityImage,
    gallery: gallerySecurity,
    badge: null
  },
  {
    title: "Gêmeo Digital e Acompanhamento",
    subtitle: "Engenharia & Obras",
    description: "Volumetria, Ortomosaicos e Integração BIM. Controle o cronograma físico-financeiro remotamente.",
    image: constructionImage,
    gallery: galleryTwin,
    badge: null
  }
];

const SolutionsSection = () => {
  return (
    <section className="py-24 md:py-32 bg-secondary/30" id="demo">
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

        <div className="space-y-12">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              className="glass-card overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className={`grid md:grid-cols-2 gap-0`}>
                {/* Main image */}
                <div className={`relative h-64 md:h-96 overflow-hidden group ${index % 2 === 1 ? "md:order-2" : ""}`}>
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                  {solution.badge && (
                    <div className="absolute top-4 right-4 badge-success">
                      {solution.badge}
                    </div>
                  )}
                </div>

                {/* Content + gallery thumbnail */}
                <div className={`p-8 md:p-12 flex flex-col justify-center ${index % 2 === 1 ? "md:order-1" : ""}`}>
                  <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-3">{solution.subtitle}</p>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">{solution.title}</h3>
                  <p className="text-muted-foreground text-lg mb-6">{solution.description}</p>

                  {/* Gallery thumbnail */}
                  <div className="relative h-32 md:h-40 rounded-xl overflow-hidden border border-white/10">
                    <img
                      src={solution.gallery}
                      alt={`${solution.title} - galeria`}
                      className="w-full h-full object-cover opacity-80"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
