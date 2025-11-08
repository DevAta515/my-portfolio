'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your message! I will get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="w-full py-20 md:py-28 lg:py-32 relative overflow-hidden">
      {/* Subtle Background matching other sections */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-purple-900/10 to-blue-900/10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container relative px-4 mx-auto md:px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span className="text-sm text-muted-foreground">Get In Touch</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            Let's Build Together
          </h2>
          <p className="max-w-[600px] text-muted-foreground text-lg">
            Ready to bring your ideas to life? Let's discuss how we can collaborate to create 
            innovative solutions that drive your business forward.
          </p>
        </div>
        
        <div className="grid gap-8 lg:grid-cols-3 max-w-6xl mx-auto">
          {/* Contact Information */}
          {/* Contact Information */}
<Card className="lg:col-span-1 group relative bg-card/20 backdrop-blur-xl border border-white/10 hover:bg-card/30 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02]">
  <CardHeader>
    <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
      Contact Information
    </CardTitle>
    <CardDescription className="text-foreground/80">
      Let's start a conversation about your next project
    </CardDescription>
  </CardHeader>
  <CardContent className="space-y-4">
    <div className="flex items-center gap-3 group/item">
      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20 group-hover/item:bg-primary/15 group-hover/item:border-primary/30 transition-all duration-300">
        <Mail className="w-5 h-5 text-primary" />
      </div>
      <div>
        <p className="text-sm font-medium">Email</p>
        <p className="text-sm text-muted-foreground group-hover/item:text-gray-300 transition-colors">
          urrehmanata6@gmail.com
        </p>
      </div>
    </div>

    <div className="flex items-center gap-3 group/item">
      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20 group-hover/item:bg-primary/15 group-hover/item:border-primary/30 transition-all duration-300">
        <Phone className="w-5 h-5 text-primary" />
      </div>
      <div>
        <p className="text-sm font-medium">Phone</p>
        <p className="text-sm text-muted-foreground group-hover/item:text-gray-300 transition-colors">
          +91 7078974078
        </p>
      </div>
    </div>

    <div className="flex items-center gap-3 group/item">
      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20 group-hover/item:bg-primary/15 group-hover/item:border-primary/30 transition-all duration-300">
        <MapPin className="w-5 h-5 text-primary" />
      </div>
      <div>
        <p className="text-sm font-medium">Location</p>
        <p className="text-sm text-muted-foreground group-hover/item:text-gray-300 transition-colors">
          India
        </p>
      </div>
    </div>

    {/* Resume Link */}
    <div className="flex items-center gap-3 group/item">
      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20 group-hover/item:bg-primary/15 group-hover/item:border-primary/30 transition-all duration-300">
        📄
      </div>
      <div>
        <p className="text-sm font-medium">Resume</p>
        <a
          href="https://drive.google.com/file/d/1nH7WeHGAv89WKS0Fin0NwNx6z_Y34cWh/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-primary hover:text-purple-400 transition-colors underline"
        >
          View Resume
        </a>
      </div>
    </div>
  </CardContent>
</Card>

          
          {/* Contact Form */}
          <Card className="lg:col-span-2 group relative bg-card/20 backdrop-blur-xl border border-white/10 hover:bg-card/30 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02]">
            <CardHeader>
              <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">Send a Message</CardTitle>
              <CardDescription className="text-foreground/80">
                Fill out the form below and I'll get back to you as soon as possible
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-background/30 backdrop-blur-sm border-white/20 focus:border-primary/50 transition-colors duration-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <Input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-background/30 backdrop-blur-sm border-white/20 focus:border-primary/50 transition-colors duration-300"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="bg-background/30 backdrop-blur-sm border-white/20 focus:border-primary/50 transition-colors duration-300 h-32"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 group/btn"
                >
                  <span className="group-hover/btn:scale-105 transition-transform">Send Message</span>
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}