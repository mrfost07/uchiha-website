'use client'

import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import ImageCarousel from './ImageCarousel'
import Navigation from './Navigation'
import BackgroundMusic from './BackgroundMusic'

const ParticleBackground = dynamic(() => import('./ParticleBackground'), { ssr: false })

interface CharacterPageProps {
  images: {
    url: string
    quote: string
    voiceUrl: string
  }[]
  title: string
}

export default function CharacterPage({ images, title }: CharacterPageProps) {
  return (
    <main className="min-h-screen relative overflow-hidden bg-black">
      <ParticleBackground />
      <Navigation />
      <BackgroundMusic />
      <ImageCarousel images={images} title={title} />
    </main>
  )
}

