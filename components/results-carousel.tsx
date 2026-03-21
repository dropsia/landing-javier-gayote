"use client"

type ResultItem = {
  id: number
  image: string
  alt: string
  label?: string
}

const results: ResultItem[] = [
  {
    id: 1,
    image: "/results/result-1.jpg",
    alt: "Dashboard de ventas ecommerce 1",
    label: "Amazon FBA",
  },
  {
    id: 2,
    image: "/results/result-2.jpg",
    alt: "Dashboard de ventas ecommerce 2",
    label: "eBay",
  },
  {
    id: 3,
    image: "/results/result-3.jpg",
    alt: "Dashboard de ventas ecommerce 3",
    label: "Amazon PPC",
  },
  {
    id: 4,
    image: "/results/result-4.jpg",
    alt: "Dashboard de ventas ecommerce 4",
    label: "Escalado",
  },
  {
    id: 5,
    image: "/results/result-5.jpg",
    alt: "Dashboard de ventas ecommerce 5",
    label: "Optimización",
  },
]

const loopedResults = [...results, ...results]

export function ResultsCarousel() {
  return (
    <section className="border-t border-border px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <span className="text-sm font-medium uppercase tracking-wider text-accent">
            Resultados reales
          </span>

          <h2 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl">
            Capturas reales de cuentas trabajadas
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground sm:text-base">
            Sin exponer identidades ni información sensible. Solo resultados, datos y operación real.
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-background to-transparent" />

          <div className="group flex overflow-hidden">
            <div className="animate-results-marquee flex min-w-max gap-5 group-hover:[animation-play-state:paused]">
              {loopedResults.map((item, index) => (
                <article
                  key={`${item.id}-${index}`}
                  className="relative w-[280px] flex-shrink-0 overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl sm:w-[360px]"
                >
                  <div className="absolute left-3 top-3 z-10 rounded-full bg-black/70 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                    {item.label ?? "Resultado real"}
                  </div>

                  <img
                    src={item.image}
                    alt={item.alt}
                    className="h-auto w-full object-cover"
                    loading="lazy"
                    draggable={false}
                  />
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
