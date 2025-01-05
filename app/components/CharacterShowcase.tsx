'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const characters = [
  { name: 'Itachi', image: '/placeholder.svg?height=300&width=200' },
  { name: 'Sasuke', image: '/placeholder.svg?height=300&width=200' },
  { name: 'Kisame', image: '/placeholder.svg?height=300&width=200' },
]

export default function CharacterShowcase() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-16">
      {characters.map((character, index) => (
        <motion.div
          key={character.name}
          className="relative overflow-hidden rounded-lg shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <Image
            src={character.image}
            alt={character.name}
            width={200}
            height={300}
            className="w-full h-auto"
          />
          <motion.div
            className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          >
            <h3 className="text-2xl font-cinzel text-white">{character.name}</h3>
          </motion.div>
        </motion.div>
      ))}
    </div>
  )
}

