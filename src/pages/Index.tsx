import { useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Projects } from "@/components/Projects";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Index = () => {
  useScrollAnimation();

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <Projects />
      <About />
      <Contact />
      
      <footer className="py-8 bg-muted/30 text-center">
        <p className="text-muted-foreground">
          © 2024 John Doe. Built with React and Tailwind CSS.
        </p>
      </footer>
    </div>
  );
};

export default Index;
