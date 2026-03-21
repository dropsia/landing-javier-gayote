"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle } from "lucide-react"

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center px-4 pt-24 pb-20 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm mb-8">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-sm text-muted-foreground">Consultoría Ecommerce & IA</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1] text-balance mb-6">
          Escala tu negocio en <span className="text-accent">Amazon FBA</span> o{" "}
          <span className="text-accent">eBay Dropshipping</span> con estrategia, datos e IA aplicada
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-6 leading-relaxed text-pretty">
          Te ayudo a lanzar, optimizar o escalar tu ecommerce con un enfoque práctico: más ventas,
          mejor rentabilidad y una operación estructurada.
        </p>

        <p className="text-base font-medium text-foreground mb-10">
          Javier Gayote | Amazon FBA, eBay Dropshipping & IA Aplicada
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base font-medium rounded-full shadow-lg shadow-primary/25"
            onClick={() => {
              document.getElementById("contactar")?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            Agenda un diagnóstico estratégico
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>

          <a
            href="https://wa.me/5493434653628?text=Hola%20Javier,%20quiero%20informaci%C3%B3n%20sobre%20tus%20servicios"
            target="_blank"
            rel="noreferrer"
          >
            <Button
              variant="outline"
              size="lg"
              className="border-border text-foreground hover:bg-secondary px-8 py-6 text-base font-medium rounded-full"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Hablar por WhatsApp
            </Button>
          </a>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { value: "+150", label: "Clientes" },
            { value: "+$2M", label: "Ventas generadas" },
            { value: "+10", label: "Años de experiencia en ecommerce" },
            { value: "98%", label: "Satisfacción" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-foreground">{stat.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
