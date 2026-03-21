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
    description:
      "Formación personalizada para Amazon FBA o eBay Dropshipping, según la plataforma que elijas.",
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
      {
        plan: "Plan Intensivo (USD 1000)",
        content: "Más acompañamiento + curso completo de la plataforma elegida",
      },
    ],
    whatsappMessage:
      "Hola Javier, vi tu página y quiero que me expliques cómo trabajar mi caso con Mentoría Ecommerce Pro.",
  },
  {
    id: "ebay",
    icon: Store,
    title: "Gestión eBay Dropshipping",
    price: "USD 2500",
    description:
      "Delegación completa de la operación con foco en métricas, estabilidad y crecimiento sano de la cuenta.",
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
    description:
      "Desarrollo completo del producto desde cero, con estructura real para vender y escalar.",
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
          <span className="text-sm font-medium text-accent uppercase tracking-wider">
            Servicios
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-4 text-balance">
            Elegí el servicio que mejor se adapte a tu momento
          </h2>
          <p className="mt-4 text-muted-foreground">
            Toca una tarjeta para seleccionarla y luego escríbeme por WhatsApp.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service) => {
            const isSelected = selectedService === service.id

            return (
              <Card
                key={service.id}
                className={`relative overflow-hidden bg-card transition-all duration-300 ease-out ${getCardClasses(
                  service.id,
                  service.popular
                )}`}
              >
                {service.popular && (
                  <div className="pointer-events-none absolute -top-3 left-1/2 z-20 -translate-x-1/2">
                    <span className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
                      Más popular
                    </span>
                  </div>
                )}

                <div className="relative z-10">
                  <CardHeader className="pb-4">
                    <div
                      className={`mb-4 w-fit rounded-xl p-3 transition-all duration-300 ${
                        isSelected ? "bg-accent/10 scale-105" : "bg-secondary"
                      }`}
                    >
                      <service.icon className="h-6 w-6 text-accent" />
                    </div>

                    <h3 className="text-xl font-bold text-foreground">{service.title}</h3>

                    {service.subtitle && (
                      <p className="mt-1 text-xs font-medium text-accent">{service.subtitle}</p>
                    )}

                    <p className="mt-2 text-sm text-muted-foreground">{service.description}</p>
                  </CardHeader>

                  <CardContent>
                    <div className="mb-6">
                      <span className="text-3xl font-bold text-foreground">{service.price}</span>
                    </div>

                    <ul className="mb-6 space-y-3">
                      {service.features.map((feature, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {service.bonuses && (
                      <div className="mb-6 border-t border-border pt-4">
                        <p className="mb-3 text-xs font-semibold text-foreground">
                          Bonos incluidos:
                        </p>
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

                    <a
                      href={`https://wa.me/5493434653628?text=${encodeURIComponent(
                        service.whatsappMessage
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                      className={`relative z-30 inline-flex w-full items-center justify-center rounded-full px-4 py-3 text-sm font-medium transition-all duration-300 ${getButtonClasses(
                        service.id,
                        service.popular
                      )}`}
                    >
                      Escribirme por WhatsApp
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </CardContent>
                </div>

                <button
                  type="button"
                  aria-label={`Seleccionar ${service.title}`}
                  aria-pressed={isSelected}
                  onClick={() => setSelectedService(service.id)}
                  className="absolute inset-x-0 top-0 bottom-20 z-20 rounded-[inherit]"
                  style={{
                    WebkitTapHighlightColor: "transparent",
                    touchAction: "manipulation",
                    background: "transparent",
                  }}
                />
              </Card>
            )
          })}
        </div>

        <div className="mx-auto mt-10 max-w-3xl">
          <Card
            className={`relative overflow-hidden bg-card transition-all duration-300 ease-out ${getCardClasses(
              "custom",
              false
            )}`}
          >
            <div className="relative z-10">
              <CardHeader className="pb-4 text-center">
                <div
                  className={`mx-auto mb-4 w-fit rounded-xl p-3 transition-all duration-300 ${
                    selectedService === "custom" ? "bg-accent/10 scale-105" : "bg-secondary"
                  }`}
                >
                  <Wrench className="h-6 w-6 text-accent" />
                </div>

                <h3 className="text-xl font-bold text-foreground">Servicio a medida</h3>

                <p className="mt-2 text-sm text-muted-foreground">
                  Para auditorías, desbloqueos, revisión de PPC, optimización de listings o
                  necesidades específicas.
                </p>
              </CardHeader>

              <CardContent className="text-center">
                <div className="mb-6">
                  <span className="text-3xl font-bold text-foreground">
                    Cotización personalizada
                  </span>
                </div>

                <ul className="mx-auto mb-6 max-w-md space-y-3 text-left">
                  {[
                    "Análisis del caso",
                    "Diagnóstico claro",
                    "Solución puntual",
                    "Plan de acción o implementación",
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={`https://wa.me/5493434653628?text=${encodeURIComponent(
                    "Hola Javier, vi tu página y quiero que me expliques cómo trabajar mi caso con Servicio a medida."
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className={`relative z-30 inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-medium transition-all duration-300 ${getButtonClasses(
                    "custom",
                    false
                  )}`}
                >
                  Escribirme por WhatsApp
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </CardContent>
            </div>

            <button
              type="button"
              aria-label="Seleccionar Servicio a medida"
              aria-pressed={selectedService === "custom"}
              onClick={() => setSelectedService("custom")}
              className="absolute inset-x-0 top-0 bottom-20 z-20 rounded-[inherit]"
              style={{
                WebkitTapHighlightColor: "transparent",
                touchAction: "manipulation",
                background: "transparent",
              }}
            />
          </Card>
        </div>
      </div>
    </section>
  )
}
