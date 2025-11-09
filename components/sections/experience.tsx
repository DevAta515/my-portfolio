import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github } from 'lucide-react'

const experience = [
  {
    company: "AssureBulk",
    role: "Full Stack Web Developer Intern",
    period: "2024",
    description: "Developed scalable B2B marketplace solutions using Node.js, AWS, and microservices architecture for enterprise clients.",
    responsibilities: [
      "Built scalable backend services with Node.js & Express",
      "Implemented AWS cloud infrastructure (S3, RDS, CloudFront)",
      "Established Git workflows & agile development practices",
      "Optimized performance & security for enterprise applications"
    ],
    technologies: ["Node.js", "AWS", "MySQL", "React", "Git", "REST APIs"],
    icon: "💼"
  }
]

export default function Experience() {
  return (
    <section id="experience" className="w-full py-10 md:py-12 lg:py-20 relative overflow-hidden">
      {/* Subtle Background matching other sections */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-purple-900/10 to-blue-900/10">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container relative px-4 mx-auto md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span className="text-sm text-muted-foreground">Professional Journey</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            Professional Experience
           
          </h2>
          <p className="max-w-[600px] text-muted-foreground text-lg">
            Building scalable software solutions with modern full-stack technologies.
          </p>
        </div>
        
        <div className="flex justify-center">
          <div className="max-w-2xl w-full">
            {experience.map((exp, index) => (
              <Card 
                key={index} 
                className="group relative bg-card/20 backdrop-blur-xl border border-white/10 hover:bg-card/30 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02] cursor-pointer"
              >
                {/* Subtle hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                
                <CardHeader className="relative z-10 pb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {/* Icon hidden on small screens */}
                      <div className="hidden sm:flex w-10 h-10 rounded-lg bg-primary/10 items-center justify-center border border-primary/20 group-hover:bg-primary/15 group-hover:border-primary/30 transition-all duration-300">
                        <span className="text-base">{exp.icon}</span>
                      </div>
                      <div className="text-left">
                        <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                          {exp.company}
                        </CardTitle>
                        <CardDescription className="text-base font-medium text-foreground/80">
                          {exp.role} • {exp.period}
                        </CardDescription>
                      </div>
                    </div>
                    {/* Date hidden on small screens, included in description above */}
                    <Badge variant="secondary" className="hidden sm:flex text-sm px-3 py-1 bg-primary/10 text-primary border-primary/20 group-hover:bg-primary/15 group-hover:border-primary/30 transition-colors">
                      {exp.period}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="relative z-10 space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {exp.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">Key Responsibilities:</h4>
                    <ul className="space-y-1">
                      {exp.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-muted-foreground group-hover:text-gray-300 transition-colors">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0"></span>
                          <span className="flex-1">{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pt-2">
                    <h4 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.technologies.map(tech => (
                        <Badge 
                          key={tech} 
                          variant="outline"
                          className="text-xs bg-background/30 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300 border-border group-hover:border-primary/30"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Centered GitHub Button */}
                  <div className="pt-4 border-t border-white/10 flex justify-center">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="flex items-center gap-2 bg-background/30 backdrop-blur-sm border-border hover:bg-primary hover:text-primary-foreground transition-all duration-300 group/btn"
                      asChild
                    >
                      <a href="https://github.com/assurebulk/web" className="hover:text-purple-600 hover:font-bold" target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                        View on GitHub
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}