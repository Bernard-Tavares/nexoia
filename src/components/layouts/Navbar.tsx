"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";

const navLinks = [
  { name: "Início", href: "inicio" },
  { name: "Mandar mensagem", href: "conhecer" },
  { name: "Serviços", href: "servicos" },
  { name: "Sobre nós", href: "sobre" },
  
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <ScrollLink
          to="inicio"
          smooth={true}
          duration={500}
          className="flex items-center cursor-pointer"
        >
          <span className="text-2xl font-bold text-primary font-sora">Nexo</span>
        </ScrollLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <ScrollLink
              key={link.name}
              to={link.href}
              smooth={true}
              duration={500}
              offset={-70}
              className="text-sm font-medium hover:text-primary transition-colors cursor-pointer"
            >
              {link.name}
            </ScrollLink>
          ))}
          
        </nav>

        {/* WhatsApp Button */}
        <Button asChild className="hidden md:flex bg-primary hover:bg-primary/90 gap-2 rounded-lg">
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
            Quero conhecer
          </a>
        </Button>

        {/* Mobile Menu */}
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[300px]">
            <nav className="flex flex-col gap-4 mt-8">
              {navLinks.map((link) => (
                <ScrollLink
                  key={link.name}
                  to={link.href}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="text-base font-medium hover:text-primary transition-colors cursor-pointer"
                  onClick={() => setIsSheetOpen(false)}
                >
                  {link.name}
                </ScrollLink>
              ))}
              <Button asChild className="mt-4 bg-primary hover:bg-primary/90 gap-2 rounded-lg">
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
                  Quero conhecer
                </a>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
