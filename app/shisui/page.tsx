'use client'

import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import ShisuiCarousel from '../components/ShisuiCarousel'
import Navigation from '../components/Navigation'

const ParticleBackground = dynamic(() => import('../components/ParticleBackground'), { ssr: false })

export default function ShisuiPage() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-black">
      <ParticleBackground />
      <Navigation />
      <ShisuiCarousel title="Uchiha Shisui" />
    </main>
  )
}

