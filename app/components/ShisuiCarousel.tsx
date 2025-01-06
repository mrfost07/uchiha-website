'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

interface CarouselProps {
  images: {
    url: string
    quote: string
  }[]
  title: string
}

const images = [
  {
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/desktop-wallpaper-shisui-shisui-sharingan.jpg-i8Gyv27XFAjVjodLyxGh7y60EOlrVK.jpeg",
    quote: "Self-sacrifice... A nameless shinobi who protects peace within its shadow... That is a true shinobi."
  },
  {
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5ea8a8fc1a36fc254ecc7948dd0d3fce86e9ed3d_hq.jpg-AaF60eCC1e7guaRXVBqNqFcLWqLxM6.jpeg",
    quote: "The village's safety is more important than my life. Protecting the village... That is what being a shinobi means."
  },
  {
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Shisui_gives_his_eye-59wxT55jh7jsgER3ZcORx0h5IF45HT.webp",
    quote: "Even if my eyes lose their light, my spirit will never die. I will protect the village, and the Uchiha name!"
  }
]

export default function ShisuiCarousel({ title = "Uchiha Shisui" }: { title?: string }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '5%' : '-5%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? '5%' : '-5%',
      opacity: 0,
    }),
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
  }

  const paginate = (newDirection: number) => {
    setCurrentIndex((prevIndex) => {
      let newIndex = prevIndex + newDirection
      if (newIndex < 0) newIndex = images.length - 1
      if (newIndex >= images.length) newIndex = 0
      return newIndex
    })
    setDirection(newDirection)
  }

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute top-20 left-0 right-0 z-20 text-center"
      >
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-cinzel text-white drop-shadow-lg">
          {title}
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
            opacity: { duration: 0.2 },
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
          <div className="relative h-full w-full">
            <Image
              src={images[currentIndex].url}
              alt="Shisui"
              fill
              className="object-cover object-center"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black" />
          </div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-20 left-0 right-0 text-center z-10 px-4"
          >
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto font-cinzel">
              "{images[currentIndex].quote}"
            </p>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows with enhanced hover effects */}
      <motion.button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/50 p-2 rounded-full hover:bg-red-500/50 transition-colors"
        onClick={() => paginate(-1)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
      </motion.button>
      <motion.button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/50 p-2 rounded-full hover:bg-red-500/50 transition-colors"
        onClick={() => paginate(1)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
      </motion.button>

      {/* Enhanced dots indicator */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3 z-20">
        {images.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1)
              setCurrentIndex(index)
            }}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
              index === currentIndex ? 'bg-red-500 scale-125' : 'bg-white/50 hover:bg-white'
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>
    </div>
  )
}

