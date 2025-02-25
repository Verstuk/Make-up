"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Instagram, Facebook, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-primary">
          <span className="font-['Playfair_Display'] italic">Beauty Studio</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#about" className="text-sm font-medium font-playfair hover:text-primary transition-colors">
            О нас
          </Link>
          <Link href="#portfolio" className="text-sm font-medium font-playfair hover:text-primary transition-colors">
            Портфолио
          </Link>
          <Link href="#testimonials" className="text-sm font-medium font-playfair hover:text-primary transition-colors">
            Отзывы
          </Link>
          <Link href="#courses" className="text-sm font-medium font-playfair hover:text-primary transition-colors">
            Курсы
          </Link>

          {/* Social Media Icons */}
          <div className="flex items-center space-x-3">
            <a href="#" className="social-icon hover:text-primary transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="social-icon hover:text-primary transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="social-icon hover:text-primary transition-colors">
              <Youtube className="h-5 w-5" />
            </a>
          </div>

          <Link href="#contact">
            <Button variant="default" size="sm" className="font-playfair">
              Связаться
            </Button>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-foreground" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link
              href="#about"
              className="text-sm font-medium font-playfair hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              О нас
            </Link>
            <Link
              href="#portfolio"
              className="text-sm font-medium font-playfair hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Портфолио
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium font-playfair hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Отзывы
            </Link>
            <Link
              href="#courses"
              className="text-sm font-medium font-playfair hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Курсы
            </Link>

            {/* Social Media Icons for Mobile */}
            <div className="flex items-center space-x-4 py-2">
              <a href="#" className="social-icon hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="social-icon hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="social-icon hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>

            <Link href="#contact" onClick={() => setIsMenuOpen(false)}>
              <Button variant="default" size="sm" className="w-full font-playfair">
                Связаться
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

