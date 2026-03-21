"use client"

const results = [
  "/results/result-1.jpg",
  "/results/result-2.jpg",
  "/results/result-3.jpg",
  "/results/result-4.jpg",
  "/results/result-5.jpg",
]

const looped = [...results, ...results]

export function ResultsCarousel() {
  return (
    <section className="border-t border-border px-4 py-20">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-foreground">
            Resultados reales de cuentas trabajadas
          </h2>

          <p className="mt-4 text-muted-foreground">
            Sin exponer identidades. Solo datos reales y operación real.
          </p>
        </div>

        <div className="relative overflow-hidden">

          {/* fade edges */}
          <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-background to-transparent z-10" />

          <div className="marquee flex gap-5">

            {looped.map((src, i) => (
              <div
                key={i}
                className="w-[280px] sm:w-[360px] flex-shrink-0 rounded-2xl overflow-hidden border border-border bg-card shadow-md"
              >
                <img
                  src={src}
                  className="w-full h-auto object-cover"
                  draggable={false}
                />
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  )
}
