import { motion } from "framer-motion";
import { Play } from "lucide-react";
import heroImage from "@/assets/hero-dashboard.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 hex-pattern opacity-50" />
      <div className="absolute inset-0 grid-pattern" />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      
      <div className="container relative mx-auto px-4 md:px-6 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div 
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="badge-success mb-6 inline-flex"
            >
              <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
              Plataforma Monitora Ativa
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
              Transforme Imagens de Drones em{" "}
              <span className="text-gradient-primary">Decisões de Negócio.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
              Hardware é apenas o começo. A Horus entrega a inteligência que processa dados, 
              identifica anomalias com IA e automatiza sua segurança e manutenção.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.a
                href="#contato"
                className="btn-primary-glow text-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Agendar Diagnóstico Operacional
              </motion.a>
              
              <motion.a
                href="#demo"
                className="btn-ghost flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Play className="w-5 h-5" />
                Ver a Plataforma em Ação
              </motion.a>
            </div>
          </motion.div>
          
          {/* Hero Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="dashboard-frame animate-float">
              <img 
                src={heroImage} 
                alt="Horus Dashboard - Plataforma de Inteligência para Drones" 
                className="w-full h-auto"
              />
            </div>
            
            {/* Floating elements */}
            <motion.div
              className="absolute -bottom-4 -left-4 glass-card p-4 hidden md:flex items-center gap-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
            >
              <div className="w-10 h-10 rounded-full bg-success/20 flex items-center justify-center">
                <span className="text-success text-lg">✓</span>
              </div>
              <div>
                <p className="text-sm font-semibold">98.7% Precisão IA</p>
                <p className="text-xs text-muted-foreground">Detecção de anomalias</p>
              </div>
            </motion.div>
            
            <motion.div
              className="absolute -top-4 -right-4 glass-card p-4 hidden md:flex items-center gap-3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
            >
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-primary text-lg">⚡</span>
              </div>
              <div>
                <p className="text-sm font-semibold">Tempo Real</p>
                <p className="text-xs text-muted-foreground">Alertas instantâneos</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
