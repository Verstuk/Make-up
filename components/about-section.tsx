"use client"
import { useInView } from "react-intersection-observer"
import { Award, Brush, Users, Clock } from "lucide-react"

export default function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-primary/5 animate-float"
          style={{ animationDelay: "0s" }}
        ></div>
        <div
          className="absolute top-40 -left-20 w-80 h-80 rounded-full bg-primary/5 animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-20 right-40 w-40 h-40 rounded-full bg-primary/5 animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute -bottom-10 left-1/3 w-56 h-56 rounded-full bg-primary/5 animate-float"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="text-primary font-playfair italic">Познакомимся поближе</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair">Обо мне</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div
          ref={ref}
          className={`grid md:grid-cols-2 gap-12 items-center ${inView ? "animate-fade-in" : "opacity-0"}`}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl transform -translate-x-4 translate-y-4"></div>
            <div className="aspect-square rounded-full overflow-hidden border-8 border-accent shadow-xl max-w-md mx-auto relative">
              <img
                src="/iam.jpg?height=600&width=600"
                alt="Профессиональный визажист"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold font-playfair">Меня зовут Софья</h3>
            <p className="text-muted-foreground">
              Профессиональный визажист с более чем 5-летним опытом работы. Живу и работаю в основном в прекрасном городе Санкт-Петербург, но бывают выезды в другие города и страны. Специализируюсь на создании уникальных
              образов для фотосессий, свадеб, особых случаев и повседневной жизни.
            </p>
            <p className="text-muted-foreground">Специализируюсь на создании уникальных
            образов для фотосессий, свадеб, особых случаев и повседневной жизни.</p>
            <p className="text-muted-foreground">
              Моя философия — подчеркнуть естественную красоту каждого клиента, создавая образы, которые отражают их
              индивидуальность. Я постоянно совершенствую свои навыки, изучая новые техники и тренды в мире макияжа.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="flex items-start gap-3">
                <Award className="text-primary h-6 w-6 mt-1" />
                <div>
                  <h4 className="font-bold font-playfair">Сертифицированный специалист</h4>
                  <p className="text-sm text-muted-foreground">Международные сертификаты</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Brush className="text-primary h-6 w-6 mt-1" />
                <div>
                  <h4 className="font-bold font-playfair">Премиальная косметика</h4>
                  <p className="text-sm text-muted-foreground">Использую только лучшие бренды</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Users className="text-primary h-6 w-6 mt-1" />
                <div>
                  <h4 className="font-bold font-playfair">100+ клиентов</h4>
                  <p className="text-sm text-muted-foreground">Довольных результатом</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="text-primary h-6 w-6 mt-1" />
                <div>
                  <h4 className="font-bold font-playfair">5+ лет опыта</h4>
                  <p className="text-sm text-muted-foreground">В индустрии красоты</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

