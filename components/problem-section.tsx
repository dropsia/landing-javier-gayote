import { AlertTriangle, XCircle } from "lucide-react"

const problems = [
  "Productos sin validación real",
  "Listings que no convierten",
  "PPC sin control",
  "Operación desordenada",
  "Decisiones sin datos",
]

export function ProblemSection() {
  return (
    <section className="py-24 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-destructive/10">
            <AlertTriangle className="h-5 w-5 text-destructive" />
          </div>
          <span className="text-sm font-medium text-destructive uppercase tracking-wider">El problema</span>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight text-balance">
              El problema no es el producto.{" "}
              <span className="text-muted-foreground">Es la forma en que estás operando.</span>
            </h2>
          </div>
          
          <div className="space-y-4">
            {problems.map((problem, i) => (
              <div 
                key={i} 
                className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-destructive/30 transition-colors"
              >
                <div className="flex-shrink-0">
                  <XCircle className="h-5 w-5 text-destructive/70" />
                </div>
                <span className="text-foreground font-medium">{problem}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
