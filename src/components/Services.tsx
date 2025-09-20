import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Monitor, Smartphone, Bot } from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Website Development",
    description: "Modern, responsive websites built with cutting-edge technologies",
    features: [
      "Real Estate Websites",
      "Photography Portfolios", 
      "Hotel Booking Systems",
      "E-commerce Platforms"
    ]
  },
  {
    icon: Smartphone,
    title: "Android App Development",
    description: "Native Android applications with smooth user experiences",
    features: [
      "Food Delivery Apps",
      "Business Applications",
      "Social Media Apps",
      "Utility Applications"
    ]
  },
  {
    icon: Bot,
    title: "AI Agent Development",
    description: "Intelligent automation solutions powered by cutting-edge AI",
    features: [
      "Customer Support Bots",
      "Process Automation",
      "Data Analysis Agents",
      "Custom AI Solutions"
    ]
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive development solutions to bring your ideas to life
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="glass-card hover:shadow-glow transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                <p className="text-muted-foreground">{service.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};