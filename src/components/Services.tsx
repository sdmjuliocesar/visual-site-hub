import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Bot, Lightbulb, Database, Users } from "lucide-react";

const services = [
  {
    icon: Code,
    number: "01",
    title: "Desenvolvimento de Software",
    description: "Utilizamos metodologias e tecnologia de ponta para criação de aplicações Web e Mobile Customizadas. Produtos digitais e Escaláveis."
  },
  {
    icon: Bot,
    number: "02",
    title: "Automação (RPA e I.A - Agentes)",
    description: "A Automação Robótica de Processos (RPA) automatiza tarefas repetitivas/baseadas em regras, permitindo que o capital humano se dedique a atividades estratégicas. Desenvolvimento de agentes de IA que transcendem as limitações da RPA."
  },
  {
    icon: Lightbulb,
    number: "03",
    title: "Consultoria Tecnológica",
    description: "Assessoria estratégica em três pilares fundamentais: Arquitetura de Sistemas, Modernização e Design."
  },
  {
    icon: Database,
    number: "04",
    title: "Conversão de Dados em Ativos",
    description: "Serviço Especializado que transforma dados brutos em ativos estratégicos. Garantindo a consistência e a qualidade da informação através da reestruturação."
  },
  {
    icon: Users,
    number: "05",
    title: "Alocação de Profissionais",
    description: "Disponibilizamos profissionais qualificados e especializados para atuar em projetos de tecnologia, garantindo expertise técnica e flexibilidade para atender às demandas da sua empresa."
  }
];

export const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-navy" id="services">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-5xl md:text-6xl text-white mb-6">
            Portfólio de <span className="text-orange">Soluções</span>
          </h2>
          <div className="h-1 w-24 bg-orange mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-navy-light border border-white/10 rounded-2xl p-8 hover:border-orange/50 transition-all duration-300"
            >
              <div className="absolute top-6 right-6 text-6xl font-display text-orange/10 group-hover:text-orange/20 transition-colors">
                {service.number}
              </div>
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-orange/10 flex items-center justify-center mb-6 group-hover:bg-orange/20 transition-colors">
                  <service.icon className="w-7 h-7 text-orange" />
                </div>
                
                <h3 className="font-display text-2xl text-white mb-4 group-hover:text-orange transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-white/70 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};