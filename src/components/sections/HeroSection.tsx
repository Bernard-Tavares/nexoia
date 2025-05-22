"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/bg-01.webp"
          alt="Background"
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold text-white font-sora leading-tight max-w-4xl mx-auto"
        >
          Descubra nossas soluções de inteligência artificial e consultoria personalizada, criadas para transformar sua empresa.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 text-lg md:text-xl text-white max-w-3xl mx-auto"
        >
          Otimize processos, reduza custos e aumente a produtividade da sua equipe, fazendo muito mais em menos tempo
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-8 text-base md:text-lg text-white max-w-2xl mx-auto"
        >
          Descubra as nossas soluções de inteligência artificial e o ciclo de consultoria clicando no botão abaixo:
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-8"
        >
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white px-8 py-6 rounded-lg text-lg"
          >
            <ScrollLink
              to="conhecer"
              smooth={true}
              duration={800}
              offset={-70}
              className="cursor-pointer"
            >
              Quero transformar a minha empresa
            </ScrollLink>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
