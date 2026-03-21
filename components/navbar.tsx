import Link from "next/link"
import Image from "next/image"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="#inicio" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Javier Gayote"
            width={28}
            height={28}
            className="h-7 w-7 object-contain"
          />
          <span className="text-lg font-semibold text-gray-900">Javier Gayote</span>
        </Link>

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
          <Link
            href="#contactar"
            className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
          >
            Contactar
          </Link>
        </nav>
      </div>
    </header>
  )
}
