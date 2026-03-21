"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
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
    whatsappMessage:
      "Hola Javier, vi tu página y quiero que me expliques cómo trabajar mi caso con Mentoría Ecommerce Pro.",
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
    whatsappMessage:
      "Hola Javier, vi tu página y quiero que me expliques cómo trabajar mi caso con Gestión eBay Dropshipping.",
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
    whatsappMessage:
      "Hola Javier, vi tu página y quiero que me expliques cómo trabajar mi caso con Amazon FBA Llave en Mano.",
  },
]

export function ServicesSection() {
  const [selectedService, setSelectedService] = useState<string>("mentoria")

  const getCardClasses = (id: string, popular?: boolean) => {
    const isSelected = selectedService === id

    if (isSelected) {
      return "border-blue-500 ring-2 ring-blue-500/20 shadow-[0_0_0_1px_rgba(59,130,246,0.15),0_12px_40px_rgba(59,130,246,0.12)] -translate-y-1"
    }

    if (popular) {
      return "border-accent ring-1 ring-accent/20 hover:border-accent hover:-translate-y-1 hover:shadow-lg"
    }

    return "border-border hover:border-accent/30 hover:-translate-y-1 hover:shadow-lg"
  }

  const getButtonClasses = (id: string, popular?: boolean) => {
    const isSelected = selectedService === id

    if (isSelected || popular) {
      return "bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg scale-[1.02]"
    }

    return "bg-secondary text-secondary-foreground hover:bg-secondary/80"
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
            Selecciona una opción y luego escríbeme directo por WhatsApp.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service) => {
            const isSelected = selectedService === service.id

            return (
              <Card
                key={service.id}
                className={`relative bg-card transition-all duration-300 ease-out ${getCardClasses(
                  service.id,
                  service.popular
                )}`}
              >
                {service.popular && (
                  <div className="pointer-events-none absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                    <span className="px-3 py-1 text-xs font-medium bg-accent text-accent-foreground rounded-full">
                      Más popular
                    </span>
                  </div>
                )}

                <button
                  type="button"
                  onClick={() => setSelectedService(service.id)}
                  className="block w-full text-left rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40"
                  aria-pressed={isSelected}
                >
                  <CardHeader className="pb-4">
                    <div className="p-3 rounded-xl bg-secondary w-fit mb-4 transition-transform duration-300 group-hover:scale-105">
                      <service.icon className="h-6 w-6 text-accent" />
                    </div>

                    <h3 className="text-xl font-bold text-foreground">{service.title}</h3>

                    {service.subtitle && (
                      <p className="text-xs font-medium text-accent mt-1">{service.subtitle}</p>
                    )}

                    <p className="text-muted-foreground text-sm mt-2">{service.description}</p>
                  </CardHeader>

                  <CardContent className="pb-4">
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
                      <div className="mb-2 pt-4 border-t border-border">
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
                  </CardContent>
                </button>

                <div className="px-6 pb-6">
                  <a
                    href={`https://wa.me/5493434653628?text=${encodeURIComponent(service.whatsappMessage)}`}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className={`inline-flex w-full items-center justify-center rounded-full px-4 py-3 text-sm font-medium transition-all duration-300 ${getButtonClasses(
                      service.id,
                      service.popular
                    )}`}
                  >
                    Escribirme por WhatsApp
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </Card>
            )
          })}
        </div>

        <div className="mt-10 max-w-3xl mx-auto">
          <Card
            className={`relative bg-card transition-all duration-300 ease-out ${getCardClasses(
              "custom",
              false
            )}`}
          >
            <button
              type="button"
              onClick={() => setSelectedService("custom")}
              className="block w-full text-left rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40"
              aria-pressed={selectedService === "custom"}
            >
              <CardHeader className="pb-4 text-center">
                <div className="p-3 rounded-xl bg-secondary w-fit mb-4 mx-auto">
                  <Wrench className="h-6 w-6 text-accent" />
                </div>

                <h3 className="text-xl font-bold text-foreground">Servicio a medida</h3>

                <p className="text-muted-foreground text-sm mt-2">
                  Para auditorías, desbloqueos, revisión de PPC, optimización de listings o necesidades específicas.
                </p>
              </CardHeader>

              <CardContent className="text-center pb-4">
                <div className="mb-6">
                  <span className="text-3xl font-bold text-foreground">Cotización personalizada</span>
                </div>

                <ul className="space-y-3 mb-2 text-left max-w-md mx-auto">
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
              </CardContent>
            </button>

            <div className="px-6 pb-6 text-center">
              <a
                href={`https://wa.me/5493434653628?text=${encodeURIComponent(
                  "Hola Javier, vi tu página y quiero que me expliques cómo trabajar mi caso con Servicio a medida."
                )}`}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className={`inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-medium transition-all duration-300 ${getButtonClasses(
                  "custom",
                  false
                )}`}
              >
                Escribirme por WhatsApp
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
