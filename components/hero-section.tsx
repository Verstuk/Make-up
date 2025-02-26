"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import BackgroundAnimation from "./background-animation"

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-accent overflow-hidden">
      <BackgroundAnimation />
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/back.jpeg?height=1080&width=1920')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.7,
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/60 z-10"></div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className={`space-y-6 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
            <span className="text-primary font-playfair italic text-xl">Профессиональный визажист</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-playfair">
              Искусство макияжа для вашей <span className="cognac-gradient-text font-light">неповторимой красоты</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Профессиональный визажист с многолетним опытом. Создаю образы, которые подчеркивают вашу индивидуальность
              и красоту.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild className="font-playfair cognac-glow">
                <Link href="#contact">Записаться</Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="font-playfair border-primary hover:bg-primary/10">
                <Link href="#portfolio">Портфолио</Link>
              </Button>
            </div>
          </div>

          <div className={`relative ${isVisible ? "animate-slide-in-right" : "opacity-0"}`}>
            <div className="absolute -inset-4 bg-primary/20 rounded-2xl blur-xl transform rotate-6"></div>
            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl relative">
              <img
                src="/hero.jpeg?height=800&width=600"
                alt="Профессиональный визажист за работой"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

