'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

const images = [
  {
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/narutoshippuuden-1736060373767-1722.jpg-XfYVHCDYuLTmvXZS2ECY0P7sCZhr94.jpeg",
    quote: "Those who forgive themselves, and are able to accept their true nature... They are the strong ones!"
  },
  {
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/naruto-itachi-uchiha-with-red-eyes-desktop-wallpaper-preview.jpg-ddbfHiFopLAf4BnhCEjYoyrmX8u9Mb.jpeg",
    quote: "People live their lives bound by what they accept as correct and true."
  },
  {
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/naruto-itachi-uchiha-red-desktop-wallpaper-preview-hbANGlAZWOLbwsuN0CcaWGlGMMzP3a.webp",
    quote: "Knowledge and awareness are vague, and perhaps better called illusions."
  }
]

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
  }

  const paginate = (newDirection: number) => {
    setDirection(newDirection)
    setCurrentIndex((prevIndex) => {
      let newIndex = prevIndex + newDirection
      if (newIndex < 0) newIndex = images.length - 1
      if (newIndex >= images.length) newIndex = 0
      return newIndex
    })
  }

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Title that stays fixed */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute top-20 left-0 right-0 z-20 text-center"
      >
        <h1 className="text-5xl md:text-7xl font-cinzel text-white drop-shadow-lg">
          Uchiha Itachi
        </h1>
      </motion.div>

      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x)

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1)
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1)
            }
          }}
          className="absolute inset-0"
        >
          <Image
            src={images[currentIndex].url}
            alt="Itachi"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black" />
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="absolute bottom-20 left-0 right-0 text-center z-10 px-4"
          >
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto font-cinzel">
              "{images[currentIndex].quote}"
            </p>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors"
        onClick={() => paginate(-1)}
      >
        <ChevronLeft className="w-8 h-8 text-white" />
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors"
        onClick={() => paginate(1)}
      >
        <ChevronRight className="w-8 h-8 text-white" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1)
              setCurrentIndex(index)
            }}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

