import { motion } from "framer-motion";
import { Camera, Cpu, Zap } from "lucide-react";

const steps = [
  {
    icon: Camera,
    step: "01",
    title: "Captura",
    description: "Drones DJI Enterprise / Docks Autônomos"
  },
  {
    icon: Cpu,
    step: "02",
    title: "Processamento",
    description: "Nuvem Horus + IA Smart Detections"
  },
  {
    icon: Zap,
    step: "03",
    title: "Ação",
    description: "Relatórios, Alertas em Tempo Real, Integração BIM/GIS"
  }
];

const WorkflowSection = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 hex-pattern opacity-30" />
      
      <div className="container relative mx-auto px-4 md:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            O Ecossistema <span className="text-gradient-primary">Horus Monitora</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2" />
          
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((item, index) => (
              <motion.div
                key={item.title}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <div className="glass-card-hover p-8 text-center h-full">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-sm font-bold">
                    {item.step}
                  </div>
                  
                  <div className="w-16 h-16 mx-auto mb-6 mt-4 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;
