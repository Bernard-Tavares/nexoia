"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";

const packages = [
  {
    id: 1,
    title: "Maestria em IA Adaptável",
    description:
      "Capacitação da sua equipe com nosso treinamento especial Desmistificando IAs Generativas e Elaboração de Prompts Inteligentes. Inclui atualizações mensais sobre tendências do setor, conformidade e impactos de IA. Este pacote também oferece módulos de treinamento de domínio de IA, ferramentas de criação de prompts inteligentes e relatórios mensais sobre o impacto da IA no setor.",
    whatsappMessage: "Olá, vim do seu site, tenho interesse no pacote Maestria em IA Adaptável",
  },
  {
    id: 2,
    title: "Serviço de Chatbot com Infusão de Conhecimento",
    description:
      "Transforme as interações com os clientes com um chatbot personalizado, que multiplica e facilita o acesso ao conhecimento da sua organização. Inclui suporte e atualizações contínuas, além de relatórios analíticos sobre interações e engajamento.",
    whatsappMessage: "Olá, vim do seu site, tenho interesse no pacote Serviço de Chatbot com Infusão de Conhecimento",
  },
  {
    id: 3,
    title: "Arquiteto em Estratégia com IA",
    description:
      "Planejamento de soluções abrangentes de IA, adaptadas ao seu nicho ou para construir novos modelos de negócios. Inclui revisão do modelo de negócios, construção de projetos de soluções de IA e recomendações de implantação.",
    whatsappMessage: "Olá, vim do seu site, tenho interesse no pacote Arquiteto em Estratégia com IA",
  },
  {
    id: 4,
    title: "Pacote Abrangente de Capacitação de IA",
    description:
      "Ideal para empresas que buscam uma transformação completa com IA, combinando capacitação, interação com clientes e estratégias personalizadas. Inclui treinamento de IA, interação aprimorada com chatbots e excelência operacional impulsionada por IA.",
    whatsappMessage: "Olá, vim do seu site, tenho interesse no Pacote Abrangente de Capacitação de IA",
  },
];

export function PackagesSection() {
  return (
    <section id="conhecer" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-4 font-sora"
        >
          Escolha a Assinatura Perfeita para Você
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-center mb-16 text-lg max-w-4xl mx-auto"
        >
          Conheça os quatro níveis de assinatura para explorar todos os benefícios que a NexoIa oferece para a sua empresa:
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <Card className="bg-gray-900 border-gray-800 h-full flex flex-col">
                <CardHeader>
                  <div className="mb-2">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">{pkg.id}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl font-sora">
                    {pkg.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-gray-400 text-sm">
                    {pkg.description}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button
                    asChild
                    className="w-full bg-primary hover:bg-primary/90 gap-2 rounded-lg"
                  >
                    <a
                      href={`https://api.whatsapp.com/send?phone=5534984048720&text=${encodeURIComponent(pkg.whatsappMessage)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src="/images/whatsapp.svg"
                        alt="WhatsApp"
                        width={20}
                        height={20}
                      />
                      Agendar
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
