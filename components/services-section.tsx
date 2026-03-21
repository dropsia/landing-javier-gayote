"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GraduationCap, Store, Rocket, Check, ArrowRight } from "lucide-react"

const services = [
  {
    icon: GraduationCap,
    title: "Mentoría Ecommerce Pro",
    price: "USD 500 / USD 1000",
    description: "Formación personalizada para dominar Amazon FBA y eBay Dropshipping",
    subtitle: "La mayoría comienza aquí",
    features: [
      "Amazon FBA + eBay Dropshipping",
      "IA aplicada al ecommerce",
      "Plantillas Excel profesionales",
      "Calculadora personalizada",
    ],
    popular: true,
    bonuses: [
      { plan: "Plan Base (USD 500)", content: "Curso completo de eBay Dropshipping" },
      { plan: "Plan Intensivo (USD 1000)", content: "Curso completo de Amazon FBA + eBay Dropshipping" },
    ],
  },
  {
    icon: Store,
    title: "Gestión eBay Dropshipping",
    price: "USD 2500",
    description: "Servicio completo de gestión para tu tienda de dropshipping",
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
    icon: Rocket,
    title: "Amazon FBA Llave en Mano",
    price: "USD 5000",
    description: "Lanzamos tu producto en Amazon de principio a fin",
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
  return (
    <section className="py-24 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-accent uppercase tracking-wider">Servicios</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-4 text-balance">
            Elige el plan que mejor se adapte a ti
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <Card
              key={i}
              className={`relative bg-card border-border hover:border-accent/30 transition-all duration-300 ${
                service.popular ? "border-accent ring-1 ring-accent/20" : ""
              }`}
            >
              {service.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-3 py-1 text-xs font-medium bg-accent text-accent-foreground rounded-full">
                    Más popular
                  </span>
                </div>
              )}

              <CardHeader className="pb-4">
                <div className="p-3 rounded-xl bg-secondary w-fit mb-4">
                  <service.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
                {service.subtitle && (
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

                <Button
                  onClick={() => {
                    document.getElementById("contactar")?.scrollIntoView({ behavior: "smooth" })
                  }}
                  className={`w-full rounded-full ${
                    service.popular
                      ? "bg-accent text-accent-foreground hover:bg-accent/90"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                >
                  Comenzar ahora
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
