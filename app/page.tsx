import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import PortfolioSection from "@/components/portfolio-section"
import TestimonialsSection from "@/components/testimonials-section"
import CoursesSection from "@/components/courses-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <TestimonialsSection />
      <CoursesSection />
      <ContactSection />
      <Footer />
    </main>
  )
}

