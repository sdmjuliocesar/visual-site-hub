import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Shield, TrendingUp, Headphones } from "lucide-react";

const differentials = [
  {
    icon: Zap,
    title: "Agilidade na Entrega",
    description: "Metodologias ágeis que garantem entregas rápidas e incrementais, com feedback constante"
  },
  {
    icon: Shield,
    title: "Segurança em Primeiro Lugar",
    description: "Práticas DevSecOps integradas desde o início, protegendo seus dados e sistemas"
  },
  {
    icon: TrendingUp,
    title: "Escalabilidade Garantida",
    description: "Arquiteturas cloud-native preparadas para crescer com seu negócio"
  },
  {
    icon: Headphones,
    title: "Suporte Dedicado",
    description: "Time especializado disponível para resolver questões técnicas e estratégicas"
  }
];

export const Differentials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-navy" id="differentials">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-5xl md:text-6xl text-white mb-6">
            Diferenciais <span className="text-orange">Nowtech</span>
          </h2>
          <div className="h-1 w-24 bg-orange mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {differentials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-navy-light border border-white/10 rounded-2xl p-8 hover:border-orange transition-all duration-300 hover:scale-105"
            >
              <div className="w-14 h-14 rounded-xl bg-orange/10 flex items-center justify-center mb-6 group-hover:bg-orange transition-colors">
                <item.icon className="w-7 h-7 text-orange group-hover:text-white transition-colors" />
              </div>
              
              <h3 className="font-semibold text-xl text-white mb-3 group-hover:text-orange transition-colors">
                {item.title}
              </h3>
              
              <p className="text-white/70 leading-relaxed text-sm">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};