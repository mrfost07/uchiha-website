'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Sharingan() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <motion.div
      className="w-40 h-40 rounded-full bg-red-600 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
      animate={{
        x: mousePosition.x - window.innerWidth / 2,
        y: mousePosition.y - window.innerHeight / 2,
      }}
      transition={{ type: 'spring', stiffness: 100, damping: 30 }}
    >
      <motion.div
        className="w-24 h-24 rounded-full bg-black flex items-center justify-center"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      >
        <motion.div className="w-12 h-12 rounded-full bg-red-600" />
      </motion.div>
    </motion.div>
  )
}

