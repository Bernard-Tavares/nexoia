// app/page.tsx
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { ChatSection } from "@/components/sections/ChatSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ChatSection />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}
