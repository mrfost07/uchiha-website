'use client'

import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import ImageCarousel from '../components/ImageCarousel'
import Navigation from '../components/Navigation'

const ParticleBackground = dynamic(() => import('../components/ParticleBackground'), { ssr: false })

const itachiImages = [
  {
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/narutoshippuuden-1736060373767-1722.jpg-XfYVHCDYuLTmvXZS2ECY0P7sCZhr94.jpeg",
    quote: "Those who forgive themselves, and are able to accept their true nature... They are the strong ones!"
  },
  {
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1328396-F4XoCg0ceBwVC30ntPwxrnxU8S7A7I.png",
    quote: "People live their lives bound by what they accept as correct and true."
  },
  {
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/naruto-itachi-uchiha-red-desktop-wallpaper-preview-hbANGlAZWOLbwsuN0CcaWGlGMMzP3a.webp",
    quote: "Knowledge and awareness are vague, and perhaps better called illusions."
  }
]

export default function ItachiPage() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-black">
      <ParticleBackground />
      <Navigation />
      <ImageCarousel images={itachiImages} title="Uchiha Itachi" />
    </main>
  )
}

