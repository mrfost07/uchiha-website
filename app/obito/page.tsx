'use client'

import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import ObitoCarousel from '../components/ObitoCarousel'
import Navigation from '../components/Navigation'

const ParticleBackground = dynamic(() => import('../components/ParticleBackground'), { ssr: false })

export default function ObitoPage() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-black">
      <ParticleBackground />
      <Navigation />
      <ObitoCarousel title="Uchiha Obito" />
    </main>
  )
}

