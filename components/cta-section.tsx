"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CtaSection() {
  return (
    <section className="py-24 px-4 bg-card border-t border-border relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent/5 rounded-full blur-[100px]" />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance mb-6">
          No necesitas más información. Necesitas un{" "}
          <span className="text-accent">sistema que funcione</span>
        </h2>
        
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
          Agenda una llamada de diagnóstico gratuita y descubre cómo podemos ayudarte a escalar tu negocio.
        </p>
        
        <Button 
          size="lg" 
          className="bg-accent text-accent-foreground hover:bg-accent/90 px-10 py-7 text-lg font-medium rounded-full"
        >
          Agendar llamada
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
        
        <p className="text-sm text-muted-foreground mt-6">
          Sin compromiso. 100% confidencial.
        </p>
      </div>
    </section>
  )
}
