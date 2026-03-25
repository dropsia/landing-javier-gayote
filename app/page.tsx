import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ProblemSection } from "@/components/problem-section"
import { SolutionSection } from "@/components/solution-section"
import { ServicesSection } from "@/components/services-section"
import { ResultsSection } from "@/components/results-section"
import { ProcessSection } from "@/components/process-section"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { DownloadSection } from "@/components/download-section"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <section id="inicio">
        <HeroSection />
      </section>
      <DownloadSection />
      <section id="problema">
        <ProblemSection />
      </section>
      <section id="solucion">
        <SolutionSection />
      </section>
      <section id="servicios">
        <ServicesSection />
      </section>
      <section id="resultados">
        <ResultsSection />
      </section>
      <section id="proceso">
        <ProcessSection />
      </section>
      <section id="contactar">
        <CtaSection />
      </section>
      <Footer />
    </main>
  )
}
