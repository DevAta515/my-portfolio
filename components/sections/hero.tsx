import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section id="home" className="w-full py-10 md:py-32 lg:py-20 mx-auto xl:py-28 relative overflow-hidden">
      {/* Background with your OKLCH colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-purple-900/10 to-blue-900/10"></div>
      
      <div className="container relative px-4 mx-auto md:px-6">
        <div className="flex flex-col items-center space-y-8 text-center">
          <div className="space-y-6">
            <div className="inline-block rounded-lg bg-card/50 backdrop-blur-sm px-4 py-2 text-sm border border-border">
              🚀 Full Stack Developer & AI Specialist
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
             Ata Ur Rehman
              <span className="block bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent pb-2">
                Crafting Digital Experiences
              </span>
            </h1>
            <p className="mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl">
              I architect and develop scalable full-stack applications with cutting-edge technologies, 
              specializing in AI integration and modern web development practices.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="rounded-full px-8">
              <a href="#projects">Explore My Work</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8 backdrop-blur-sm border-border">
              <a href="#contact">Start a Project</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}