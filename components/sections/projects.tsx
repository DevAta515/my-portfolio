import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, Github } from 'lucide-react'

const projects = [
  {
    name: "ThinkInk AI Platform",
    description: "Intelligent Content Generation System",
    details: "Developed an advanced agentic AI platform that autonomously creates high-quality, multilingual blog content through sophisticated natural language processing and machine learning workflows.",
    technologies: ["Python", "LangChain", "LangGraph", "Groq", "FastAPI", "OpenAI"],
    features: ["Multi-agent Architecture", "Multilingual Support", "Contextual Understanding", "Scalable API Design"],
    github: "https://github.com/DevAta515/ThinkInk-AI"
  },
  {
    name: "Waste Wise Ecosystem",
    description: "Sustainable Waste Management Platform",
    details: "Engineered a comprehensive web application that leverages computer vision and geolocation services to categorize waste materials through advanced image analysis.",
    technologies: ["NextJS", "Drizzle ORM", "PostgreSQL", "Google Generative AI", "Computer Vision"],
    features: ["AI-Powered Classification", "Gamification System", "Geolocation Services", "Community Platform"],
    github: "https://github.com/DevAta515/waste-wise"
  },
  {
    name: "Invocity Pro Suite",
    description: "Enterprise Invoice Management System",
    details: "Architected a full-stack invoice management solution featuring customizable templates, automated payment reminders, and secure OAuth2.0 authentication.",
    technologies: ["MERN Stack", "Google OAuth2.0", "Tailwind CSS", "RESTful APIs"],
    features: ["Custom Templates", "Automated Reminders", "Secure Authentication", "Financial Analytics"],
    github: "https://github.com/DevAta515/invoice-generator"
  }
]

export default function Projects() {
  return (
    <section id="projects" className="w-full py-20 md:py-28 lg:py-32 relative px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-purple-900/10 to-blue-900/10"></div>
      
      <div className="container relative mx-auto md:px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            Featured Projects
          </h2>
          <p className="max-w-[800px] text-muted-foreground text-lg">
            A curated selection of innovative solutions showcasing expertise in full-stack development 
            and AI integration.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group relative bg-card/20 backdrop-blur-xl border border-white/10 hover:bg-card/30 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02] cursor-pointer flex flex-col h-full"
            >
              {/* Subtle hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
              
              <CardHeader className="relative z-10 pb-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors border border-primary/20">
                    <ArrowUpRight className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                  {project.name}
                </CardTitle>
                <CardDescription className="text-base font-medium mt-2 text-foreground/80 group-hover:text-foreground/90 transition-colors">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="relative z-10 flex flex-col flex-grow">
                <div className="space-y-4 flex-grow">
                  <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {project.details}
                  </p>
                  
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors duration-300">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-muted-foreground group-hover:text-gray-300 transition-colors duration-300">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full group-hover:scale-110 transition-transform"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="space-y-3 pt-2">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map(tech => (
                        <Badge 
                          key={tech} 
                          variant="outline"
                          className="text-xs bg-background/30 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300 border-white/20 group-hover:border-primary/30"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* GitHub Button - Always at the bottom */}
                <div className="pt-4 mt-6 border-t border-white/10">
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="w-full flex items-center gap-2 bg-background/30 backdrop-blur-sm border-white/20 hover:bg-primary hover:text-primary-foreground transition-all duration-300 group/btn"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="hover:text-purple-800 hover:font-bold hover:text-lg">
                      <Github className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                      View Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}