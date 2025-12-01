import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
export const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div className="absolute top-20 left-10 w-64 h-64 bg-orange/10 rounded-full blur-3xl" animate={{
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.5, 0.3]
      }} transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }} />
        <motion.div className="absolute bottom-20 right-10 w-96 h-96 bg-orange/10 rounded-full blur-3xl" animate={{
        scale: [1.2, 1, 1.2],
        opacity: [0.3, 0.5, 0.3]
      }} transition={{
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut"
      }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} className="mb-8">
            <h1 className="font-display text-6xl md:text-8xl mb-6 text-white leading-tight">
              Nowtech
            </h1>
            <div className="h-1 w-32 bg-orange mx-auto mb-8"></div>
          </motion.div>

          <motion.p initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed">
            Convertemos conceitos em soluções tecnológicas robustas e escaláveis com visão 360° em negócios
          </motion.p>

          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.4
        }} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange hover:bg-orange-light text-white font-semibold text-lg px-8 py-6 rounded-xl transition-all duration-300 hover:scale-105" onClick={() => document.getElementById('contact')?.scrollIntoView({
            behavior: 'smooth'
          })}>
              Fale Conosco
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => document.getElementById('services')?.scrollIntoView({
            behavior: 'smooth'
          })} className="border-2 border-white text-white font-semibold text-lg px-8 py-6 transition-all duration-300 hover:text-navy rounded-xl bg-primary">
              Conheça Nossos Serviços
            </Button>
          </motion.div>
        </div>
      </div>

      <motion.div className="absolute bottom-10 left-1/2 transform -translate-x-1/2" animate={{
      y: [0, 10, 0]
    }} transition={{
      duration: 2,
      repeat: Infinity
    }}>
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <motion.div className="w-1.5 h-1.5 bg-white rounded-full" animate={{
          y: [0, 12, 0]
        }} transition={{
          duration: 2,
          repeat: Infinity
        }} />
        </div>
      </motion.div>
    </section>;
};