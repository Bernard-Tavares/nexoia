"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link as ScrollLink } from "react-scroll";

const applications = [
  {
    id: "training",
    title: "Treinamento de IA Adaptável para Equipe de Vendas",
    description: [
      "Treinamento focado no uso de IA generativa, especificamente ChatGPT, para melhorar abordagens de vendas, no qual aprendem a criar prompts específicos que ajudam a extrair as necessidades dos clientes e a personalizar as propostas de valor do produto.",
      "O ChatGPT é treinado com uma base de dados de perguntas frequentes e informações detalhadas sobre o software, como: Quais são as suas principais preocupações com a gestão atual de seus processos?",
      "Utilização do ChatGPT para simular conversas com clientes em potencial, ajustando seus métodos de comunicação e aprendendo a usar os prompts de maneira eficaz, obtendo feedback sobre a clareza das respostas, o que aprimora as técnicas de vendas dos vendedores.",
      "Integração do ChatGPT aos sistemas de CRM da empresa, permitindo que os vendedores acessem o assistente de IA durante as ligações e reuniões com clientes, reduzindo o tempo para responder aos clientes e aumentando a conversão e a satisfação dos clientes.",
    ]
  },
  {
    id: "support",
    title: "Prompt Inteligente para Assistente de Suporte Técnico",
    description: [
      "Por meio de um assistente de IA, como o ChatGPT, é possível ajudar os clientes na coleta de informações críticas e na oferta de soluções rápidas para problemas comuns, utilizando prompts específicos para cada situação.",
      "Prompt para identificação do problema: Por favor, descreva o problema que você está enfrentando com nosso software, incluindo qualquer mensagem de erro que você tenha recebido.",
      "Prompt para verificação de soluções simples: Antes de prosseguir, você poderia confirmar se já tentou reiniciar o software ou o dispositivo e se o problema persiste após essa ação?",
      "Prompt para ambientação: Poderia informar qual a versão do nosso software que você está utilizando, bem como o sistema operacional e qualquer hardware específico que possa estar relacionado ao problema?",
      "Prompt de análise específica: O problema ocorre em uma função específica do software ou é generalizado? Por exemplo, você está enfrentando dificuldades ao salvar arquivos, acessar determinadas funcionalidades ou em outro contexto?",
    ]
  },
  {
    id: "ecommerce",
    title: "Chatbot com Infusão de Conhecimento para e-commerce",
    description: [
      "Utilize chatbots com infusão de conhecimento para melhorar a experiência do cliente ao personalizar o atendimento e fornecer informações necessárias, promovendo uma experiência de compra mais fluida e satisfatória.",
      "Assistência na escolha de produtos com prompt de chatbot:",
      "• Olá! Como posso ajudá-lo hoje? Está procurando algo específico ou gostaria de sugestões baseadas nas suas preferências?",
      "• Temos uma nova coleção de vestidos casuais que acho que você vai adorar. Gosta de algo mais floral ou liso?",
      "• Com base no seu interesse por roupas formais, aqui estão algumas camisas e blazers que estão em alta no momento.",
      "Respostas a perguntas sobre o produto com informações detalhadas:",
      "• Gostaria de saber mais sobre algum dos produtos que sugeri? Estou aqui para ajudar com detalhes, como composição, cuidados ou avaliações de outros clientes.",
      "• Este vestido é feito de 100% algodão, ideal para climas quentes. Ele vem em tamanhos variados, e os clientes geralmente elogiam sua leveza e conforto.",
    ]
  },
];

export function ApplicationsSection() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-4 font-sora"
        >
          Aplicações
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-center mb-12 text-lg max-w-4xl mx-auto"
        >
          Veja exemplos práticos e reais de como utilizar as soluções de IA para transformar o seu negócio, independentemente do seu ramo:
        </motion.p>

        <div className="flex justify-end mb-8">
          <Button
            asChild
            className="bg-primary hover:bg-primary/90 gap-2 rounded-lg"
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
              Agendar
            </a>
          </Button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <Tabs defaultValue="training" className="w-full">
            <TabsList className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-transparent w-full mb-8">
              {applications.map((app) => (
                <TabsTrigger
                  key={app.id}
                  value={app.id}
                  className="bg-white data-[state=active]:bg-primary data-[state=active]:text-white"
                >
                  {app.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {applications.map((app) => (
              <TabsContent key={app.id} value={app.id}>
                <Card className="border-gray-200">
                  <CardHeader>
                    <CardTitle className="text-xl font-sora">{app.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {app.description.map((paragraph, idx) => (
                      <p key={idx} className="text-gray-700 mb-4">
                        {paragraph}
                      </p>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>

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
