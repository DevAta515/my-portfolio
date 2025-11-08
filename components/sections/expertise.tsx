import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const expertiseAreas = [
  {
    category: "Full Stack Development",
    description: "End-to-end web application development with modern frameworks and architectures, creating scalable and maintainable solutions that deliver exceptional user experiences across all platforms.",
    technologies: ["React", "Next.js", "Node.js", "TypeScript", "Express", "REST APIs", "Microservices"],
    icon: "💻"
  },
  {
    category: "Artificial Intelligence",
    description: "Building intelligent systems with advanced machine learning and natural language processing capabilities, integrating AI solutions that enhance user interactions and automate complex processes.",
    technologies: ["LangChain", "OpenAI", "Generative AI", "Machine Learning", "NLP", "Computer Vision"],
    icon: "🤖"
  },
  {
    category: "Cloud & DevOps",
    description: "Deploying and managing scalable applications in cloud environments with robust CI/CD pipelines, ensuring high availability, security, and optimal performance across distributed systems.",
    technologies: ["AWS", "Docker", "Git", "CI/CD", "Cloud Architecture", "Infrastructure as Code"],
    icon: "☁️"
  },
  {
    category: "Database Systems",
    description: "Designing efficient data storage and retrieval solutions with optimized query performance, data integrity, and scalable architectures for both relational and NoSQL databases.",
    technologies: ["PostgreSQL", "MySQL", "MongoDB", "Database Design", "ORM", "Data Modeling"],
    icon: "🗄️"
  }
]

export default function Expertise() {
  return (
    <section className="w-full py-20 md:py-28 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background"></div>
      
      <div className="container relative px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            Technical
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          <p className="max-w-[800px] text-muted-foreground text-lg">
            Comprehensive skills in modern software development, AI integration, and cloud technologies 
            to deliver robust and scalable digital solutions that drive business innovation and growth.
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {expertiseAreas.map((area, index) => (
            <Card key={index} className="group bg-background/40 backdrop-blur-md border-border/40 hover:bg-background/60 transition-all duration-500 hover:shadow-2xl">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors text-lg">
                  {area.icon}
                </div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                  {area.category}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {area.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {area.technologies.map(tech => (
                    <Badge 
                      key={tech} 
                      variant="outline"
                      className="text-xs bg-background/30 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground transition-all border-border/50"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}