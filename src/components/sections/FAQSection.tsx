"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "Posso contratar serviços individualmente?",
    answer:
      "Claro. A Enthus oferece quatro modelos de assinatura, permitindo que você escolha a solução que melhor se adapta às suas necessidades ou opte por um conjunto de soluções adequado ao seu planejamento.",
  },
  {
    question: "A Enthus consegue ajudar o meu negócio em estágio inicial ou somente avançado?",
    answer:
      "Nossas soluções são adequadas para qualquer empresa que busca utilizar ferramentas de IA para otimizar seus processos e aumentar a competitividade, independentemente do estágio do negócio.",
  },
  {
    question: "Qual é o valor das assinaturas?",
    answer:
      "Preencha o formulário acima e entraremos em contato para fornecer um orçamento baseado na solução de sua preferência.",
  },
];

export function FAQSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-12 font-sora"
        >
          Perguntas Frequentes
        </motion.h2>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-lg font-medium text-gray-900 py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 py-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
