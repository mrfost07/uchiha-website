import './globals.css'
import { Inter, Cinzel } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const cinzel = Cinzel({ subsets: ['latin'], variable: '--font-cinzel' })

export const metadata = {
  title: 'Uchiha Website | Fostanes',
  description: 'Explore the world of Uchiha Itachi in this interactive website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${cinzel.variable} font-sans bg-black text-white`}>{children}</body>
    </html>
  )
}

