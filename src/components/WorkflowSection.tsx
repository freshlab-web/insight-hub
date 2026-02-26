import { motion } from "framer-motion";

const captureImg = "https://cdn.jsdelivr.net/gh/freshlab-web/insight-hub@main/src/assets/workflow-capture.jpg";
const processingImg = "https://cdn.jsdelivr.net/gh/freshlab-web/insight-hub@main/src/assets/workflow-processing.jpg";
const actionImg = "https://cdn.jsdelivr.net/gh/freshlab-web/insight-hub@main/src/assets/workflow-action.jpg";

const steps = [
  {
    image: captureImg,
    step: "01",
    title: "Captura",
    description: "Drones DJI Enterprise e Docks Autônomos capturam dados com precisão milimétrica."
  },
  {
    image: processingImg,
    step: "02",
    title: "Processamento",
    description: "Nuvem Horus com IA Smart Detections analisa automaticamente cada pixel."
  },
  {
    image: actionImg,
    step: "03",
    title: "Ação",
    description: "Relatórios automáticos, alertas em tempo real e integração BIM/GIS."
  }
];

const WorkflowSection = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 hex-pattern opacity-30" />

      <div className="container relative mx-auto px-4 md:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            O Ecossistema <span className="text-gradient-primary">Horus Monitora</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Do voo ao relatório em minutos, não dias
          </p>
        </motion.div>

        <div className="space-y-6">
          {steps.map((item, index) => (
            <motion.div
              key={item.title}
              className={`grid md:grid-cols-5 gap-0 glass-card overflow-hidden`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <div className={`relative h-56 md:h-72 md:col-span-3 overflow-hidden ${index % 2 === 1 ? "md:order-2" : ""}`}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className={`absolute inset-0 ${index % 2 === 1 ? "bg-gradient-to-l" : "bg-gradient-to-r"} from-transparent to-card/40 hidden md:block`} />
              </div>
              <div className={`p-8 md:p-12 md:col-span-2 flex flex-col justify-center ${index % 2 === 1 ? "md:order-1" : ""}`}>
                <span className="text-primary text-5xl font-black opacity-30 mb-2">{item.step}</span>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{item.title}</h3>
                <p className="text-muted-foreground text-lg">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;
