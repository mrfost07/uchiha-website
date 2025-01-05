'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const menuItems = ['Home', 'Itachi', 'Sasuke', 'Madara']

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const getHref = (item: string) => {
    return item === 'Home' ? '/' : `/${item.toLowerCase()}`
  }

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.button
          className="text-white text-2xl focus:outline-none md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          ☰
        </motion.button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {menuItems.map((item) => (
            <Link
              key={item}
              href={getHref(item)}
              className={`text-white text-lg font-cinzel transition-colors hover:text-red-500 ${
                pathname === getHref(item) ? 'text-red-500' : ''
              }`}
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Mobile Navigation */}
        <motion.div
          className={`fixed inset-y-0 left-0 transform ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          } w-64 bg-black/90 overflow-y-auto transition duration-300 ease-in-out md:hidden`}
          initial={false}
        >
          <div className="p-4">
            <motion.button
              className="text-white text-2xl focus:outline-none mb-8"
              onClick={() => setIsOpen(false)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              ×
            </motion.button>
            <div className="space-y-4">
              {menuItems.map((item) => (
                <Link
                  key={item}
                  href={getHref(item)}
                  className={`block text-white text-lg font-cinzel transition-colors hover:text-red-500 ${
                    pathname === getHref(item) ? 'text-red-500' : ''
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </nav>
  )
}

