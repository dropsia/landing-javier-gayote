"use client"

import { useEffect, useMemo, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CtaSection() {
  const [selectedService, setSelectedService] = useState("")

  useEffect(() => {
    const updateSelectedService = () => {
      const stored = localStorage.getItem("selectedService") || ""
      setSelectedService(stored)
    }

    updateSelectedService()
    window.addEventListener("serviceSelected", updateSelectedService)

    return () => {
      window.removeEventListener("serviceSelected", updateSelectedService)
    }
  }, [])

  const message = useMemo(() => {
    const serviceText = selectedService || "el servicio que mejor se adapte a mi negocio"
    return encodeURIComponent(`Hola Javier, vi tu página y quiero que me expliques cómo trabajar mi caso con ${serviceText}.`)
  }, [selectedService])

  return (
    <section id="contactar" className="py-24 px-4 bg-card border-t border-border relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent/5 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance mb-6">
          No necesitas más información. Necesitas un{" "}
          <span className="text-accent">sistema que funcione</span>
        </h2>

        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
          Escríbeme por WhatsApp y vemos si tu negocio tiene potencial real de mejora.
        </p>

        {selectedService && (
          <p className="mb-6 text-sm font-medium text-accent">
            Servicio seleccionado: {selectedService}
          </p>
        )}

        <a
          href={`https://wa.me/5493434653628?text=${message}`}
          target="_blank"
          rel="noreferrer"
        >
          <Button
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 px-10 py-7 text-lg font-medium rounded-full"
          >
            Escribime por WhatsApp
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </a>

        <p className="text-sm text-muted-foreground mt-6">
          Respuesta directa. Sin compromiso.
        </p>
      </div>
    </section>
  )
}
