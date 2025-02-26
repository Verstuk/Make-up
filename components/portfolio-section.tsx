"use client"

import { useState } from "react"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"

const categories = ["Все", "Свадебный", "Вечерний", "Дневной", "Фэшн", "Брови"]

const portfolioItems = [
  {
    id: 1,
    title: "Свадебный макияж",
    category: "Свадебный",
    description: "Нежный и элегантный образ для особого дня",
    image: "/placeholder.svg?height=600&width=400",
  },
  {
    id: 2,
    title: "Вечерний макияж",
    category: "Вечерний",
    description: "Яркий и выразительный образ для особого случая",
    image: "/placeholder.svg?height=600&width=400",
  },
  {
    id: 3,
    title: "Дневной макияж",
    category: "Дневной",
    description: "Естественный и свежий образ на каждый день",
    image: "/placeholder.svg?height=600&width=400",
  },
  {
    id: 4,
    title: "Макияж для фотосессии",
    category: "Фешн",
    description: "Стойкий макияж, который отлично смотрится на фотографиях",
    image: "/placeholder.svg?height=600&width=400",
  },
  {
    id: 5,
    title: "Свадебный образ",
    category: "Свадебный",
    description: "Романтичный образ для невесты",
    image: "/placeholder.svg?height=600&width=400",
  },
  {
    id: 6,
    title: "Вечерний выход",
    category: "Вечерний",
    description: "Гламурный образ для вечеринки",
    image: "/placeholder.svg?height=600&width=400",
  },
]

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("Все")
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const filteredItems =
    activeCategory === "Все" ? portfolioItems : portfolioItems.filter((item) => item.category === activeCategory)

  return (
    <section id="portfolio" className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary font-playfair italic">Мои работы</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair">Портфолио</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Взгляните на мои работы и убедитесь в профессионализме. Каждый образ создан с учетом индивидуальных
            особенностей и пожеланий клиента.
          </p>
          <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className={`mb-2 font-playfair ${activeCategory !== category ? "border-primary hover:bg-primary/10" : ""}`}
            >
              {category}
            </Button>
          ))}
        </div>

        <div
          ref={ref}
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ${inView ? "animate-fade-in" : "opacity-0"}`}
        >
          {filteredItems.map((item) => (
            <div key={item.id} className="portfolio-item group relative rounded-xl overflow-hidden shadow-lg">
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                className="w-full aspect-[3/4] object-cover"
              />
              <div className="portfolio-overlay absolute inset-0 bg-primary/80 flex flex-col justify-end p-6 text-white">
                <h3 className="text-xl font-bold font-playfair">{item.title}</h3>
                <p className="text-sm italic font-playfair">{item.category}</p>
                <p className="mt-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

