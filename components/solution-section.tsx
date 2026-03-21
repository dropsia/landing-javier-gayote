import { CheckCircle2, Sparkles } from "lucide-react"

const benefits = [
  { title: "Ventas consistentes", description: "Sistema probado que genera resultados predecibles mes a mes" },
  { title: "Mejor rentabilidad", description: "Optimización de márgenes y reducción de costos operativos" },
  { title: "Menos errores", description: "Procesos estructurados y automatizados que minimizan riesgos" },
  { title: "Escalabilidad", description: "Infraestructura diseñada para crecer sin límites" },
]

export function SolutionSection() {
  return (
    <section className="py-24 px-4 bg-card border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-accent/10">
            <Sparkles className="h-5 w-5 text-accent" />
          </div>
          <span className="text-sm font-medium text-accent uppercase tracking-wider">La solución</span>
        </div>
        
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight max-w-3xl mb-16 text-balance">
          Construimos un sistema que{" "}
          <span className="text-accent">vende, convierte y escala</span>
        </h2>
        
        <div className="grid sm:grid-cols-2 gap-6">
          {benefits.map((benefit, i) => (
            <div 
              key={i}
              className="group p-6 rounded-2xl bg-background border border-border hover:border-accent/30 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle2 className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
