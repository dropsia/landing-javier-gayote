"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GraduationCap, Store, Rocket, Check, ArrowRight, Wrench } from "lucide-react"

const services = [
  {
    id: "mentoria",
    icon: GraduationCap,
    title: "Mentoría Ecommerce Pro",
    price: "USD 500 / USD 1000",
    description: "Formación personalizada para Amazon FBA o eBay Dropshipping, según la plataforma que elijas.",
    subtitle: "La mayoría comienza aquí",
    features: [
      "Amazon FBA o eBay Dropshipping",
      "IA aplicada al ecommerce",
      "Plantillas Excel profesionales",
      "Calculadora personalizada",
    ],
    popular: true,
    bonuses: [
      { plan: "Plan Base (USD 500)", content: "Curso completo de la plataforma elegida" },
      { plan: "Plan Intensivo (USD 1000)", content: "Más acompañamiento + curso completo de la plataforma elegida" },
    ],
  },
  {
    id: "ebay",
    icon: Store,
    title: "Gestión eBay Dropshipping",
    price: "USD 2500",
    description: "Delegación completa de la operación con foco en métricas, estabilidad y crecimiento sano de la cuenta.",
    subtitle: null,
    features: [
      "Listings optimizados",
      "Automatización completa",
      "Control de métricas",
      "Crecimiento sostenible",
      "Incluye acceso al curso completo de eBay Dropshipping (30+ módulos)",
    ],
    popular: false,
    bonuses: null,
  },
  {
    id: "amazon",
    icon: Rocket,
    title: "Amazon FBA Llave en Mano",
    price: "USD 5000",
    description: "Desarrollo completo del producto desde cero, con estructura real para vender y escalar.",
    subtitle: null,
    features: [
      "Producto rentable validado",
      "Proveedor confiable",
      "Envío y logística",
      "Listing + A+ Content",
      "PPC + Optimización",
      "Incluye acceso al curso completo de Amazon FBA (60+ módulos)",
    ],
    popular: false,
    bonuses: null,
  },
]

