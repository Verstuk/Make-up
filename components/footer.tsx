import Link from "next/link"
import { Instagram, Facebook, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-accent py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-64">
          <div>
            <h3 className="text-xl font-bold mb-4 font-playfair text-primary">Beauty Studio</h3>
            <p className="text-muted-foreground mb-4">
              Профессиональный визажист с многолетним опытом. Создаю образы, которые подчеркивают вашу индивидуальность
              и красоту.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/murmake_up?igsh=MXJhcmhodTJzM2JpcQ==" className="social-icon text-primary">
                <Instagram className="h-5 w-5" />
              </a>
              {/* <a href="#" className="social-icon text-primary">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="social-icon text-primary">
                <Youtube className="h-5 w-5" />
              </a> */}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 font-playfair text-primary">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#about"
                  className="text-muted-foreground hover:text-primary transition-colors font-playfair"
                >
                  О нас
                </Link>
              </li>
              <li>
                <Link
                  href="#portfolio"
                  className="text-muted-foreground hover:text-primary transition-colors font-playfair"
                >
                  Портфолио
                </Link>
              </li>
              <li>
                <Link
                  href="#testimonials"
                  className="text-muted-foreground hover:text-primary transition-colors font-playfair"
                >
                  Отзывы
                </Link>
              </li>
              <li>
                <Link
                  href="#courses"
                  className="text-muted-foreground hover:text-primary transition-colors font-playfair"
                >
                  Курсы
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-muted-foreground hover:text-primary transition-colors font-playfair"
                >
                  Контакты
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary/20 mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p className="font-playfair">&copy; {new Date().getFullYear()} Beauty Studio. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}

