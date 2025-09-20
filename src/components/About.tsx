import { Card, CardContent } from "@/components/ui/card";

const techStack = [
  { name: "Java", logo: "☕" },
  { name: "Spring Boot", logo: "🍃" },
  { name: "React", logo: "⚛️" },
  { name: "Node.js", logo: "🟢" },
  { name: "Android", logo: "🤖" },
  { name: "Python", logo: "🐍" },
  { name: "TypeScript", logo: "📘" },
  { name: "AI/ML", logo: "🧠" }
];

export const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About Me
            </h2>
            <p className="text-xl text-muted-foreground">
              Passionate developer creating innovative solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="slide-up">
              <Card className="glass-card">
                <CardContent className="p-8">
                  <p className="text-lg leading-relaxed mb-6">
                    I'm a full-stack developer with over 5 years of experience building 
                    web applications, mobile apps, and AI-powered solutions. I specialize 
                    in creating user-centric products that solve real-world problems.
                  </p>
                  <p className="text-lg leading-relaxed mb-6">
                    My journey started with Java and Android development, and has evolved 
                    to include modern web technologies and artificial intelligence. I'm 
                    passionate about clean code, innovative design, and continuous learning.
                  </p>
                  <p className="text-lg leading-relaxed">
                    When I'm not coding, you'll find me exploring new technologies, 
                    contributing to open-source projects, or sharing knowledge with the 
                    developer community.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="slide-up" style={{ animationDelay: "0.2s" }}>
              <h3 className="text-2xl font-bold mb-8 text-center">
                Tech Stack
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {techStack.map((tech, index) => (
                  <Card 
                    key={tech.name} 
                    className="glass-card hover:shadow-glow transition-all duration-300 cursor-pointer group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-6 text-center">
                      <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                        {tech.logo}
                      </div>
                      <p className="text-sm font-medium">{tech.name}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};