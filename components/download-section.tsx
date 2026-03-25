export function DownloadSection() {
  return (
    <section className="border-t border-border px-4 py-20">
      <div className="mx-auto max-w-5xl">

        <div className="rounded-3xl border border-border bg-card p-8 sm:p-12 text-center">

          <span className="text-xs font-medium uppercase tracking-wider text-accent">
            Recurso gratuito
          </span>

          <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-foreground">
            Plan de acción a 90 días para ecommerce
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Guía paso a paso para construir y escalar un negocio real.
          </p>

          <a
            href="/downloads/plan-accion-90-dias.pdf"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground hover:bg-accent/90"
          >
            Descargar PDF
          </a>

        </div>

      </div>
    </section>
  )
}
