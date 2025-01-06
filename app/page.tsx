'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Navigation from './components/Navigation'

const characters = [
  { name: 'Itachi', path: '/itachi' },
  { name: 'Sasuke', path: '/sasuke' },
  { name: 'Madara', path: '/madara' },
  { name: 'Obito', path: '/obito' },
  { name: 'Shisui', path: '/shisui' }
]

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [windowDimensions, setWindowDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleMouseMove = (e: MouseEvent) => {
        setMousePosition({ x: e.clientX, y: e.clientY })
      }

      const updateWindowDimensions = () => {
        setWindowDimensions({ width: window.innerWidth, height: window.innerHeight })
      }

      window.addEventListener('mousemove', handleMouseMove)
      window.addEventListener('resize', updateWindowDimensions)
      
      // Set initial dimensions
      updateWindowDimensions()

      return () => {
        window.removeEventListener('mousemove', handleMouseMove)
        window.removeEventListener('resize', updateWindowDimensions)
      }
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
            className="object-cover opacity-80"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/90" />
        </motion.div>

        {/* Glowing Particles Effect */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-red-500 rounded-full"
              animate={{
                x: [
                  Math.random() * windowDimensions.width,
                  Math.random() * windowDimensions.width,
                ],
                y: [
                  Math.random() * windowDimensions.height,
                  Math.random() * windowDimensions.height,
                ],
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
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-6xl md:text-8xl font-cinzel text-white mb-12 tracking-wider"
          >
            UCHIHA
          </motion.h1>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-8 items-center px-4"
          >
            {characters.map((character, index) => (
              <motion.div
                key={character.name}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={character.path}
                  className="text-2xl md:text-3xl font-cinzel text-white hover:text-red-500 transition-colors duration-300"
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
