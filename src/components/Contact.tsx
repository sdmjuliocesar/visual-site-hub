import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-background" id="contact">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="font-display text-5xl md:text-6xl text-navy mb-6">
            Vamos Construir o <span className="text-orange">Futuro Juntos?</span>
          </h2>
          <div className="h-1 w-24 bg-orange mx-auto mb-8"></div>

          <p className="text-xl text-muted-foreground mb-12">
            Estamos prontos para transformar suas ideias em realidade. Agradecemos pela oportunidade de apresentar nossa proposta.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <motion.a
              href="mailto:julio.cassimiro@nowtechsolutions.com.br"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col items-center gap-4 p-6 bg-card rounded-2xl border border-border hover:border-orange/50 transition-all duration-300 hover:scale-105"
            >
              <div className="w-14 h-14 rounded-xl bg-orange/10 flex items-center justify-center">
                <Mail className="w-7 h-7 text-orange" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-navy mb-1">Email</h3>
                <p className="text-sm text-muted-foreground break-all">
                  julio.cassimiro@nowtechsolutions.com.br
                </p>
              </div>
            </motion.a>

            <motion.a
              href="tel:+5531999572502"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col items-center gap-4 p-6 bg-card rounded-2xl border border-border hover:border-orange/50 transition-all duration-300 hover:scale-105"
            >
              <div className="w-14 h-14 rounded-xl bg-orange/10 flex items-center justify-center">
                <Phone className="w-7 h-7 text-orange" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-navy mb-1">Telefone</h3>
                <p className="text-sm text-muted-foreground">
                  +55 (31) 99957-2502
                </p>
              </div>
            </motion.a>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col items-center gap-4 p-6 bg-card rounded-2xl border border-border"
            >
              <div className="w-14 h-14 rounded-xl bg-orange/10 flex items-center justify-center">
                <MapPin className="w-7 h-7 text-orange" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-navy mb-1">Localização</h3>
                <p className="text-sm text-muted-foreground">
                  Belo Horizonte, MG
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-navy rounded-2xl p-8 text-white"
          >
            <h3 className="font-display text-3xl mb-6">Próximos Passos</h3>
            <div className="grid md:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-orange flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-sm font-bold">1</span>
                </div>
                <p className="text-white/90">Reunião de alinhamento técnico</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-orange flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-sm font-bold">2</span>
                </div>
                <p className="text-white/90">Refinamento do escopo</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-orange flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-sm font-bold">3</span>
                </div>
                <p className="text-white/90">Assinatura do contrato</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-orange flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-sm font-bold">4</span>
                </div>
                <p className="text-white/90">Kick-off do projeto</p>
              </div>
            </div>
            
            <Button
              size="lg"
              className="mt-8 bg-orange hover:bg-orange-light text-white font-semibold text-lg px-8 py-6 rounded-xl transition-all duration-300 hover:scale-105"
              onClick={() => window.location.href = 'mailto:julio.cassimiro@nowtechsolutions.com.br'}
            >
              Iniciar Conversa
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};