'use client'

import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import ImageCarousel from '../components/ImageCarousel'
import Navigation from '../components/Navigation'

const ParticleBackground = dynamic(() => import('../components/ParticleBackground'), { ssr: false })

export default function ItachiPage() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-black">
      <ParticleBackground />
      <Navigation />
      <ImageCarousel />
    </main>
  )
}

