"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  {
    icon: "treinamento",
    title: "Treinamento e Formação em IA",
    description:
      "Oferecemos treinamento que abrange desde os conceitos básicos até o uso avançado de ferramentas de IA, garantindo que sua equipe esteja preparada para utilizar essas tecnologias de forma transformadora.",
    features: [
      "Conceitos básicos, contextualização e fundamentos de IA",
      "Apresentação das ferramentas de IA necessárias para o seu negócio",
      "Aprimoramento do time na utilização das ferramentas para automatização das tarefas, economizando tempo e dinheiro",
      "Capacitação final para personalização das ferramentas e desenvolvimento de novos processos com IA",
    ],
  },
  {
    icon: "imersao",
    title: "Imersão e Planejamento",
    description:
      "Realizamos uma análise aprofundada para identificar lacunas e planejar soluções de IA personalizadas, agregando valor e eficiência às suas operações. Esta etapa é essencial para aplicar toda a nossa expertise e saber como as ferramentas de IA podem beneficiar a sua empresa.",
    features: [],
  },
  {
    icon: "microsservicos",
    title: "Construção Personalizada",
    description:
      "Desenvolvemos microsserviços, como chatbots rápidos e prompts personalizados, para atender diretamente às suas necessidades, facilitando processos e acelerando a execução. Os microsserviços de IA permitem dividir um aplicativo grande em partes menores e independentes, cada uma com sua própria responsabilidade, o que adiciona capacidades analíticas e preditivas, automatiza análises de dados, e extrai insights de grandes bases de dados.",
    features: [],
  },
  {
    icon: "mentoria",
    title: "Mentoria Contínua",
    description:
      "Oferecemos mentoria contínua para a implementação e desenvolvimento de ferramentas como GPTs e chatbots, assegurando que sua empresa utilize essas tecnologias de forma eficaz e segura. Acompanhamos você e sua equipe até que estejam totalmente aptos a desenvolver e manter soluções de IA.",
    features: [],
  },
];

export function ServicesSection() {
  return (
    <section id="servicos" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-4 font-sora uppercase"
        >
          Confira as frentes de atuação e como resolvemos os problemas com os nossos pacotes de serviços
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-center mb-12 text-lg md:text-xl max-w-4xl mx-auto"
        >
          A Nexoia desenvolve ferramentas de inteligência artificial que otimizam suas operações e oferece consultoria e treinamento para garantir suporte contínuo e capacitação nas tecnologias mais avançadas.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <Card className="bg-black border-gray-800 h-full">
                <CardHeader>
                  <div className="mb-2">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">{service.icon.charAt(0).toUpperCase()}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl font-sora">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-400 mb-4">
                    {service.description}
                  </CardDescription>
                  {service.features.length > 0 && (
                    <ul className="list-disc pl-5 space-y-2 text-gray-300">
                      {service.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  )}
                </CardContent>
              </Card>
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
