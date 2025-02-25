"use client"

import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Clock, Users, Calendar } from "lucide-react"

const courses = [
  {
    id: 1,
    title: "Базовый курс макияжа",
    description: "Научитесь основам макияжа и создавайте красивые повседневные образы.",
    image: "/placeholder.svg?height=400&width=600",
    duration: "16 часов",
    students: "10 человек",
    startDate: "15 июня",
    price: "15 000 ₽",
  },
  {
    id: 2,
    title: "Продвинутый курс",
    description: "Освойте сложные техники и научитесь создавать профессиональные образы.",
    image: "/placeholder.svg?height=400&width=600",
    duration: "24 часа",
    students: "8 человек",
    startDate: "1 июля",
    price: "25 000 ₽",
  },
  {
    id: 3,
    title: "Свадебный макияж",
    description: "Специализированный курс по созданию стойких и красивых свадебных образов.",
    image: "/placeholder.svg?height=400&width=600",
    duration: "12 часов",
    students: "6 человек",
    startDate: "10 июля",
    price: "18 000 ₽",
  },
]

export default function CoursesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="courses" className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Курсы макияжа</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Научитесь профессиональным техникам макияжа под руководством опытного визажиста.
          </p>
          <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
        </div>

        <div
          ref={ref}
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 ${inView ? "animate-fade-in" : "opacity-0"}`}
        >
          {courses.map((course) => (
            <div key={course.id} className="course-card bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  src={course.image || "/placeholder.svg"}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                <p className="text-muted-foreground mb-4">{course.description}</p>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" />
                    <span className="text-sm">{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-primary" />
                    <span className="text-sm">{course.students}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span className="text-sm">{course.startDate}</span>
                  </div>
                  <div className="text-sm font-bold text-primary">{course.price}</div>
                </div>

                <Button className="w-full" asChild>
                  <Link href="#contact">Записаться</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

