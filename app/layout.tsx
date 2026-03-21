import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Javier Gayote | Amazon FBA, eBay Dropshipping & IA Aplicada',
  description: 'Escala tu negocio en Amazon FBA o eBay Dropshipping con estrategia, datos e IA aplicada. Mentoría, gestión y soluciones llave en mano.',
  generator: 'v0.app',
  icons: {
   icons: {
  icon: "/favicon.png",
},
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
