import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Search, Map, Code2, TestTube, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Descoberta e Análise",
    description: "Levantamento detalhado de requisitos, análise de viabilidade e definição de objetivos mensuráveis."
  },
  {
    icon: Map,
    title: "Planejamento Estratégico",
    description: "Elaboração de roadmap tecnológico, arquitetura de solução e cronograma de entregas."
  },
  {
    icon: Code2,
    title: "Desenvolvimento Ágil",
    description: "Sprints iterativos com entregas contínuas, revisões regulares e ajustes baseados em feedback."
  },
  {
    icon: TestTube,
    title: "Testes e Qualidade",
    description: "Validação rigorosa via testes automatizados, manuais e de segurança."
  },
  {
    icon: Rocket,
    title: "Deploy e Suporte",
    description: "Implantação controlada, treinamento de usuários e suporte técnico contínuo."
  }
];

export const Process = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-background" id="process">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-5xl md:text-6xl text-navy mb-6">
            Nosso <span className="text-orange">Processo</span>
          </h2>
          <div className="h-1 w-24 bg-orange mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Metodologia comprovada para entregar projetos de sucesso
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative mb-8 last:mb-0"
            >
              <div className="flex items-center gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-orange flex items-center justify-center">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="flex-1 bg-card rounded-2xl p-6 border border-border hover:border-orange/30 transition-colors">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display text-2xl text-navy mb-2">
                        {index + 1}. {step.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {index < steps.length - 1 && (
                <div className="ml-8 h-8 w-0.5 bg-gradient-to-b from-orange to-orange/20 my-2"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};