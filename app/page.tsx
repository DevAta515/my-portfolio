import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import Hero from '@/components/sections/hero'
import About from '@/components/sections/about'
import Experience from '@/components/sections/experience'
import Projects from '@/components/sections/projects'
import Expertise from '@/components/sections/expertise' // Replaces Stats
import Contact from '@/components/sections/contact'
import { Metadata } from 'next'

// export const metadata: Metadata = {
//   title: 'Home - Full Stack Developer & AI Specialist',
//   description: 'Portfolio of Ata Ur Rehman - Expert in React, Next.js, Node.js, AI/ML, and full-stack web development. View projects and experience.',
// }

export default function Home() {
  return (
    <>
      <Header />
      
      <main className="flex-1">
        <Hero />
        <About />
        <Experience />
        <Projects />
        {/* <Expertise />  */}
        <Contact />
      </main>

      <Footer />
    </>
  )
}