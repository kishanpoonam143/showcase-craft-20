import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin } from "lucide-react";

export const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Modern gradient background */}
      <div className="absolute inset-0 hero-gradient"></div>
      
      {/* Animated geometric shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-accent/20 rounded-full blur-lg animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-20 h-20 bg-primary-variant/15 rounded-full blur-lg animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-white/5 rounded-full blur-md animate-float" style={{ animationDelay: '0.5s' }}></div>
      </div>
      
      {/* Subtle overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/10"></div>
      
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