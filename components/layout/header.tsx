'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mr-4 flex">
            <Link href="#home" className="mr-6 flex items-center space-x-2">
              <span className="font-bold text-lg sm:text-xl bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Ata Ur Rehman
              </span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <div className="flex gap-6">
                <Link href="#home" className="flex items-center text-sm font-medium transition-all hover:text-primary hover:scale-105">
                  Home
                </Link>
                <Link href="#about" className="flex items-center text-sm font-medium transition-all hover:text-primary hover:scale-105">
                  About
                </Link>
                <Link href="#experience" className="flex items-center text-sm font-medium transition-all hover:text-primary hover:scale-105">
                  Experience
                </Link>
                <Link href="#projects" className="flex items-center text-sm font-medium transition-all hover:text-primary hover:scale-105">
                  Projects
                </Link>
                <Link href="#contact" className="flex items-center text-sm font-medium transition-all hover:text-primary hover:scale-105">
                  Contact
                </Link>
              </div>
            </div>
            <Button asChild variant="outline" className="ml-4">
              <a href="#contact">Let's Connect</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden flex-1 justify-end">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="hover:bg-transparent"
            >
              {isMenuOpen ? (
                <X className="h-10 w-10" />
              ) : (
                <Menu size='30' className="h-10 w-10" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-background/95 backdrop-blur-md">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-4">
              <Link 
                href="#home" 
                className="block text-sm font-medium transition-all hover:text-primary hover:pl-2 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="#about" 
                className="block text-sm font-medium transition-all hover:text-primary hover:pl-2 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="#experience" 
                className="block text-sm font-medium transition-all hover:text-primary hover:pl-2 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Experience
              </Link>
              <Link 
                href="#projects" 
                className="block text-sm font-medium transition-all hover:text-primary hover:pl-2 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
              <Link 
                href="#contact" 
                className="block text-sm font-medium transition-all hover:text-primary hover:pl-2 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-2">
                <Button asChild variant="outline" className="w-full">
                  <a href="#contact" onClick={() => setIsMenuOpen(false)}>
                    Let's Connect
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}