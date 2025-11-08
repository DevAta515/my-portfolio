import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const achievements = [
  {
    title: "AI/ML Advanced Training Program",
    institution: "Jamia Millia Islamia, Delhi",
    description: "Intensive 3-week specialized program focusing on advanced machine learning model development, data preprocessing pipelines, and algorithm optimization techniques for real-world applications. Gained hands-on experience with cutting-edge AI frameworks and deployment strategies.",
    shortDescription: "Advanced ML training with hands-on experience in AI frameworks and deployment strategies.",
    period: "2024",
    icon: "🧠"
  },
  {
    title: "National Hackathon Finalist",
    institution: "Smart India Hackathon 2024",
    description: "Selected as finalist among top engineering teams nationwide, demonstrating exceptional problem-solving skills and innovative thinking in software development challenges. Contributed to developing innovative solutions for complex technical problems.",
    shortDescription: "National-level finalist demonstrating exceptional problem-solving and innovation in software development.",
    period: "2024",
    icon: "🏆"
  },
  {
    title: "Technical Leadership & Innovation",
    institution: "AutoRob Club - Design Head",
    description: "Led design initiatives and technical workshops, mentoring peers in autonomous systems development while fostering innovation in robotics and embedded systems. Organized multiple technical events and guided teams in prototype development.",
    shortDescription: "Led technical initiatives and mentored peers in robotics and autonomous systems development.",
    period: "2023-2024",
    icon: "🚀"
  },
  {
    title: "Bachelor of Engineering in CSE",
    institution: "Harcourt Butler Technical University",
    description: "Comprehensive education in computer science fundamentals, software engineering principles, and advanced computing concepts with a focus on practical application and research-driven learning.",
    shortDescription: "Comprehensive computer science education with focus on practical application and research.",
    period: "CGPA: 8.72/10",
    icon: "🎓"
  }
]

export default function About() {
  return (
    <section id="about" className="w-full py-20 md:py-28 lg:py-32 relative overflow-hidden">
      {/* Subtle Background matching other sections */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-purple-900/10 to-blue-900/10">
        {/* Very subtle background elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container relative px-4 mx-auto md:px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span className="text-sm text-muted-foreground">Academic Journey</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            Academic
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>
          <p className="max-w-[800px] text-muted-foreground text-lg">
            A foundation built on academic excellence, continuous learning, and practical application 
            of cutting-edge technologies in software development and artificial intelligence.
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {achievements.map((achievement, index) => (
            <Card 
              key={index} 
              className="group relative bg-card/20 backdrop-blur-xl border border-white/10 hover:bg-card/30 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02] cursor-pointer"
            >
              {/* Subtle hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
              
              <CardHeader className="relative z-10 pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    {/* Icon hidden on small screens */}
                    <div className="hidden sm:flex w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:bg-primary/15 group-hover:border-primary/30 transition-all duration-300">
                      <span className="text-base">{achievement.icon}</span>
                    </div>
                    <div className="text-left">
                      <CardTitle className="text-lg sm:text-xl group-hover:text-primary transition-colors duration-300">
                        {achievement.title}
                      </CardTitle>
                      <CardDescription className="text-sm sm:text-base font-medium text-foreground/80">
                        {achievement.institution}
                      </CardDescription>
                    </div>
                  </div>
                  {/* Date hidden on small screens */}
                  <span className="hidden sm:flex text-xs font-medium bg-primary/10 text-primary px-3 py-1 rounded-full border border-primary/20 group-hover:bg-primary/15 group-hover:border-primary/30 transition-colors">
                    {achievement.period}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                {/* Long description for large screens, short for small screens */}
                <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  <span className="hidden sm:inline">{achievement.description}</span>
                  <span className="sm:hidden">{achievement.shortDescription}</span>
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}