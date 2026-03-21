import { Search, Target, Wrench, LineChart } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Diagnóstico",
    description: "Analizamos tu situación actual, identificamos oportunidades y definimos objetivos claros.",
  },
  {
    number: "02",
    icon: Target,
    title: "Estrategia",
    description: "Diseñamos un plan de acción personalizado basado en datos y mejores prácticas del mercado.",
  },
  {
    number: "03",
    icon: Wrench,
    title: "Implementación",
    description: "Ejecutamos las acciones necesarias con seguimiento constante y ajustes en tiempo real.",
  },
  {
    number: "04",
    icon: LineChart,
    title: "Optimización",
    description: "Medimos resultados, identificamos mejoras y escalamos lo que funciona.",
  },
]

export function ProcessSection() {
  return (
    <section className="py-24 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-accent uppercase tracking-wider">Proceso</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-4 text-balance">
            Cómo trabajamos juntos
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div 
              key={i}
              className="relative group"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-px bg-border z-0" />
              )}
              
              <div className="relative p-6 rounded-2xl bg-card border border-border hover:border-accent/30 transition-all duration-300 h-full">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-4xl font-bold text-muted-foreground/30">{step.number}</span>
                  <div className="p-3 rounded-xl bg-secondary">
                    <step.icon className="h-5 w-5 text-accent" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
