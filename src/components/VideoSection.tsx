import { motion } from "framer-motion";

const VideoSection = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-50" />
      
      <div className="container relative mx-auto px-4 md:px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Veja a <span className="text-gradient-primary">Tecnologia</span> em Ação
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Automação completa do dock ao processamento inteligente
          </p>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="dashboard-frame">
            <video
              className="w-full h-auto rounded-xl"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="https://horus.global/wp-content/uploads/2025/11/720.mp4" type="video/mp4" />
              Seu navegador não suporta vídeos HTML5.
            </video>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
