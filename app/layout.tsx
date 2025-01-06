import './globals.css'
import { Inter, Cinzel } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const cinzel = Cinzel({ subsets: ['latin'], variable: '--font-cinzel' })

export const metadata = {
  title: 'Uchiha | Fostanes',
  description: 'Explore the world of Uchiha Itachi in this interactive website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        {/* Metadata */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />

        {/* Favicon */}
        <link rel="icon" href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/b9eaba9a64d839ee3a848f9d1cfa16a8.jpg-9ChBB1tRCZidg79pCBGSqF9xMbdwxL.jpeg" />
      </Head>
      <body
        className={`${inter.variable} ${cinzel.variable} font-sans bg-black text-white`}
      >
        {children}
      </body>
    </html>
  )
}
