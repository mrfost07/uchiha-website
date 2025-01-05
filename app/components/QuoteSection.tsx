'use client'

import { motion } from 'framer-motion'

const quotes = [
  "Those who forgive themselves, and are able to accept their true nature... They are the strong ones!",
  "People live their lives bound by what they accept as correct and true.",
  "You don't become the Hokage to be acknowledged by everyone. The one who is acknowledged by everyone becomes the Hokage.",
]

export default function QuoteSection() {
  return (
    <div className="my-16">
      <h2 className="text-3xl font-cinzel text-center mb-8">Itachi's Wisdom</h2>
      <div className="space-y-8">
        {quotes.map((quote, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-6 rounded-lg"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <p className="text-lg italic">"{quote}"</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

