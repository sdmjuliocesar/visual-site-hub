import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

const formSchema = z.object({
  nome: z.string().trim().min(2, {
    message: "Nome deve ter pelo menos 2 caracteres.",
  }).max(100, {
    message: "Nome deve ter no máximo 100 caracteres.",
  }),
  sobrenome: z.string().trim().min(2, {
    message: "Sobrenome deve ter pelo menos 2 caracteres.",
  }).max(100, {
    message: "Sobrenome deve ter no máximo 100 caracteres.",
  }),
  email: z.string().trim().email({
    message: "Por favor, insira um e-mail válido.",
  }).max(255, {
    message: "E-mail deve ter no máximo 255 caracteres.",
  }),
  telefone: z.string().trim().min(10, {
    message: "Telefone deve ter pelo menos 10 dígitos.",
  }).max(20, {
    message: "Telefone deve ter no máximo 20 caracteres.",
  }),
  empresa: z.string().trim().min(2, {
    message: "Nome da empresa deve ter pelo menos 2 caracteres.",
  }).max(200, {
    message: "Nome da empresa deve ter no máximo 200 caracteres.",
  }),
  numeroFuncionarios: z.string().min(1, {
    message: "Por favor, selecione o número de funcionários.",
  }),
  mensagem: z.string().trim().max(1000, {
    message: "Mensagem deve ter no máximo 1000 caracteres.",
  }).optional(),
});

type FormValues = z.infer<typeof formSchema>;

export const DemoForm = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nome: "",
      sobrenome: "",
      email: "",
      telefone: "",
      empresa: "",
      numeroFuncionarios: "",
      mensagem: "",
    },
  });

  const onSubmit = async (values: FormValues) => {
    setIsSubmitting(true);
    
    try {
      // Simular envio (aqui você pode adicionar integração com backend)
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log("Form submitted:", values);
      
      toast.success("Solicitação enviada com sucesso!", {
        description: "Entraremos em contato em breve.",
      });
      
      form.reset();
    } catch (error) {
      toast.error("Erro ao enviar solicitação", {
        description: "Por favor, tente novamente.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 bg-navy" id="demo">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-navy-light border border-white/10 rounded-2xl p-8 md:p-12">
            <h2 className="font-display text-3xl md:text-4xl text-white mb-8 text-center">
              Formulario <span className="text-orange">de Contato </span> com a Nowtech
            </h2>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="nome"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">
                          Nome: <span className="text-orange">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Seu nome"
                            className="bg-navy border-white/20 text-white placeholder:text-white/40 focus:border-orange"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-orange-light" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="sobrenome"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">
                          Sobrenome: <span className="text-orange">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Seu sobrenome"
                            className="bg-navy border-white/20 text-white placeholder:text-white/40 focus:border-orange"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-orange-light" />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">
                        E-mail: <span className="text-orange">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="seu.email@empresa.com"
                          className="bg-navy border-white/20 text-white placeholder:text-white/40 focus:border-orange"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-orange-light" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="telefone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">
                        Telefone: <span className="text-orange">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="tel"
                          placeholder="(00) 00000-0000"
                          className="bg-navy border-white/20 text-white placeholder:text-white/40 focus:border-orange"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-orange-light" />
                    </FormItem>
                  )}
                />

                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="empresa"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">
                          Empresa: <span className="text-orange">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Nome da empresa"
                            className="bg-navy border-white/20 text-white placeholder:text-white/40 focus:border-orange"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-orange-light" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="numeroFuncionarios"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">
                          Número de Funcionários: <span className="text-orange">*</span>
                        </FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-navy border-white/20 text-white focus:border-orange">
                              <SelectValue placeholder="Selecione" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-navy-light border-white/20 z-50">
                            <SelectItem value="1-10" className="text-white focus:bg-orange focus:text-white">1-10</SelectItem>
                            <SelectItem value="11-50" className="text-white focus:bg-orange focus:text-white">11-50</SelectItem>
                            <SelectItem value="51-200" className="text-white focus:bg-orange focus:text-white">51-200</SelectItem>
                            <SelectItem value="201-500" className="text-white focus:bg-orange focus:text-white">201-500</SelectItem>
                            <SelectItem value="500+" className="text-white focus:bg-orange focus:text-white">500+</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage className="text-orange-light" />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="mensagem"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Mensagem</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Conte-nos mais sobre suas necessidades..."
                          className="bg-navy border-white/20 text-white placeholder:text-white/40 focus:border-orange min-h-[120px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-orange-light" />
                    </FormItem>
                  )}
                />

                <div className="text-sm text-white/70 leading-relaxed">
                  A Nowtech respeita sua privacidade e utiliza suas informações pessoais apenas para fornecer e comunicar sobre produtos e serviços. Você pode deixar de receber nossas comunicações a qualquer momento.
                </div>

                <div className="flex justify-end">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    size="lg"
                    className="bg-orange hover:bg-orange-light text-white font-semibold text-lg px-8 py-6 rounded-xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Enviando..." : "Solicitar uma demonstração"}
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
