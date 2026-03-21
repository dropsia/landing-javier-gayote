import Link from "next/link"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="text-lg font-semibold">Javier Gayote</div>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="#servicios" className="text-sm text-gray-700 hover:text-gray-900">
            Servicios
          </Link>
          <Link href="#resultados" className="text-sm text-gray-700 hover:text-gray-900">
            Resultados
          </Link>
          <Link href="#proceso" className="text-sm text-gray-700 hover:text-gray-900">
            Proceso
          </Link>
          <Link href="#contactar" className="text-sm text-gray-700 hover:text-gray-900">
            Contactar
          </Link>
        </nav>
      </div>
    </header>
  )
}
