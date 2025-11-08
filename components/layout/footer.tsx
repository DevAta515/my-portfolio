export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-background/20 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between py-6 gap-4">
          {/* Copyright - Centered on mobile, left on desktop */}
          <p className="text-xs text-muted-foreground text-center sm:text-left order-2 sm:order-1">
            © 2024 Ata Ur Rehman. All rights reserved.
          </p>
          
          {/* Social Links - Centered on mobile, right on desktop */}
          <nav className="flex gap-6 sm:gap-8 order-1 sm:order-2">
            <a 
              className="text-xs text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 hover:underline underline-offset-4" 
              href="https://www.linkedin.com/in/ata-ur-rehman-652229253/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a 
              className="text-xs text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 hover:underline underline-offset-4" 
              href="https://github.com/DevAta515" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a 
              className="text-xs text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 hover:underline underline-offset-4" 
              href="mailto:urrehmanata6@gmail.com"
            >
              Email
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}