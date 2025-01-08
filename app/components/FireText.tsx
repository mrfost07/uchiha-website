'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function FireText({ children }: { children: React.ReactNode }) {
  const [isAnimating, setIsAnimating] = useState(true)

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(prev => !prev)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <motion.div
      className="relative"
      animate={isAnimating ? { scale: [1, 1.02, 1] } : {}}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    >
      <div className="text-6xl md:text-8xl font-cinzel tracking-wider relative z-10">
        <div className="absolute inset-0 blur-sm bg-gradient-to-b from-orange-500 via-red-500 to-red-700 bg-clip-text text-transparent animate-pulse">
          {children}
        </div>
        <div className="absolute inset-0 blur-md bg-gradient-to-t from-red-600 via-orange-400 to-yellow-300 bg-clip-text text-transparent animate-fire">
          {children}
        </div>
        <div className="relative bg-gradient-to-b from-white via-orange-100 to-orange-400 bg-clip-text text-transparent">
          {children}
        </div>
      </div>
    </motion.div>
  )
}