export function ServicesSection() {
  const [selectedService, setSelectedService] = useState("mentoria")

  const handleSelect = (serviceId: string, serviceTitle: string) => {
    setSelectedService(serviceId)
    localStorage.setItem("selectedService", serviceTitle)
    window.dispatchEvent(new Event("serviceSelected"))
  }

  return (
    <section id="servicios" className="py-24 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-accent uppercase tracking-wider">Servicios</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-4 text-balance">
            Elegí el servicio que mejor se adapte a tu momento
          </h2>
          <p className="mt-4 text-muted-foreground">
            Seleccioná una opción para avanzar por WhatsApp con el servicio correcto.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service) => {
            const isSelected = selectedService === service.id

            return (
              <Card
                key={service.id}
                className={`relative bg-card transition-all duration-300 ${
                  isSelected
                    ? "border-accent ring-2 ring-accent/30 shadow-lg shadow-accent/10"
                    : "border-border hover:border-accent/30"
                }`}
              >
                {service.popular && !isSelected && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-3 py-1 text-xs font-medium bg-accent text-accent-foreground rounded-full">
                      Más popular
                    </span>
                  </div>
                )}

                {isSelected && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-3 py-1 text-xs font-medium bg-blue-600 text-white rounded-full">
                      Seleccionado
                    </span>
                  </div>
                )}

                <CardHeader className="pb-4">
                  <div className="p-3 rounded-xl bg-secondary w-fit mb-4">
                    <service.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
                  {service.subtitle && !isSelected && (
                    <p className="text-xs font-medium text-accent mt-1">{service.subtitle}</p>
                  )}
                  <p className="text-muted-foreground text-sm mt-2">{service.description}</p>
                </CardHeader>

                <CardContent>
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-foreground">{service.price}</span>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <Check className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {service.bonuses && (
                    <div className="mb-6 pt-4 border-t border-border">
                      <p className="text-xs font-semibold text-foreground mb-3">Bonos incluidos:</p>
                      <ul className="space-y-2">
                        {service.bonuses.map((bonus, j) => (
                          <li key={j} className="text-xs text-muted-foreground">
                            <span className="font-medium text-foreground">{bonus.plan}:</span>{" "}
                            {bonus.content}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

<div className="relative z-10 flex flex-col gap-3">
  <button
    type="button"
    onClick={() => handleSelect(service.id, service.title)}
    onTouchEnd={(e) => {
      e.preventDefault()
      handleSelect(service.id, service.title)
    }}
    className={`w-full rounded-full border px-4 py-3 text-sm font-medium touch-manipulation ${
      isSelected
        ? "border-blue-600 text-blue-600 bg-white"
        : "border-border bg-white text-foreground"
    }`}
  >
    {isSelected ? "Servicio seleccionado" : "Seleccionar servicio"}
  </button>

  <button
    type="button"
    onClick={() => {
      handleSelect(service.id, service.title)
      document.getElementById("contactar")?.scrollIntoView({ behavior: "smooth" })
    }}
    onTouchEnd={(e) => {
      e.preventDefault()
      handleSelect(service.id, service.title)
      document.getElementById("contactar")?.scrollIntoView({ behavior: "smooth" })
    }}
    className={`w-full rounded-full px-4 py-3 text-sm font-medium touch-manipulation ${
      isSelected
        ? "bg-blue-600 text-white"
        : service.popular
          ? "bg-accent text-accent-foreground"
          : "bg-secondary text-secondary-foreground"
    }`}
  >
    <span className="inline-flex items-center justify-center">
      Escribirme por WhatsApp
      <ArrowRight className="ml-2 h-4 w-4" />
    </span>
  </button>
</div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-10 max-w-3xl mx-auto">
          <Card
            className={`relative bg-card transition-all duration-300 ${
              selectedService === "medida"
                ? "border-accent ring-2 ring-accent/30 shadow-lg shadow-accent/10"
                : "border-border hover:border-accent/30"
            }`}
          >
            {selectedService === "medida" && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="px-3 py-1 text-xs font-medium bg-blue-600 text-white rounded-full">
                  Seleccionado
                </span>
              </div>
            )}

            <CardHeader className="pb-4 text-center">
              <div className="p-3 rounded-xl bg-secondary w-fit mb-4 mx-auto">
                <Wrench className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Servicio a medida</h3>
              <p className="text-muted-foreground text-sm mt-2">
                Para auditorías, desbloqueos, revisión de PPC, optimización de listings o necesidades específicas.
              </p>
            </CardHeader>

            <CardContent className="text-center">
              <div className="mb-6">
                <span className="text-3xl font-bold text-foreground">Cotización personalizada</span>
              </div>

              <ul className="space-y-3 mb-6 text-left max-w-md mx-auto">
                {[
                  "Análisis del caso",
                  "Diagnóstico claro",
                  "Solución puntual",
                  "Plan de acción o implementación",
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

             <div className="flex flex-col gap-3 max-w-md mx-auto">
  <Button
    type="button"
    onClick={() => handleSelect("medida", "Servicio a medida")}
    variant="outline"
    className={`w-full rounded-full ${
      selectedService === "medida" ? "border-blue-600 text-blue-600" : ""
    }`}
  >
    {selectedService === "medida" ? "Servicio seleccionado" : "Seleccionar servicio"}
  </Button>

  <Button
    type="button"
    onClick={() => {
      handleSelect("medida", "Servicio a medida")
      document.getElementById("contactar")?.scrollIntoView({ behavior: "smooth" })
    }}
    className={`w-full rounded-full ${
      selectedService === "medida"
        ? "bg-blue-600 text-white hover:bg-blue-700"
        : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
    }`}
  >
    Escribirme por WhatsApp
    <ArrowRight className="ml-2 h-4 w-4" />
  </Button>
</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
