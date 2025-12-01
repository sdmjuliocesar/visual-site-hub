import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-background" id="about">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="font-display text-5xl md:text-6xl text-navy mb-6 text-center">
            Quem <span className="text-orange">somos?</span>
          </h2>
          <div className="h-1 w-24 bg-orange mx-auto mb-12"></div>

          <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
            <p>
              A <strong className="text-navy font-semibold">Nowtech Solutions</strong> é uma empresa de tecnologia inovadora focada em desenvolver soluções digitais que transformam negócios. Com especialização em desenvolvimento de software, automação (RPA e I.A), dados e consultoria tecnológica, ajudamos empresas a alcançar seus objetivos estratégicos através da digitalização.
            </p>
            <p>
              Nossa equipe multidisciplinar combina conhecimento técnico profundo com visão de negócios, entregando projetos que geram valor real e resultados mensuráveis para nossos clientes.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 grid md:grid-cols-3 gap-8"
          >
            <div className="text-center p-6 bg-card rounded-2xl border border-border">
              <div className="text-4xl font-display text-orange mb-4">🎯</div>
              <h3 className="font-semibold text-xl text-navy mb-2">Nossa Missão</h3>
              <p className="text-muted-foreground">
                Converter conceitos em soluções tecnológicas robustas e escaláveis
              </p>
            </div>
            <div className="text-center p-6 bg-card rounded-2xl border border-border">
              <div className="text-4xl font-display text-orange mb-4">🤝</div>
              <h3 className="font-semibold text-xl text-navy mb-2">Relacionamentos</h3>
              <p className="text-muted-foreground">
                Desenvolver parcerias de longo prazo baseadas em confiança
              </p>
            </div>
            <div className="text-center p-6 bg-card rounded-2xl border border-border">
              <div className="text-4xl font-display text-orange mb-4">🚀</div>
              <h3 className="font-semibold text-xl text-navy mb-2">Inovação</h3>
              <p className="text-muted-foreground">
                Tecnologia como catalisador de crescimento e não um obstáculo
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};