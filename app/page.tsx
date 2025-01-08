'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Navigation from './components/Navigation'
import FireText from './components/FireText'

const characters = [
  { name: 'Itachi', path: '/itachi' },
  { name: 'Sasuke', path: '/sasuke' },
  { name: 'Madara', path: '/madara' },
  { name: 'Obito', path: '/obito' },
  { name: 'Shisui', path: '/shisui' }
]

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [particles, setParticles] = useState<{ x: number; y: number }[]>([])

  // Track mouse position
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Generate particle positions on client-side
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const generatedParticles = Array.from({ length: 20 }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      }))
      setParticles(generatedParticles)
    }
  }, [])

  return (
    <main className="min-h-screen bg-black relative overflow-hidden">
      <Navigation />
      
      {/* Background Image with Parallax Effect */}
      <div className="relative h-screen">
        <motion.div
          className="absolute inset-0"
          animate={{
            x: mousePosition.x * 0.02,
            y: mousePosition.y * 0.02,
          }}
          transition={{ type: 'spring', stiffness: 75, damping: 15 }}
        >
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/download%20(1).jpg-wpkry9i5A4aqqhHrKofbQfaxRtEBXG.jpeg"
            alt="Uchiha Clan"
            fill
            className="object-cover opacity-80 enhanced-image"
            priority
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/90" />
        </motion.div>

        {/* Glowing Particles Effect */}
        <div className="absolute inset-0 pointer-events-none">
          {particles.map((particle, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-red-500 rounded-full shadow-lg shadow-red-500/50"
              animate={{
                x: [particle.x, Math.random() * window.innerWidth],
                y: [particle.y, Math.random() * window.innerHeight],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center">
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <FireText>UCHIHA</FireText>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-8 items-center px-4 mt-12"
          >
            {characters.map((character) => (
              <motion.div
                key={character.name}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={character.path}
                  className="text-2xl md:text-3xl font-cinzel bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent hover:from-orange-400 hover:to-red-600 transition-all duration-300 shadow-lg"
                >
                  {character.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </main>
  )
}
