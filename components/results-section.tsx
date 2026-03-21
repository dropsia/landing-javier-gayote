import { TrendingUp, TrendingDown } from "lucide-react"

const metrics = [
  { value: "+22%", label: "CTR", description: "Tasa de clics mejorada", positive: true },
  { value: "+14%", label: "Conversión", description: "Más visitantes que compran", positive: true },
  { value: "+27%", label: "ROAS", description: "Retorno de inversión publicitaria", positive: true },
  { value: "-18%", label: "Gasto PPC", description: "Reducción en publicidad", positive: false },
]

export function ResultsSection() {
  return (
    <section className="py-24 px-4 bg-card border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-accent uppercase tracking-wider">Resultados</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-4 text-balance">
            Métricas que hablan por sí solas
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Resultados promedio obtenidos por nuestros clientes después de implementar nuestras estrategias
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, i) => (
            <div 
              key={i}
              className="relative group p-8 rounded-2xl bg-background border border-border hover:border-accent/30 transition-all duration-300 text-center"
            >
              <div className="absolute top-4 right-4">
                {metric.positive ? (
                  <TrendingUp className="h-5 w-5 text-accent" />
                ) : (
                  <TrendingDown className="h-5 w-5 text-accent" />
                )}
              </div>
              
              <div className="text-4xl sm:text-5xl font-bold text-accent mb-2">
                {metric.value}
              </div>
              <div className="text-lg font-semibold text-foreground mb-1">
                {metric.label}
              </div>
              <p className="text-sm text-muted-foreground">
                {metric.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
