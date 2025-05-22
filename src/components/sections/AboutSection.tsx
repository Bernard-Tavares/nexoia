"use client";

import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 font-sora"
        >
          Sobre nós
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="text-gray-700 mb-6">
            A consultoria da NexoIa e seus Projetos foram criados com foco em consultoria e treinamento em Inteligência Artificial (IA).
            Especializamo-nos em oferecer soluções completas que abrangem desde treinamentos formativos até a implementação
            e suporte técnico de microsserviços baseados em IA.
          </p>
          <p className="text-gray-700">
            Nosso objetivo é transformar a produtividade das equipes internas dos nossos parceiros por meio de três frentes principais:
            treinamento e formação em IA, imersão e planejamento, e construção e mentoria.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
