'use client'

import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import MadaraCarousel from '../components/MadaraCarousel'
import Navigation from '../components/Navigation'

const ParticleBackground = dynamic(() => import('../components/ParticleBackground'), { ssr: false })

export default function MadaraPage() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-black">
      <ParticleBackground />
      <Navigation />
      <MadaraCarousel />
    </main>
  )
}

