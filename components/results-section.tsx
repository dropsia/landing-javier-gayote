"use client"

const resultsImages = [
  { src: "/results/result-1.jpg", alt: "Captura real de cuenta ecommerce 1" },
  { src: "/results/result-2.jpg", alt: "Captura real de cuenta ecommerce 2" },
  { src: "/results/result-3.jpg", alt: "Captura real de cuenta ecommerce 3" },
  { src: "/results/result-4.jpg", alt: "Captura real de cuenta ecommerce 4" },
  { src: "/results/result-5.jpg", alt: "Captura real de cuenta ecommerce 5" },
]

const loopedImages = [...resultsImages, ...resultsImages]

export function ResultsSection() {
  const metrics = [
    { value: "+150", label: "Clientes asesorados" },
    { value: "+2M", label: "Ventas generadas" },
    { value: "+10", label: "Años de experiencia en ecommerce" },
    { value: "98%", label: "Satisfacción" },
  ]

  const performance = [
    { value: "+22%", label: "Mejora en CTR" },
    { value: "+14%", label: "Mejora en conversión" },
    { value: "+27%", label: "Mejora en ROAS" },
    { value: "-18%", label: "Reducción de gasto PPC ineficiente" },
  ]

  return (
    <section className="border-t border-border px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <span className="text-sm font-medium uppercase tracking-wider text-accent">
            Resultados
          </span>
          <h2 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            Datos, métricas y resultados reales
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Trabajo con estructura, optimización y decisiones basadas en datos para generar
            mejoras reales en cuentas y operaciones ecommerce.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-4">
          {metrics.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-border bg-card p-6 text-center"
            >
              <div className="text-3xl font-bold text-foreground">{item.value}</div>
              <div className="mt-2 text-sm text-muted-foreground">{item.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-4">
          {performance.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-border bg-card p-6 text-center"
            >
              <div className="text-3xl font-bold text-foreground">{item.value}</div>
              <div className="mt-2 text-sm text-muted-foreground">{item.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <div className="mb-8 text-center">
            <h3 className="text-2xl font-bold text-foreground">
              Capturas reales de cuentas trabajadas
            </h3>
          </div>

          <div className="relative overflow-hidden">
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-background to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-background to-transparent" />

            <div className="results-marquee flex gap-5 will-change-transform">
              {loopedImages.map((item, index) => (
                <div
                  key={`${item.src}-${index}`}
                  className="relative w-[280px] flex-shrink-0 overflow-hidden rounded-3xl border border-white/10 bg-card/80 shadow-[0_10px_40px_rgba(0,0,0,0.18)] backdrop-blur-sm sm:w-[420px]"
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="h-[260px] w-full bg-card object-contain"
                    draggable={false}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
