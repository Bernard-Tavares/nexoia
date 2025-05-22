"use client";

import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import { motion } from "framer-motion";

const forWhoItems = [
  {
    title: "Ausência de Conhecimento Especializado",
    content:
      "Sua empresa não possui uma equipe treinada e especializada para implementar soluções de IA de forma eficaz.",
  },
  {
    title: "Capacitação Contínua",
    content:
      "Você deseja treinar e capacitar continuamente sua equipe para adaptar-se às novas tecnologias e manter-se competitivo no mercado.",
  },
  {
    title: "Identificação de Problemas e Planejamento de Soluções",
    content:
      "Precisa de ajuda para identificar problemas específicos que podem ser resolvidos com IA e para planejar soluções eficazes.",
  },
  {
    title: "Desenvolvimento e Suporte Técnico",
    content:
      "Necessita de suporte técnico especializado para desenvolver e implementar soluções de IA personalizadas.",
  },
];

export function ForWhoSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 font-sora"
        >
          Mas como saber se isso é para mim?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-center mb-12 text-gray-700"
        >
          Se a sua empresa se enquadra em algum desses cenários, entre em contato conosco:
        </motion.p>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {forWhoItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-lg font-semibold font-sora py-4">
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 py-4">
                    {item.content}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="mb-6 text-gray-700">
            Se você precisa de treinamento especializado, consultoria personalizada
            ou suporte técnico contínuo, não perca tempo e implemente já as nossas soluções:
          </p>

          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white px-8 py-6 rounded-lg gap-2"
          >
            <a
              href="https://api.whatsapp.com/send?phone=5534984048720&text=Olá,%20vim%20do%20seu%20site,%20gostaria%20de%20entender%20melhor!"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/whatsapp.svg"
                alt="WhatsApp"
                width={20}
                height={20}
              />
              Quero implementar as soluções de IA
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
