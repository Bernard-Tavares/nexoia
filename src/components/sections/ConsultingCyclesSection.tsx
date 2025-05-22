"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

const consultingSteps = [
  {
    title: "Treinamento de Maestria em IA Adaptável",
    description:
      "Capacitação da equipe para utilizar ferramentas de IA avançadas, como Chat GPT.",
  },
  {
    title: "Aprofundamento em Aplicações Práticas",
    description: "Garantia da maximização do potencial das ferramentas de IA.",
  },
  {
    title: "Integração de Ferramentas de IA aos Fluxos de Trabalho",
    description:
      "Criação de Prompt Inteligente\nChatbots com Infusão de Conhecimento\nExcelência em Automação Simplificada",
  },
  {
    title: "Atualização Contínua",
    description:
      "Acompanhamento da evolução constante das IAs para manter sua empresa sempre à frente.",
  },
];

export function ConsultingCyclesSection() {
  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-4 font-sora"
        >
          Ciclos de Consultoria
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-center mb-16 text-lg max-w-4xl mx-auto"
        >
          Através dos ciclos de consultoria, combinamos a eficiência orientada por IA com excelência empresarial, revolucionando todas as suas operações para uma nova realidade.
          <br />
          <span className="block mt-2">Como fazemos:</span>
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {consultingSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="text-center"
            >
              <div className="mb-4 mx-auto bg-primary w-12 h-12 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">{index + 1}</span>
              </div>
              <h3 className="text-xl font-sora mb-3">{step.title}</h3>
              <p className="text-gray-400 whitespace-pre-line">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white px-8 py-6 rounded-lg"
          >
            <ScrollLink
              to="conhecer"
              smooth={true}
              duration={800}
              offset={-70}
              className="cursor-pointer"
            >
              Quero implementar as soluções de IA
            </ScrollLink>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
