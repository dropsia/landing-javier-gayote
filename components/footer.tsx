export function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="font-semibold text-foreground">Javier Gayote</span>
          
          <nav className="flex items-center gap-8">
            <a href="#servicios" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Servicios
            </a>
            <a href="#resultados" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Resultados
            </a>
            <a href="#proceso" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Proceso
            </a>
            <a href="#contacto" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contacto
            </a>
          </nav>
          
          <p className="text-sm text-muted-foreground">
            © 2026 Javier Gayote — Ecommerce & AI Consulting
          </p>
        </div>
      </div>
    </footer>
  )
}
