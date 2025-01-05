'use client'

import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import SasukeCarousel from '../components/SasukeCarousel'
import Navigation from '../components/Navigation'

const ParticleBackground = dynamic(() => import('../components/ParticleBackground'), { ssr: false })

export default function SasukePage() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-black">
      <ParticleBackground />
      <Navigation />
      <SasukeCarousel />
    </main>
  )
}

