"use client"

import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <img 
            src="/images/logo.png" 
            alt="Javier Gayote Logo" 
            className="h-6 w-auto"
          />
          <span className="text-lg font-semibold text-foreground">Javier Gayote</span>
        </a>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#servicios" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Servicios
          </a>
          <a href="#resultados" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Resultados
          </a>
          <a href="#proceso" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Proceso
          </a>
        </nav>
        
        <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
          Contactar
        </Button>
      </div>
    </header>
  )
}
