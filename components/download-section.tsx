export function DownloadSection() {
  return (
    <section className="border-t border-border px-4 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="rounded-3xl border border-border bg-card p-8 text-center sm:p-12">
          <span className="text-xs font-medium uppercase tracking-wider text-accent">
            Recurso gratuito
          </span>

          <h2 className="mt-4 text-2xl font-bold text-foreground sm:text-3xl">
            Plan de acción de 90 días para eBay Dropshipping seguro
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Una guía práctica para estructurar tu cuenta, avanzar paso a paso y reducir riesgos desde el inicio.
          </p>

          <a
            href="/downloads/plan-accion-90-dias.pdf"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground hover:bg-accent/90"
          >
            Descargar plan de 90 días
          </a>
        </div>
      </div>
    </section>
  )
}
