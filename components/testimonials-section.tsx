"use client"

import { useState, useEffect, useCallback } from "react"
import { useInView } from "react-intersection-observer"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    name: "Елена Смирнова",
    role: "Невеста",
    content:
      "Анна создала для меня идеальный свадебный образ! Макияж держался весь день и отлично выглядел на фотографиях. Очень рекомендую!",
    rating: 5,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    name: "Мария Петрова",
    role: "Модель",
    content:
      "Работаю с Анной уже несколько лет на различных фотосессиях. Она настоящий профессионал, который всегда знает, какой макияж подойдет для конкретной концепции съемки.",
    rating: 5,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    name: "Ольга Иванова",
    role: "Клиент",
    content:
      "Обратилась к Анне для создания вечернего образа на корпоратив. Результат превзошел все ожидания! Буду обращаться снова и рекомендовать друзьям.",
    rating: 5,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 4,
    name: "Наталья Козлова",
    role: "Выпускница курса",
    content:
      "Прошла базовый курс макияжа у Анны. Очень доступно объясняет, делится профессиональными секретами. Теперь я могу делать себе макияж сама!",
    rating: 5,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 5,
    name: "Екатерина Соколова",
    role: "Клиент",
    content:
      "Анна создала для меня потрясающий образ на день рождения. Все гости делали комплименты. Спасибо за профессионализм!",
    rating: 4,
    image: "/placeholder.svg?height=100&width=100",
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }, [])

  const prevTestimonial = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }, [])

  // Auto-scroll testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial()
    }, 5000)
    return () => clearInterval(interval)
  }, [nextTestimonial])

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Отзывы клиентов</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Что говорят мои клиенты о моей работе и подходе к созданию образов.
          </p>
          <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
        </div>

        <div ref={ref} className={`max-w-4xl mx-auto ${inView ? "animate-fade-in" : "opacity-0"}`}>
          {/* Desktop View - Carousel */}
          <div className="hidden md:block relative">
            <div className="flex gap-6 items-stretch">
              {[
                testimonials[(currentIndex - 1 + testimonials.length) % testimonials.length],
                testimonials[currentIndex],
                testimonials[(currentIndex + 1) % testimonials.length],
              ].map((testimonial, idx) => (
                <div
                  key={testimonial.id}
                  className={`testimonial-card flex-1 bg-white rounded-xl shadow-lg p-6 ${
                    idx === 1 ? "scale-105 z-10" : "opacity-70 scale-95"
                  }`}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">{testimonial.content}</p>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 rounded-full bg-white shadow-md"
              onClick={prevTestimonial}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 rounded-full bg-white shadow-md"
              onClick={nextTestimonial}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          {/* Mobile View - Single Testimonial */}
          <div className="md:hidden">
            <div className="testimonial-card bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img
                    src={testimonials[currentIndex].image || "/placeholder.svg"}
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold">{testimonials[currentIndex].name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonials[currentIndex].role}</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">{testimonials[currentIndex].content}</p>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${i < testimonials[currentIndex].rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                  />
                ))}
              </div>

              <div className="flex justify-center gap-2 mt-4">
                <Button variant="outline" size="icon" className="rounded-full" onClick={prevTestimonial}>
                  <ChevronLeft className="h-5 w-5" />
                </Button>

                <Button variant="outline" size="icon" className="rounded-full" onClick={nextTestimonial}>
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

