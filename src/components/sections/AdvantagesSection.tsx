"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

const advantages = [
  {
    title: "Aumento de Produtividade e Melhoria de Resultados",
    description:
      "Nossas soluções e treinamentos em IA permitem que sua equipe produza mais e com menos erros, aumentando a eficiência e a precisão das tarefas.",
  },
  {
    title: "Redução de Tempo de Execução",
    description:
      "A utilização de IA transforma tarefas manuais, demoradas e complexas em soluções quase instantâneas, utilizando o processamento de dados eficiente das IAs.",
  },
  {
    title: "Redução de Custos",
    description:
      "A tecnologia de IA ajuda a reduzir significativamente os custos, evitando gastos desnecessários e otimizando os recursos disponíveis para solucionar problemas específicos.",
  },
  {
    title: "Capacitação de Time",
    description:
      "Tenha uma equipe preparada, moderna e capacitada para estar à frente dos seus concorrentes.",
  },
  {
    title: "Mais Assertividade",
    description:
      "Além de aumentar a produtividade, as IAs oferecem precisão e objetividade na execução das tarefas e na análise de dados, proporcionando informações essenciais com exatidão e destreza.",
  },
];

export function AdvantagesSection() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-16 font-sora"
        >
          Vantagens
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <Card className="bg-white border-gray-200 h-full">
                <CardHeader>
                  <CardTitle className="text-xl font-sora text-gray-800">
                    {advantage.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {advantage.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
