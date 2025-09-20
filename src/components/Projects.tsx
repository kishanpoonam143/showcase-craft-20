import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

// Import generated project images
import portfolioImage from "@/assets/portfolio-project.jpg";
import foodDeliveryImage from "@/assets/food-delivery-app.jpg";
import aiChatImage from "@/assets/ai-chat-agent.jpg";
import realEstateImage from "@/assets/real-estate-platform.jpg";
import hotelBookingImage from "@/assets/hotel-booking-system.jpg";
import photographyImage from "@/assets/photography-showcase.jpg";

const projects = [
  {
    title: "Portfolio Website",
    description: "Modern responsive portfolio built with React and Tailwind CSS",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    image: portfolioImage,
    liveUrl: "https://example.com",
    githubUrl: "https://github.com"
  },
  {
    title: "Food Delivery App",
    description: "Android app for food ordering with real-time tracking",
    tech: ["Java", "Android", "Firebase"],
    image: foodDeliveryImage,
    liveUrl: "https://play.google.com",
    githubUrl: "https://github.com"
  },
  {
    title: "AI Chat Agent",
    description: "Customer support chatbot using Python and LangChain",
    tech: ["Python", "LangChain", "OpenAI"],
    image: aiChatImage,
    liveUrl: "https://example.com",
    githubUrl: "https://github.com"
  },
  {
    title: "Real Estate Platform",
    description: "Property listing website with advanced search features",
    tech: ["Next.js", "Tailwind", "Supabase"],
    image: realEstateImage,
    liveUrl: "https://example.com",
    githubUrl: "https://github.com"
  },
  {
    title: "Hotel Booking System",
    description: "Full-stack booking platform with payment integration",
    tech: ["React", "Node.js", "MongoDB"],
    image: hotelBookingImage,
    liveUrl: "https://example.com",
    githubUrl: "https://github.com"
  },
  {
    title: "Photography Showcase",
    description: "Stunning portfolio site with GSAP animations",
    tech: ["HTML5", "CSS3", "GSAP"],
    image: photographyImage,
    liveUrl: "https://example.com",
    githubUrl: "https://github.com"
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work across web, mobile, and AI development
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className="project-card overflow-hidden slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <Button 
                    size="sm" 
                    variant="secondary"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <p className="text-muted-foreground text-sm">{project.description}</p>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};