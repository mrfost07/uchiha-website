'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const menuItems = ['Home', 'Itachi', 'Sasuke', 'Madara', 'Obito', 'Shisui']

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const getHref = (item: string) => {
    return item === 'Home' ? '/' : `/${item.toLowerCase()}`
  }

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.button
            className="text-white focus:outline-none md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Menu size={24} />
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item}
                href={getHref(item)}
                className={`text-white text-lg font-cinzel transition-all hover:text-red-500 hover:scale-110 ${
                  pathname === getHref(item) ? 'text-red-500' : ''
                }`}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 20 }}
              className="fixed inset-y-0 left-0 w-64 bg-black/90 z-50"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-4">
                <motion.button
                  className="text-white focus:outline-none mb-8"
                  onClick={() => setIsOpen(false)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X size={24} />
                </motion.button>
                <div className="space-y-6">
                  {menuItems.map((item) => (
                    <motion.div
                      key={item}
                      whileHover={{ x: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Link
                        href={getHref(item)}
                        className={`block text-xl font-cinzel transition-colors hover:text-red-500 ${
                          pathname === getHref(item) ? 'text-red-500' : 'text-white'
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {item}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

