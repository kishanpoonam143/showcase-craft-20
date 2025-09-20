import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin } from "lucide-react";

export const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 hero-gradient opacity-90"></div>
      <div className="absolute inset-0 bg-background/20"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Developer Portfolio
          </h1>
          <div className="text-xl md:text-2xl text-white/90 mb-8 animate-slide-up">
            <span className="block mb-2">Showcase of Professional Development Work</span>
            <span className="text-lg opacity-75">Explore Projects • View Services • Get Inspired</span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              onClick={scrollToProjects}
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 animate-glow"
            >
              Explore Work
            </Button>
            
            <div className="flex gap-4">
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-white hover:bg-white/20 h-12 w-12"
                asChild
              >
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="h-6 w-6" />
                </a>
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-white hover:bg-white/20 h-12 w-12"
                asChild
              >
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-6 w-6" />
                </a>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
          <ArrowDown className="h-6 w-6 text-white/70" />
        </div>
      </div>
    </section>
  );
};